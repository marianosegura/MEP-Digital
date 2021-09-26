import React, { Component } from 'react'

export default class Login extends Component {
    state = {
        type: "default",
        userName: "",
        password: "",
        id: ""
    }

    router(){
        var userId = this.state.id
        switch(this.state.type){
            case "student":
                this.goStudent(userId)
                break;
            case "teacher":
                this.goTeacher(userId)
                break;
            case "admin":
                this.goAdmin()
                break;
            default:
                break;
        }
    }

    goStudent(userId){
        this.props.history.push({
            pathname: '/student',
            state: userId
        })
    }

    goTeacher(userId) {
        this.props.history.push({
            pathname: '/teacher',
            state: userId
        })
    }
    goAdmin() {
        this.props.history.push('/admin/courses')
    }

    async loginPost (){
        var data = {
            'email': this.state.userName,
            'password': this.state.password,
            'role': this.state.type
        };

        var myInit = { 
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data) 
        };
        var myRequest = new Request('https://serene-sands-78874.herokuapp.com/api/auth/login', myInit); 
        await fetch(myRequest).then( response => {
            if (!response.ok) { throw response }
            return response.json()  //we only get here if there is no error
            })
            .then( json => {
            this.setState({id : (this.state.type === "admin") ? 'admin' : json.id})
            this.router()
        }).catch(err => {
            err.json().then(errorMessage => {
                alert(errorMessage.message)
            })
        })
    }
    checkInputData = () => {
        if(this.state.type !== "default" &&
            this.state.userName !== "" &&
            this.state.password !== ""){
                return true
            }
        return false
    }

    onSummit = (e) => {
        e.preventDefault();
        if(this.checkInputData()){
            console.log(this.state.userName + ":" + this.state.password + ":" + this.state.type)
            this.loginPost()
        } else {
            alert("Faltan datos para poder logearse")
        }
    }

    onChangeTextUser = (e) => {
        this.setState({
            userName : e.target.value
        })
    }
    onChangeTextPassword = (e) => {
        this.setState({
            password : e.target.value
        })
    }
    onChangeType = (e) => {
        this.setState({
            type: e.target.value
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onSummit}>
                    <input
                        type = "email"
                        name = "userName"
                        placeholder = "Usuario"
                        onChange={this.onChangeTextUser}
                    />
                    <br/>
                    <input
                        type = "password"
                        name = "password"
                        placeholder = "Contraseña"
                        onChange={this.onChangeTextPassword}
                    />
                    <br/>
                    <select onChange = {this.onChangeType} value = {this.state.type} >
                        <option value = "default" disabled hidden>Selecciona un tipo de usuario</option>
                        <option value = "student">Estudiante</option>
                        <option value = "teacher">Prosefor</option>
                        <option value = "admin">Administrador</option>
                    </select>
                    <br/>
                    <input 
                        type = "submit"
                        value = "Entrar"
                    />
                </form>
            </div>
        )
    }
}

