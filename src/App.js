import React, { Component } from 'react';
import styles from './App.module.scss';

class App extends Component {
	render() {
		return (
			<div className={styles.App}>
				<header className={styles['App-header']}>hello world!</header>
			</div>
		);
	}
}

export default App;
