export class Ingredient {
  id: number;
  name: string;
  aip: boolean;
  comment: string;
  ingredientClass: IngredientClass | null;
  allowed: boolean = true;

  constructor(
    id: number,
    name: string,
    aip: boolean,
    comment: string,
    ingredientClass: IngredientClass,
    allowed: boolean
  ) {
    this.id = id;
    this.name = name;
    this.aip = aip;
    this.comment = comment;
    this.ingredientClass = ingredientClass;
    this.allowed = allowed;
  }
}
export class IngredientClass {
  name: string;

  constructor(name: string) {
    this.name = name;
  }
}

const ingredientClasses: IngredientClass[] = [
  new IngredientClass('Kött & Fågel'),
  new IngredientClass('Inälvsmat'),
  new IngredientClass('Skaldjur'),
  new IngredientClass('Fisk'),
  new IngredientClass('Ägg'),
  new IngredientClass('Frukt och Bär'),
  new IngredientClass('Rotfrukter'),
  new IngredientClass('Grönsaker, Lök'),
  new IngredientClass('Kålsorter'),
  new IngredientClass('Svamp'),
  new IngredientClass('Alger och Sjögräs'),
  new IngredientClass('Potatisväxter (ej AIP)'),
  new IngredientClass('Nötter och Frön'),
  new IngredientClass('Kryddor'),
  new IngredientClass('Fetter'),
  new IngredientClass('Bakning'),
  new IngredientClass('I Skafferiet'),
  new IngredientClass('Drycker'),
  new IngredientClass('Syrade Livsmedel'),
];
