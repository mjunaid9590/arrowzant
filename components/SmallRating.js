import { Rating } from '@mui/material';

import React from 'react'

const SmallRating = () => {
    return (
        <>
            <Rating name="size-small" defaultValue={2} size="small" />
            {/* <Rating name="size-medium" defaultValue={2} />
<Rating name="size-large" defaultValue={2} size="large" /> */}
        </>
    )
}

export default SmallRating
