import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {Router} from '@angular/router';
import { FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';

//import { ConfirmedValidator } from './confirmed.validator';
    
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  form: FormGroup = new FormGroup({});
  

  constructor( private router: Router ) {}
  

  ngOnInit(): void {
  }
  addTask(){
     this.router.navigateByUrl('/home');
    // this.dialog.open(AddTaskComponent, {
    //   width:'300px'
    // });
  }

  }
  

