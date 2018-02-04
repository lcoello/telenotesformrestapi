import { Injectable } from '@angular/core';
import { Headers, RequestOptions } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class JsonService {
options;

  createHeaders() {
    this.options = new RequestOptions({
      headers: new Headers({
        'Content-Type': 'application/json',
      })
    });
  }

  constructor(private http: HttpClient) { }

  getResponse() {
    return this.http.get('http://devapp.telenotes.com/api/data/luiscoello');
  }

  addPost(company) {
    this.createHeaders();
    const body = JSON.stringify(company);
    return this.http.post('http://devapp.telenotes.com/api/data/luiscoello', body, this.options);
  }

  deletePost(companyId) {
    this.createHeaders();
    return this.http.delete('http://devapp.telenotes.com/api/data/luiscoello/' + companyId, this.options);
  }
}
