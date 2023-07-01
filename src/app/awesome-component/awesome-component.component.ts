import { Component, Input, OnInit, Output, EventEmitter, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-awesome-component',
  templateUrl: './awesome-component.component.html',
  styleUrls: ['./awesome-component.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class AwesomeComponentComponent implements OnInit {
  @Input() name!: string;
  @Output() onClick = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  buttonClick = () => {
    console.log('button was clicked');
    this.onClick.emit();
  }
}
