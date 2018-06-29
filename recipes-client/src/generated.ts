

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: CreateRecipe
// ====================================================

export interface CreateRecipe_createRecipe {
  id: string;
  title: string;
}

export interface CreateRecipe {
  createRecipe: CreateRecipe_createRecipe;
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
// GraphQL mutation operation: DeleteRecipe
// ====================================================

export interface DeleteRecipe_deleteRecipe {
  id: string;
}

export interface DeleteRecipe {
  deleteRecipe: DeleteRecipe_deleteRecipe;
}

export interface DeleteRecipeVariables {
  id: string;
}


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
// GraphQL subscription operation: RecipeSubscription
// ====================================================

export interface RecipeSubscription_recipeSubscription_previousValues {
  id: string;
}

export interface RecipeSubscription_recipeSubscription_node {
  id: string;
  title: string;
}

export interface RecipeSubscription_recipeSubscription {
  mutation: MutationType;
  previousValues: RecipeSubscription_recipeSubscription_previousValues | null;
  node: RecipeSubscription_recipeSubscription_node | null;
}

export interface RecipeSubscription {
  recipeSubscription: RecipeSubscription_recipeSubscription;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

export enum RecipeType {
  Dessert = "Dessert",
  Main = "Main",
  Side = "Side",
  Starter = "Starter",
}

export enum RecipeCategory {
  Fish = "Fish",
  Meat = "Meat",
  Salad = "Salad",
  Soup = "Soup",
  Sweet = "Sweet",
  Vegan = "Vegan",
  Vegetarian = "Vegetarian",
}

export enum MutationType {
  CREATED = "CREATED",
  DELETED = "DELETED",
  UPDATED = "UPDATED",
}

//==============================================================
// END Enums and Input Objects
//==============================================================