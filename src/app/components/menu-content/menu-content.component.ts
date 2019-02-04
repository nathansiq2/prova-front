import { Component, OnInit, Input } from "@angular/core";
import { MenuModel } from "./../../models/menu.model";

@Component({
  selector: "app-menu-content",
  templateUrl: "./menu-content.component.html",
  styleUrls: ["./menu-content.component.scss"]
})
export class MenuContentComponent implements OnInit {
  @Input() menuContent: MenuModel[];

  constructor() {}

  ngOnInit() {
  }
}
