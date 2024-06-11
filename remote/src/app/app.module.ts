import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [AppComponent],
  imports: [CommonModule, AppRoutingModule],
  exports: [AppComponent],
  providers: [],
  bootstrap: [AppComponent],
})

export class AppModule {}
