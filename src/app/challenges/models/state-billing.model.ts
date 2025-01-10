export interface StateBilling {
  state: string;
  value: number;
}

export interface StatePercentage extends StateBilling {
  percentage: number;
}
