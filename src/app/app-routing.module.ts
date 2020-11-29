import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IntroscreenComponent } from './introscreen/introscreen.component';
import { QuestionscreenComponent } from './questionscreen/questionscreen.component';
import { ResultscreenComponent } from './resultscreen/resultscreen.component';

const routes: Routes = [
	{
		path: '',
		component: IntroscreenComponent
	},
	{
		path: 'questions',
		component: QuestionscreenComponent
	},
	{
		path: 'result',
		component: ResultscreenComponent
	},
	{
		path: '**',
		component: IntroscreenComponent
	}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
	RouterModule
  ]
})
export class AppRoutingModule { }
