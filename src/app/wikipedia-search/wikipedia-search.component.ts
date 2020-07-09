import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-wikipedia-search',
  templateUrl: './wikipedia-search.component.html',
  styleUrls: ['./wikipedia-search.component.less']
})
export class WikipediaSearchComponent implements OnInit {

  searchForm: FormGroup;
  txt: string;
  title: string;
  url: string;
  isLoading: Boolean;
  results: {};

  constructor(private http:HttpClient, private fb:FormBuilder ) {
    
   }

  ngOnInit() {
    this.createForm();
  }

  searchTxt() {
    this.isLoading = true;
    // tslint:disable-next-line:prefer-const
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');
    // headers.append('Access-Control-Allow-Origin', '*');
    this.txt = this.searchForm.controls['search'].value;
    this.txt = this.txt.toLowerCase().split(' ').map((s) => s.charAt(0).toUpperCase() + s.substring(1)).join('_');
    console.log(this.txt);
    // tslint:disable-next-line:max-line-length
    // this.url = 'https://cors-anywhere.herokuapp.com/https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&titles=' + this.txt + '&redirects=true';
    this.url = 'https://cors-anywhere.herokuapp.com/https://en.wikipedia.org/w/api.php?format=json&action=parse&page=' + this.txt;
    // tslint:disable-next-line:max-line-length
    this.http.post(this.url, { headers: headers })
      .subscribe(
        data => {
          console.log(data);
          if (data['error']) {
            this.results = 'Page not found';
            this.isLoading = false;
          } else {
            this.title = data['parse'].displaytitle;
            this.results = data['parse'].text['*'];
            this.isLoading = false;
          }
        },
        err => {
          this.results = 'Page not found';
          this.isLoading = false;
        }
      );
  }

  createForm() {
    this.searchForm = this.fb.group({
      search: ['']
    });
  }

}
