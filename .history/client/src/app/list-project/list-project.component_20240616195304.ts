import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { IProject } from '../iproject';
@Component({
  selector: 'app-list-project',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list-project.component.html',
  styleUrl: './list-project.component.css'
})
export class ListProjectComponent {
  ListProject:IProject[]=[
    {id:1,name_project:'Quản Lí Trại Gà',create_date:'2203-04-01',price:50000000,leader:1,'1,2,5'},
{2,'Quản Lí Trại Heo','2203-05-02',60000000,2,'2,3,5'},
{3,'Quản Lí Trại Bò','2203-06-03',70000000,3,'1,4,5'},
{4,'Quản Lí Trại Tôm','2203-07-04',80000000,4,'4,2,5'},
{5,'Quản Lí Trại Cá','2203-08-05',90000000,4,'1,2,4'};
  ]
}
