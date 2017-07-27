import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Navigation from './Navigation';
import Main from './Main';

class App extends React.Component {
	render() {
		return (
			<BrowserRouter>
				<div>
					<Navigation />
					<Main />
				</div>
			</BrowserRouter>
		);
	}
}

export default App;
