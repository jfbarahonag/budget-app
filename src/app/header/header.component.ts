import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  @Input() totalIncomes = 0;
  @Input() totalExpenses = 0;

  getTotalBudget() {
    return this.totalIncomes - this.totalExpenses;
  }

  getExpensesPercentage() {
    const percentage = (this.totalExpenses * 100) / this.totalIncomes;
    if (isNaN(percentage)) {
      return 0;
    }
    return percentage.toFixed(1);
  }
}
