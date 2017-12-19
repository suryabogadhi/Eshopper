import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  editintrests: Array<any>= new Array();
  final:string = "";
  len: number;
  specials:any;
  item:string="";
  isTCAccepted: boolean;
  checkvalues:Boolean;

  list = [
    { name:'Reading',status:false }, 
    { name:'Traveling',status:false }, 
    { name:'Blogging' ,status:false }, 
    { name:'Collecting',status:false  }, 
    { name:'Cooking' ,status:false },
    { name:'Sports',status:false  },
    { name:'Music' ,status:false }
  ];


  speciallist = [
    { name:'Reading'}, 
    { name:'Traveling'}, 
    { name:'Blogging'}, 
    { name:'Collecting'}, 
    { name:'Cooking'},
    { name:'Sports'},
    { name:'Music'}
  ];

  somespeciallist:Array<any>;


  patchList = ['Traveling','Blogging','Collecting'];

  patchspeciallist = ['Traveling','Blogging','Collecting'];

  getlist:Array<any>= new Array();

  finallist = [
    // {
    //   firstname:"",
    //   lastname:"",
    //   gender:"",
    //   adress1:"",
    //   adress2:"",
    //   landmark:"",
    //   country:"",
    //   state:"",
    //   city:"",
    //   phone:"",
    //   fax:"",
    //   website:"",
    //   intrests:[],
    //   specialintrests:[],
    //   description:"",
    //   username:"",
    //   email:"",
    //   password:"",
    //   confirmpassword:""
    // }
  ];
  
  
 
  @ViewChild('myform') mynewform;
  constructor(){ }

  ngOnInit() {
    //console.log(this.mynewform);
    //console.log(this.list);

  }


  mydata(getdata,ischecked){
    if(ischecked){
      this.getlist.push(getdata);
      // console.log(this.getlist);
    }else{
      let index = this.getlist.indexOf(getdata);
      this.getlist.splice(index, 1);
      //console.log(this.getlist);
    }
  }

  submitForm(data){
   //console.log(data);
    //this.specials = this.mynewform.value.special;
    // for(var item of this.specials){
    //   this.final += item+',';
    // }

    //console.log(data.special);
    //console.log(this.getlist);
    
    this.finallist.push({
      firstname:data.fname,
      lastname:data.lname,
      gender:data.gender,
      adress1:data.addres1,
      adress2:data.addres2,
      landmark:data.landmark,
      country:data.country,
      state:data.state,
      city:data.city,
      phone:data.phone,
      fax:data.fax,
      website:data.website,
      intrests:this.getlist,
      specialintrests:data.special,
      description:data.description,
      username:data.username,
      email:data.email,
      password:data.password,
      confirmpassword:data.confirmpassword
    });
    this.mynewform.reset();

    //console.log(this.finallist);
   
  }

  autofill(){
    this.mynewform.form.patchValue({
      fname:"Surya Prakash",
      lname:"Bogadi",
      gender:"Male",
      addres1:"My address 1",
      addres2:"My address 2",
      landmark:"Rednam Plaza",
      country:"Bangladesh",
      state:"India",
      city:"Canada",
      phone:9908035150,
      fax:"UI990909090",
      website:"www.suryaa.me",
      description:"This is surya prakash",
      username:"surya@123",
      email:"surya@gmail.com",
      password:"surya",
      confirmpassword:"surya",
    });


  this.somespeciallist = [
    { name:'Reading'}, 
    { name:'Traveling'}, 
  ];

    

  }

  comparespecial(t1, t2){
    console.log(t1);
   // console.log(t1 +'-' + t2);
    return t1 && t2 ? t1.name === t2.name : t1 === t2;
    //return t1.name===t2.name;
  }
  


  


  resetmyfrom(){
    this.mynewform.reset();
  }
  
  editmyform(arryid){
    //console.log(this.finallist[arryid].intrests[0]);
    //console.log(this.finallist[arryid].intrests);
    //console.log(this.finallist[arryid].specialintrests);
    //this.list[0].status = true;

    this.editintrests = this.finallist[arryid].intrests
    for(var finintrests of this.editintrests){
         //console.log(finintrests);
         let index = this.list.map((o) => o.name).indexOf(finintrests);
        // console.log(index);
         this.list[index].status = true;
    }

    this.mynewform.form.patchValue({
      fname:this.finallist[arryid].firstname,
      lname:this.finallist[arryid].lastname,
      gender:this.finallist[arryid].gender,
      addres1:this.finallist[arryid].adress1,
      addres2:this.finallist[arryid].adress2,
      landmark:this.finallist[arryid].landmark,
      country:this.finallist[arryid].country,
      state:this.finallist[arryid].state,
      city:this.finallist[arryid].city,
      phone:this.finallist[arryid].phone,
      fax:this.finallist[arryid].fax,
      website:this.finallist[arryid].website,
      description:this.finallist[arryid].description,
      username:this.finallist[arryid].username,
      email:this.finallist[arryid].email,
      password:this.finallist[arryid].password,
      confirmpassword:this.finallist[arryid].confirmpassword
    });
  }
  
 
}
