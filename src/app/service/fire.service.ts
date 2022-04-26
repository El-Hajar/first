import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore ,} from '@angular/fire/compat/firestore';


import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class FireService {
 

  constructor( public firestore:AngularFirestore,
    public auth:AngularFireAuth,public jwtHelper: JwtHelperService
    ) {   }

  loginWithEmail(data){
    return this.auth.signInWithEmailAndPassword(data.email,data.password);
  }

  getAuthStatus():boolean{
    const token = localStorage.getItem('token');
    console.log(!this.jwtHelper.isTokenExpired(token))  
    return !this.jwtHelper.isTokenExpired(token);
  }
  register(data){
    return this.auth.createUserWithEmailAndPassword(data.email,data.password);
  }
  
  saveDetails(data){
    // data=this.firestore.collection('users').add(data)//i can also yse this
    // console.log(data)
    return this.firestore.collection('users').doc(data.uid).set(data);
  }
  getDetails(data){
    return this.firestore.collection('users').doc(data.uid).valueChanges();
  }

  getFormations(){
    
    return this.firestore.collection('formations').valueChanges();
    
  }

  reserverFormation(data){
   console.log(data);
   // return this.firestore.collection("users").doc(data.uid).set(data)
   return this.firestore.collection("users").doc(data.uid).collection('formations').add(data)
        .then(() => {
            console.log('Document Added ');
             console.log(data.uid);
        })
        .catch(function (error) {
            console.error('Error adding document: ', error);
        });
  }

}
