import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { IStaff } from '../istaff';
import { DataService } from '../data.service';
import { ActivatedRoute, Router, RouterLink, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-list-staff',
  standalone: true,
  imports: [CommonModule,FormsModule,RouterLink,RouterModule],
  templateUrl: './list-staff.component.html',
  styleUrl: './list-staff.component.css'
})
export class ListStaffComponent {
  Staffs: IStaff[] = [];

  constructor(private httpStaff:DataService){}

  ngOnInit():void{
    this.loadStaff
  }
  loadStaff(){
    fetch('http://localhost:3000/staff/')
    .then(res => res.json())
    .then(data =>{
      this.Staffs = data
    })
    this.httpStaff.getStaff().subscribe(data =>{
      this.Staffs = data as IStaff[];
    });
  }

  handleProject(staff:IProÍject){
    this.httpProject.addProject(project).subscribe(data=>{
      console.log(project,data);
      alert('Created !');
      this.loadProject();
    });
  }
}
