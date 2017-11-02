import { Routes } from "@angular/router";

import { CustomComp1Component } from './custom-module/custom-comp1/custom-comp1.component';
import { CustomComp2Component } from './custom-module/custom-comp2/custom-comp2.component';

export const routes: Routes = [
    { path: 'countries', component: CustomComp1Component },
    { path: 'comp2', component: CustomComp2Component }
   ];