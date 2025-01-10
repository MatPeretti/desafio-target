import { Component, OnInit } from '@angular/core';
import { ChallengesService } from '../../services/challenges.service';
import { DailyBilling, BillingAnalysis } from '../../models/billing.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-billing-analysis',
  imports: [CommonModule],
  templateUrl: './billing-analysis.component.html',
  styleUrl: './billing-analysis.component.css',
})
export class BillingAnalysisComponent implements OnInit {
  billingData: DailyBilling[] = [];
  analysis: BillingAnalysis | null = null;
  loading: boolean = true;
  error: string = '';

  constructor(private challengesService: ChallengesService) {}

  ngOnInit(): void {
    this.loadBillingData();
  }

  loadBillingData(): void {
    this.loading = true;
    this.challengesService.getDailyBilling().subscribe({
      next: (data) => {
        console.log('Received data:', data);
        this.billingData = Array.isArray(data) ? data : [];
        this.analysis = this.challengesService.analyzeBilling(this.billingData);
        this.loading = false;
      },
      error: (err) => {
        console.error('Complete error:', err);
        this.error = 'Erro ao carregar os dados de faturamento';
        this.loading = false;
      },
    });
  }
}
