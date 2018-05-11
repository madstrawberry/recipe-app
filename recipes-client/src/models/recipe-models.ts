export type Recipe = {
  title: string;
  id: string;
};

export type RecipeDetails = {
  description: string;
  type: RecipeType;
  category: RecipeCategory[];
  image: string;
  ingredients: string[];
};

export enum RecipeCategory {
  Vegetarian = 'Vegetarisch',
  Meat = 'Vlees',
  Fish = 'Vis',
  Sweet = 'Zoet',
  Vegan = 'Vegan',
  Soup = 'Soep',
  Salad = 'Salade',
}

export enum RecipeType {
  Starter = 'Voorgerecht',
  Main = 'Hoofdgerecht',
  Dessert = 'Nagerecht',
  Side = 'Bijgerecht',
}
