import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IProject } from './iproject';
import { ITask } from './itask';
import { IStaff } from './istaff';

@Injectable({providedIn: 'root'})
export class DataService {
  constructor(private http:HttpClient) {}
}
