import { Component, OnInit, Input } from "@angular/core";
import { menuConfig } from "./../../utils/menu-config";
import { MenuModel } from './../../models/menu.model';

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent implements OnInit {
  @Input() Show: boolean;
  @Input() Titulo: boolean;
  menuContent: MenuModel[];

  display: boolean;

  constructor() {
    this.menuContent = menuConfig;
  }

  ngOnInit() {}
}
