import React, { Component } from 'react'

export default class About extends Component {
    render() {

        var imageName = require('./images/pic.jpg')

        const myStyle = {
            
                boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)',
                maxWidth: '300px',
                margin: 'auto',
                textAlign: 'center'
              }

        return (
            <div>
                    <div style={myStyle}>
                    <img src={imageName} alt='Arshad Hossain' style={{width:"100%"}}></img>
                    <h1>Arshad Hossain</h1>
                    <p style={{color: 'grey',
                        fontSize: '18px'}}>Full Stack React Developer</p>
                    <p>Harvard University</p>
                    <div style={{  textDecoration: 'none',
                                   fontSize: '22px',
                                   color: 'black'}}> 
                    <a href="/"><i class="fa fa-dribbble"></i></a>
                    <a href="/"><i class="fa fa-twitter"></i></a>
                    <a href="/"><i class="fa fa-linkedin"></i></a>
                    <a href="/"><i class="fa fa-facebook"></i></a>
                    </div>
                    <p><button style={{border: 'none',
                                    outline: '0',
                                    display: 'inline-block',
                                    padding: '8px',
                                    color: 'white',
                                    backgroundColor: '#000',
                                    textAlign: 'center',
                                    cursor: 'pointer',
                                    width: '100%',
                                    fontSize: '18px'}}>
                                    Contact</button></p>
                    </div>
            </div>
        )
    }
}
