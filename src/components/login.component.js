import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            dataUsername: '',
            dataPassword: '',
            errUsername: '',
            errPassword: ''
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const { dataUsername, dataPassword } = this.state;
        let valid = true;

        if (dataUsername === '') {
            this.setState({
                errUsername: 'Username can not be blank.'
            });
            valid = false;
        }

        if (dataPassword === '') {
            this.setState({
                errPassword: 'Password can not be blank.'
            });
            valid = false;
        }

        if (valid) {
            console.log('Success', this.state);
            this.setState({
                dataUsername: '',
                dataPassword: '',
                errUsername: '',
                errPassword: ''
            })
        }

    }

    handleChange(e) {
        if (e.target.name === 'username') {
            this.setState({
                dataUsername: e.target.value,
                errUsername: ''
            });
        } else if (e.target.value === 'password') {
            this.setState({
                dataPassword: e.target.value,
                errPassword: ''
            });
        }
    }

    render() {
        const { dataUsername, dataPassword, errUsername, errPassword } = this.state;
        return (
            <Container>
                <form onSubmit={this.handleSubmit}>
                    <Row>
                        <Col md={4}>
                            <div className="form-group">
                                <label htmlFor="username">
                                    Username
                    </label>
                                <input id="username" value={dataUsername} className={errUsername === '' ? 'form-control' : 'form-control is-invalid'} name="username" onChange={this.handleChange} />
                                <span className="invalid-feedback">{errUsername}</span>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <div className="form-group">
                                <label htmlFor="password">
                                    Password
                    </label>
                                <input type="password" id="password" value={dataPassword} className={errPassword === '' ? 'formcontrol' : 'form-control is-invalid'} name="password" onChange={this.handleChange} />
                                <span className="invalid-feedback">{errPassword}</span>
                            </div>
                        </Col>
                    </Row>
                    <button className="btn btn-primary btn-block btn-lg">Login</button>
                </form>
            </Container>
        );
    }
}

export default Login;