import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from "./Navbar";
import { BrowserRouter, Switch, Route } from "react-router-dom"
import Home from "./Home"
import New from "./New"

function Wrapper() {
	return (
		<div className="App">
			<Navbar />
			<Switch>
				<Route exact path="/">
					<Home />
				</Route>
				<Route path="/new">
					<New />
				</Route>
			</Switch>
		</div>
	)
}

function App() {
	return (
		<BrowserRouter>
			<Wrapper />
		</BrowserRouter>
	);
}

export default App;
