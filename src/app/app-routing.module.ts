import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AllCoursesComponent } from './all-courses/all-courses.component';
import { ErrorfoundComponent } from './errorfound/errorfound.component';
import { HomeComponent } from './home/home.component';
import { RegistrationComponent } from './registration/registration.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'all-courses',component:AllCoursesComponent},
  {path:'registration',component:RegistrationComponent},
  {path:'about',component:AboutComponent},
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'**',component:ErrorfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
