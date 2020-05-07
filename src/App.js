import React from 'react';
import './App.css';
import Navbar from "./Navbar";
import { BrowserRouter, Switch, Route } from "react-router-dom"
import Home from "./Home"
import New from "./Plants"

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
