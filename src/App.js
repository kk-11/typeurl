import React from 'react';
import logo from './logo.svg';

export default class App extends React.Component {
	constructor(props) {
		super(props);
		this.editURL = this.editURL.bind(this);
		this.loop = this.loop.bind(this);
		this.state = {
			counter: 0
		}
		this.loopWord = `He's......behind......you`.split('');
	}
	componentDidMount() {
		window.location.hash = '';
		this.loop();
	}

	loop(minT, maxT) {
		var rand = Math.round(Math.random() * (3000 - 500)) + 500;
		setTimeout(() => {
			this.editURL();
			this.loop();
		}, rand);
	}

	editURL() {
		if (this.state.counter >= this.loopWord.length) {
			window.location.hash = '';
			return;
		}
		window.location.hash = `${window.location.hash}${this.loopWord[this.state.counter]}`;
		this.setState({
			counter: this.state.counter + 1
		})
	}
	componentWillUnmount() {
		clearTimeout();
	}

	render() {
		return (
			<div>
				He's......behind......you
			</div>
		);
	}
}
