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
  Tasks: ITask[] = [];
  Staffs:IStaff[]=[];
  Projects:IProject[]=[];

  constructor(private http:DataService){

  }
  
  ngOnInit():void{
    this.loadTask();
    this.http.getStaff().subscribe(data=>{
      this.Staffs=data as IStaff[];
    });
    this.http.getProject().subscribe(data=>{
      this.Projects = data as IProject[];
    });
  }

  loadTask(){
    fetch('http://localhost:3000/task/')
    .then(res => res.json())
    .then(data =>{
      this.Tasks = data
    })
  }

  handleTask(){
    this.http.addTask(task).subscribe(data=>{
      console.log(task,data);
      alert('Created !');
      this.loadTask();
    });
  }


}
