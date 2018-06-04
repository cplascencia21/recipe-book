import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [{
    name: 'A new recipe',
    description: 'test recipe',
    imagePath: 'https://www.chowstatic.com/assets/recipe_photos/30260_RecipeImage_fullsize_butternut_panzanella.jpg'
  },
  new Recipe('A Test Recipe',
  'This is a sample test',
  'https://cdn3.tmbi.com/secure/RMS/attachments/37/300x300/Seasoned-Tilapia-Fillets_EXPS_SDFM18_41183_C10_10_6b.jpg')
];

  constructor() { }

  ngOnInit() {
  }

}
