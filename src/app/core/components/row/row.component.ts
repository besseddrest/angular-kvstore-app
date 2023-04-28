import { Component, Input } from '@angular/core';
import { Dataset } from '../../models/dataset';

@Component({
  selector: 'tr[app-row]',
  templateUrl: './row.component.html',
  styleUrls: ['./row.component.scss']
})
export class RowComponent {
  @Input() dataset: Dataset | null = null;
}
