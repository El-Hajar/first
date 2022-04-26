import { Component, OnInit } from '@angular/core';
import { FireService } from '../service/fire.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  public firstName:any;
  public lastName:any;
  public email:any;
  public phone:any;
  public password:any;
 
  constructor(public fireService:FireService
    ) { }

  ngOnInit() {
  }
  //this.fireauth.createUserWithEmailAndPassword(this.email, this.password);
  register(){
    this.fireService.register({email:this.email,password:this.password}).then(res=>{
      if(res.user.uid){
        let data={
          firstName:this.firstName,
          lastName:this.lastName,
          email:this.email,
          phone:this.phone,
          password:this.password,
          uid:res.user.uid
        }
        this.fireService.saveDetails(data).then(res=>{//prob est la
          alert("Account Created");
        },err=>{
          console.log("errr"+err);
        })
      }
    },err=>{
        alert(err.message);
        console.log(err);
      })
  }

}
