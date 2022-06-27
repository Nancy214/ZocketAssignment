import React from 'react'
import styled from 'styled-components'
import {Button} from 'react-bootstrap'
import container from '../container.jpg'

const Styles = styled.div`


.title{
    align-items: center;
    justify-content: center;
    h1{
        font-weight: bold;
        font-size: 2.5rem;
    }
    p{
        color: grey;
    }
}
.section{
    display: flex;
}
.right{
    display: flex;
    flex-direction: column;
    width: 50%;
    margin-right: 2rem;
    .container{
        border-radius: 25px;
        background: url(${container})
    }
    ul{
        list-style: none;
        color: white;
        text-align: center;
        .icon {
          width: 4.813rem;
          height: 4.813rem;
          margin-top: 1rem;
          margin-left: 18.5rem;
          margin-bottom: 1rem;
          border-radius: 50%;
          i {
            
            margin: 1.5rem 1rem 1.375rem 1.375rem;
            padding: 0.375rem 1.375rem 0.375rem 0.469rem;
          }
        }
         h2{
            font-weight: bold;
            font-size: 1.5rem;

        }
       
    }
    
}
.btn{
    margin-top: 1rem;
}
.left{
    display: flex;
    flex-direction: column;
    width: 50%;
    ul{
        list-style: none;
        text-align: left;
        .icon {
          width: 4.813rem;
          height: 4.813rem;
          
          border-radius: 50%;
          i {
            
            margin: 1.5rem 0 1.375rem 1.375rem;
            padding: 0.375rem 0.375rem 0.375rem 0.469rem;
          }
        }
         h2{
            font-weight: bold;
            margin-left: 7rem;
            margin-top: -5rem;
            font-size: 1.5rem;
        }
        p{
            margin-bottom: 5rem;
            margin-left: 7rem;
            color: grey;
        }
    }
    
}


@media (max-width: 767px) {
    .section{
        display: flex;
        flex-direction: column;
    }
    .right{
        width: 90%;
        margin-left: 1rem;
        ul{
            
            .icon{
                margin-left: 3rem;
            }
            h2{
                margin-left: -2rem;
            }
            p{
                margin-left: -2.5rem;
            }
        }
    }
    .left{
        width: 95%;
        margin-left: -1rem;
    }
    .btn{
        margin-top: 1rem;
        
    }
}

`

const WhyChooseUs = () => {
  return (
    <>
        <Styles>
            <div className='title'>

                <h1>Why Choose Us?</h1>
                <p>Choose us and have the best car services</p>
            </div>
            <div className='section'>

                <div className='left'>

                    <ul>

                        <li>
                            <div className='icon' style={{backgroundColor: 'lightblue'}}>

                                <i className="fa-solid fa-user-check"></i>
                            </div>
                            <h2>Customer satisfaction</h2>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lobortis nec diam pharetra accumsan. Suspendisse viverra dictum erat, vitae ullamcorper odio. 
                            </p>
                        </li>
                        <li>
                            <div className='icon' style={{backgroundColor: 'lightyellow'}}>

                                <i className="fa-solid fa-wallet"></i>
                            </div>
                            <h2>Great value for money</h2>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lobortis nec diam pharetra accumsan. Suspendisse viverra dictum erat, vitae ullamcorper odio. 
                            </p>
                        </li>
                        <li>
                            <div className='icon' style={{backgroundColor: 'lightpink'}}>

                                <i className="fa-solid fa-hourglass"></i>
                            </div>
                            <h2>Timely services and delivery</h2>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lobortis nec diam pharetra accumsan. Suspendisse viverra dictum erat, vitae ullamcorper odio. 
                            </p>
                        </li>
                    </ul>
                </div>

                <div className='right'>
                    <div className='container'>
                        <ul>

                        <li>
                            <div className='icon' style={{backgroundColor: 'lightblue'}}>

                                <i className="fa-solid fa-user-group"></i>
                            </div>
                            <h2>500+</h2>
                            <p>Happy customers</p>
                        </li>
                        <li>
                            <div className='icon' style={{backgroundColor: 'lightblue'}}>

                            <i className="fa-solid fa-circle-check"></i>
                            </div>
                            <h2>5+</h2>
                            <p>Years of experience</p>
                        </li>
                        <li>
                            <div className='icon' style={{backgroundColor: 'lightblue'}}>

                                <i className="fa-solid fa-gear"></i>
                            </div>
                            <h2>100%</h2>
                            <p>Quality assurance</p>
                        </li>
                    </ul>
                    </div>
                </div>
                
            </div>
                <div className='btn'>

                    <Button variant='primary'>
                        Explore our offerings
                    </Button>
                </div>
        </Styles>
    </>
  )
}

export default WhyChooseUs