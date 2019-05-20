/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: CreateRecipe
// ====================================================

export interface CreateRecipe_createRecipe {
  __typename: "Recipe";
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
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: DeleteRecipe
// ====================================================

export interface DeleteRecipe_deleteRecipe {
  __typename: "Recipe";
  id: string;
}

export interface DeleteRecipe {
  deleteRecipe: DeleteRecipe_deleteRecipe;
}

export interface DeleteRecipeVariables {
  id: string;
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: EditRecipe
// ====================================================

export interface EditRecipe_editRecipe {
  __typename: "Recipe";
  id: string;
  title: string;
  description: string;
  ingredients: string[];
  type: RecipeType;
  category: RecipeCategory[];
}

export interface EditRecipe {
  editRecipe: EditRecipe_editRecipe;
}

export interface EditRecipeVariables {
  id: string;
  title: string;
  description: string;
  ingredients: string[];
  type: RecipeType;
  category: RecipeCategory[];
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: AllRecipes
// ====================================================

export interface AllRecipes_allRecipes {
  __typename: "Recipe";
  id: string;
  title: string;
}

export interface AllRecipes {
  allRecipes: AllRecipes_allRecipes[];
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: EditModal
// ====================================================

export interface EditModal_editModal {
  __typename: "EditModal";
  isEditModalOpen: boolean;
  recipeId: string;
}

export interface EditModal {
  editModal: EditModal_editModal;
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetEditRecipe
// ====================================================

export interface GetEditRecipe_recipe {
  __typename: "Recipe";
  title: string;
  description: string;
  ingredients: string[];
  category: RecipeCategory[];
  type: RecipeType;
}

export interface GetEditRecipe {
  recipe: GetEditRecipe_recipe;
}

export interface GetEditRecipeVariables {
  id: string;
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetRecipe
// ====================================================

export interface GetRecipe_recipe {
  __typename: "Recipe";
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
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL subscription operation: RecipeSubscription
// ====================================================

export interface RecipeSubscription_recipeSubscription_previousValues {
  __typename: "RecipePreviousValues";
  id: string;
}

export interface RecipeSubscription_recipeSubscription_node {
  __typename: "Recipe";
  id: string;
  title: string;
}

export interface RecipeSubscription_recipeSubscription {
  __typename: "RecipeSubscriptionPayload";
  mutation: MutationType;
  previousValues: RecipeSubscription_recipeSubscription_previousValues | null;
  node: RecipeSubscription_recipeSubscription_node | null;
}

export interface RecipeSubscription {
  recipeSubscription: RecipeSubscription_recipeSubscription;
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

export enum MutationType {
  CREATED = "CREATED",
  DELETED = "DELETED",
  UPDATED = "UPDATED",
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

export enum RecipeType {
  Dessert = "Dessert",
  Main = "Main",
  Side = "Side",
  Starter = "Starter",
}

//==============================================================
// END Enums and Input Objects
//==============================================================
