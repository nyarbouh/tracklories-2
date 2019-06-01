import React from "react";
import { Tableuser } from "../component/tableuser.js";
import "../../styles/demo.scss";
import { Context } from "../store/appContext.js";
import { Typeahead, Menu, menuItemContainer, MenuItem } from "react-bootstrap-typeahead";
import ProgressBar from "react-bootstrap/ProgressBar";
import Button from "react-bootstrap/Button";
import { Usernav } from "../component/usernav.js";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import { Select } from "../component/dropdown";

export class Demo extends React.Component {
	constructor() {
		super();
		this.state = {
			showModal: false
		};
	}

	render() {
		return (
			<div>
				<Context.Consumer>
					{({ store, actions }) => {
						return (
							<div className="container">
								<Usernav onDelete={() => this.setState({ showModal: true })} />
								<br />
								<br />
								<br />
								<br />
								<h1 className="text-center">
									<strong>Time to Burn Some Calories!</strong>
								</h1>
								<div>
									<Form inline className="justify-content-center">
										<FormControl type="text" placeholder="Search" className=" mr-sm-2 w-50 bar" />

										<Button type="submit">Add Food Item</Button>
									</Form>
								</div>
								<br />
								<div className="text-center">
									<i className="fas fa-caret-square-left arrow" onClick={() => actions.changeDay()}>
										{" "}
									</i>{" "}
									<span className="font-weight-bold">
										{" "}
										{store.months[store.day.getMonth()]} {store.day.getDate()},{" "}
										{store.day.getFullYear()}{" "}
									</span>
									<i className="fas fa-caret-square-right arrow " />
								</div>
								<br />
								<Select />
								<div className="container d-flex flex-row justify-content-center">
									<Typeahead
										className="w-25 d-inline-block search"
										labelKey="name"
										placeholder="Choose your Meal"
										options={store.common.concat(store.branded)}
										id="food"
										onChange={selected => {
											this.setState({ select: selected[0] });
										}}
									/>
									<Button
										type="submit"
										className="d-inline-block"
										onClick={() => actions.addFood(this.state.select)}>
										Add Food Item
									</Button>
								</div>
								<div id="ove">
									<Tableuser onDelete={() => this.setState({ showModal: true })} />
								</div>
								<i className="fas fa-plus" id="plus">
									<span className="font-weight-bold">Add Another Food Ite</span>
								</i>
								<br />
								<br />
								<br />
								<br />
								<ProgressBar id="bar">
									<ProgressBar
										className="mw-100"
										variant="danger"
										now={1000}
										key={1}
										label={"Total Calories Intake"}
									/>
									<ProgressBar variant="warning" now={700} key={2} label={"Left Over Calories"} />
									<ProgressBar
										className="mw-100"
										variant="success"
										now={300}
										key={3}
										label={"Total Calories Burned"}
									/>
								</ProgressBar>
								;
							</div>
						);
					}}
				</Context.Consumer>
			</div>
		);
	}
}
