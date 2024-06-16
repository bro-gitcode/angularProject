import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListProjectComponent } from './list-project/list-project.component';
import { ListStaffComponent } from './list-staff/list-staff.component';
import { ListTaskComponent } from './list-task/list-task.component';
import { EditProjectComponent } from './edit-project/edit-project.component';

export const routes: Routes = [
    {path:'',component: HomeComponent},
    {path:'project',component:ListProjectComponent},
    {path:'staff',component:ListStaffComponent},
    {path:'task',component:ListTaskComponent},
    {path:'project/edit/:id',component:EditProjectComponent},
    {path:'staff/edit/:id',component},
    {path:'task/edit/:id',},
    {path:'',},

];
