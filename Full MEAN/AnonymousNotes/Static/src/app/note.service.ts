import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import "rxjs";

@Injectable()
export class NoteService {

  constructor(private http:Http) { }

  getNote() {
    return this.http.get(`/notes`)
    .map( data => data.json() )
    .toPromise();
  }

  addNote(note) {
    return this.http.post(`/create`, note)
    .map( data => data.json() )
    .toPromise();
  }
}
