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
  delete:boolean|undefined;
  Staffs: IStaff[] = [];

  constructor(private httpStaff:DataService){}

  ngOnInit():void{
    this.loadStaff();
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

  handleStaff(staff:IStaff){
    this.httpStaff.addStaff(staff).subscribe(data=>{
      console.log(staff,data);
      alert('Created !');
      this.loadStaff();
    });
  }

  deleted(id:number){
    this.delete = confirm("Ok???");
    if(this.delete){
      this.httpStaff.deleteProject(id).subscribe((data)=>{
        this.loadStaff()
        console.log(data);
      })
    }
  }
}
