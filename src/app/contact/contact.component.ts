import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})

export class ContactComponent implements OnInit {

  constructor() { }


  contactForm:FormGroup=new FormGroup({
    name:new FormControl(null),
    email:new FormControl(null),
    phone:new FormControl(null),
    massage:new FormControl(null)
  })

  ngOnInit(): void {
  }

  valid(){
    
  }

}
