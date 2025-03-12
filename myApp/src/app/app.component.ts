import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import { initFlowbite } from 'flowbite';
import { DesignSystemModule } from 'projects/tpi-app-design-system/src/public-api';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [IonApp, IonRouterOutlet, DesignSystemModule],
})
export class AppComponent {
  constructor() {}

  ngOnInit(): void {
    initFlowbite();
  }
}
