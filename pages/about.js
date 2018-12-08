import React, { PureComponent } from 'react'

export default class componentName extends PureComponent {
  render() {
    return (
      <div>
        
        <img src="/static/logo.png" alt="healtpro"/>
        <h2>hola soy roger</h2>
        <p>Nos encanta cuidar de tu salud</p>
        <style jsx>{`
            h2 {
             color:white;   
            }
            p {
                color:white;
            }
            :global(body){
                background:#2C302E;
                text-align: center;
            }
            img {
                max-width: 50%;
                display: block;
                margin:  0 auto;
            }
        `}</style>
      </div>
    )
  }
}

