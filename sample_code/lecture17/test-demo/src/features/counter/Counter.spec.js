import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { setupStore } from '../../app/store';
import { Counter } from './Counter';

describe('renders Counter component', () => {
  beforeEach(() => {
    // eslint-disable-next-line testing-library/no-render-in-setup
    render(
      <Provider store={setupStore({})}>
        <Counter />
      </Provider>
    );
  });

  it('renders Counter component', () => {
    // render(
    //   <Provider store={store}>
    //     <Counter />
    //   </Provider>
    // );

    expect(screen.getByText(/Add Amount/i)).toBeInTheDocument();
  });

  it('click Add Amount button', async () => {
    // render(
    //   <Provider store={store}>
    //     <Counter />
    //   </Provider>
    // );

    const button = await screen.findByText(/Add Amount/i);
    fireEvent.click(button);
    expect(await screen.findByText(/2/i)).toBeInTheDocument();
    // expect(screen.getByTestId('count')).toHaveTextContent('2');
    fireEvent.click(button);
    expect(await screen.findByText(/4/i)).toBeInTheDocument();
    // expect(screen.getByTestId('count')).toHaveTextContent('4');
  });

  it('click Add Async button', async () => {
    // render(
    //   <Provider store={store}>
    //     <Counter />
    //   </Provider>
    // );

    const button = await screen.findByText(/Add Async/i);
    fireEvent.click(button);
    expect(await screen.findByText(/2/i)).toBeInTheDocument();
  });

  it('click Add If Odd button', async () => {
    // render(
    //   <Provider store={store}>
    //     <Counter />
    //   </Provider>
    // );

    const button = await screen.findByText(/Add If Odd/i);
    fireEvent.click(button);
    expect(await screen.findByText(/0/i)).toBeInTheDocument();
  });
});
