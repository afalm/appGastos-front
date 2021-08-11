import { Component, OnInit } from '@angular/core';
import { Expense } from '../../models/expense';
import { ExpensesService } from '../../services/expenses.service';
@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.css']
})
export class ExpensesComponent implements OnInit {
  total: number;
  
  
  constructor(public expenseService: ExpensesService){}
  
  ngOnInit(): void {
    this.getExpenses();
    
    
  }
  getTotal(expenses: Expense[]){
    var num: number = 0;
    for(var i: number = 0; i < expenses.length; i++){// obtener el total de gastos/ ingresos
      num += expenses[i].quantity;
    }
    return num;
  }
  getExpenses(){
    
    this.expenseService.getExpneses().subscribe(
      res => {
        this.expenseService.expenses = res,
        this.total = this.getTotal(this.expenseService.expenses),
        console.log(this.total)
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



