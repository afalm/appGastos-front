import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AppComponent } from './app.component';
import { FormComponent } from './components/form/form.component';
import { ExpensesComponent } from './components/expenses/expenses.component'


@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    ExpensesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
