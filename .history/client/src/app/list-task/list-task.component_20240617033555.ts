import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ITask } from '../itask';
import { DataService } from '../data.service';
import { ActivatedRoute, Router, RouterLink, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { IProject } from '../iproject';
import { IStaff } from '../istaff';

@Component({
  selector: 'app-list-task',
  standalone: true,
  imports: [CommonModule,FormsModule,RouterLink,RouterModule],
  templateUrl: './list-task.component.html',
  styleUrl: './list-task.component.css'
})
export class ListTaskComponent {
  delete:boolean|undefined;
  Tasks: ITask[] = [];
  Staffs:IStaff[]=[];
  Projects:IProject[]=[];

  constructor(private httpTask:DataService,private router:ActivatedRoute,private routes: Router){
  }
  
  ngOnInit():void{
    this.loadTask();
  }

  loadTask(){
    fetch('http://localhost:3000/task/')
    .then(res => res.json())
    .then(data =>{
      this.Tasks = data
    })
    this.httpTask.getStaff().subscribe(data=>{
      this.Staffs=data as IStaff[];
    });
    this.httpTask.getProject().subscribe(data=>{
      this.Projects = data as IProject[];
    });
  }

  handleTask(task:ITask){
    this.httpTask.addTask(task).subscribe(result=>{
      console.log(task,result);
      alert('Created !');
      this.loadTask();
    });
  }

  deleted(id:number){
    this.delete = confirm("Ok???");
    if(this.delete){
      this.httpTask.deleteTask(id).subscribe((data)=>{
        this.loadTask()
        console.log(data);
      })
    }
  }


}
