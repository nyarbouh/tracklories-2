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
			<nav className="navbar navbar-expand-lg navbar-light bg-light">
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
									<a className="nav-link" href="#">
										Home
										<span className="sr-only">(current)</span>
									</a>
								</li>
								<li className="nav-item">
									<a className="nav-link" href="#">
										Informative
									</a>
								</li>
								<li className="nav-item">
									<a className="nav-link" href="#">
										Food Tracker
									</a>
								</li>
								<li className="nav-item">
									<a className="nav-link" href="#">
										Contact
									</a>
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
										<a className="dropdown-item" href="#">
											Log In
										</a>
										<a className="dropdown-item" href="#">
											Sign In
										</a>
										<a className="dropdown-item" href="#">
											Edit Info
										</a>
										<div className="dropdown-divider" />
										<a className="dropdown-item" href="#">
											Log Out
										</a>
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
