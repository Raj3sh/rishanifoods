import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ContactUsComponent } from "./component/contact-us/contact-us.component";
import { HomeComponent } from "./component/home/home.component";
import { ProductsComponent } from "./component/products/products.component";
import { WhoAreWeComponent } from "./component/who-are-we/who-are-we.component";

const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "who-are-we", component: WhoAreWeComponent },
  { path: "products", component: ProductsComponent },
  { path: "contact-us", component: ContactUsComponent },
  { path: "", component: HomeComponent }, // redirect to `first-component`
  { path: "**", component: HomeComponent }, // Wildcard route - Create a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
