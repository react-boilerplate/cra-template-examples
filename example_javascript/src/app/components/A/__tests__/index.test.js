import React from 'react';
import { render } from '@testing-library/react';

import { A } from '../index';
import { themes } from 'styles/theme/themes';

const renderWithTheme = theme => render(<A theme={theme || themes.light} />);

describe('<A />', () => {
  it('should render an <a> tag', () => {
    const a = renderWithTheme();
    expect(a.container.querySelector('a')).toBeInTheDocument();
  });

  it('should have theme', () => {
    const a = renderWithTheme();
    expect(a.container.firstChild).toHaveStyle(
      `color: ${themes.light.primary}`,
    );
  });
});
