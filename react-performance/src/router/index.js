import React from 'react';
import { Router } from 'react-router';
import { createBrowserHistory } from 'history';

export const HISTORY = createBrowserHistory();

const BrowserRouter = props => {
  return <Router history={HISTORY}>{props.children}</Router>;
};

export default BrowserRouter;
