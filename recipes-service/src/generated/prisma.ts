import { GraphQLResolveInfo, GraphQLSchema } from 'graphql'
import { IResolvers } from 'graphql-tools/dist/Interfaces'
import { Options } from 'graphql-binding'
import { makePrismaBindingClass, BasePrismaOptions } from 'prisma-binding'

export interface Query {
    recipes: <T = Array<Recipe | null>>(args: { where?: RecipeWhereInput | null, orderBy?: RecipeOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    recipe: <T = Recipe | null>(args: { where: RecipeWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    recipesConnection: <T = RecipeConnection>(args: { where?: RecipeWhereInput | null, orderBy?: RecipeOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    node: <T = Node | null>(args: { id: ID_Output }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> 
  }

export interface Mutation {
    createRecipe: <T = Recipe>(args: { data: RecipeCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateRecipe: <T = Recipe | null>(args: { data: RecipeUpdateInput, where: RecipeWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deleteRecipe: <T = Recipe | null>(args: { where: RecipeWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    upsertRecipe: <T = Recipe>(args: { where: RecipeWhereUniqueInput, create: RecipeCreateInput, update: RecipeUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyRecipes: <T = BatchPayload>(args: { data: RecipeUpdateManyMutationInput, where?: RecipeWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyRecipes: <T = BatchPayload>(args: { where?: RecipeWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> 
  }

export interface Subscription {
    recipe: <T = RecipeSubscriptionPayload | null>(args: { where?: RecipeSubscriptionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> 
  }

export interface Exists {
  Recipe: (where?: RecipeWhereInput) => Promise<boolean>
}

export interface Prisma {
  query: Query
  mutation: Mutation
  subscription: Subscription
  exists: Exists
  request: <T = any>(query: string, variables?: {[key: string]: any}) => Promise<T>
  delegate(operation: 'query' | 'mutation', fieldName: string, args: {
    [key: string]: any;
}, infoOrQuery?: GraphQLResolveInfo | string, options?: Options): Promise<any>;
delegateSubscription(fieldName: string, args?: {
    [key: string]: any;
}, infoOrQuery?: GraphQLResolveInfo | string, options?: Options): Promise<AsyncIterator<any>>;
getAbstractResolvers(filterSchema?: GraphQLSchema | string): IResolvers;
}

export interface BindingConstructor<T> {
  new(options: BasePrismaOptions): T
}
/**
 * Type Defs
*/

const typeDefs = `type AggregateRecipe {
  count: Int!
}

type BatchPayload {
  """The number of nodes that have been affected by the Batch operation."""
  count: Long!
}

scalar DateTime

"""
The \`Long\` scalar type represents non-fractional signed whole numeric values.
Long can represent values between -(2^63) and 2^63 - 1.
"""
scalar Long

type Mutation {
  createRecipe(data: RecipeCreateInput!): Recipe!
  updateRecipe(data: RecipeUpdateInput!, where: RecipeWhereUniqueInput!): Recipe
  deleteRecipe(where: RecipeWhereUniqueInput!): Recipe
  upsertRecipe(where: RecipeWhereUniqueInput!, create: RecipeCreateInput!, update: RecipeUpdateInput!): Recipe!
  updateManyRecipes(data: RecipeUpdateManyMutationInput!, where: RecipeWhereInput): BatchPayload!
  deleteManyRecipes(where: RecipeWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

"""An object with an ID"""
interface Node {
  """The id of the object."""
  id: ID!
}

"""Information about pagination in a connection."""
type PageInfo {
  """When paginating forwards, are there more items?"""
  hasNextPage: Boolean!

  """When paginating backwards, are there more items?"""
  hasPreviousPage: Boolean!

  """When paginating backwards, the cursor to continue."""
  startCursor: String

  """When paginating forwards, the cursor to continue."""
  endCursor: String
}

type Query {
  recipes(where: RecipeWhereInput, orderBy: RecipeOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Recipe]!
  recipe(where: RecipeWhereUniqueInput!): Recipe
  recipesConnection(where: RecipeWhereInput, orderBy: RecipeOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): RecipeConnection!

  """Fetches an object given its ID"""
  node(
    """The ID of an object"""
    id: ID!
  ): Node
}

type Recipe implements Node {
  id: ID!
  title: String!
  description: String!
  type: RecipeType!
  category: [RecipeCategory!]!
  image: String
  ingredients: [String!]!
  updatedAt: DateTime!
  createdAt: DateTime!
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

"""A connection to a list of items."""
type RecipeConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
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
  id: ID
  title: String!
  description: String!
  type: RecipeType!
  image: String
  category: RecipeCreatecategoryInput
  ingredients: RecipeCreateingredientsInput
}

"""An edge in a connection."""
type RecipeEdge {
  """The item at the end of the edge."""
  node: Recipe!

  """A cursor for use in pagination."""
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
  description: String!
  type: RecipeType!
  category: [RecipeCategory!]!
  image: String
  ingredients: [String!]!
  updatedAt: DateTime!
  createdAt: DateTime!
}

type RecipeSubscriptionPayload {
  mutation: MutationType!
  node: Recipe
  updatedFields: [String!]
  previousValues: RecipePreviousValues
}

input RecipeSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [RecipeSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [RecipeSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [RecipeSubscriptionWhereInput!]

  """The subscription event gets dispatched when it's listed in mutation_in"""
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

input RecipeUpdateManyMutationInput {
  title: String
  description: String
  type: RecipeType
  image: String
  category: RecipeUpdatecategoryInput
  ingredients: RecipeUpdateingredientsInput
}

input RecipeWhereInput {
  """Logical AND on all given filters."""
  AND: [RecipeWhereInput!]

  """Logical OR on all given filters."""
  OR: [RecipeWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [RecipeWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  title: String

  """All values that are not equal to given value."""
  title_not: String

  """All values that are contained in given list."""
  title_in: [String!]

  """All values that are not contained in given list."""
  title_not_in: [String!]

  """All values less than the given value."""
  title_lt: String

  """All values less than or equal the given value."""
  title_lte: String

  """All values greater than the given value."""
  title_gt: String

  """All values greater than or equal the given value."""
  title_gte: String

  """All values containing the given string."""
  title_contains: String

  """All values not containing the given string."""
  title_not_contains: String

  """All values starting with the given string."""
  title_starts_with: String

  """All values not starting with the given string."""
  title_not_starts_with: String

  """All values ending with the given string."""
  title_ends_with: String

  """All values not ending with the given string."""
  title_not_ends_with: String
  description: String

  """All values that are not equal to given value."""
  description_not: String

  """All values that are contained in given list."""
  description_in: [String!]

  """All values that are not contained in given list."""
  description_not_in: [String!]

  """All values less than the given value."""
  description_lt: String

  """All values less than or equal the given value."""
  description_lte: String

  """All values greater than the given value."""
  description_gt: String

  """All values greater than or equal the given value."""
  description_gte: String

  """All values containing the given string."""
  description_contains: String

  """All values not containing the given string."""
  description_not_contains: String

  """All values starting with the given string."""
  description_starts_with: String

  """All values not starting with the given string."""
  description_not_starts_with: String

  """All values ending with the given string."""
  description_ends_with: String

  """All values not ending with the given string."""
  description_not_ends_with: String
  type: RecipeType

  """All values that are not equal to given value."""
  type_not: RecipeType

  """All values that are contained in given list."""
  type_in: [RecipeType!]

  """All values that are not contained in given list."""
  type_not_in: [RecipeType!]
  image: String

  """All values that are not equal to given value."""
  image_not: String

  """All values that are contained in given list."""
  image_in: [String!]

  """All values that are not contained in given list."""
  image_not_in: [String!]

  """All values less than the given value."""
  image_lt: String

  """All values less than or equal the given value."""
  image_lte: String

  """All values greater than the given value."""
  image_gt: String

  """All values greater than or equal the given value."""
  image_gte: String

  """All values containing the given string."""
  image_contains: String

  """All values not containing the given string."""
  image_not_contains: String

  """All values starting with the given string."""
  image_starts_with: String

  """All values not starting with the given string."""
  image_not_starts_with: String

  """All values ending with the given string."""
  image_ends_with: String

  """All values not ending with the given string."""
  image_not_ends_with: String
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
}

input RecipeWhereUniqueInput {
  id: ID
}

type Subscription {
  recipe(where: RecipeSubscriptionWhereInput): RecipeSubscriptionPayload
}
`

export const Prisma = makePrismaBindingClass<BindingConstructor<Prisma>>({typeDefs})

/**
 * Types
*/

export type MutationType =   'CREATED' |
  'UPDATED' |
  'DELETED'

export type RecipeCategory =   'Vegetarian' |
  'Meat' |
  'Fish' |
  'Sweet' |
  'Vegan' |
  'Soup' |
  'Salad'

export type RecipeOrderByInput =   'id_ASC' |
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

export type RecipeType =   'Starter' |
  'Main' |
  'Dessert' |
  'Side'

export interface RecipeCreatecategoryInput {
  set?: RecipeCategory[] | RecipeCategory | null
}

export interface RecipeCreateingredientsInput {
  set?: String[] | String | null
}

export interface RecipeCreateInput {
  id?: ID_Input | null
  title: String
  description: String
  type: RecipeType
  image?: String | null
  category?: RecipeCreatecategoryInput | null
  ingredients?: RecipeCreateingredientsInput | null
}

export interface RecipeSubscriptionWhereInput {
  AND?: RecipeSubscriptionWhereInput[] | RecipeSubscriptionWhereInput | null
  OR?: RecipeSubscriptionWhereInput[] | RecipeSubscriptionWhereInput | null
  NOT?: RecipeSubscriptionWhereInput[] | RecipeSubscriptionWhereInput | null
  mutation_in?: MutationType[] | MutationType | null
  updatedFields_contains?: String | null
  updatedFields_contains_every?: String[] | String | null
  updatedFields_contains_some?: String[] | String | null
  node?: RecipeWhereInput | null
}

export interface RecipeUpdatecategoryInput {
  set?: RecipeCategory[] | RecipeCategory | null
}

export interface RecipeUpdateingredientsInput {
  set?: String[] | String | null
}

export interface RecipeUpdateInput {
  title?: String | null
  description?: String | null
  type?: RecipeType | null
  image?: String | null
  category?: RecipeUpdatecategoryInput | null
  ingredients?: RecipeUpdateingredientsInput | null
}

export interface RecipeUpdateManyMutationInput {
  title?: String | null
  description?: String | null
  type?: RecipeType | null
  image?: String | null
  category?: RecipeUpdatecategoryInput | null
  ingredients?: RecipeUpdateingredientsInput | null
}

export interface RecipeWhereInput {
  AND?: RecipeWhereInput[] | RecipeWhereInput | null
  OR?: RecipeWhereInput[] | RecipeWhereInput | null
  NOT?: RecipeWhereInput[] | RecipeWhereInput | null
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: ID_Output[] | ID_Output | null
  id_not_in?: ID_Output[] | ID_Output | null
  id_lt?: ID_Input | null
  id_lte?: ID_Input | null
  id_gt?: ID_Input | null
  id_gte?: ID_Input | null
  id_contains?: ID_Input | null
  id_not_contains?: ID_Input | null
  id_starts_with?: ID_Input | null
  id_not_starts_with?: ID_Input | null
  id_ends_with?: ID_Input | null
  id_not_ends_with?: ID_Input | null
  title?: String | null
  title_not?: String | null
  title_in?: String[] | String | null
  title_not_in?: String[] | String | null
  title_lt?: String | null
  title_lte?: String | null
  title_gt?: String | null
  title_gte?: String | null
  title_contains?: String | null
  title_not_contains?: String | null
  title_starts_with?: String | null
  title_not_starts_with?: String | null
  title_ends_with?: String | null
  title_not_ends_with?: String | null
  description?: String | null
  description_not?: String | null
  description_in?: String[] | String | null
  description_not_in?: String[] | String | null
  description_lt?: String | null
  description_lte?: String | null
  description_gt?: String | null
  description_gte?: String | null
  description_contains?: String | null
  description_not_contains?: String | null
  description_starts_with?: String | null
  description_not_starts_with?: String | null
  description_ends_with?: String | null
  description_not_ends_with?: String | null
  type?: RecipeType | null
  type_not?: RecipeType | null
  type_in?: RecipeType[] | RecipeType | null
  type_not_in?: RecipeType[] | RecipeType | null
  image?: String | null
  image_not?: String | null
  image_in?: String[] | String | null
  image_not_in?: String[] | String | null
  image_lt?: String | null
  image_lte?: String | null
  image_gt?: String | null
  image_gte?: String | null
  image_contains?: String | null
  image_not_contains?: String | null
  image_starts_with?: String | null
  image_not_starts_with?: String | null
  image_ends_with?: String | null
  image_not_ends_with?: String | null
  updatedAt?: DateTime | null
  updatedAt_not?: DateTime | null
  updatedAt_in?: DateTime[] | DateTime | null
  updatedAt_not_in?: DateTime[] | DateTime | null
  updatedAt_lt?: DateTime | null
  updatedAt_lte?: DateTime | null
  updatedAt_gt?: DateTime | null
  updatedAt_gte?: DateTime | null
  createdAt?: DateTime | null
  createdAt_not?: DateTime | null
  createdAt_in?: DateTime[] | DateTime | null
  createdAt_not_in?: DateTime[] | DateTime | null
  createdAt_lt?: DateTime | null
  createdAt_lte?: DateTime | null
  createdAt_gt?: DateTime | null
  createdAt_gte?: DateTime | null
}

export interface RecipeWhereUniqueInput {
  id?: ID_Input | null
}

/*
 * An object with an ID

 */
export interface Node {
  id: ID_Output
}

export interface AggregateRecipe {
  count: Int
}

export interface BatchPayload {
  count: Long
}

/*
 * Information about pagination in a connection.

 */
export interface PageInfo {
  hasNextPage: Boolean
  hasPreviousPage: Boolean
  startCursor?: String | null
  endCursor?: String | null
}

export interface Recipe extends Node {
  id: ID_Output
  title: String
  description: String
  type: RecipeType
  category: Array<RecipeCategory>
  image?: String | null
  ingredients: Array<String>
  updatedAt: DateTime
  createdAt: DateTime
}

/*
 * A connection to a list of items.

 */
export interface RecipeConnection {
  pageInfo: PageInfo
  edges: Array<RecipeEdge | null>
  aggregate: AggregateRecipe
}

/*
 * An edge in a connection.

 */
export interface RecipeEdge {
  node: Recipe
  cursor: String
}

export interface RecipePreviousValues {
  id: ID_Output
  title: String
  description: String
  type: RecipeType
  category: Array<RecipeCategory>
  image?: String | null
  ingredients: Array<String>
  updatedAt: DateTime
  createdAt: DateTime
}

export interface RecipeSubscriptionPayload {
  mutation: MutationType
  node?: Recipe | null
  updatedFields?: Array<String> | null
  previousValues?: RecipePreviousValues | null
}

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean

export type DateTime = Date | string

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number
export type ID_Output = string

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. 
*/
export type Int = number

/*
The `Long` scalar type represents non-fractional signed whole numeric values.
Long can represent values between -(2^63) and 2^63 - 1.
*/
export type Long = string

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string