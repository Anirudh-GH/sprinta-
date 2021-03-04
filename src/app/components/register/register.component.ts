import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {


  User: any = ['Admin','Employee'];

  constructor( private router:Router) { }

onClick(): void{
  console.log("its working");

}
  ngOnInit() {
  }

}