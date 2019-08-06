import User from "../../../models/user";
import { Component } from "react";
import { environment } from "../../../environment";


interface IState {
    users: User[]
}

export default class Users extends Component<{}, IState> {
    constructor(props: any) {
        super(props);
        this.state = {
            users: []
        };
    }

    async componentDidMount() {
        this.getUsers();
    }

    getUsers = async () => {
        const resp = await fetch(environment.context + '/users', {
            credentials: 'include'
        });
        const allUsersFromServer = await resp.json();
        this.setState({
            users: allUsersFromServer
        });
    }

    
}