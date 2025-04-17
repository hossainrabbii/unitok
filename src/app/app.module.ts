import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component'; // Main app component component
import { ToggleBtnComponent } from './toggle-btn/toggle-btn.component'; 

@NgModule({
  declarations: [
    AppComponent,
    ToggleBtnComponent, // Declare your toggle component here
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent], // Bootstrap the main app component
  schemas: [NO_ERRORS_SCHEMA], // Add NO_ERRORS_SCHEMA here
})
export class AppModule {}
