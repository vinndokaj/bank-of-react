import React, { Component } from 'react'

export default class DebitCard extends Component {
    render() {
        return (
            <div className='debitCard'>
                <h3>Debit</h3>
                <p>Description:{this.props.deb.description}</p>
                <p>Amount:{this.props.deb.amount}</p>
                <p>Date:{this.props.deb.date}</p>
            </div>
        )
    }
}
