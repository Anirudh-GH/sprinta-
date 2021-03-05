import { Component, OnInit } from '@angular/core';
import{AddTaskComponent} from '../add-task/add-task.component';
import { MatDialog } from '@angular/material/dialog';
import { FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  form: FormGroup = new FormGroup({});

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  addTask(){
    this.dialog.open(AddTaskComponent, {
    width:'300px'
  });
}

}
