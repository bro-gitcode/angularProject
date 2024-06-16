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
      console.log("staff=",staff);
      this.data = staff as IStaff;
    });
  }
  handleStaff(){
    this.http.updateStaff(this.data).subscribe (staff=>{
      console.log("staff=",staff);
      alert("Updated !");
      this.redirect();
    })
  }
  redirect() {
    this.routes.navigate(['/project']);
  }

}
