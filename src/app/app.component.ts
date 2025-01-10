import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SumCalculatorComponent } from './challenges/components/sum-calculator/sum-calculator.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SumCalculatorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'desafio-target';
}
