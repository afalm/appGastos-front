import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Expense } from '../../models/expense';
@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.css']
})
export class ExpensesComponent implements OnInit {
  
  expenses: any[] = [];
  constructor(private http: HttpClient){
   
    this.http.get('http://localhost:3800/api/expenses/')
      .subscribe( (resp: any) => {
        this.expenses = resp;
        console.log(resp);
      })
      
  }
  
  
  ngOnInit(): void {

  }
  
}



