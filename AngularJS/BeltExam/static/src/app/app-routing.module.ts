import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationComponent} from './registration/registration.component';
import { HomeComponent} from './home/home.component';
import { AddquestionComponent } from './addquestion/addquestion.component';
import { AnswerComponent} from './answer/answer.component';
import { QuestionComponent } from './question/question.component';
import { CanActivate } from '@angular/router';
import { LoginActivate } from './login-activate';

const routes: Routes = [
  { path: '', pathMatch: 'full', component:RegistrationComponent },
  { path: 'home', component: HomeComponent,canActivate:[LoginActivate] },
  { path: 'gohome', redirectTo:'/home'},
  { path: 'newQuestion', component: AddquestionComponent },
  { path: 'answer/:id', component: AnswerComponent },
  { path: 'questionPage/:id', component: QuestionComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
