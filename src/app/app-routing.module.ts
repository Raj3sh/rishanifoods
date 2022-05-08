import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ContactUsComponent } from "./component/contact-us/contact-us.component";
import { HomeComponent } from "./component/home/home.component";
import { InfraComponent } from "./component/infra/infra.component";
import { PrivacyComponent } from "./component/privacy/privacy.component";
import { ProductsComponent } from "./component/products/products.component";
import { TermsAndConditionsComponent } from "./component/terms-and-conditions/terms-and-conditions.component";
import { WhoAreWeComponent } from "./component/who-are-we/who-are-we.component";

const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "about-us", component: WhoAreWeComponent },
  { path: "products", component: ProductsComponent },
  { path: "infrastructure", component: InfraComponent },
  { path: "contact-us", component: ContactUsComponent },
  { path: "privacy", component: PrivacyComponent },
  { path: "terms-and-conditions", component: TermsAndConditionsComponent },
  { path: "", component: HomeComponent }, // redirect to `first-component`
  { path: "**", component: HomeComponent }, // Wildcard route - Create a 404 page
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { scrollPositionRestoration: "enabled" }),
  ], // { scrollPositionRestoration: "enabled" } is to take user to the top of the page with route change
  exports: [RouterModule],
})
export class AppRoutingModule {}
