import React, { Component } from 'react';
import {
	Row, Col, Button, Alert, Form,
} from 'react-bootstrap';

class AddUser extends Component {
	constructor(props, context) {
		super(props, context);
		this.state = {
			notification: {
				status: false,
				text: '',
			},
			project_name: '',
    };
	}

	render() {
		const {
			handleModalClose,
			handleModalAccept,
		} = this.props;
		const {
			notification,
			project_name,
		} = this.state;
		return (
			<div>
				<div className='modal-header'>
					Add Profile
				</div>
				<div className='modal-container'>
					{(notification.status) ? <Alert variant='success'>{notification.text}</Alert> : null}
					<Row>
						<Col>
							<Form.Group>
								<Form.Label>TV Channel/Program Name</Form.Label>
								<Form.Control
									type='text'
									placeholder='Eg: 60 Minutes'
									name='project_name'
									value={project_name}
									onChange={this.handleInputChange}
								/>
							</Form.Group>
              <Form.Group>
								<Form.Label>Your Vanity URL (Alphanumeric Characters)</Form.Label>
								<Form.Control
									type='text'
									placeholder='Eg: 60minutes'
									name='project_name'
									value={project_name}
									onChange={this.handleInputChange}
								/>
								https://weband.tv/linkname
							</Form.Group>
							<Form.Group as={Row}>
								<Col sm={4}>
									Profile Type
								</Col>
								<Col sm={8}>
									<Form.Check
										type="radio"
										label="Channel"
										name="formHorizontalRadios"
										id="formHorizontalRadios1"
									/>
									<Form.Check
										type="radio"
										label="Program"
										name="formHorizontalRadios"
										id="formHorizontalRadios2"
									/>
								</Col>
							</Form.Group>
            </Col>
					</Row>
				</div>
				<div className='modal-bottom'>
					<Button onClick={handleModalClose}>Cancel</Button>
					<Button
						className='btn-secondary'
						onClick={handleModalAccept}
					>
						Save
					</Button>
				</div>
			</div>
		);
	}
}

export default AddUser;
