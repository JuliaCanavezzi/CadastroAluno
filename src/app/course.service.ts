import { Injectable } from '@angular/core';
import { Course } from './course';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  url ='http://localhost:3000/courses';

  constructor(private http: HttpClient) { }

  getCourses(): Observable <Course[]> {
    return this.http.get <Course[]> (this.url);
  }
}
