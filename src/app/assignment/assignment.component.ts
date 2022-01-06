import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styleUrls: ['./assignment.component.css']
})
export class AssignmentComponent implements OnInit {
  userName = 'User Name';
  stringIsEmpty = true;

  constructor() { }

  ngOnInit(): void {
  }

  resetUserName() {
    this.userName = ''
  }

  onUpdateUserName(event: Event) {
    // to make in work with ts we add <HTMLInputElement>
    if ((<HTMLInputElement>event.target).value !== '') {
        this.stringIsEmpty = false;
    }
  }
}
