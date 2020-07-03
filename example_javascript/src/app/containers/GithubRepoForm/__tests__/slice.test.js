import * as slice from '../slice';
import { RepoErrorType } from '../types';

describe('GithubRepoForm slice', () => {
  let state;

  beforeEach(() => {
    state = slice.initialState;
  });

  it('should return the initial state', () => {
    expect(slice.reducer(undefined, { type: '' })).toEqual(state);
  });

  it('should handle changeUsername', () => {
    const text = 'test';
    expect(slice.reducer(state, slice.actions.changeUsername(text))).toEqual({
      ...slice.initialState,
      username: text,
    });
  });

  it('should handle loadRepos', () => {
    expect(slice.reducer(state, slice.actions.loadRepos())).toEqual({
      ...slice.initialState,
      loading: true,
      repositories: [],
      error: null,
    });
  });

  it('should handle reposLoaded', () => {
    const repos = [{ name: 'test' }];
    expect(slice.reducer(state, slice.actions.reposLoaded(repos))).toEqual({
      ...slice.initialState,
      loading: false,
      repositories: repos,
    });
  });

  it('should handle repoError', () => {
    const repoError = RepoErrorType.USER_NOT_FOUND;
    expect(slice.reducer(state, slice.actions.repoError(repoError))).toEqual({
      ...slice.initialState,
      error: repoError,
    });
  });
});
