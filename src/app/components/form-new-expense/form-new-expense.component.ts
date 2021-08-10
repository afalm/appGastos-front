import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { from } from 'rxjs';
import { Expense } from'../../models/expense'
//import { ExpensesComponent } from '../expenses/expenses.component';
import { ExpensesService } from '../../services/expenses.service';

@Component({
  selector: 'app-form-new-expense',
  templateUrl: './form-new-expense.component.html',
  styleUrls: ['./form-new-expense.component.css']
})

export class FormNewExpenseComponent implements OnInit {
  //TODO refrescar datos al expensesService
 // @ViewChild(ExpensesComponent) expensesComponent :ExpensesComponent;
  
constructor(
  public expenseService: ExpensesService){}
  ngOnInit(): void {
  }
  addExpense(form: NgForm){
    if(form.value._id){
      console.log('Actualizar')
      this.expenseService.putExpense(form.value).subscribe(
        res => {form.reset(),
          alert('Gasto actualizado')
        },
        err => console.log(err)
      )
    }else{
      console.log(form.value);
      this.expenseService.creteExpenses(form.value).subscribe(
        res => {
          form.resetForm();
          alert('Gasto creado')
        },
        err => console.log(err)
      )
    }
  }
  resetForm(form: NgForm){
    form.reset();
  }
}
