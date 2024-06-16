import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ITask } from '../itask';
import { DataService } from '../data.service';
import { ActivatedRoute, Router, RouterLink, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { IProject } from '../iproject';
import { IStaff } from '../istaff';
@Component({
  selector: 'app-edit-task',
  standalone: true,
  imports: [CommonModule,FormsModule,RouterLink,RouterModule],
  templateUrl: './edit-task.component.html',
  styleUrl: './edit-task.component.css'
})
export class EditTaskComponent {
id:number = 0;
data:ITask=<ITask>{};
Staffs:IStaff[]=[];
Projects:IProject[]=[];
  constructor(private httpTask:DataService,private router:ActivatedRoute,private routes: Router){}

  ngOnInit():void{
    this.id = Number(this.router.snapshot.paramMap.get('id'));
    this.httpTask.getOneTask(this.id).subscribe(task=>{
      console.log("task=",task);
      this.data = task as ITask;
    });
    this.httpTask.get
  }

}
