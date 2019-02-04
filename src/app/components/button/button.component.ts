import { Component, OnInit, Output, EventEmitter, Input, ViewEncapsulation } from "@angular/core";

@Component({
  selector: "app-button",
  templateUrl: "./button.component.html",
  styleUrls: ["./button.component.scss"],
  encapsulation: ViewEncapsulation.None
})
export class ButtonComponent implements OnInit {
  @Input() label: string;
  @Input() route: string;
  @Output() evento: EventEmitter<any> = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  lancarEvento() {
    this.evento.emit();
  }
}
