import { Component } from '@angular/core';
import { ChallengesService } from '../../services/challenges.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-string-inverter',
  imports: [FormsModule, CommonModule],
  templateUrl: './string-inverter.component.html',
  styleUrl: './string-inverter.component.css',
})
export class StringInverterComponent {
  inputText: string = '';
  invertedText: string = '';

  constructor(private challengesService: ChallengesService) {}

  invertText(): void {
    if (this.inputText.trim()) {
      this.invertedText = this.challengesService.invertString(this.inputText);
      setTimeout(() => {
        const resultElement = document.querySelector('.result');
        resultElement?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  }
}
