import { Prisma as BasePrisma, BasePrismaOptions } from 'prisma-binding'
import { GraphQLResolveInfo } from 'graphql'

export const typeDefs = `
type AggregateRecipe {
  count: Int!
}

type BatchPayload {
  """
  The number of nodes that have been affected by the Batch operation.
  """
  count: Long!
}

"""
The 'Long' scalar type represents non-fractional signed whole numeric values.
Long can represent values between -(2^63) and 2^63 - 1.
"""
scalar Long

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

"""
An object with an ID
"""
interface Node {
  """
  The id of the object.
  """
  id: ID!
}

"""
Information about pagination in a connection.
"""
type PageInfo {
  """
  When paginating forwards, are there more items?
  """
  hasNextPage: Boolean!
  """
  When paginating backwards, are there more items?
  """
  hasPreviousPage: Boolean!
  """
  When paginating backwards, the cursor to continue.
  """
  startCursor: String
  """
  When paginating forwards, the cursor to continue.
  """
  endCursor: String
}

type Recipe implements Node {
  id: ID!
  title: String!
  description: String
  type: RecipeType
  category: [RecipeCategory!]
  image: String
  ingredients: [String!]
}

enum RecipeCategory {
  Vegetarian
  Meat
  Fish
  Sweet
  Vegan
  Soup
  Salad
}

"""
A connection to a list of items.
"""
type RecipeConnection {
  """
  Information to aid in pagination.
  """
  pageInfo: PageInfo!
  """
  A list of edges.
  """
  edges: [RecipeEdge]!
  aggregate: AggregateRecipe!
}

input RecipeCreatecategoryInput {
  set: [RecipeCategory!]
}

input RecipeCreateingredientsInput {
  set: [String!]
}

input RecipeCreateInput {
  title: String!
  description: String
  type: RecipeType
  image: String
  category: RecipeCreatecategoryInput
  ingredients: RecipeCreateingredientsInput
}

"""
An edge in a connection.
"""
type RecipeEdge {
  """
  The item at the end of the edge.
  """
  node: Recipe!
  """
  A cursor for use in pagination.
  """
  cursor: String!
}

enum RecipeOrderByInput {
  id_ASC
  id_DESC
  title_ASC
  title_DESC
  description_ASC
  description_DESC
  type_ASC
  type_DESC
  image_ASC
  image_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type RecipePreviousValues {
  id: ID!
  title: String!
  description: String
  type: RecipeType
  category: [RecipeCategory!]
  image: String
  ingredients: [String!]
}

type RecipeSubscriptionPayload {
  mutation: MutationType!
  node: Recipe
  updatedFields: [String!]
  previousValues: RecipePreviousValues
}

input RecipeSubscriptionWhereInput {
  """
  Logical AND on all given filters.
  """
  AND: [RecipeSubscriptionWhereInput!]
  """
  Logical OR on all given filters.
  """
  OR: [RecipeSubscriptionWhereInput!]
  """
  Logical NOT on all given filters combined by AND.
  """
  NOT: [RecipeSubscriptionWhereInput!]
  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]
  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String
  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]
  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: RecipeWhereInput
}

enum RecipeType {
  Starter
  Main
  Dessert
  Side
}

input RecipeUpdatecategoryInput {
  set: [RecipeCategory!]
}

input RecipeUpdateingredientsInput {
  set: [String!]
}

input RecipeUpdateInput {
  title: String
  description: String
  type: RecipeType
  image: String
  category: RecipeUpdatecategoryInput
  ingredients: RecipeUpdateingredientsInput
}

input RecipeWhereInput {
  """
  Logical AND on all given filters.
  """
  AND: [RecipeWhereInput!]
  """
  Logical OR on all given filters.
  """
  OR: [RecipeWhereInput!]
  """
  Logical NOT on all given filters combined by AND.
  """
  NOT: [RecipeWhereInput!]
  id: ID
  """
  All values that are not equal to given value.
  """
  id_not: ID
  """
  All values that are contained in given list.
  """
  id_in: [ID!]
  """
  All values that are not contained in given list.
  """
  id_not_in: [ID!]
  """
  All values less than the given value.
  """
  id_lt: ID
  """
  All values less than or equal the given value.
  """
  id_lte: ID
  """
  All values greater than the given value.
  """
  id_gt: ID
  """
  All values greater than or equal the given value.
  """
  id_gte: ID
  """
  All values containing the given string.
  """
  id_contains: ID
  """
  All values not containing the given string.
  """
  id_not_contains: ID
  """
  All values starting with the given string.
  """
  id_starts_with: ID
  """
  All values not starting with the given string.
  """
  id_not_starts_with: ID
  """
  All values ending with the given string.
  """
  id_ends_with: ID
  """
  All values not ending with the given string.
  """
  id_not_ends_with: ID
  title: String
  """
  All values that are not equal to given value.
  """
  title_not: String
  """
  All values that are contained in given list.
  """
  title_in: [String!]
  """
  All values that are not contained in given list.
  """
  title_not_in: [String!]
  """
  All values less than the given value.
  """
  title_lt: String
  """
  All values less than or equal the given value.
  """
  title_lte: String
  """
  All values greater than the given value.
  """
  title_gt: String
  """
  All values greater than or equal the given value.
  """
  title_gte: String
  """
  All values containing the given string.
  """
  title_contains: String
  """
  All values not containing the given string.
  """
  title_not_contains: String
  """
  All values starting with the given string.
  """
  title_starts_with: String
  """
  All values not starting with the given string.
  """
  title_not_starts_with: String
  """
  All values ending with the given string.
  """
  title_ends_with: String
  """
  All values not ending with the given string.
  """
  title_not_ends_with: String
  description: String
  """
  All values that are not equal to given value.
  """
  description_not: String
  """
  All values that are contained in given list.
  """
  description_in: [String!]
  """
  All values that are not contained in given list.
  """
  description_not_in: [String!]
  """
  All values less than the given value.
  """
  description_lt: String
  """
  All values less than or equal the given value.
  """
  description_lte: String
  """
  All values greater than the given value.
  """
  description_gt: String
  """
  All values greater than or equal the given value.
  """
  description_gte: String
  """
  All values containing the given string.
  """
  description_contains: String
  """
  All values not containing the given string.
  """
  description_not_contains: String
  """
  All values starting with the given string.
  """
  description_starts_with: String
  """
  All values not starting with the given string.
  """
  description_not_starts_with: String
  """
  All values ending with the given string.
  """
  description_ends_with: String
  """
  All values not ending with the given string.
  """
  description_not_ends_with: String
  type: RecipeType
  """
  All values that are not equal to given value.
  """
  type_not: RecipeType
  """
  All values that are contained in given list.
  """
  type_in: [RecipeType!]
  """
  All values that are not contained in given list.
  """
  type_not_in: [RecipeType!]
  image: String
  """
  All values that are not equal to given value.
  """
  image_not: String
  """
  All values that are contained in given list.
  """
  image_in: [String!]
  """
  All values that are not contained in given list.
  """
  image_not_in: [String!]
  """
  All values less than the given value.
  """
  image_lt: String
  """
  All values less than or equal the given value.
  """
  image_lte: String
  """
  All values greater than the given value.
  """
  image_gt: String
  """
  All values greater than or equal the given value.
  """
  image_gte: String
  """
  All values containing the given string.
  """
  image_contains: String
  """
  All values not containing the given string.
  """
  image_not_contains: String
  """
  All values starting with the given string.
  """
  image_starts_with: String
  """
  All values not starting with the given string.
  """
  image_not_starts_with: String
  """
  All values ending with the given string.
  """
  image_ends_with: String
  """
  All values not ending with the given string.
  """
  image_not_ends_with: String
}

input RecipeWhereUniqueInput {
  id: ID
}

type Mutation {
  createRecipe(data: RecipeCreateInput!): Recipe!
  updateRecipe(data: RecipeUpdateInput!, where: RecipeWhereUniqueInput!): Recipe
  deleteRecipe(where: RecipeWhereUniqueInput!): Recipe
  upsertRecipe(where: RecipeWhereUniqueInput!, create: RecipeCreateInput!, update: RecipeUpdateInput!): Recipe!
  updateManyRecipes(data: RecipeUpdateInput!, where: RecipeWhereInput): BatchPayload!
  deleteManyRecipes(where: RecipeWhereInput): BatchPayload!
}

type Query {
  recipes(where: RecipeWhereInput, orderBy: RecipeOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Recipe]!
  recipe(where: RecipeWhereUniqueInput!): Recipe
  recipesConnection(where: RecipeWhereInput, orderBy: RecipeOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): RecipeConnection!
  """
  Fetches an object given its ID
  """
  node("""
  The ID of an object
  """
  id: ID!): Node
}

type Subscription {
  recipe(where: RecipeSubscriptionWhereInput): RecipeSubscriptionPayload
}
`

