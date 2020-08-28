import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Student } from '../../components/student/student';

@Injectable({
  providedIn: 'root'
})

export class StudentService {

  private url = "/api/students";

  constructor(private http: HttpClient) {
  }

  getStudents() {
    return this.http.get(this.url);
  }

  getStudent(id: number) {
    return this.http.get(this.url + '/' + id);
  }

  createStudent(student: Student) {
    this.checkGender(student);
    return this.http.post(this.url, student);
  }
  updateStudent(id: number, student: Student) {
    this.checkGender(student);
    return this.http.put(this.url + '/' + id, student);
  }
  deleteStudent(id: number) {
    return this.http.delete(this.url + '/' + id);
  }
  checkGender(student: Student) {
    if (student.stringGender == 'M') {
      student.gender = 0;
    }
    else if (student.stringGender == 'F') {
      student.gender = 1;
    }
  }
}
