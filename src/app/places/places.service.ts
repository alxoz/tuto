import { Injectable } from '@angular/core';
import {Place} from './place.model'

@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  private places: Place[] =[
    {
      id: '1',
      title: 'Torre Eiffel',
      imageURL: 'https://thumbs.dreamstime.com/b/torre-eiffel-en-la-noche-con-la-luna-20973164.jpg',
      comments: ['Lugar asomobroso', 'Experiencia maravillosa']
    },
    {
      id: '2',
      title: 'Estatua de la Libertad',
      imageURL: 'https://estaticos.muyhistoria.es/media/cache/1140x_thumb/uploads/images/article/5e94491d5bafe823aad882d1/estatua-de-la-libertad.jpg',
      comments: ['Lugar único', 'Experiencia gigantesca']
    },
    {
      id: '3',
      title: 'Stonehenge',
      imageURL: 'https://icdn4.digitaltrends.com/image/digitaltrends_es/stonehenge-1200x630-c-ar1.91.jpg',
      comments: []
    },
    {
      id: '4',
      title: 'Stonehenge_Copia',
      imageURL: 'https://icdn4.digitaltrends.com/image/digitaltrends_es/stonehenge-1200x630-c-ar1.91.jpg',
      comments: []
    }
  ]

  constructor() { }

  getPlaces(){
    return [...this.places]
  }
  
  getPlace(placeId: String){
    return {
      ...this.places.find(place =>{
        return place.id === placeId
      })
    }
  }
  
  addPlace(title, imageURL){
    this.places.push ({
      title,
      imageURL,
      comments: [],
      id: this.places.length + 1 +""
    });
  }

  deletePlace(placeId: String) {
    this.places = this.places.filter(place => {
      return place.id !== placeId
    })
  }  

  
}
