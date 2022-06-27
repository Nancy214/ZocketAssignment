import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css'
import { Button } from 'react-bootstrap';
import axios from 'axios'

const Styles = styled.div`
display: flex;
align-items: center;
justify-content: center;
.slider{
  width: 95%;
  div{
    border-radius: 25px;
    
  }
}

`

const StyleClients = styled.div`

margin-top: 2rem;
padding-top: 2rem;
padding-bottom: 2rem;
background: lightblue;
  p{
    color: grey;
  }
  .clients{
    margin: 2rem 0 5rem 23rem;
    width: 50%;
    height: 30%;
    div{

      background: #fff;
      border-radius: 25px;
      
      .review{
        text-align: left;
        margin-left: 5rem;
        margin-right: 5rem;
        
        img{
            width: 5rem;
            height: 5rem;
            margin-bottom: 3rem;
          }
      }
    }
  }
  @media(max-width: 767px){
    .clients{
      width: 90%;
      height: 30rem;
      margin: 0 0 3rem 1rem;
      div{
        .review{
          margin-left: 1rem;
          margin-right: 1rem;
          
        }
      }
    }
  }
`

const Slider = ({section}) => {
  const [reviews, setReviews] = useState([])
  useEffect(()=>{
    const getReviews = async() => {
      const {data} = await axios.get('/reviews')
      setReviews(data)
  
    }
    getReviews()
  },[])
 
  return (
    <>
      {section === 'main' ? (
        <Styles>
          <AwesomeSlider className='slider'>
              
              <div data-src='/images/image1.jpg'/>
              <div data-src='/images/image2.jpg'/>
              <div data-src='/images/image3.jpg'/>
              <div data-src='/images/image4.jpg'/>
              <div data-src='/images/image5.jpg'/>
              
          </AwesomeSlider>
          
        </Styles>
      ) : (
        <StyleClients>
          <h1>What our clients say</h1>
          <p>Choose us and have the best car service</p>
          <AwesomeSlider className='clients'>
            {reviews.map(review=>(
              <div key={review.id}>
                <div className='review'>
                  

                    <img src={review.img} alt=''/>
                  
                  <h3>{review.name}</h3>
                  <h6>{review.location}</h6>
                  <p>{review.review}</p>
                </div>

              </div>
            ))}
          </AwesomeSlider>
          <Button variant='primary'>
                        Explore our offerings
                    </Button>
        </StyleClients>
      ) 

      }
    </>
  )
}

export default Slider