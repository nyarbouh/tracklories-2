import React, { Component } from "react";

export class Edit extends Component {
	state = {};
	render() {
		return (
			<div className="container">
				<div className="row my-2">
					<div className="col-lg-8 order-lg-2">
						<ul className="nav nav-tabs">
							<li className="nav-item">
								<a href="" data-target="#edit" data-toggle="tab" className="nav-link">
									Edit
								</a>
							</li>
						</ul>
						<div className="col-lg-4 order-lg-1 text-center">
							<img
								src="//placehold.it/150"
								className="mx-auto img-fluid img-circle d-block"
								alt="avatar"
							/>
							<h6 className="mt-2">Upload a different photo</h6>
							<label className="custom-file">
								<input type="file" id="file" className="custom-file-input" />
								<span className="custom-file-control">Choose file</span>
							</label>
						</div>
						<div className="tab-content py-4">
							<div className="tab-pane active" id="profile">
								<h5 className="mb-3">User Profile</h5>
								<div className="row">
									<div className="col-md-6">
										<h6>About</h6>
										<p>Web Designer, UI/UX Engineer</p>
										<h6>Hobbies</h6>
										<p>Indie music, skiing and hiking. I love the great outdoors.</p>
									</div>
								</div>
							</div>
						</div>
						<div className="form-group row">
							<label className="col-lg-3 col-form-label form-control-label">Username</label>
							<div className="col-lg-9">
								<input className="form-control" type="text" value="" />
							</div>
						</div>
						<div className="form-group row">
							<label className="col-lg-3 col-form-label form-control-label">Password</label>
							<div className="col-lg-9">
								<input className="form-control" type="text" value="" />
							</div>
						</div>
						<div className="form-group row">
							<label className="col-lg-3 col-form-label form-control-label">Comfirm password</label>
							<div className="col-lg-9">
								<input className="form-control" type="password" value="" />
							</div>
						</div>
						<div className="form-group row">
							<label className="col-lg-3 col-form-label form-control-label" />
							<div className="col-lg-9">
								<input type="reset" className="btn btn-secondary" value="Cancel" />
								<button type="button" className="btn btn-success disabled">
									Save
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
