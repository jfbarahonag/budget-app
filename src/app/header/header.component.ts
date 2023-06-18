import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  @Input() totalIncomes = 0;
  @Input() totalExpenses = 0;
  @Input() totalPercentage = 0;
  @Input() totalBudget = 0;

  getTotalBudget(abs: boolean) {
    const result = this.totalBudget;
    return abs === true ? Math.abs(result) : result;
  }

  getTotalBudgetSign() {
    return this.getTotalBudget(false) >= 0 ? '+' : '-';
  }

  getExpensesPercentage() {
    const percentage = (this.totalExpenses * 100) / this.totalIncomes;
    if (isNaN(percentage)) {
      return 0;
    }
    return percentage.toFixed(1);
  }
}
