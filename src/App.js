import logo from "./logo.svg";
import "./App.css";
import Nav from "./components/nav/Nav";
import { Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Blog from "./components/blog/Blog";
import About from "./components/about/About";
import Error from "./components/error/Error";
import Details from "./components/details/Details";
import Create from "./components/create/Create";

function App() {
	return (
		<div className="App">
			<Nav />
			<Routes>
				<Route
					path="/"
					element={<Home />}
				/>
				<Route
					path="/blog"
					element={<Blog />}
				/>
				<Route
					path="/about"
					element={<About />}
				/>
				<Route
					path="/create"
					element={<Create />}
				/>
				<Route
					path="/details/:id"
					element={<Details />}
				/>
				<Route
					path="*"
					element={<Error />}
				/>
			</Routes>
		</div>
	);
}

export default App;
