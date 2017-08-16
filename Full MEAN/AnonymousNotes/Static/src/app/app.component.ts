import { Component } from '@angular/core';
import { NoteService} from './note.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  note = {};
  notes = [];
  
  constructor(private noteService:NoteService){}
  ngOnInit(){
    this.noteService.getNote()
    .then(notes => this.notes = notes)
    .catch(err => console.log(err))
    }

    addNote(){
        this.noteService.addNote(this.note)
        .then(
            (note)=>{
                console.log(note);
            }
        )
        .catch(err => console.log(err))
    }
}
