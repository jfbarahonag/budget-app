import { Income } from './income.model';
export class IncomeService {
  incomes: Income[] = [
    new Income({ details: 'Salario', value: 4500 }),
    new Income({ details: 'Retorno de inversion', value: 600 }),
  ];

  remove(idx: number) {
    this.incomes.splice(idx, 1);
  }

  add(item: Income) {
    this.incomes.push(item);
  }
}
