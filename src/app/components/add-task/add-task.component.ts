import { Subscription } from 'rxjs';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { faL } from '@fortawesome/free-solid-svg-icons';
import { Task } from 'src/app/Task';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  @Output() onAddTask: EventEmitter<Task>=new EventEmitter()
  text:string=''
  day:string=''
  user:string=''
  reminder:boolean=false

  showAddTask:boolean=false
  subscription: Subscription = new Subscription;

  constructor(private uiService:UiService) { 
    this.subscription=this.uiService.onToggle().subscribe((value)=>(this.showAddTask=value))
  }

  ngOnInit(): void {
  }
  
  onSubmit(){
    if(!this.text){
      alert("Please add a task")
      return;
    }
    const newTask={
      user:localStorage.getItem('jwt')||'',
      text: this.text,
      day:this.day,
      reminder:this.reminder
    }




    this.onAddTask.emit(newTask)

    this.text=''
    this.day=''
    this.reminder=false
  }

}
