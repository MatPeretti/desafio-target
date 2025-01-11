import { Injectable } from '@angular/core';
import { FibonacciResult } from '../models/fibonacci.model';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { DailyBilling, BillingAnalysis } from '../models/billing.model';
import { StateBilling, StatePercentage } from '../models/state-billing.model';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ChallengesService {
  private apiUrl = 'http://localhost:3000/billing';

  constructor(private http: HttpClient) {}

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

  getDailyBilling(): Observable<DailyBilling[]> {
    return this.http.get<DailyBilling[]>(this.apiUrl).pipe(
      map((response) => {
        return Array.isArray(response) ? response : [];
      })
    );
  }

  analyzeBilling(data: DailyBilling[]): BillingAnalysis {
    if (!Array.isArray(data) || data.length === 0) {
      return {
        lowestValue: 0,
        highestValue: 0,
        daysAboveAverage: 0,
        monthlyAverage: 0,
      };
    }

    const daysWithBilling = data.filter((day) => day && day.value > 0);

    if (daysWithBilling.length === 0) {
      return {
        lowestValue: 0,
        highestValue: 0,
        daysAboveAverage: 0,
        monthlyAverage: 0,
      };
    }

    const lowestValue = Math.min(...daysWithBilling.map((day) => day.value));

    const highestValue = Math.max(...daysWithBilling.map((day) => day.value));

    const monthlyAverage =
      daysWithBilling.reduce((acc, day) => acc + day.value, 0) /
      daysWithBilling.length;

    const daysAboveAverage = daysWithBilling.filter(
      (day) => day.value > monthlyAverage
    ).length;

    return {
      lowestValue,
      highestValue,
      daysAboveAverage,
      monthlyAverage,
    };
  }

  getStateData(): Observable<StateBilling[]> {
    const stateData: StateBilling[] = [
      { state: 'SP', value: 67836.43 },
      { state: 'RJ', value: 36678.66 },
      { state: 'MG', value: 29229.88 },
      { state: 'ES', value: 27165.48 },
      { state: 'Others', value: 19849.53 },
    ];

    return of(stateData);
  }

  calculateStatePercentages(stateData: StateBilling[]): StatePercentage[] {
    const total = stateData.reduce((sum, state) => sum + state.value, 0);

    return stateData.map((state) => ({
      ...state,
      percentage: (state.value / total) * 100,
    }));
  }

  invertString(text: string): string {
    let invertedText = '';
    for (let i = text.length - 1; i >= 0; i--) {
      invertedText += text[i];
    }
    return invertedText;
  }
}
