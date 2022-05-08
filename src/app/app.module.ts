import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./component/header/header.component";
import { FooterComponent } from "./component/footer/footer.component";
import { HomeComponent } from "./component/home/home.component";
import { WhoAreWeComponent } from "./component/who-are-we/who-are-we.component";
import { ProductsComponent } from "./component/products/products.component";
import { ContactUsComponent } from "./component/contact-us/contact-us.component";
import { PrivacyComponent } from "./component/privacy/privacy.component";
import { TermsAndConditionsComponent } from "./component/terms-and-conditions/terms-and-conditions.component";
import { SurveyComponent } from "./component/survey/survey.component";
import { InfraComponent } from "./component/infra/infra.component";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    WhoAreWeComponent,
    ProductsComponent,
    ContactUsComponent,
    PrivacyComponent,
    TermsAndConditionsComponent,
    SurveyComponent,
    InfraComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
