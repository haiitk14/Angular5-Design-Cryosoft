import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-translations',
  templateUrl: './translations.component.html',
  styleUrls: ['./translations.component.scss']
})
export class TranslationsComponent implements OnInit {
  public activePage = '';
  constructor() { }

  ngOnInit() {
    this.activePage = 'interface';
  }

  openPageInterface()
  {
    this.activePage = 'interface';
  }

  openPageDataLabel()
  {
    this.activePage = 'datalabel';
  }



}
