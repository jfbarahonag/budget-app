import { BudgetService } from './../budget.service';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent {
  constructor(private budgetService: BudgetService) {}

  @Input() totalIncomes: number = 0;

  getIncomes() {
    return this.budgetService.getIncomes();
  }

  getExpenses() {
    return this.budgetService.getExpenses();
  }

  removeIncome(idx: number) {
    this.budgetService.removeIncome(idx);
  }

  removeExpense(idx: number) {
    this.budgetService.removeExpense(idx);
  }

}
