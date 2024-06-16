import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IProject } from './iproject';
import { ITask } from './itask';
import { IStaff } from './istaff';

@Injectable({providedIn: 'root'})
export class DataService {
  constructor(private http:HttpClient) {}
  // PROJECT
  getProject(){
    return this.http.get('http://localhost:3000/project/');
  }

  getOneProject(id:number=0){
    return this.http.get(`http://localhost:3000/project/${id}`)
  }

  addProject(project:IProject){
    return this.http.post('http://localhost:3000/project/',project);
  }

  deleteProject(id:number){
    return this.http.delete('http://localhost:3000/project/'+id);
  }

  updateProject(project:IProject){
    return this.http.put('http://localhost:3000/project/'+project.id,project)
  }

  // STAFF
  getStaff(){
    return this.http.get('http://localhost:3000/staff/');
  }

  getOneStaff(id:number=0){
    return this.http.get(`http://localhost:3000/staff/${id}`)
  }

  addStaff(staff:IStaff){
    return this.http.post('http://localhost:3000/staff/',staff);
  }

  deleteStaff(id:number){
    return this.http.delete('http://localhost:3000/staff/'+id);
  }

  updateStaff(staff:IStaff){
    return this.http.put('http://localhost:3000/staff/'+staff.id,staff)
  }

  //TASK
  getTask(){
    return this.http.get('http://localhost:3000/staff/');
  }

  getOneTask(id:number=0){
    return this.http.get(`http://localhost:3000/staff/${id}`)
  }

  addTask(staff:IStaff){
    return this.http.post('http://localhost:3000/staff/',staff);
  }

  delete(id:number){
    return this.http.delete('http://localhost:3000/staff/'+id);
  }

  updateStaff(staff:IStaff){
    return this.http.put('http://localhost:3000/staff/'+staff.id,staff)
  }
}
