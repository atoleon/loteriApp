import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AdminRoutingModule } from './admin-panel.routing';

// Components
import { UsersComponent } from './components/users/users.component';
import { PaymentsComponent } from './components/payments/payments.component';
import { TicketsComponent } from './components/tickets/tickets.component';
import { JackpotComponent } from './components/jackpot/jackpot.component';
import { MainAdminPanelComponent } from './components/main-admin-panel/main-admin-panel.component';

@NgModule({
  imports: [ // import modules
    CommonModule,
    FormsModule,
    HttpModule,
    AdminRoutingModule
  ],
  declarations: [ // import Components
    UsersComponent,
    PaymentsComponent,
    TicketsComponent,
    JackpotComponent,
    MainAdminPanelComponent
  ],
  exports: [
    UsersComponent,
    PaymentsComponent,
    TicketsComponent,
    JackpotComponent,
    MainAdminPanelComponent
  ],
  providers: [ // import services

  ]
})
export class AdminPanelModule { }
