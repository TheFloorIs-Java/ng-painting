import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-painting-image',
  templateUrl: './painting-image.component.html',
  styleUrls: ['./painting-image.component.css']
})
export class PaintingImageComponent implements OnInit {

  @Input()
  url : String = "";

  constructor() { }

  ngOnInit(): void {
  }

}
