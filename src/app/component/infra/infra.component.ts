import { Component, OnInit, ViewChild } from "@angular/core";

@Component({
  selector: "app-infra",
  templateUrl: "./infra.component.html",
  styleUrls: ["./infra.component.css"],
})
export class InfraComponent implements OnInit {
  @ViewChild("imgModalContainer") imgModalContainer;
  @ViewChild("imgModalImg") imgModalImg;
  @ViewChild("imgModalCaption") imgModalCaption;

  constructor() {}

  ngOnInit(): void {}

  imgClick(el: HTMLElement) {
    this.imgModalContainer.nativeElement.style.display = "flex";
    this.imgModalImg.nativeElement.setAttribute("src", el.getAttribute("src"));
    this.imgModalCaption.nativeElement.innerHTML = el.getAttribute("alt");
  }
}
