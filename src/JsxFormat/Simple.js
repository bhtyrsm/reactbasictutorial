
import React, { Component } from 'react'

export default class Simple extends Component {
    render() {
        let isShown = true
        let name = 'bahtiyar'
        return (
            <div>
                1+1={1 + 1}
                <br /> <br />

                simple javascript metod:<br/>
                "bahtiyarSime".toUpperCase() with jsx = {"bahtiyarSime".toUpperCase()}
                <br /> <br />

                Date  ={Date()}
                <br /> <br />


                this is if/else statement in html :
                {
                    isShown ? (<p> This paragraf is visible.</p>) : (<p>this paragraf is invisible</p>)
                }
                <br /> <br />

                Declare variable and call in html :<br/>
                Name ={name}<br/><br/>
                
            </div>
        )
    }
}

/*
function Simple() {
  return (
    <div>

    </div>
  );
}

export default Simple;*/
