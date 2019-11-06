import React, { Component } from "react";

export class Informative extends Component {
	constructor() {
		super();
		this.state = {
			index: ""
		};
	}

	render() {
		return (
			<div className="cardnew justify-content-center" style={{ width: "18" }}>
				<img
					className="card-img-top1"
					src="https://pbs.twimg.com/profile_images/589965976755572737/GOzjmAX8_400x400.jpg"
					alt="Card image cap"
				/>
				<div className="card-body">
					<h5 className="card-title">Health Food and Fitness</h5>
					<div className="infotext text-center">
						<p>API with about healthy food</p>
					</div>
					<a href="#" className="btn btn-primary">
						News
					</a>
				</div>
			</div>
		);
	}
}
