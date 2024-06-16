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

  ngOnInit():void{
    fetch('http://localhost:3000/staff/')
    .then(res => res.json())
    .then(data =>{
      this.Staffs = data
    })
  }
  loadProject(){
    fetch('http://localhost:3000/project/')
    .then(res => res.json())
    .then(data =>{
      this.Projects = data
    })
    this.httpProject.getStaff().subscribe(data =>{
      this.Staffs = data as IStaff[];
    });
  }
}
