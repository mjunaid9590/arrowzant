import { Rating } from '@mui/material';

import React from 'react'

const SmallRating = () => {
    return (
        <div className='flex flex-row mx-auto justify-evenly'>
            <Rating className='my-auto' name="size-small" defaultValue={2} size="small" />
            <p>(4553)</p>
            {/* <Rating name="size-medium" defaultValue={2} />
<Rating name="size-large" defaultValue={2} size="large" /> */}
        </div>
    )
}

export default SmallRating
