import { Component, OnInit } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';

import {Subscription} from 'rxjs'
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  showAddTask:boolean=false
  subscription: Subscription = new Subscription;
  
  loggedIn:boolean=false
  
  

  constructor(private uiService:UiService) { 
    this.subscription=this.uiService.onToggle().subscribe((value)=>(this.showAddTask=value))
    
  }

  ngOnInit(): void {
    if(localStorage.getItem('login')=='true'){
      this.loggedIn=!this.loggedIn
    }
  }
  toggleTask(){
    this.uiService.toggleAddTask()
  }
 
}

