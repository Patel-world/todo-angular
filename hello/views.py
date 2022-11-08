from django.shortcuts import get_object_or_404

from django.shortcuts import render
from .models import Todo
from .serializer import TodoSerializer
from rest_framework.views import APIView
from rest_framework.response import Response
from django.http import Http404
from rest_framework import generics
from rest_framework import status
import json
class TodoListView(APIView):
    def get(self, request):
        todo=Todo.objects.all()
        serializer = TodoSerializer(todo,many=True)
        return Response(serializer.data)

    def post(self, request):
        a=request.data
        d={"text":f"{a['text']}","reminder":f"{a['reminder']}","day":f"{a['day']}"}

        serializer = TodoSerializer(data=d)
        
        
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class TodoUpdate(generics.UpdateAPIView):
    def put(self,request,pk):
        a=request.data
        print(a)
        old = get_object_or_404(Todo, id=pk)
        d={"text":f"{a['text']}","reminder":f"{a['reminder']}","day":f"{a['day']}"}
        
        serializer = TodoSerializer(data=d,instance=old)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        

        
        return Response(status=status.HTTP_400_BAD_REQUEST)

class TodoDeleteView(generics.DestroyAPIView):
    queryset = Todo.objects.all()


   
