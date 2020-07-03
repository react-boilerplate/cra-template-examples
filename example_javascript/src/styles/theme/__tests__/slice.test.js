import * as slice from '../slice';
import { themes } from '../themes';

describe('theme slice', () => {
  let state;

  beforeEach(() => {
    state = slice.initialState;
  });

  it('should return the initial state', () => {
    expect(slice.reducer(undefined, { type: '' })).toEqual(state);
  });

  it('should changeTheme', () => {
    expect(slice.reducer(state, slice.changeTheme('dark'))).toEqual({
      selected: 'dark',
    });
  });

  describe('selectors', () => {
    it('selectTheme', () => {
      let state = {};
      expect(slice.selectTheme(state)).toEqual(themes.light);
      state = {
        theme: { selected: 'system' },
      };
      expect(slice.selectTheme(state)).toEqual(themes.light);

      state = {
        theme: { selected: 'dark' },
      };
      expect(slice.selectTheme(state)).toEqual(themes.dark);
    });

    it('selectThemeKey', () => {
      let state = {};
      expect(slice.selectThemeKey(state)).toEqual(slice.initialState.selected);

      state = {
        theme: { selected: 'system' },
      };
      expect(slice.selectThemeKey(state)).toEqual(state.theme.selected);
    });
  });
});
