import { Component, OnInit } from '@angular/core';
import data from '../assets/data.json'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  public sortedData: { name: string; svg: string; source_items: { audience_size: number; id: string; name: string; }; social_media_pages: { category: string; id: string; name: string; picture: string; popularity: number; }; }[] = [];

  public ngOnInit(): void {
    this.sortedData = data.data.sort((a,b) => b.source_items.audience_size - a.source_items.audience_size);

  }
}
