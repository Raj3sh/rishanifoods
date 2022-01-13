import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-contact-us",
  templateUrl: "./contact-us.component.html",
  styleUrls: ["./contact-us.component.scss"],
})
export class ContactUsComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  openGmaps(locCode: string) {
    window.open("https://goo.gl/maps/" + locCode, "_blank");
  }

  openPhone(tel: string) {
    window.open("tel:" + tel, "_self");
  }

  openEmail(mailto: string) {
    window.open("mailto:" + mailto, "_blank");
  }
}
