import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true, // Se estiver usando Angular Standalone Components
  imports: [RouterOutlet], // Só use isso se for Standalone, senão remova
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] // Correção: styleUrls no plural e como array
})
export class AppComponent {
  title = 'agenda';
}
