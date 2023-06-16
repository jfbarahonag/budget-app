import { BudgetService } from './budget.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private budgetService: BudgetService) {}

  getTotalIncomes() {
    return this.budgetService.getIncomes().reduce((acc, item) =>
      item.value + acc, 0
    )
  }

  getTotalExpenses() {
    return this.budgetService.getExpenses().reduce((acc, item) =>
      item.value + acc, 0
    )
  }

  title = 'budget';
}
