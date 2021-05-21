import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom"
import Navbar from "./Navbar";
import Home from "./Home"
import New from "./New"
import AxiosTest from "./AxiosTest"
import './App.css';

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
				<Route path="/test">
					<AxiosTest />
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
