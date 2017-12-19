import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators,FormGroupName, FormArray} from '@angular/forms';
import {forEach} from "@angular/router/src/utils/collection";

@Component({
  selector: 'app-reactforms',
  templateUrl: './reactforms.component.html',
  styleUrls: ['./reactforms.component.css']
})
export class ReactformsComponent implements OnInit {
  finalskills: any;

  multiselect:Array<string> = ['Reading','Traveling','Blogging','Collecting','Cooking','Sports','Music'];
  

  
  list:Array<string> = ['Reading','Traveling','Blogging','Collecting','Cooking','Sports','Music'];
  speciallist:Array<string> = ['Reading','Traveling','Collecting','Sports','Music'];
  finallist;

  lastnamestatus:any;
  phonestatus:any;

  inputs = [''];


  personaldata : FormGroup;
  

  constructor() { }

  addInput()  {
    this.inputs.push('');
  }

  ngOnInit() {

    this.finalskills = new FormArray([]);
    let tempe1= this;
    
        this.inputs.forEach(function(sub){
          tempe1.finalskills.push(new FormControl());
        });
        
    
    this.finallist = new FormArray([]);
    let temp = this;
    
        this.list.forEach(function(sub){
          temp.finallist.push(new FormControl());
        });

    this.personaldata = new FormGroup({
        'logindata': new FormGroup({
            //'firstname' : new FormControl('surya prakash',[Validators.required]),
            'firstname' : new FormControl(null,[Validators.required]),
            'lastname'  : new FormControl(null,Validators.required),
            'Gender'    : new FormControl(null,Validators.required),
            'address1'  : new FormControl(null,Validators.required),
            'address2'  : new FormControl(null,Validators.required),
            'email'     : new FormControl(null,[Validators.required,Validators.email])
        },Validators.required),
           'country'    : new FormControl(null,Validators.required),
           'state'      : new FormControl(null,Validators.required),
           'city'       : new FormControl(null,Validators.required),
           'phone'      : new FormControl(null,Validators.required),
           'fax'        : new FormControl(null,Validators.required),
           'website'    : new FormControl(null,Validators.required),
           'intrests'   : this.finallist,
   'specialintrests'    : new FormControl(null,Validators.required),
           'skills'     : this.finalskills,
          'description' : new FormControl(null,Validators.required)
    });

  }

  submitForm(){
      //console.log(this.personaldata.value.logindata.firstname);
      console.log(this.personaldata);
      //console.log(this.personaldata.get('logindata').valid);
      //this.lastnamestatus = this.personaldata.get('logindata.lastname').valid;
      //console.log(this.lastnamestatus);

      //this.phonestatus = this.personaldata.controls.phone.invalid;
      //console.log(this.phonestatus);
  }

  autofill(){


  }










}
