import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Painting } from 'src/app/model/Painting';

@Component({
  selector: 'app-all-paintings-page',
  templateUrl: './all-paintings-page.component.html',
  styleUrls: ['./all-paintings-page.component.css']
})
export class AllPaintingsPageComponent implements OnInit {
// in the future, we'll be getting this data from my API.
  paintings : Array<Painting> = [];

  constructor(public http: HttpClient) { 

  }
// this is a part of the component's lifecycle: the component
// runs this method when the component loads
  ngOnInit(): void {
    this.http.get<Painting[]>("https://tedspaintings.azurewebsites.net/paintings")
    .subscribe(data => {
      this.paintings = data;
    });
  }

}
