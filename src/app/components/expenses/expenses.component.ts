import { Component, OnInit } from '@angular/core';
import { Expense } from '../../models/expense';
import { ExpensesService } from '../../services/expenses.service';
@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.css']
})
export class ExpensesComponent implements OnInit {
  total = 0
  constructor(public expenseService: ExpensesService){}
  
  ngOnInit(): void {
    this.getExpenses();
    //total = this.getTotal(this.expenseService.expenses)
  }
  getTotal(expenses: Expense[]){
    var num: number = 0;
    for(var i: number = 0; i < expenses.length; i++){// obtener el total de gastos/ ingresos
      num += i;
    }
    return num;
  }
  getExpenses(){
    var expenses: Expense[]
    this.expenseService.getExpneses().subscribe(
      res => {
        this.expenseService.expenses = res,
        expenses = res
      },
      err => console.log(err)
      )
    
  }
  deleteExpense(id: string){
    if(confirm('¿Está seguro de querer elimiar el gasto?')){
      this.expenseService.deleteExpense(id).subscribe(
        res => console.log(res),
        err => console.log(err)
      )
      this.getExpenses()
    }
  }
  editExpense(expense: Expense){
    console.log(expense)
    this.expenseService.selectedExpense = expense;
  } 
}



