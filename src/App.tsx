import { ToastContainer } from 'react-toastify';
import { Provider } from 'react-redux';
import { Switch, Route, Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { PersistGate } from 'redux-persist/integration/react';
import { ResetCss } from './styleConfig/reset';
import { BasicStyles } from './styleConfig/basic-styles';
import { Error, AllRaces, SingleRace } from './views';
import { store, persistor } from './config/reduxConfig';
import 'react-toastify/dist/ReactToastify.css';

export const history = createBrowserHistory({ basename: '/' });

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ToastContainer />
        <ResetCss />
        <BasicStyles />
        <Router history={history}>
          <Switch>
            <Route exact path="/" component={AllRaces} />
            <Route path="/race/:id" component={SingleRace} />
            <Route path="/error" component={Error} />
          </Switch>
        </Router>
      </PersistGate>
    </Provider>
  );
};

export default App;
