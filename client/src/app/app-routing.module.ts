import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './components/home/home.component';
import { DogProfileComponent } from './components/dog-profile/dog-profile.component';
import { DogLoveComponent } from './components/dog-love/dog-love.component';


const appRoutes: Routes = [
    { path: '',
        component: HomeComponent
    },
    { path: 'dog-profile/:id',
        component: DogProfileComponent
    },
    { path: 'dog-love',
        component: DogLoveComponent
    },
    { path: '**', component: HomeComponent }
];

@NgModule({
    declarations: [],
    imports: [
        RouterModule.forRoot(
          appRoutes,
          { enableTracing: true } // <-- debugging purposes only
        )
      ],
    providers: [],
    bootstrap: [],
    exports: [ RouterModule ]
})
export class AppRoutingModule { }