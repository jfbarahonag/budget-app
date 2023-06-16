import { BudgetService, BudgetItem } from './../budget.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent {
  constructor(private budgetService: BudgetService) {}

  is = {
    income: true,
    expense: false,
  }
  selectedValue: 'ing' | 'egr' = 'ing';
  budgetItem: BudgetItem = {
    value: 0,
    details: ''
  };

  onAddBudgetItem() {
    if (this.budgetItem.value === 0 || this.budgetItem.details === '')
      return;
    const budgetItem = structuredClone(this.budgetItem);
    if (this.selectedValue === 'ing') {
      this.budgetService.addIncome(budgetItem);
    } else {
      this.budgetService.addExpense(budgetItem);
    }
    this.budgetItem.details = '';
    this.budgetItem.value = 0;
  }

  changeType(event: Event) {
    const valueSelected = (event.target as HTMLSelectElement).value;
    this.is.income = valueSelected === 'ing' ? true : false;
    this.is.expense = valueSelected === 'egr' ? true : false;
  }
}
