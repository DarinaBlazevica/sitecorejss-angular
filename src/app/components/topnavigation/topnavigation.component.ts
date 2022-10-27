import { Component, OnInit, Input } from '@angular/core';
import { ComponentRendering } from '@sitecore-jss/sitecore-jss-angular';

@Component({
  selector: 'app-topnavigation',
  templateUrl: './topnavigation.component.html',
  styleUrls: ['./topnavigation.component.css']
})
export class TopnavigationComponent implements OnInit {
  @Input() rendering: ComponentRendering;

  constructor() { }

  ngOnInit() {
    // remove this after implementation is done
    // console.log('topnavigation component initialized with component data', this.rendering);
  }
}
