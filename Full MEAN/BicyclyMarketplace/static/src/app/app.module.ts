import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BicycleService} from './bicycle.service';
import { HomeComponent } from './home/home.component';
import { ListingComponent } from './listing/listing.component';
import { EditbicycleComponent } from './editbicycle/editbicycle.component';



@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    HomeComponent,
    ListingComponent,
    EditbicycleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [BicycleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
