import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms'
import { ExpensesComponent } from './components/expenses/expenses.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FormNewExpenseComponent } from './components/form-new-expense/form-new-expense.component'


@NgModule({
  declarations: [
    AppComponent,
    ExpensesComponent,
    NavbarComponent,
    FormNewExpenseComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
