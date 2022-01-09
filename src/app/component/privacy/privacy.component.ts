import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-privacy',
  templateUrl: './privacy.component.html',
  styleUrls: ['./privacy.component.css']
})
export class PrivacyComponent implements OnInit {

  siteUrl = "https://www.kryptx.in";
  contactEmail ="rishanifoods@gmail.com";
  constructor() { }

  ngOnInit(): void {
  }

}
