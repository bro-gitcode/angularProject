import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IProject } from '../iproject';
import { IStaff } from '../istaff';
import { DataService } from '../data.service';
@Component({
  selector: 'app-edit-project',
  standalone: true,
  imports: [CommonModule,FormsModule,Ac],
  templateUrl: './edit-project.component.html',
  styleUrl: './edit-project.component.css'
})
export class EditProjectComponent {

}
