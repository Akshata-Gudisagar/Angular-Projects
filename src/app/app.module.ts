import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {TableModule} from 'primeng/table';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { ProducttableComponent } from './producttable/producttable.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { Product1Component } from './product1/product1.component';
import { ProductfilterPipe } from './product1/productfilter.pipe';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RegistrationComponent } from './registration/registration.component';
import { CustomerDashboardComponent } from './customer-dashboard/customer-dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { ParentChild2Component } from './parent-child2/parent-child2.component';
import { EmployeepipePipe } from './parent-child2/employeepipe.pipe';
import { ParentChildComponent } from './parent-child/parent-child.component';
import { OnlineCoursesComponent } from './online-courses/online-courses.component';
import { HomeComponent } from './home/home.component';
import { AllCoursesComponent } from './all-courses/all-courses.component';
import { AboutComponent } from './about/about.component';
import { Routes } from '@angular/router';
import { Participant } from './parent-child/participant';
import { TemplateComponent } from './template/template.component';
import { RegisterdirectiveDirective } from './template/registerdirective.directive';
import { DialogModule } from 'primeng/dialog'
import { ErrorfoundComponent } from './errorfound/errorfound.component';
import { ButtonModule } from 'primeng/button';
import { FormarrayComponent } from './formarray/formarray.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ParentcomponentComponent } from './parentcomponent/parentcomponent.component';
import { ChildcomponentComponent } from './childcomponent/childcomponent.component';
import { EventfielterPipe } from './eventfielter.pipe';
import { EventFormComponent } from './event-form/event-form.component' ;


const navigationPath : Routes = [
  {path:'home',component:HomeComponent },

  {path:'participants',component:Participant},
  {path:'all-courses',component:AllCoursesComponent,canActivate:[OnlineCoursesComponent]},
  {path:'registertion',component:RegistrationComponent},
  {path:'about',component:AboutComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ProducttableComponent,
    ProductlistComponent,
    Product1Component,
    ProductfilterPipe,
    ReactiveformComponent,
    RegistrationComponent,
    CustomerDashboardComponent,
    ParentChild2Component,
    EmployeepipePipe,
    ParentChildComponent,
    OnlineCoursesComponent,
    HomeComponent,
    AllCoursesComponent,
    AboutComponent,
    TemplateComponent,
    RegisterdirectiveDirective,
   
    ErrorfoundComponent,
        FormarrayComponent,
        ParentcomponentComponent,
        ChildcomponentComponent,
        EventfielterPipe,
        EventFormComponent,
    
    
 

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DropdownModule,
    FormsModule,
    TableModule,
    ReactiveFormsModule,
    HttpClientModule,
    DialogModule,
    BrowserModule,
    ButtonModule ,
    BrowserAnimationsModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
