import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { IProject } from '../iproject';
@Component({
  selector: 'app-list-project',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list-project.component.html',
  styleUrl: './list-project.component.css',
})
export class ListProjectComponent {
  Projects: IProject[] = [];

  ngOnInit():void{
    fetch('http://localhost:3000/project/').then().then()
  }


}
