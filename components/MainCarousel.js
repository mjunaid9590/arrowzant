"use client"

//Documentation: https://www.npmjs.com/package/react-material-ui-carousel

import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material'
import Link from 'next/link';
import Image from 'next/image';

export default function MainCarousel(props) {
    var items = [
        {
            name: "Random Name #1",
            description: "Probably the most random thing you have ever seen!",
            url: "/carousel/carousel1.jpg"
        },
        {
            name: "Random Name #2",
            description: "Hello World!",
            url: "/carousel/carousel2.jpg"
        },
        {
            name: "Random Name #2",
            description: "Hello World!",
            url: "/carousel/carousel3.jpg"
        }
    ]

    return (
        <Carousel
            fullHeightHover={true}     // We want the nav buttons wrapper to only be as big as the button element is
            navButtonsProps={{          // Change the colors and radius of the actual buttons. THIS STYLES BOTH BUTTONS
                style: {
                    backgroundColor: 'cornflowerblue',
                }
            }}
        >
            {
                items.map((item, i) => <Item key={i} item={item} />)
            }
        </Carousel>
    )
}

function Item(props) {
    return (
        <Link href="/" className='z-40 relative'>
            <Paper>
                {/* <h2>{props.item.name}</h2>
            <p>{props.item.description}</p> */}
                <div>
                    <Image className='z-30' alt={props.item.name} src={props.item.url} width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }}>
                    </Image>
                </div>
                {/* <Button className="CheckButton">
                Check it out!
            </Button> */}
            </Paper >
        </Link>
    )
}