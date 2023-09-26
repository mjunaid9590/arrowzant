import React from 'react'

const page = ({params}) => {
    const [slug]=params
  return (
    <div>
      Test page with slug: {slug}
    </div>
  )
}

export default page
