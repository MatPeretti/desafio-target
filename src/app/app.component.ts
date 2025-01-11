import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SumCalculatorComponent } from './challenges/components/sum-calculator/sum-calculator.component';
import { FibonacciCheckerComponent } from './challenges/components/fibonacci-checker/fibonacci-checker.component';
import { BillingAnalysisComponent } from './challenges/components/billing-analysis/billing-analysis.component';
import { StatePercentageComponent } from './challenges/components/state-percentage/state-percentage.component';
import { StringInverterComponent } from './challenges/components/string-inverter/string-inverter.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    SumCalculatorComponent,
    FibonacciCheckerComponent,
    BillingAnalysisComponent,
    StatePercentageComponent,
    StringInverterComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Desafio Target Sistemas';
}
