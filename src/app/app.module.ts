import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormComponent } from './components/form/form.component';
import { ShowExpensesComponent } from './components/show-expenses/show-expenses.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    ShowExpensesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
