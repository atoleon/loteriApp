import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AdminPanelModule } from './modules/admin-panel/admin-panel.module';

// Routing
import { routing, appRoutingProviders } from './app.routing';

// components
import { AppComponent } from './app.component';
import { UsersComponent } from './components/users/users.component';
import { TicketsComponent } from './components/tickets/tickets.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TopbarComponent } from './components/topbar/topbar.component';
import { UsersTableComponent } from './components/users-table/users-table.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    TicketsComponent,
    DashboardComponent,
    TopbarComponent,
    UsersTableComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    AdminPanelModule
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
