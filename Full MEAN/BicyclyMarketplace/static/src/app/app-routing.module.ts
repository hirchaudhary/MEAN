import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationComponent} from './registration/registration.component';
import { HomeComponent } from './home/home.component';
import { ListingComponent } from "./listing/listing.component";
import { EditbicycleComponent } from './editbicycle/editbicycle.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component:RegistrationComponent },
  { path: 'home', component:HomeComponent },
  { path: 'mylist', component:ListingComponent},
  { path: 'gohome', redirectTo:'/home'},
  { path: 'relist', redirectTo:'/mylist'},
  { path: 'editPage/:id', component: EditbicycleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
