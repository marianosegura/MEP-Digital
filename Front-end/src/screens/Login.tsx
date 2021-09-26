import React, { Component } from 'react'
import { RouteComponentProps } from "react-router-dom";

    interface MyComponentProps extends RouteComponentProps {}
   
    interface MyComponentState {
       type: string,
       userName: string,
       password: string
    }

export default class Login extends Component<MyComponentProps, MyComponentState>  {
    
    state: MyComponentState;
    constructor (props: MyComponentProps) {
        super(props);

        this.state = {
            type: "default",
            userName: "",
            password: ""

        }
    }

    goStudent(userId: string) {
        this.props.history.push({
            pathname: '/student',
            state: userId
        })
    }
    goTeacher(userId: string) {
        this.props.history.push({
            pathname: '/teacher',
            state: userId
        })
    }
    goAdmin() {
        this.props.history.push('/admin')
    }

    async loginPost() {
        const requestOptions = {
            method: 'POST',
            body:JSON.stringify({
                email: this.state.userName,
                password: this.state.password,
                role: this.state.type
            })
        }
        const response = await fetch({
            "https://serene-sands-78874.herokuapp.com/api/auth/login",
            requestOptions}).then(response => response.json())
            .then(data => console.log(data));
    }

    

    checkInputData = (): boolean => {
        if(this.state.type !== "default" &&
            this.state.userName !== "" &&
            this.state.password !== ""){
                return true
            }
        return false
    }

    onSummit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if(this.checkInputData()){
            console.log(this.state.userName + ":" + this.state.password + ":" + this.state.type)
            let userId = this.state.userName
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
            }
            

        } else {
            alert("Faltan datos para poder logearse")
        }
    }
    onChangeTextUser = (e: any) => {
        this.setState({
            userName : e.target.value
        })
    }
    onChangeTextPassword = (e: any) => {
        this.setState({
            password : e.target.value
        })
    }
    onChangeType = (e: any) => {
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