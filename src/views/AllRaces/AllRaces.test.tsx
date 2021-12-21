import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import { setupServer } from 'msw/node';
import { rest } from 'msw';
import { render, screen, waitFor } from '@testing-library/react';
import AllRaces from './index';
import { store } from '../../config/reduxConfig';
import { history } from '../../App';

const server = setupServer(
  rest.get('https://my-json-server.typicode.com/hdjfye/bet-api/races', (req, res, ctx) => {
    return res(
      ctx.json([
        {
          id: 1,
          name: 'Beat the Clock to Yellow Rock',
          active: true,
          participants: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        },
        {
          id: 2,
          name: 'Idaho a Go-Go',
          active: true,
          participants: [1, 2, 7],
        },
        {
          id: 3,
          name: 'The Baja-Ha-Ha Race',
          active: true,
          participants: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
        },
        {
          id: 4,
          name: 'The Zippy Mississippi Race',
          active: true,
          participants: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        },
        {
          id: 5,
          name: 'Hot Race at Chillicothe',
          active: false,
          participants: [1, 5, 10],
        },
        {
          id: 6,
          name: 'Rhode Island Road Race',
          active: true,
          participants: [1, 3, 8],
        },
        {
          id: 7,
          name: 'Wacky Race to Ripsaw',
          active: true,
          participants: [1, 2, 6],
        },
        {
          id: 8,
          name: 'The Dipsy Doodle Desert Derby',
          active: false,
          participants: [1, 2, 3, 9, 10],
        },
      ]),
    );
  }),
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test('renders race name after fetch', async () => {
  render(
    <>
      <Router history={history}>
        <Provider store={store}>
          <AllRaces />
        </Provider>
      </Router>
    </>,
  );
  await waitFor(() => screen.getAllByText(/Beat the Clock to Yellow Rock/i)[0]);

  expect(screen.getAllByText(/Beat the Clock to Yellow Rock/i)[0]).toBeInTheDocument();
});
