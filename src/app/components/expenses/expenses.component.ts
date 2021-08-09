import { Component, OnInit } from '@angular/core';
import { Expense } from '../../models/expense';
import { ExpensesService } from '../../services/expenses.service';
@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.css']
})
export class ExpensesComponent implements OnInit {
  
  constructor(public expenseService: ExpensesService){}
  
  ngOnInit(): void {
    this.getExpenses();
  }
  getExpenses(){
    this.expenseService.getExpneses().subscribe(
      res => {
        this.expenseService.expenses = res
      },
      err => console.log(err)
    )
  }
  
}



