import { Component, OnInit } from '@angular/core';
import { AngularFirestore,AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Formation } from '../models/Formation';
import { FireService } from '../service/fire.service'; 

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
     
 formation:Formation
 
  constructor(public fireService:FireService,activatedRoute:ActivatedRoute,public firestore:AngularFirestore) {
    const id=activatedRoute.snapshot.params["id"];

 this.firestore.collection("formations").doc(id).valueChanges()
.subscribe((singleDoc:Formation) =>{
 this.formation=singleDoc
});
}

  ngOnInit() {
  }

  reserverFormation(){
    this.fireService.reserverFormation(this.formation);
  
}


}
