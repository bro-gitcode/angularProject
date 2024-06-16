import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { IProject } from '../iproject';
import { FormsModule } from '@angular/forms';
import { DataService } from '../data.service';
import { ListStaffComponent } from '../list-staff/list-staff.component';

@Component({
  selector: 'app-list-project',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './list-project.component.html',
  styleUrl: './list-project.component.css',
})
export class ListProjectComponent {
  Projects: IProject[] = [];
  constructor(private httpProject:DataService){};

  ngOnInit():void{
    fetch('http://localhost:3000/project/')
    .then(res => res.json())
    .then(data =>{
      this.Projects = data
    })

    this.httpProject.getProject().subscribe(data =>{
      this.Projects = data as IProject[];
    });
  }

  handleProject(project:IProject){
    this.httpProject.addProject(project).subscribe(data=>{
      console.log(project,data);
      alert('Created !');
    });
  }
}