export type MutationType = 
  'CREATED' |
  'UPDATED' |
  'DELETED'

export type RecipeOrderByInput = 
  'id_ASC' |
  'id_DESC' |
  'title_ASC' |
  'title_DESC' |
  'description_ASC' |
  'description_DESC' |
  'type_ASC' |
  'type_DESC' |
  'image_ASC' |
  'image_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type RecipeType = 
  'Starter' |
  'Main' |
  'Dessert' |
  'Side'

export type RecipeCategory = 
  'Vegetarian' |
  'Meat' |
  'Fish' |
  'Sweet' |
  'Vegan' |
  'Soup' |
  'Salad'

export interface RecipeCreateInput {
  title: String
  description?: String
  type?: RecipeType
  image?: String
  category?: RecipeCreatecategoryInput
  ingredients?: RecipeCreateingredientsInput
}

export interface RecipeWhereInput {
  AND?: RecipeWhereInput[] | RecipeWhereInput
  OR?: RecipeWhereInput[] | RecipeWhereInput
  NOT?: RecipeWhereInput[] | RecipeWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  title?: String
  title_not?: String
  title_in?: String[] | String
  title_not_in?: String[] | String
  title_lt?: String
  title_lte?: String
  title_gt?: String
  title_gte?: String
  title_contains?: String
  title_not_contains?: String
  title_starts_with?: String
  title_not_starts_with?: String
  title_ends_with?: String
  title_not_ends_with?: String
  description?: String
  description_not?: String
  description_in?: String[] | String
  description_not_in?: String[] | String
  description_lt?: String
  description_lte?: String
  description_gt?: String
  description_gte?: String
  description_contains?: String
  description_not_contains?: String
  description_starts_with?: String
  description_not_starts_with?: String
  description_ends_with?: String
  description_not_ends_with?: String
  type?: RecipeType
  type_not?: RecipeType
  type_in?: RecipeType[] | RecipeType
  type_not_in?: RecipeType[] | RecipeType
  image?: String
  image_not?: String
  image_in?: String[] | String
  image_not_in?: String[] | String
  image_lt?: String
  image_lte?: String
  image_gt?: String
  image_gte?: String
  image_contains?: String
  image_not_contains?: String
  image_starts_with?: String
  image_not_starts_with?: String
  image_ends_with?: String
  image_not_ends_with?: String
}

