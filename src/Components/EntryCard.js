import React, { Component } from 'react'

export default class EntryCard extends Component {
    render() {
        return (
            <div className='debitCard'>
                <h3>{this.props.name}</h3>
                <p>Description: {this.props.deb.description}</p>
                <p>Amount: ${this.props.deb.amount}</p>
                <p>Date: {this.props.deb.date}</p>
            </div>
        )
    }
}
