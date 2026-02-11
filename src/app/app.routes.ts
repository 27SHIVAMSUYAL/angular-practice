import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { LoginCardComponent } from './login-card/login-card.component';
import { CustomerFormComponent } from './shop/customer-form/customer-form.component';
import { ProductCatalogFormComponent } from './shop/product-catalog-form/product-catalog-form.component';
import { CustomerSignupFormComponent } from './shop/customer-signup-form/customer-signup-form.component';
import { CustomerHomeComponent } from './shop/customer-home/customer-home.component';

export const routes: Routes = [

    { path: "about", component: AboutComponent },
    { path: "login", component: LoginCardComponent },
    { path: "customer-form", component: CustomerFormComponent },
    { path: "customer-signup", component: CustomerSignupFormComponent },
    { path: "product-catalog", component: ProductCatalogFormComponent },
    { path: "customer-home", component: CustomerHomeComponent }

];
