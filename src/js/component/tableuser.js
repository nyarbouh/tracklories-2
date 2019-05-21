import React from "react";
import "../../styles/table.scss";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import ListGroup from "react-bootstrap/ListGroup";
import { Workouts } from "../component/workouts.js";

export class Tableuser extends React.Component {
	render() {
		return (
			<div className="container d-inline">
				<i id="x" className="fas fa-times fa-2x float-right" />
				<table className="table table-bordered table-dark mt-auto w-100" id="table">
					<thead>
						<tr>
							<th scope="col" className="text-center">
								Food Item
							</th>
							<th scope="col" className="text-center ">
								Calories
							</th>
							<th scope="col" className="text-center w-25">
								Workout
							</th>
							<th scope="col" className="text-center w-25">
								Calories burned
							</th>
						</tr>
					</thead>

					<tbody>
						<tr>
							<th scope="row" />
							<th scope="row" className="text-center">
								{" "}
								400{" "}
							</th>
							<th scope="row">
								<Workouts />
							</th>
							<th scope="row" />
						</tr>{" "}
					</tbody>
				</table>
			</div>
		);
	}
}

Tableuser.propTypes = {
	onDelete: PropTypes.func
};