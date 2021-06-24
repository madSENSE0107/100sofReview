import { createClient } from "contentful"
import Review from "../components/Review"




export async function getStaticProps() {
  const client =createClient({
   space:process.env.CONTENTFUL_SPACE_ID,
   accessToken:process.env.CONTENTFUL_ACCESS_KEY,
  })
  const res =await client.getEntries({content_type:"review"})
  return {
    props:{
      reviews:res.items,
      
    },
    revalidate:10
  }
}


export default function Reviews({reviews}) {
  // console.log(reviews)
  return (
    
      <div >
      <div className="pb-6 ">
      This is a project website made in NEXT.js using Contentful CMS.
      If there are any bugs or any new feature that you want to add into this 
      OR you simply want to connect , my socials are given below !
      
      </div>
      
      <div className="text-xl font-semibold pb-3">Review List</div>
      <div className="border-2 border-gray-900 rounded-lg h-64 scrollbar-thin scrollbar-thumb-gray-900 scrollbar-track-gray-100 overflow-auto">
        {reviews.map(r=>(
          <Review key={r.sys.id} r={r} />
        ))}
      </div>
      </div>
     
    
  )
}