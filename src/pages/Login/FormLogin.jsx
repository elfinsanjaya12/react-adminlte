import React from "react";
import { Button, Form, FormGroup, Input } from "reactstrap";

class LoginForm extends React.Component {
  render() {
    return (
      <Form>
        <FormGroup>
          <Input
            className="colorPlaceholder"
            type="text"
            name="username"
            placeholder="Nama Pengguna"
          />
        </FormGroup>
        <FormGroup className="contoh1">
          <Input
            className="colorPlaceholder"
            type="password"
            name="password"
            placeholder="Kata Sandi"
          />
        </FormGroup>
        <div className="text-right btn-margin-top">
          <Button outline color="secondary">
            Batal
          </Button>
          <Button color="danger" style={{ marginLeft: "10px" }}>
            Masuk
          </Button>
        </div>
      </Form>
    );
  }
}

export default LoginForm;
