import { Component } from '@angular/core';
import { DividerComponent } from '../divider/divider.component';

@Component({
  selector: 'app-related-panel',
  standalone: true,
  imports: [DividerComponent],
  templateUrl: './related-panel.component.html',
  styleUrl: './related-panel.component.scss'
})
export class RelatedPanelComponent {

}
