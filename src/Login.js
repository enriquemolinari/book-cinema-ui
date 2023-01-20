import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { useEffect, useState } from "react";
import InputGroup from "react-bootstrap/InputGroup";
import { useNavigate } from "react-router-dom";
import User from "./User";
import { LockFill, PersonCircle, Tv } from "react-bootstrap-icons";

export default function Login(props) {
  const [loginForm, setLoginForm] = useState({
    user: "",
    pass: "",
  });
  const [errorResponse, setErrorResponse] = useState({
    msg: "",
    error: false,
  });
  const navigate = useNavigate();

  useEffect(() => {
    document.body.style.backgroundColor = "#e9ecef";
  }, []);

  function handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    setLoginForm((inputsValue) => {
      return { ...inputsValue, [name]: value };
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    new User(props.host)
      .login(loginForm.username, loginForm.password)
      .then((v) => {
        setErrorResponse({
          msg: "",
          error: false,
        });

        navigate("/");
      })
      .catch((v) => {
        setErrorResponse(v);
      });
  }

  return (
    <div className="login">
      <div className="login-logo">
        <Tv />
        <span> </span>
        <b>Cinema</b>
      </div>
      <Card>
        <Card.Header className="login-msg">
          Sign in to start your session
        </Card.Header>
        <Card.Body>
          <Form onSubmit={handleSubmit}>
            <InputGroup className="mb-2">
              <InputGroup.Text id="basic-addon1">
                <PersonCircle />
              </InputGroup.Text>
              <Form.Control
                name="username"
                type="text"
                placeholder="Username"
                onChange={handleChange}
                isInvalid={errorResponse.error}
              />
              <Form.Control.Feedback type="invalid">
                {errorResponse.msg}
              </Form.Control.Feedback>
            </InputGroup>
            <InputGroup className="mb-2">
              <InputGroup.Text id="basic-addon1">
                <LockFill />
              </InputGroup.Text>

              <Form.Control
                name="password"
                type="password"
                onChange={handleChange}
                placeholder="Password"
                isInvalid={errorResponse.error}
              />
            </InputGroup>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
}
