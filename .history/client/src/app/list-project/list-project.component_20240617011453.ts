import { CommonModule } from '@angular/common';
import { Component} from '@angular/core';
import { IProject } from '../iproject';
import { FormsModule} from '@angular/forms';
import { DataService } from '../data.service';
import { IStaff } from '../istaff';
import { ActivatedRoute, Router, RouterLink, RouterModule } from '@angular/router';
@Component({
  selector: 'app-list-project',
  standalone: true,
  imports: [CommonModule,FormsModule,RouterLink,RouterModule,],
  templateUrl: './list-project.component.html',
  styleUrl: './list-project.component.css',
})
export class ListProjectComponent {
  delete:boolean|undefined;
  Projects: IProject[] = [];
  Staffs:IStaff[]= [];
  constructor(private httpProject:DataService,private router:ActivatedRoute,private routes: Router){};
  ngOnInit():void{
    
  }

  handleProject(project:IProject){
    this.httpProject.addProject(project).subscribe(data=>{
      console.log(project,data);
      alert('Created !');
      this.redirect();
    });
  }

  load

  deleted(id:number){
    this.delete = confirm("Ok???");
    if(this.delete){
      this.httpProject.deleteProject(id).subscribe((data)=>{
        this.redirect();
        console.log(data);
      })
    }
  }
  redirect() {
    this.routes.navigate(['/project']);
  }

}
