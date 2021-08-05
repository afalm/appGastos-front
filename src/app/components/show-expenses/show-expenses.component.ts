import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-expenses',
  templateUrl: './show-expenses.component.html',
  styleUrls: ['./show-expenses.component.css']
})
export class ShowExpensesComponent  {
  // A modo de prueba creo una variable expenses de tipo array y number y la muestro
  
  expenses: Number[] = [1200, 1550, 692, 12]; 
  
  

}
