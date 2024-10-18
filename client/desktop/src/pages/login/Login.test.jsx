import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Login from './Login';

test('Renderiza o componente login', () => {
  render(
    <MemoryRouter>
      <Login />
    </MemoryRouter>
  );

});
