import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'monorepo-example-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent implements OnInit {
  @Input () label: string | undefined;

  constructor() {}

  ngOnInit(): void {}
}