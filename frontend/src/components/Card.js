import React from 'react'
import styled from 'styled-components'
import background from '../background.jpg'


const Styles = styled.div`
margin: 100px 20px 50px 20px;
.card{
    border-radius: 25px;
    width: 100%;
    background: url(${background});
    padding: 50px 0 100px 0;
    p{
        color: grey;
        padding: 0 10px 0 10px;
    }
}

`

const Card = () => {
  return (
    <>
        <Styles>
            <div className='card'>
                <h1>
                    The best car wash in Chennai
                </h1>
                <p>
                    Drive and shine offers affordable and fast car wash services in Chennai. We only use top quality products and your car is taken care of by professionals.
                </p>
            </div>

        </Styles>
    </>
  )
}

export default Card