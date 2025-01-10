export interface DailyBilling {
  day: number;
  value: number;
}

export interface BillingAnalysis {
  lowestValue: number;
  highestValue: number;
  daysAboveAverage: number;
  monthlyAverage: number;
}
