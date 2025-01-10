import { Component, OnInit } from '@angular/core';
import { ChallengesService } from '../../services/challenges.service';

@Component({
  selector: 'app-sum-calculator',
  imports: [],
  templateUrl: './sum-calculator.component.html',
  styleUrl: './sum-calculator.component.css',
})
export class SumCalculatorComponent implements OnInit {
  indice: number = 13;

  constructor(private challengeService: ChallengesService) {}

  ngOnInit(): void {
    this.calculateSum();
  }

  calculateSum(): number {
    return this.challengeService.calculateIterativeSum(this.indice);
  }
}
