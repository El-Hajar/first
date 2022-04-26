import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FireService } from '../service/fire.service'; 

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  //loginUrl=""
  uid:any

  public email:any;
  public password:any;

  constructor(private fireService:FireService) { }


  ngOnInit() {
    
  }
  login(){
    
    this.fireService.loginWithEmail({email:this.email,password:this.password})
    .then(res=>{console.log(res);
    if (res.user.uid){
      this.uid=res.user.uid
     console.log(this.uid)

      this.fireService.getDetails({uid:res.user.uid}).subscribe(res=>{
        console.log(res);
        alert("welcome "+res["firstName"])
      },err=>{
        console.log(err)
      })
    }
    },err=>{
      alert(err.message)
      console.log(err)
    });
    
  }
}
