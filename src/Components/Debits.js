import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import DebitCard from './DebitCard'
import AccountBalance from './AccountBalance';
import NewEntry from './NewEntry';

export default class Debits extends Component {
    render() {
        return (
            <div>
                <h1>Debits</h1>
                <AccountBalance accountBalance={this.props.accountBalance}/>
                <NewEntry addEntry={this.props.addDebit} />
                {this.props.debits.map((debit, index) => {
                    return <DebitCard key={index} deb={debit}/>
                })}
                <Link to="/">Back to Home</Link>
            </div>
        )
    }
}
