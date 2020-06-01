import React, { Component } from 'react'
import Adress from './Adress'

export default class User extends Component {
    render() {
        return (
            <div>
                <label htmlFor="fname">First name:</label><br/>
                    <input type="text" id="fname" name="fname" value="Bahtiyar" /><br />
                    <label htmlFor="lname">Last name:</label><br />
                    <input type="text" id="lname" name="lname" value="Sime" /><br />
                    <Adress/>
                    <input type="submit" value="Submit"></input>

                    
            </div>
        )
    }
}


