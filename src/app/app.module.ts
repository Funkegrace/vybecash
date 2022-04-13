import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SavingsComponent } from './savings/savings.component';
import { DigitalBankingComponent } from './digital-banking/digital-banking.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CreateSelectEnjoyComponent } from './create-select-enjoy/create-select-enjoy.component';
import { LandingComponent } from './landing/landing.component';
import { FinancialNeedsComponent } from './financial-needs/financial-needs.component';
import { FooterComponent } from './footer/footer.component';
import { FinancialSecurityComponent } from './financial-security/financial-security.component';

@NgModule({
  declarations: [
    AppComponent,
    SavingsComponent,
    DigitalBankingComponent,
    NavbarComponent,
    CreateSelectEnjoyComponent,
    LandingComponent,
    FinancialNeedsComponent,
    FooterComponent,
    FinancialSecurityComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
