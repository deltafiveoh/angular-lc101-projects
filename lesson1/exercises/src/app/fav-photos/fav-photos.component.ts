import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Random Photos';
  image1 = 'https://www.launchcode.org/assets/icons/target-00c7a0bc7776901e3c5cdc4c36c465f19e41a249bc7267a595f0bfa14ab944b7.png';
  image2 = 'https://images-na.ssl-images-amazon.com/images/I/51d12keDWpL._SX355_.jpg';
  image3 = 'https://cdn.shopify.com/s/files/1/0939/2880/products/Yario_and_Moshi_Product_grande.jpg?v=1562631766';

  constructor() { }

  ngOnInit() {
  }

}