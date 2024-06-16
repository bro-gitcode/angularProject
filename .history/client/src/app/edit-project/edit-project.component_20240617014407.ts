import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IProject } from '../iproject';
import { IStaff } from '../istaff';
import { DataService } from '../data.service';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Router } from '@angular/router';
@Component({
  selector: 'app-edit-project',
  standalone: true,
  imports: [CommonModule,FormsModule,RouterModule],
  templateUrl: './edit-project.component.html',
  styleUrl: './edit-project.component.css'
})
export class EditProjectComponent {
  id:number = 0;
  data:IProject = <IProject>{};
  Staffs:IStaff[]=[];
  constructor(private http:DataService,private router:ActivatedRoute,private routes:Router){}

  ngOnInit():void{
    this.id = Number(this.router.snapshot.paramMap.get('id'));
    this.http.getStaff().subscribe(data=>{
      this.Staffs = data as IStaff[];
    });

    this.http.getOneProject(this.id).subscribe(project=>{
      console.log("project=",project);
      this.data = project as IProject;
      
    })
  }

  handleEdit(){
    this.http.updateProject(this.data).subscribe (pro=>{
      console.log("Result=",result);
      alert("Updated !");
      this.redirect();
    })
  }
  redirect() {
    this.routes.navigate(['/project']);
  }
}
