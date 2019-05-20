import * as React from 'react';
import Button from './common/Button';
import ExpandLessIcon from './common/ExpendLessIcon';
import ExpandMoreIcon from './common/ExpandMoreIcon';
import Mutation from 'react-apollo/Mutation';
import Query from 'react-apollo/Query';
import RecipeDetails from './RecipeDetails';
import styled from '../styles/styled';
import { ALL_RECIPES_QUERY } from '../queries/all-recipes-query';
import { ApolloConsumer } from 'react-apollo';
import { ClientState } from '../apolloClientSetup';
import { DELETE_RECIPE_MUTATION } from '../mutations/delete-recipe-mutation';
import { RECIPE_DETAILS_QUERY } from '../queries/recipe-details-query';
import {
  AllRecipes,
  GetRecipe,
  GetRecipeVariables,
  DeleteRecipeVariables,
  DeleteRecipe,
} from '../generated';

interface Props {
  allRecipes: AllRecipes['allRecipes'];
  subscribeToRecipes: () => void;
}

interface State {
  toggledItems: string[];
}

class RecipeList extends React.Component<Props, State> {
  state: State = {
    toggledItems: [],
  };

  onToggle = (id: string) => () => {
    const toggledItems = this.state.toggledItems.includes(id)
      ? this.state.toggledItems.filter(item => item !== id)
      : this.state.toggledItems.concat(id);
    this.setState({ toggledItems });
  };

  componentDidMount() {
    this.props.subscribeToRecipes();
  }

  isToggled = (id: string) => this.state.toggledItems.includes(id);

  render() {
    return (
      <div>
        {this.props.allRecipes.map(recipe => (
          <RecipeItem key={recipe.id}>
            <RecipeItemHeader>
              <RecipeItemHeaderToggle onClick={this.onToggle(recipe.id)}>
                {recipe.title}
                {this.isToggled(recipe.id) ? <ExpandLessIcon /> : <ExpandMoreIcon />}
              </RecipeItemHeaderToggle>

              <div>
                <ApolloConsumer>
                  {client => (
                    <Button
                      onClick={() =>
                        client.writeData<Partial<ClientState>>({
                          data: {
                            editModal: {
                              isEditModalOpen: true,
                              recipeId: recipe.id,
                              __typename: 'editModal',
                            },
                          },
                        })
                      }
                    >
                      Edit
                    </Button>
                  )}
                </ApolloConsumer>

                <Mutation<DeleteRecipe, DeleteRecipeVariables>
                  mutation={DELETE_RECIPE_MUTATION}
                  update={(cache, { data }) => {
                    if (!data) return;

                    const allRecipesData = cache.readQuery<AllRecipes>({
                      query: ALL_RECIPES_QUERY,
                    });

                    if (!allRecipesData) return;

                    cache.writeQuery<AllRecipes>({
                      query: ALL_RECIPES_QUERY,
                      data: {
                        allRecipes: allRecipesData.allRecipes.filter(
                          rec => rec.id !== data.deleteRecipe.id
                        ),
                      },
                    });
                  }}
                >
                  {deleteRecipe => (
                    <Button onClick={() => deleteRecipe({ variables: { id: recipe.id } })}>
                      Delete
                    </Button>
                  )}
                </Mutation>
              </div>
            </RecipeItemHeader>

            {this.isToggled(recipe.id) && (
              <Query<GetRecipe, GetRecipeVariables>
                query={RECIPE_DETAILS_QUERY}
                variables={{ id: recipe.id }}
              >
                {({ data, loading }) => {
                  if (loading) {
                    return <p>...loading</p>;
                  }

                  return data && data.recipe ? (
                    <RecipeItemContent>
                      <RecipeDetails recipe={data.recipe} />
                    </RecipeItemContent>
                  ) : null;
                }}
              </Query>
            )}
          </RecipeItem>
        ))}
      </div>
    );
  }
}

const RecipeItem = styled.div(({ theme }) => ({
  background: theme.grey[100],
  marginBottom: theme.gaps.xs,
  borderBottom: `2px solid ${theme.grey[200]}`,
}));

const RecipeItemHeader = styled.div(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: `0 ${theme.gaps.xs}px`,
}));

const RecipeItemHeaderToggle = styled.div(({ theme }) => ({
  padding: `${theme.gaps.xs}px ${theme.gaps.sm}px ${theme.gaps.xs}px 0`,
  display: 'flex',
  alignItems: 'center',
  flex: 1,
  justifyContent: 'space-between',
  '&:hover': {
    cursor: 'pointer',
  },
}));

const RecipeItemContent = styled.div(({ theme }) => ({
  padding: theme.gaps.xs,
}));

export default RecipeList;
