import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import NewEntry from './NewEntry';
import EntryCard from './EntryCard';
import AccountBalance from './AccountBalance';

export default class Credits extends Component {
    render() {
        return (
            <div>
                <h1>Credits</h1>
                <AccountBalance accountBalance={this.props.accountBalance}/>
                <NewEntry addEntry={this.props.addCredit} />
                {this.props.credits.map((debit, index) => {
                    return <EntryCard key={index} name={`Credit: ${index+1}`} deb={debit}/>
                })}
                <Link to="/">Back to Home</Link>
            </div>
        )
    }
}
