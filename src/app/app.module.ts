import { ExpenseService } from './expense/expense.service';
import { IncomeService } from './income/income.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FormComponent } from './form/form.component';
import { DetailsComponent } from './details/details.component';
import { FormsModule } from '@angular/forms';
import { ExpenseComponent } from './expense/expense.component';
import { IncomeComponent } from './income/income.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FormComponent,
    DetailsComponent,
    ExpenseComponent,
    IncomeComponent,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [IncomeService, ExpenseService],
  bootstrap: [AppComponent],
})
export class AppModule {}
