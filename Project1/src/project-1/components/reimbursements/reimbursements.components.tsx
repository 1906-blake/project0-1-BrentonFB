import React, { Component } from 'react';
import Reimbursement from '../../models/reimbursement';

interface IState {
    reimbs: Reimbursement[];
}

export default class Reimbursements extends Component<{}, IState> {
    constructor(props: any) {
        super(props);
        this.state = {
            reimbs: []
        };
    }

    async componentDidMount() {
        const resp = await fetch('http://localhost:8012/reimb/', {
            credentials: 'include'
        });
        const reimbsFromServer = await resp.json();
        this.setState({
            reimbs: reimbsFromServer
        });
    };

    render() {
        const reimbs = this.state.reimbs;
        return(
            <div id="reimb-table-container">
                <table className="table table-striped table-dark">
                    <thead>
                        <tr>
                            <th scope="col">Author</th>
                            <th scope="col">Amount</th>
                            <th scope="col">Type</th>
                            <th scope="col">Date Submitted</th>
                            <th scope="col">Resolver</th>
                            <th scope="col">Status</th>
                            <th scope="col">Date Resolved</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            reimbs.map(reimb =>
                                <tr key={'reimbursementId-'+reimb.reimbursementid}>
                                    <td>{reimb.author.firstName}</td>
                                    <td>{reimb.amount}</td>
                                    <td>{reimb.type.type}</td>
                                    <td>{reimb.dateSubmitted}</td>
                                    <td>{reimb.resolver.firstName}</td>
                                    <td>{reimb.status.status}</td>
                                    <td>{reimb.dateResolved}</td>
                                </tr>
                                )
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}