import { ExpenseService } from './expense/expense.service';
import { IncomeService } from './income/income.service';
import { Component } from '@angular/core';

export interface BudgetItem {
  value: number;
  details: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(
    private incomeService: IncomeService,
    private expenseService: ExpenseService,
  ) {}

  getTotalIncomes() {
    return this.incomeService.incomes
      .reduce((acc, item) => item.data.value + acc, 0);
  }

  getTotalExpenses() {
    return this.expenseService.expenses
      .reduce((acc, item) => item.data.value + acc, 0);
  }

  getTotalPercentage() {
    return this.getTotalExpenses() / this.getTotalIncomes();
  }

  getTotalBudget() {
    return this.getTotalIncomes() - this.getTotalExpenses();
  }

  title = 'budget';
}
