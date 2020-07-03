import React from 'react';
import { render } from '@testing-library/react';

import { Input } from '../Input';
import { themes } from 'styles/theme/themes';

const renderWithTheme = theme =>
  render(<Input theme={theme || themes.light} />);

describe('<Input />', () => {
  it('should render an <input> tag', () => {
    const input = renderWithTheme();
    expect(input.container.querySelector('input')).toBeInTheDocument();
  });

  it('should have theme', () => {
    const input = renderWithTheme();
    expect(input.container.firstChild).toHaveStyle(
      `color: ${themes.light.text}`,
    );
  });
});
