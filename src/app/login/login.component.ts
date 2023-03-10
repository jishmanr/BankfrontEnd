import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  aim="your perfect banking partner";//srting interpolation={{aim }} in html file
  account="enter your account here";// property binding = [placeholder] = "account" in html file
  
  acno='';
  pswd='';
  //3rd execution
  //class-collection of properties and methods
  //properties or variables-user defined methods
  //userdefined method(4th execution)

 
 //database
  userDetails:any={
    1000:{acno:1000,username:'sanil',password:1000,balance:1000},
    1001:{acno:1001,username:'akhil',password:1001,balance:1000},
    1002:{acno:1002,username:'aravind',password:1002,balance:1000}
    
  }

  constructor() { }
  //first execution
//constructor- it automatically invokes when the object is created
  ngOnInit(): void {//lifecycle hook of angular
    //second execution
    //for initial process of component
    
    }
    
    acnoChange(event:any){
      console.log(event);
      
      this.acno=event.target.value;//1000
        console.log(this.acno);//1000
        
      

    }
      pswdChange(event:any){
        this.pswd=event.target.value;
        console.log(this.pswd);
        
      }
      login(a:any,p:any){
        //alert("login clicked");
        var acno=a.value;
        var pswd=p.value;
        var userDetails=this.userDetails;

        if(acno in userDetails){
          if(pswd==userDetails[acno]['password']){
            alert('login successful');
          }
          else{
            alert('invalid password');
          }
        }
        else{
          alert('invalid user details');
        }
      }
  }


