import { Component } from '@angular/core';
import { ChallengesService } from '../../services/challenges.service';
import { FibonacciResult } from '../../models/fibonacci.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-fibonacci-checker',
  imports: [FormsModule, CommonModule],
  templateUrl: './fibonacci-checker.component.html',
  styleUrl: './fibonacci-checker.component.css',
})
export class FibonacciCheckerComponent {
  inputNumber: number = 0;
  result: FibonacciResult | null = null;
  errorMessage: string = '';

  constructor(private challengesService: ChallengesService) {}

  checkNumber() {
    if (this.inputNumber < 0) {
      this.errorMessage = 'Por favor, insira um número positivo';
      this.result = null;
      return;
    }

    this.errorMessage = '';
    this.result = this.challengesService.checkFibonacci(this.inputNumber);
  }
}
