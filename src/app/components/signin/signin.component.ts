import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';
import{AddTaskComponent} from '../add-task/add-task.component'
//import { ConfirmedValidator } from './confirmed.validator';
    
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  form: FormGroup = new FormGroup({});
  

  constructor( private dialog:MatDialog) {}
  

  ngOnInit(): void {
  }
  addTask(){
    this.dialog.open(AddTaskComponent, {
      width:'300px'
    });
  }

  }
  

