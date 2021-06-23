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
      reviews:res.items
    }
  }
}


export default function Reviews({reviews}) {
  // console.log(reviews)
  return (
    
      <div >
      <div className="pb-6">
      By default, Tailwind provides three font family utilities: 
      a cross-browser sans-serif stack, a cross-browser serif stack, 
      </div>
      
      <div className="text-xl font-semibold pb-3">Blog List</div>
      <div className="border-2 border-gray-900 rounded-lg">
        {reviews.map(r=>(
          <Review key={r.sys.id} r={r} />
        ))}
      </div>
      </div>
     
    
  )
}