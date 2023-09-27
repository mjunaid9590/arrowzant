import React from 'react'
export async function generateStaticParams() {
  
 
  return [
    {
      slug: 'hicken'
    },
    {
      slug: 'meat'
    }
  ]
}

const page = ({params}) => {
    const {slug}=params
  return (
    <div>
      Test page with slug: {slug}
    </div>
  )
}

export default page
