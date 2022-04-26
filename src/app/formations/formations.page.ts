import { Component } from '@angular/core';

import { AngularFireDatabase } from '@angular/fire/compat/database'; //pour tester la connection avec firebase  https://drissas.com/ionic-4-firebase/
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { FireService } from '../service/fire.service';

@Component({
  selector: 'app-formation',
  templateUrl: 'formations.page.html',
  styleUrls: ['formations.page.scss'],
})
export class FormationsPage {
  formations: Observable<any[]>
  // public nom:any;
  // public date:any;
  // public durée: any;
  // public description:any;

 

   constructor(public router:Router,public fireService:FireService) {
     this.formations=this.fireService.getFormations();
    }
    
 
 
  







  
//   text="Default starting text";
  
//   constructor(
//     public afDB: AngularFireDatabase
//   ) {}
//   onChangeText(){
//     this.text="Text Changed";
//   }

//   add() {
// 	this.afDB.list('User/').push({
// 		pseudo: 'el-hajar'
// 	});
// }

}
