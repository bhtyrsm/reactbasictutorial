import React, { Component } from 'react'

export default class Adress extends Component {
    render() {
        return (
            <div>
                <label htmlFor="fcity">City:</label><br/>
                    <input type="text" id="fcity" name="fcity"/><br />
                    <label htmlFor="fcountry">Country:</label><br />
                    <input type="text" id="fcountry" name="fcity"  /><br />
            </div>
        )
    }
}
