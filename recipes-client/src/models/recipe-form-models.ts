import { RecipeCategory, RecipeType } from './recipe-models';

export interface CreateRecipeFormData {
  title: string;
  description: string;
  ingredients: string[];
  type: RecipeType;
  category: RecipeCategory[];
}
