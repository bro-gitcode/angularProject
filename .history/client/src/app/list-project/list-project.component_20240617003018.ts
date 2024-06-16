import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { IProject } from '../iproject';
import { FormsModule } from '@angular/forms';
import { DataService } from '../data.service';
import { EditProjectComponent } from '../edit-project/edit-project.component';
import { IStaff } from '../istaff';
import { Router, RouterLink, RouterModule } from '@angular/router';
@Component({
  selector: 'app-list-project',
  standalone: true,
  imports: [CommonModule,FormsModule,RouterLink,RouterModule,NgMo],
  templateUrl: './list-project.component.html',
  styleUrl: './list-project.component.css',
})
export class ListProjectComponent {
  Projects: IProject[] = [];
  Staffs:IStaff[]= [];
  constructor(private httpProject:DataService,private router: Router){};
  ngOnInit():void{
    fetch('http://localhost:3000/project/')
    .then(res => res.json())
    .then(data =>{
      this.Projects = data
    })
    this.httpProject.getStaff().subscribe(data =>{
      this.Staffs = data as IStaff[];
    });
  }

  handleProject(project:IProject){
    this.httpProject.addProject(project).subscribe(data=>{
      console.log(project,data);
      alert('Created !');
    });
  }
  editProject(id:number){
    this.router.navigate([`/project/edit/${id}`]);
  }
}
