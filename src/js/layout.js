import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { Home } from "./views/home";
import { Informative } from "./views/informative";
import { Contact } from "./views/contact";
import { Login } from "./views/log-in";
import { Edit } from "./views/edit-info";
import { Create } from "./views/create-user";
import { Tracker } from "./views/food-tracker";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";

//create your first component
export const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div className="d-flex flex-column h-100">
			<BrowserRouter>
				<Navbar /> {/** Jose */}
				<Route exact path="/home" component={Home} /> {/** Jose */}
				<Route path="/informative" component={Informative} /> {/** Nizar */}
				<Route path="/contact" component={Contact} /> {/** Nizar */}
				<Route path="/log-in" component={Login} /> {/** Marcel */}
				<Route path="/edit-info" component={Edit} /> {/** Marcel */}
				<Route path="/create-user" component={Create} /> {/** Nizar */}
				<Route path="/food-tracker" component={Tracker} /> {/** Jose */}
				<Footer /> {/** Marcel */}
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
