import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ITask } from '../itask';
import { DataService } from '../data.service';
import { ActivatedRoute, Router, RouterLink, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { IProject } from '../iproject';

@Component({
  selector: 'app-list-task',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list-task.component.html',
  styleUrl: './list-task.component.css'
})
export class ListTaskComponent {
  Tasks: ITask[] = [];

  ngOnInit():void{
    fetch('http://localhost:3000/task/')
    .then(res => res.json())
    .then(data =>{
      this.Tasks = data
    })
  }


}
