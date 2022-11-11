from django.db import models

# Create your models here.
class Greeting(models.Model):
    when = models.DateTimeField("date created", auto_now_add=True)


class Todo(models.Model):
    user=models.TextField(default='guest')
    id=models.AutoField(primary_key=True)
    created = models.DateTimeField(auto_now_add=True)
    text=models.CharField(max_length=200)
    reminder = models.BooleanField(default=False)
    day = models.DateTimeField(blank=True)

    def __str__(self):
        return self.text

    class Meta:
        ordering = ['created']
