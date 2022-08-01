import { Component } from '@angular/core'

@Component({
  selector: 'vb-menu-simply-actions',
  templateUrl: './actions.component.html',
  styleUrls: ['./actions.component.scss'],
})
export class MenuSimplyActionsComponent {
  badgeCount: number = 7

  badgeCountIncrease() {
    this.badgeCount = this.badgeCount + 1
  }
}
