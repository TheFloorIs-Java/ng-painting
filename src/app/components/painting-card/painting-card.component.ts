import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Artist } from 'src/app/model/Artist';

@Component({
  selector: 'app-painting-card',
  templateUrl: './painting-card.component.html',
  styleUrls: ['./painting-card.component.css']
})
export class PaintingCardComponent implements OnInit {

  @Input()
  title : String = "placeholder";
  @Input()
  url : String = "url.com"
  @Input()
  artistID: number = 0;
  artistName: string = "";
  liked : boolean = false;
  constructor(private http : HttpClient) { }

  ngOnInit(): void {
    this.http.get<Artist>
    ("https://tedspaintings.azurewebsites.net/artists/"+this.artistID)
    .subscribe(data => this.artistName=data.name);
  }

  like() : void {
    this.liked = !this.liked;
  }

}
