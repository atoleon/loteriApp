import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { JackpotComponent } from './components/jackpot/jackpot.component';
import { MainAdminPanelComponent } from './components/main-admin-panel/main-admin-panel.component';
import { PaymentsComponent } from './components/payments/payments.component';
import { TicketsComponent } from './components/tickets/tickets.component';
import { UsersComponent } from './components/users/users.component';

const adminRoutes: Routes = [
  {
    path: 'admin-panel',
    component: MainAdminPanelComponent,
    children: [
      { path: 'bote', component: JackpotComponent },
      { path: 'pagos', component: PaymentsComponent },
      { path: 'apuestas', component: TicketsComponent },
      { path: 'usuarios', component: UsersComponent },
    ]
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(adminRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class AdminRoutingModule { }
