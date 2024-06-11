import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { loadRemoteModule } from '@angular-architects/module-federation';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  @ViewChild('remote', { read: ViewContainerRef })
  viewContainer!: ViewContainerRef;

  constructor() { }

  ngOnInit(): void {
    this.load();
  }

  async load(): Promise<void> {
    const module = await loadRemoteModule({
      type: 'module',
      remoteEntry: 'http://localhost:4201/remoteEntry.js',
      exposedModule: './AppComponent'
    });

    this.viewContainer.createComponent(module.AppComponent);
  }
}