import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {Router} from '@angular/router';


import { FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  sessionForm!: FormGroup;
  constructor(public dialog:MatDialog, private router: Router) {  }


  ngOnInit(): void {

  }
  onClick(){
    alert("New Task Added");
  }
  

}
