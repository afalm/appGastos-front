import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms'
import { ExpensesComponent } from './components/expenses/expenses.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FormNewExpenseComponent } from './components/form-new-expense/form-new-expense.component';
import { DonaComponent } from './components/dona/dona.component'
//Graficos
import { ChartsModule } from 'ng2-charts';



@NgModule({
  declarations: [
    AppComponent,
    ExpensesComponent,
    NavbarComponent,
    FormNewExpenseComponent,
    DonaComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
