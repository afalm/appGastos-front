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
    this.expenseService.cargarExpenses();
    
  }
 deleteExpense(id: string){
    if(confirm('¿Está seguro de querer elimiar el gasto?')){
      this.expenseService.deleteExpense(id).subscribe(
        res => console.log(res),
        err => console.log(err)
      )
      this.expenseService.cargarExpenses()
    }
  }
  editExpense(expense: Expense){
    this.expenseService.edit = true
    this.expenseService.selectedExpense = expense;
    this.expenseService.cargarExpenses()
  } 
}



