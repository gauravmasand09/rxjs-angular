import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllComponent } from './observable/list/list.component';
import { FromEventComponent } from './observable/from-event/from-event.component';
import { ObservableComponent } from './observable/observable.component';
import { PromoiseComponent } from './promoise/promoise.component';
import { IntervalComponent } from './observable/interval/interval.component';
import { OfFromComponent } from './observable/of-from/of-from.component';
import { ToArrayComponent } from './observable/to-array/to-array.component';
import { CustomComponent } from './observable/custom/custom.component';

const routes: Routes = [
  {
    path: 'promise',
    component: PromoiseComponent,
    data: {
      title: 'Promise',
      breadcrumb: [
        {
          label: 'Promise',
          url: '',
        },
      ],
    },
  },
  {
    path: 'observable',
    component: ObservableComponent,
    children: [
      {
        path: '',
        component: AllComponent,
        data: {
          title: 'List',
          breadcrumb: [
            {
              label: 'Observable',
              url: '/observable',
            },
            {
              label: 'Lists',
              url: '',
            },
          ],
        },
      },
      { path: 'fromEvent', component: FromEventComponent ,
      data: {
        title: 'From Event',
        breadcrumb: [
          {
            label: 'Observable',
            url: '/observable',
          },
          {
            label: 'From Event',
            url: '',
          },
        ],
      },},
      { path: 'interval', component: IntervalComponent ,
      data: {
        title: 'Interval',
        breadcrumb: [
          {
            label: 'Observable',
            url: '/observable',
          },
          {
            label: 'Interval',
            url: '',
          },
        ],
      }, },
      { path: 'of-from', component: OfFromComponent , data: {
        title: 'Of/From',
        breadcrumb: [
          {
            label: 'Observable',
            url: '/observable',
          },
          {
            label: 'Of/From',
            url: '',
          },
        ],
      }},
      { path: 'to-array', component: ToArrayComponent , data: {
        title: 'To Array',
        breadcrumb: [
          {
            label: 'Observable',
            url: '/observable',
          },
          {
            label: 'To Array',
            url: '',
          },
        ],
      }},
      { path: 'custom', component: CustomComponent , data: {
        title: 'Custom Observable',
        breadcrumb: [
          {
            label: 'Observable',
            url: '/observable',
          },
          {
            label: 'Custom Observable',
            url: '',
          },
        ],
      }},
    ],
  },
  { path: '**', redirectTo: 'promise' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
