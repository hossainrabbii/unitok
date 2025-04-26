import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { RewardsComponent } from './pages/dashboard/rewards/rewards.component';
import { WalletComponent } from './pages/dashboard/wallet/wallet.component';
import { DashHomeComponent } from './pages/dashboard/dash-home/dash-home.component';
import { TransferComponent } from './pages/dashboard/transfer/transfer.component';
import { StakingComponent } from './pages/dashboard/staking/staking.component';
import { NtfsComponent } from './pages/dashboard/ntfs/ntfs.component';
import { LoginComponent } from './pages/login/login.component';
export const routes: Routes = [
  //   { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: DashHomeComponent },
      { path: 'rewards', component: RewardsComponent },
      { path: 'wallet', component: WalletComponent },
      { path: 'transfer', component: TransferComponent },
      { path: 'staking', component: StakingComponent },
      { path: 'my-nfts', component: NtfsComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