export interface RecipeCreatecategoryInput {
  set?: RecipeCategory[] | RecipeCategory
}

export interface RecipeCreateingredientsInput {
  set?: String[] | String
}

export interface RecipeUpdateInput {
  title?: String
  description?: String
  type?: RecipeType
  image?: String
  category?: RecipeUpdatecategoryInput
  ingredients?: RecipeUpdateingredientsInput
}

export interface RecipeUpdatecategoryInput {
  set?: RecipeCategory[] | RecipeCategory
}

export interface RecipeWhereUniqueInput {
  id?: ID_Input
}

export interface RecipeSubscriptionWhereInput {
  AND?: RecipeSubscriptionWhereInput[] | RecipeSubscriptionWhereInput
  OR?: RecipeSubscriptionWhereInput[] | RecipeSubscriptionWhereInput
  NOT?: RecipeSubscriptionWhereInput[] | RecipeSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: RecipeWhereInput
}

export interface RecipeUpdateingredientsInput {
  set?: String[] | String
}

/*
 * An object with an ID

 */
export interface Node {
  id: ID_Output
}

/*
 * An edge in a connection.

 */
export interface RecipeEdge {
  node: Recipe
  cursor: String
}

export interface BatchPayload {
  count: Long
}

export interface RecipePreviousValues {
  id: ID_Output
  title: String
  description?: String
  type?: RecipeType
  category?: RecipeCategory[]
  image?: String
  ingredients?: String[]
}

export interface AggregateRecipe {
  count: Int
}

export interface RecipeSubscriptionPayload {
  mutation: MutationType
  node?: Recipe
  updatedFields?: String[]
  previousValues?: RecipePreviousValues
}

export interface Recipe extends Node {
  id: ID_Output
  title: String
  description?: String
  type?: RecipeType
  category?: RecipeCategory[]
  image?: String
  ingredients?: String[]
}

/*
 * A connection to a list of items.

 */
