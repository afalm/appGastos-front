import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Expense } from'../../models/expense'
import { ExpensesService } from '../../services/expenses.service';
@Component({
  selector: 'app-form-new-expense',
  templateUrl: './form-new-expense.component.html',
  styleUrls: ['./form-new-expense.component.css']
})
export class FormNewExpenseComponent implements OnInit {
  //selectedExpense: Expense;
  
constructor(public expenseService: ExpensesService){}

  ngOnInit(): void {
  }
  addExpense(form: NgForm){
    console.log(form.value);
    this.expenseService.creteExpenses(form.value).subscribe(
      res => {
        console.log(res)
      },
      err => console.log(err)
    )
  }
}
