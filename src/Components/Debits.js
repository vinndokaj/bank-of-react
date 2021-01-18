import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import AccountBalance from './AccountBalance';
import NewEntry from './NewEntry';
import EntryCard from './EntryCard';

export default class Debits extends Component {
    render() {
        return (
            <div>
                <h1>Debits</h1>
                <AccountBalance accountBalance={this.props.accountBalance}/>
                <NewEntry addEntry={this.props.addDebit} />
                {this.props.debits.map((debit, index) => {
                    return <EntryCard key={index} name={`Debit: ${index+1}`} deb={debit}/>
                })}
                <Link to="/">Back to Home</Link>
            </div>
        )
    }
}
