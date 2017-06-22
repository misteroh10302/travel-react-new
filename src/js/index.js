import React from 'react';
import { render } from 'react-dom';
import createApp from './app';

const App = createApp(React);

render(<App />, document.getElementById('root'));
