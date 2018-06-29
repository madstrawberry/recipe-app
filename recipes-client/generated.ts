

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: AllRecipes
// ====================================================

export interface AllRecipes_allRecipes {
  id: string;
  title: string;
}

export interface AllRecipes {
  allRecipes: AllRecipes_allRecipes[];
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetRecipe
// ====================================================

export interface GetRecipe_recipe {
  category: RecipeCategory[];
  description: string;
  image: string | null;
  ingredients: string[];
  type: RecipeType;
}

export interface GetRecipe {
  recipe: GetRecipe_recipe;
}

export interface GetRecipeVariables {
  id: string;
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: CreateRecipe
// ====================================================

export interface CreateRecipe_createRecipe {
  id: string;
}

export interface CreateRecipe {
  createRecipe: CreateRecipe_createRecipe | null;
}

export interface CreateRecipeVariables {
  title: string;
  description: string;
  ingredients: string[];
  type: RecipeType;
  category: RecipeCategory[];
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL subscription operation: RecipeAdded
// ====================================================

export interface RecipeAdded_recipeAdded_node {
  id: string;
  title: string;
}

export interface RecipeAdded_recipeAdded {
  node: RecipeAdded_recipeAdded_node | null;
}

export interface RecipeAdded {
  recipeAdded: RecipeAdded_recipeAdded | null;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

export enum RecipeCategory {
  Fish = "Fish",
  Meat = "Meat",
  Salad = "Salad",
  Soup = "Soup",
  Sweet = "Sweet",
  Vegan = "Vegan",
  Vegetarian = "Vegetarian",
}

export enum RecipeType {
  Dessert = "Dessert",
  Main = "Main",
  Side = "Side",
  Starter = "Starter",
}

//==============================================================
// END Enums and Input Objects
//==============================================================