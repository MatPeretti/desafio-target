import { Injectable } from '@angular/core';

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
}
