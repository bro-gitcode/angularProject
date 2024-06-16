import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { IStaff } from '../istaff';
@Component({
  selector: 'app-list-staff',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list-staff.component.html',
  styleUrl: './list-staff.component.css'
})
export class ListStaffComponent {
  Staff: IStaff[] = [];

  ngOnInit():void{
    fetch('http://localhost:3000/staff/')
    .then(res => res.json())
    .then(data =>{
      this.Staff = data
    })
  }
}
