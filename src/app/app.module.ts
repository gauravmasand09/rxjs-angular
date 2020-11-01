import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './includes/header/header.component';
import { PromoiseComponent } from './promoise/promoise.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ObservableComponent } from './observable/observable.component';
import { AllComponent } from './observable/list/list.component';
import { FromEventComponent } from './observable/from-event/from-event.component';
import { IntervalComponent } from './observable/interval/interval.component';
import { OfFromComponent } from './observable/of-from/of-from.component';
import { NgDynamicBreadcrumbModule } from 'ng-dynamic-breadcrumb';
import { AngularStickyThingsModule } from '@w11k/angular-sticky-things';
import { FooterComponent } from './footer/footer.component';
import { ToArrayComponent } from './observable/to-array/to-array.component';
import { CustomComponent } from './observable/custom/custom.component';
import { MapComponent } from './observable/map/map.component';
import { PluckComponent } from './observable/pluck/pluck.component';
import { FilterComponent } from './observable/filter/filter.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PromoiseComponent,
    ObservableComponent,
    AllComponent,
    FromEventComponent,
    IntervalComponent,
    OfFromComponent,
    FooterComponent,
    ToArrayComponent,
    CustomComponent,
    MapComponent,
    PluckComponent,
    FilterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgDynamicBreadcrumbModule,
    AngularStickyThingsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
