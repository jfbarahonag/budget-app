import { Expense } from './expense.model';
export class ExpenseService {
  expenses: Expense[] = [
    new Expense({ details: 'Arriendo', value: 700 }),
    new Expense({ details: 'Servicios', value: 355 }),
  ];

  remove(idx: number) {
    this.expenses.splice(idx, 1);
  }

  add(item: Expense) {
    this.expenses.push(item);
  }
}
