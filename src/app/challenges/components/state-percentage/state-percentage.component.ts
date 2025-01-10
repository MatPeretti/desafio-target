import { Component, OnInit } from '@angular/core';
import { ChallengesService } from '../../services/challenges.service';
import { StatePercentage } from '../../models/state-billing.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-state-percentage',
  imports: [CommonModule],
  templateUrl: './state-percentage.component.html',
  styleUrl: './state-percentage.component.css',
})
export class StatePercentageComponent implements OnInit {
  statePercentages: StatePercentage[] = [];
  total: number = 0;
  loading: boolean = true;
  error: string = '';

  constructor(private challengesService: ChallengesService) {}

  ngOnInit(): void {
    this.loadStateData();
  }

  loadStateData(): void {
    this.loading = true;
    this.challengesService.getStateData().subscribe({
      next: (data) => {
        this.total = data.reduce((sum, state) => sum + state.value, 0);
        this.statePercentages =
          this.challengesService.calculateStatePercentages(data);
        this.loading = false;
      },
      error: (err) => {
        console.error('Error:', err);
        this.error = 'Error loading state data';
        this.loading = false;
      },
    });
  }
}
