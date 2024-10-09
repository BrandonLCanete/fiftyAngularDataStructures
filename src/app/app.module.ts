import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule, Routes} from '@angular/router';
import {CommonModule} from "@angular/common";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {AppComponent} from "./app.component";
import {provideAnimationsAsync} from "@angular/platform-browser/animations/async";
import { FormsModule } from '@angular/forms';
import { StudentListComponent } from './components/student-list/student-list.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { FruitListComponent } from './components/fruit-list/fruit-list.component';
import { CourseListComponent } from './components/course-list/course-list.component';

const routes: Routes = [
    {path: ' ', component: AppComponent},
    {path: 'student-list', component: StudentListComponent},
    {path: 'employee-list', component: EmployeeListComponent},
    {path: 'fruit-list', component: FruitListComponent},
    {path: 'course-list', component: CourseListComponent},
];

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        BrowserAnimationsModule,
        RouterModule.forRoot(routes, {enableTracing: true}),
        FormsModule,
    ],
    declarations: [
        AppComponent,
        StudentListComponent,
        EmployeeListComponent,
        FruitListComponent,
        CourseListComponent,
    ],
    providers: [
        provideAnimationsAsync(),
    ],
        
    bootstrap: [
        AppComponent,
    ],
    exports: [RouterModule],
})
export class AppModule{} 