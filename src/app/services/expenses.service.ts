import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Expense } from '../models/expense';


@Injectable({
  providedIn: 'root'
})
export class ExpensesService {

  URL_API = 'http://localhost:3800/api/expenses/';
  URL_API_CREATE = 'http://localhost:3800/api/expenses/create';
  selectedExpense: Expense = {
    _id: "",
    quantity: 0,
    description: ""
  };
  expenses: Expense[] = [];
  edit: boolean = false;
  total: number;
  constructor(private http: HttpClient) { }
  refrescarDatosTabla(){
    //this.
  }
  getTotal(expenses: Expense[]){
    var num: number = 0;
    for(var i: number = 0; i < expenses.length; i++){// obtener el total de gastos/ ingresos
      num += expenses[i].quantity;
    }
    return num;
  }
  cargarExpenses(){
    this.getExpneses().subscribe(
      res => {
        this.expenses = res
        this.total = this.getTotal(this.expenses)
      },
      err => console.log(err)
      
      )
  }
  getExpneses(){
    return this.http.get<Expense[]>(this.URL_API);
    
  }
 
  creteExpenses(expense: Expense){
    return this.http.post(this.URL_API_CREATE, expense);
  }
  deleteExpense(_id: string){
    return this.http.delete(`${this.URL_API}/${_id}`);
  }
  putExpense(expense: Expense){
    return this.http.put(`${this.URL_API}/${expense._id}`, expense);
  }

}
