import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CoursesComponent } from './courses/courses.component';
import { StudentService } from './student.service';
import { StudentsComponent } from './students/students.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'courses', component: CoursesComponent},
  {path:'students', component:StudentsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
