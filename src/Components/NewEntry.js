import React, { Component } from 'react'

export default class NewEntry extends Component {

    handleClick = () => {
        let entry = {
            description : document.getElementById('desc').value,
            amount : document.getElementById('amt').value,
            date : document.getElementById('date').value
        }
        this.props.addEntry(entry)
    }

    render() {
        return (
            <div>
                <h2>Add Entry</h2>
                <label>
                    Description:
                    <input type='text' id='desc'></input>
                </label>
                <label>
                    Amount:
                    <input type='text' id='amt'></input>
                </label>
                <label>
                    Date (YY-MM-DD):
                    <input type='text' id='date'></input>
                </label>
                <button onClick={this.handleClick}>Submit Entry</button>
            </div>
        )
    }
}