export interface RecipeConnection {
  pageInfo: PageInfo
  edges: RecipeEdge[]
  aggregate: AggregateRecipe
}

/*
 * Information about pagination in a connection.

 */
export interface PageInfo {
  hasNextPage: Boolean
  hasPreviousPage: Boolean
  startCursor?: String
  endCursor?: String
}

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. 
*/
export type Int = number

/*
The 'Long' scalar type represents non-fractional signed whole numeric values.
Long can represent values between -(2^63) and 2^63 - 1.
*/
export type Long = string

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number
export type ID_Output = string

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean

export interface Schema {
  query: Query
  mutation: Mutation
  subscription: Subscription
}

export type Query = {
  recipes: (args: { where?: RecipeWhereInput, orderBy?: RecipeOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string) => Promise<Recipe[]>
  recipe: (args: { where: RecipeWhereUniqueInput }, info?: GraphQLResolveInfo | string) => Promise<Recipe | null>
  recipesConnection: (args: { where?: RecipeWhereInput, orderBy?: RecipeOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string) => Promise<RecipeConnection>
  node: (args: { id: ID_Output }, info?: GraphQLResolveInfo | string) => Promise<Node | null>
}

export type Mutation = {
  createRecipe: (args: { data: RecipeCreateInput }, info?: GraphQLResolveInfo | string) => Promise<Recipe>
  updateRecipe: (args: { data: RecipeUpdateInput, where: RecipeWhereUniqueInput }, info?: GraphQLResolveInfo | string) => Promise<Recipe | null>
  deleteRecipe: (args: { where: RecipeWhereUniqueInput }, info?: GraphQLResolveInfo | string) => Promise<Recipe | null>
  upsertRecipe: (args: { where: RecipeWhereUniqueInput, create: RecipeCreateInput, update: RecipeUpdateInput }, info?: GraphQLResolveInfo | string) => Promise<Recipe>
  updateManyRecipes: (args: { data: RecipeUpdateInput, where?: RecipeWhereInput }, info?: GraphQLResolveInfo | string) => Promise<BatchPayload>
  deleteManyRecipes: (args: { where?: RecipeWhereInput }, info?: GraphQLResolveInfo | string) => Promise<BatchPayload>
}

export type Subscription = {
  recipe: (args: { where?: RecipeSubscriptionWhereInput }, infoOrQuery?: GraphQLResolveInfo | string) => Promise<AsyncIterator<RecipeSubscriptionPayload>>
}

export class Prisma extends BasePrisma {
  
  constructor({ endpoint, secret, fragmentReplacements, debug }: BasePrismaOptions) {
    super({ typeDefs, endpoint, secret, fragmentReplacements, debug });
  }

  exists = {
    Recipe: (where: RecipeWhereInput): Promise<boolean> => super.existsDelegate('query', 'recipes', { where }, {}, '{ id }')
  }

  query: Query = {
    recipes: (args, info): Promise<Recipe[]> => super.delegate('query', 'recipes', args, {}, info),
    recipe: (args, info): Promise<Recipe | null> => super.delegate('query', 'recipe', args, {}, info),
    recipesConnection: (args, info): Promise<RecipeConnection> => super.delegate('query', 'recipesConnection', args, {}, info),
    node: (args, info): Promise<Node | null> => super.delegate('query', 'node', args, {}, info)
  }

  mutation: Mutation = {
    createRecipe: (args, info): Promise<Recipe> => super.delegate('mutation', 'createRecipe', args, {}, info),
    updateRecipe: (args, info): Promise<Recipe | null> => super.delegate('mutation', 'updateRecipe', args, {}, info),
    deleteRecipe: (args, info): Promise<Recipe | null> => super.delegate('mutation', 'deleteRecipe', args, {}, info),
    upsertRecipe: (args, info): Promise<Recipe> => super.delegate('mutation', 'upsertRecipe', args, {}, info),
    updateManyRecipes: (args, info): Promise<BatchPayload> => super.delegate('mutation', 'updateManyRecipes', args, {}, info),
    deleteManyRecipes: (args, info): Promise<BatchPayload> => super.delegate('mutation', 'deleteManyRecipes', args, {}, info)
  }

  subscription: Subscription = {
    recipe: (args, infoOrQuery): Promise<AsyncIterator<RecipeSubscriptionPayload>> => super.delegateSubscription('recipe', args, {}, infoOrQuery)
  }
}