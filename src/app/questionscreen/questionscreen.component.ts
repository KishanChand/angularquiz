import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { DataserviceService } from '../dataservice.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-questionscreen',
  templateUrl: './questionscreen.component.html',
  styleUrls: ['./questionscreen.component.css']
})
export class QuestionscreenComponent implements OnInit {
	quizquestion:any = [];
	currentQuestion = 0;
	totalQustion = 4;
	score = 0;
	selectedVal = "";
	feedbackCheck = false;
	feedback = "Correct";
	checkBtnDisabled = true;
	nxtDisabled = true;
	optnDisabled = false;
	resultBtnDisabled = true;
	
  constructor(private question:DataserviceService, private router:Router) {
	this.question.getQuestions().subscribe(data => {
		this.quizquestion = data;
	});
  }

  ngOnInit(): void {
  }
  
  ngAfterViewChecked(): void {
	  if(this.currentQuestion != 0) {
		document.getElementsByClassName("question_"+(this.currentQuestion - 1))[0].classList.remove("show");  
	  }
	  document.getElementsByClassName("question_"+this.currentQuestion)[0].classList.add("show");
	  localStorage.setItem('loading', 'false');
  }
  
  radioChangeHandler(event: any) {
	  this.selectedVal = event.target.value;
	  this.checkBtnDisabled = false;
  }
  
  next() {
	  //var currentVal = document.querySelector('input[name="radioBtn_'+this.currentQuestion+'"]:checked');
	  if(this.quizquestion[this.currentQuestion].correct_answer == this.selectedVal) {
		  this.score = this.score + 1;
	  }
	  this.currentQuestion = this.currentQuestion + 1;
	  this.feedbackCheck = false;
	  this.optnDisabled = false;
	  this.checkBtnDisabled = true;
	  this.nxtDisabled = true;
	  this.resultBtnDisabled = true;
  }
  
  checkAnswer() {
	  //var selVal = document.querySelector('input[name="radioBtn_'+this.currentQuestion+'"]:checked');
	  if(this.quizquestion[this.currentQuestion].correct_answer == this.selectedVal) {
		this.feedback = "correct";
	  } else {
		this.feedback = "wrong";
	  }
	  this.feedbackCheck = true;
	  this.optnDisabled = true;
	  this.nxtDisabled = false;
	  this.resultBtnDisabled = false;
  }
  
  submit() {
	  //localStorage.setItem('score', this.score);
	  if(this.quizquestion[this.currentQuestion].correct_answer == this.selectedVal) {
		  this.score = this.score + 1;
	  }
	  localStorage.setItem('score', JSON.stringify(this.score));
	  this.router.navigate(['./result']);
  }

}
