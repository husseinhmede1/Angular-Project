import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pricing-box',
  templateUrl: './pricing-box.component.html',
  styleUrls: ['./pricing-box.component.css']
})
export class PricingBoxComponent implements OnInit {
  
  @Input() blue: any;

  @Input() white: any;

  constructor() { }

  ngOnInit(): void {
  }

}
