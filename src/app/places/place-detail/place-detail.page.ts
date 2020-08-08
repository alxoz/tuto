import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { PlacesService } from '../places.service';
import { AlertController } from '@ionic/angular';
import { Place } from '../place.model';

@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.page.html',
  styleUrls: ['./place-detail.page.scss'],
})
export class PlaceDetailPage implements OnInit {

  place: Place

  constructor(private activateRoute: ActivatedRoute, private placesService: PlacesService, 
              private router: Router, private alertCtrl: AlertController) { }

  ngOnInit() {
    this.activateRoute.paramMap.subscribe(paramMap =>{
      //redirect
      const recipeId = paramMap.get('placeId')
      this.place = this.placesService.getPlace(recipeId);
      console.log(this.place)
    })
  }

  async deletePlace() {
    const alertElement = await this.alertCtrl.create({
      header: 'Eliminar',
      message: 'Se eliminará este lugar ¿Está seguro?',
      buttons: [
        {
          text:'Borrar',
          handler: () => 
          {            
            this.placesService.deletePlace(this.place.id);
            this.router.navigate(['/places'])
          }
        },
        {
          text:'Cancelar',
          role:'cancel'
        }
      ]
    });
    await alertElement.present();
  }

}
