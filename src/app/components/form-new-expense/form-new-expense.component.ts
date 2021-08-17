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
 constructor(
  public expenseService: ExpensesService){}
  ngOnInit(): void {
  }
  addExpense(form: NgForm){
    if(form.value._id){
      this.expenseService.edit = true
      this.expenseService.putExpense(form.value).subscribe(
        res => {form.reset(),
          console.log('Gasto actualizado')
        },
        err => console.log(err)
        )
        this.expenseService.edit = false;
      }else{
        console.log(form.value);
        this.expenseService.edit = false;
        this.expenseService.creteExpenses(form.value).subscribe(
          res => {
            console.log('Gasto creado')
            
          },
          err => console.log(err)
          )
        }
        this.expenseService.cargarExpenses()
        form.resetForm();
      }
      resetForm(form: NgForm){
        form.reset();
      }
}
