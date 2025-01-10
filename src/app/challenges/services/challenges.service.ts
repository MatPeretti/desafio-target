import { Injectable } from '@angular/core';
import { FibonacciResult } from '../models/fibonacci.model';

@Injectable({
  providedIn: 'root',
})
export class ChallengesService {
  constructor() {}

  calculateIterativeSum(indice: number): number {
    let soma = 0;
    let k = 0;

    while (k < indice) {
      k = k + 1;
      soma = soma + k;
    }
    return soma;
  }

  checkFibonacci(num: number): FibonacciResult {
    let sequence: number[] = [0, 1];
    let belongs = false;

    if (num === 0 || num === 1) {
      belongs = true;
      return { sequence, belongs, inputNumber: num };
    }

    while (sequence[sequence.length - 1] <= num) {
      const nextNumber =
        sequence[sequence.length - 1] + sequence[sequence.length - 2];
      sequence.push(nextNumber);

      if (nextNumber === num) {
        belongs = true;
        break;
      }
    }
    return {
      sequence,
      belongs,
      inputNumber: num,
    };
  }
}
