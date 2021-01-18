import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class Credits extends Component {
    render() {
        return (
            <div>
                <h1>Credits</h1>
                <Link to="/">Back to Home</Link>
            </div>
        )
    }
}
