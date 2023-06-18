import { IncomeService } from './income.service';
import { Income } from './income.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-income',
  templateUrl: './income.component.html',
  styleUrls: ['./income.component.css']
})
export class IncomeComponent implements OnInit {
  list:Income[] = [];

  constructor(private incomeService: IncomeService) {}

  ngOnInit() {
    this.list = this.incomeService.incomes;
  }

  removeIncome(idx: number) {
    this.incomeService.remove(idx);
  }
}
