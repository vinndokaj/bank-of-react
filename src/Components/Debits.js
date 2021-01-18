import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import DebitCard from './DebitCard'
//import AccountBalance from './AccountBalance';


export default class Debits extends Component {
    render() {
        return (
            <div>
                <h1>Debits</h1>
                {this.props.debits.map((debit, index) => {
                    return <DebitCard key={index} deb={debit}/>
                })}
                <Link to="/">Back to Home</Link>
            </div>
        )
    }
}