import { Expense } from './../expense/expense.model';
import { Income } from './../income/income.model';
import { ExpenseService } from './../expense/expense.service';
import { IncomeService } from './../income/income.service';
import { BudgetItem } from '../app.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent {
  constructor(
    private incomeService: IncomeService,
    private expenseService: ExpenseService
  ) {}

  is = {
    income: true,
    expense: false,
  };
  selectedValue: 'ing' | 'egr' = 'ing';
  budgetItem: BudgetItem = {
    value: 0,
    details: '',
  };

  changeType(event: Event) {
    const valueSelected = (event.target as HTMLSelectElement).value;
    this.is.income = valueSelected === 'ing' ? true : false;
    this.is.expense = valueSelected === 'egr' ? true : false;
  }

  onAddBudgetItem() {
    if (this.budgetItem.value === 0) return;
    const budgetItem = structuredClone(this.budgetItem);
    if (this.is.income) {
      this.incomeService.add(new Income(budgetItem));
    } else if (this.is.expense) {
      this.expenseService.add(new Expense(budgetItem));
    }
    this.budgetItem.details = '';
    this.budgetItem.value = 0;
  }
}
