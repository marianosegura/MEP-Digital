import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import React, { Component } from "react";

export default class Login extends Component {
  state = {
    type: "default",
    userName: "",
    password: "",
    id: "",
  };

  router() {
    var userId = this.state.id;
    switch (this.state.type) {
      case "student":
        this.goStudent(userId);
        break;
      case "teacher":
        this.goTeacher(userId);
        break;
      case "admin":
        this.goAdmin();
        break;
      default:
        break;
    }
  }

  goStudent(userId) {
    this.props.history.push({
      pathname: "/student",
      state: userId,
    });
  }

  goTeacher(userId) {
    this.props.history.push({
      pathname: "/teacher",
      state: userId,
    });
  }
  goAdmin() {
    this.props.history.push("/admin/courses");
  }

  async loginPost() {
    var data = {
      email: this.state.userName,
      password: this.state.password,
      role: this.state.type,
    };

    var myInit = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    };
    var myRequest = new Request(
      "https://serene-sands-78874.herokuapp.com/api/auth/login",
      myInit
    );
    await fetch(myRequest)
      .then((response) => {
        if (!response.ok) {
          throw response;
        }
        return response.json(); //we only get here if there is no error
      })
      .then((json) => {
        this.setState({ id: this.state.type === "admin" ? "admin" : json.id });
        this.router();
      });
  }
  checkInputData = () => {
    if (
      this.state.type !== "default" &&
      this.state.userName !== "" &&
      this.state.password !== ""
    ) {
      return true;
    }
    return false;
  };

  onSummit = (e) => {
    e.preventDefault();
    if (this.checkInputData()) {
      console.log(
        this.state.userName + ":" + this.state.password + ":" + this.state.type
      );
      this.loginPost();
    } else {
      alert("Faltan datos para poder logearse");
    }
  };

  onChangeTextUser = (e) => {
    this.setState({
      userName: e.target.value,
    });
  };
  onChangeTextPassword = (e) => {
    this.setState({
      password: e.target.value,
    });
  };
  onChangeType = (e) => {
    this.setState({
      type: e.target.value,
    });
  };

  render() {
    return (
      <div className="center">
        <form onSubmit={this.onSummit}>
          <Box sx={{ maxWidth: 300 }}>
            <TextField
              id="outlined-basic"
              inputProps={{min: 0, style: { textAlign: 'center' }}}
              label="Usuario"
              variant="outlined"
              name="userName"
              onChange={this.onChangeTextUser}
            />
            <br />
            <br />
            <TextField
              id="outlined-password-input"
              label="Contraseña"
              inputProps={{min: 0, style: { textAlign: 'center' }}}
              type="password"
              name="password"
              autoComplete="current-password"
              onChange={this.onChangeTextPassword}
            />
            <br />
            <br />
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">
                Selecciona un tipo de usuario
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={this.state.type}
                label="Selecciona un tipo de usuario"
                onChange={this.onChangeType}
              >
                <MenuItem value={"student"}>Estudiante</MenuItem>
                <MenuItem value={"teacher"}>Profesor</MenuItem>
                <MenuItem value={"admin"}>Administrador</MenuItem>
              </Select>
            </FormControl>
            <br />
            <br />
            <Button variant="contained" type="submit">
              Entrar
            </Button>
          </Box>
        </form>
      </div>
    );
  }
}
