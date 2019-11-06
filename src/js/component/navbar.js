import React from "react";
import { Link } from "react-router-dom";

export class Navbar extends React.Component {
	constructor() {
		super();
		this.state = {
			clicked: false
		};
	}

	show = () => {
		this.setState({ clicked: !this.state.clicked });
	};

	render() {
		return (
			<nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
				<div className="container w-80%">
					<div className="mx-auto">
						<div className="text-center">
							<a className="navbar-brand" href="#">
								Tracklories
							</a>
						</div>
						<button
							className="navbar-toggler col"
							type="button"
							data-toggle="collapse"
							data-target="#navbarResponsive"
							aria-controls="navbarResponsive"
							aria-expanded="false"
							aria-label="Toggle navigation">
							<span className="navbar-toggler-icon" />
						</button>
						<div className="collapse navbar-collapse" id="navbarResponsive">
							<ul className="navbar-nav ml-auto">
								<li className="nav-item active">
									<Link to="/">
										<a className="nav-link" href="#">
											Home
											<span className="sr-only">(current)</span>
										</a>
									</Link>
								</li>
								<li className="nav-item">
									<Link to="/informative">
										<a className="nav-link" href="#">
											Informative
										</a>
									</Link>
								</li>
								<li className="nav-item">
									<Link to="/food-tracker">
										<a className="nav-link" href="#">
											Food Tracker
										</a>
									</Link>
								</li>
								<li className="nav-item">
									<Link to="/contact">
										<a className="nav-link" href="#">
											Contact
										</a>
									</Link>
								</li>
								<li className={" btn-group " + (this.state.clicked && "show")}>
									<button
										onClick={this.show}
										type="button"
										className="drop-button btn btn-secondary dropdown-toggle"
										data-toggle="dropdown"
										aria-haspopup="true"
										aria-expanded="false">
										Log in
									</button>
									<div className={"dropdown-menu dropdown-menu " + (this.state.clicked && "show")}>
										<Link to="/log-in">
											<a className="dropdown-item" href="#">
												Log In
											</a>
										</Link>
										<Link to="/create-user">
											<a className="dropdown-item" href="#">
												Sign Up
											</a>
										</Link>
										<Link to="/edit-info">
											<a className="dropdown-item" href="#">
												Edit Info
											</a>
										</Link>
										<div className="dropdown-divider" />
										<Link to="/">
											<a className="dropdown-item" href="#">
												Log Out
											</a>
										</Link>
									</div>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</nav>
		);
	}
}
