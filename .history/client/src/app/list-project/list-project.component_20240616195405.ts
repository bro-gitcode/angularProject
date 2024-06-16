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
    {id:1,name_project:'Quản Lí Trại Gà',create_date:'2203-04-01',price:50000000,leader:1,member:'1,2,5'},
{id:2,name_project:'Quản Lí Trại Heo',create_date:'2203-05-02',price:60000000,2,'2,3,5'},
{id:3,name_project:'Quản Lí Trại Bò',create_date:'2203-06-03',price:70000000,3,'1,4,5'},
{id:4,name_project:'Quản Lí Trại Tôm',create_date:'2203-07-04',price:80000000,4,'4,2,5'},
{id:5,name_project:'Quản Lí Trại Cá',create_date:'2203-08-05',90000000,4,'1,2,4'};
  ]
}
