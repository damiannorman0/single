import React from 'react';
import 'index.scss';
import App from 'App';
import {Provider} from 'react-redux';
import configureStore from 'store';
import {createBrowserHistory} from "history";
import {Router, Route} from 'react-router-dom';

import { render } from '@testing-library/react';

const history = createBrowserHistory();

test('renders app', () => {
	const app = (<React.StrictMode>
		<Provider store={configureStore()}>
			<Router history={history}>
				<Route exact path="/" component={App}/>
			</Router>
		</Provider>
	</React.StrictMode>,
		document.getElementById('root'));

	render(app);
});
