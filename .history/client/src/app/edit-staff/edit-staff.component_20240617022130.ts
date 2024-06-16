import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IStaff } from '../istaff';
import { DataService } from '../data.service';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Router } from '@angular/router';
@Component({
  selector: 'app-edit-staff',
  standalone: true,
  imports: [CommonModule,FormsModule,RouterModule],
  templateUrl: './edit-staff.component.html',
  styleUrl: './edit-staff.component.css'
})
export class EditStaffComponent {
  id:number = 0;
  data:IStaff = <IStaff>{};
  Staffs:IStaff[]=[];
  constructor(private http:DataService,private router:ActivatedRoute,private routes:Router){}

  ngOnInit():void{
    this.id = Number(this.router.snapshot.paramMap.get('id'));
    this.http.getOneStaff(this.id).subscribe(staff=>{
      this.Staffs = data as IStaff[];
    });

    this.http.getOneProject(this.id).subscribe(project=>{
      console.log("project=",project);
      this.data = project as IProject;
      
    })
  }
}
