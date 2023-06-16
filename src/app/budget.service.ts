interface BudgetItem {
  value: number;
  details: string;
}

// TODO: Implement a design pattern
export class BudgetService {
  private incomes: BudgetItem[] = [];
  private expenses: BudgetItem[] = [];

  getIncomes() {
    return structuredClone(this.incomes);
  }

  getExpenses() {
    return structuredClone(this.expenses);
  }

  addIncome(income: BudgetItem) {
    // Replace by a model?
    this.incomes.push(income);
  }

  addExpense(expense: BudgetItem) {
    // Replace by a model?
    this.expenses.push(expense);
  }

  removeIncome(idx: number) {
    this.incomes.splice(idx, 1);
  }

  removeExpense(idx: number) {
    this.expenses.splice(idx, 1);
  }
}
