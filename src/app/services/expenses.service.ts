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
    quantity: 0,
    description: ""
  };
  expenses: Expense[] = [];
  
  constructor(private http: HttpClient) { }

  getExpneses(){
    return this.http.get<Expense[]>(this.URL_API);
  }
  creteExpenses(expense: Expense){
    return this.http.post(this.URL_API_CREATE, expense);
  }
}
