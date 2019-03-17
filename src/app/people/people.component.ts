import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {
  username = '';
  allowResetName = false;

  constructor() { }

  ngOnInit() {
  }

  onEmptyDisable(event: any){
    if (event.target.value !== '') {
      this.allowResetName = true;
    } else {
      this.allowResetName = false;
    }
  }

  onResetButton(){
    this.username = '';
    this.allowResetName = false;
  }

}
