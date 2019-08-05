import React, { Component } from 'react';
import Reimbursement from '../../models/reimbursement';
import { environment } from '../../../environment';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { ReimbursementStatus } from '../../models/reimb.status';

interface IState {
    reimbs: Reimbursement[],
    status: ReimbursementStatus[],
    statusDropdown: {
        isOpen: boolean,
        selection: string
    }
}

export default class Reimbursements extends Component<{}, IState> {
    constructor(props: any) {
        super(props);
        this.state = {
            reimbs: [],
            status: [],
            statusDropdown: {
                isOpen: false,
                selection: 'All'
            }
        };
    }

    async componentDidMount() {
        this.getReimbursements();
        this.getStatus();
    };

    getReimbursements = async () => {
        const resp = await fetch(environment.context +'/reimb/', {
            credentials: 'include'
        });
        const reimbsFromServer = await resp.json();
        this.setState({
            reimbs: reimbsFromServer,
            statusDropdown: {
                ...this.state.statusDropdown,
                selection: 'All'
            }
        });
    }

    getStatus = async () => {
        const resp = await fetch(environment.context + '/reimb/status');
        const status = await resp.json();
        this.setState({
            status
        });
        console.log(status);
    }

    getReimbursementsByStatus = async (status: ReimbursementStatus) => {
        const resp = await fetch(environment.context + '/reimb/reimb/' + status.statusId, {
            credentials: 'include'
        });
        const reimbsFromServer = await resp.json();
        this.setState({
            reimbs: reimbsFromServer,
            statusDropdown: {
                ...this.state.statusDropdown,
                selection: status.status
            }
        })
    }

    toggleStatusDropdown = () => {
        this.setState({
            statusDropdown: {
                ...this.state.statusDropdown,
                isOpen: !this.state.statusDropdown.isOpen
            }
        })
    }

    render() {
        const reimbs = this.state.reimbs;
        return(
            <div id="reimb-table-container">
                <ButtonDropdown id="reimb-status-dropdown"
                    isOpen={this.state.statusDropdown.isOpen}
                    toggle={this.toggleStatusDropdown}>
                        <DropdownToggle caret>
                            {this.state.statusDropdown.selection}
                        </DropdownToggle>
                        <DropdownMenu right>
                            <DropdownItem onClick={this.getReimbursements}>All</DropdownItem>
                            <DropdownItem divider />
                            {
                                this.state.status.map(status => (
                                    <DropdownItem key={'status-dropdown-' + status.statusId}
                                    onClick={() => this.getReimbursementsByStatus(status)}>
                                        {status.status}
                                    </DropdownItem>
                                ))
                            }
                        </DropdownMenu>
                    </ButtonDropdown>
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