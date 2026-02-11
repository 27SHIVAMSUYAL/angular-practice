import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { LoginCardComponent } from './login-card/login-card.component';
import { CustomerFormComponent } from './customer-form/customer-form.component';

export const routes: Routes = [

    {path:"about" , component:AboutComponent},
     {path:"login" , component:LoginCardComponent},
      {path:"customer" , component:CustomerFormComponent}

];
