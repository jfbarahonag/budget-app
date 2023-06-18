import { ExpenseService } from './expense.service';
import { Expense } from './expense.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-expense',
  templateUrl: './expense.component.html',
  styleUrls: ['./expense.component.css']
})
export class ExpenseComponent implements OnInit {
  list: Expense[] = [];
  @Input() totalIncomes: number = 0;

  constructor(private expenseService: ExpenseService) {}

  ngOnInit() {
    this.list = this.expenseService.expenses;
  }

  removeExpense(idx: number) {
    this.expenseService.remove(idx);
  }

  getPercentage(expense: Expense) {
    return expense.data.value/this.totalIncomes;
  }

}
