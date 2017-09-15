import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// components
import { AppComponent }   from './app.component';
import { UsersComponent }   from './components/users/users.component';
import { TicketsComponent } from './components/tickets/tickets.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

// Routes
const appRoutes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'usuarios', component: UsersComponent },
  { path: 'apuestas', component: TicketsComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: '**', component: AppComponent }
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
