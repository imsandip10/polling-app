import React from 'react';
import { Form, Button, Navbar, Spinner } from "react-bootstrap";

function Login() {
    return (
        <div>
          
            <Navbar className="navbar" bg="dark" variant="dark">
                <Navbar.Brand href="#home">PollingApp</Navbar.Brand>
                {/* <Link to="/registation"> */}
                    <Button className="float-right" variant="outline-info">
                        SignUp
            </Button>
                {/* </Link> */}
            </Navbar>
            <div className="login">
                <h1>Log In</h1>
            </div>
            <Form className="m-5">
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>User Name</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter Username..."
                        
                        // onChange={this.handleUsernameChange}
                    />
                    <Form.Text className="text-muted"></Form.Text>
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Password"
                        // value={this.state.password}
                        // onChange={this.handlePasswordChange}
                    />
                </Form.Group>
                <Button variant="primary" type="submit" >
                    {/* {this.props.LoginStatus.isLoading == true ? (
                        <Spinner animation="border" size="sm" />
                    ) : null} */}
                    <span>Submit</span>
                </Button>
            </Form>
        </div>
    )
}
export default Login; 