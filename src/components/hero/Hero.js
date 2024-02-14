import React from 'react'
import "./Hero.css";
import Carousel from 'react-material-ui-carousel';
import { Paper } from '@mui/material';
const Hero = () => {
  return (
    <div className = 'movie-carousel-container'>
        <Carousel>
            {
                movies.map((movie) => {
                    return(
                        <Paper>
                            <div className = 'movie-card-container'>
                                <div className = 'movie-card'>
                                    <div className = "movie-detail">

                                    </div>
                                </div>

                            </div>
                        </Paper>
                    )
                })
            }
        </Carousel>
    </div>
  )
}

export default Hero