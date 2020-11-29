import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {

  constructor(private http:HttpClient) { }
  
  getQuestions() {
	  return this.http.get('https://my-json-server.typicode.com/KishanChand/quizdb/questions');
  }
}
