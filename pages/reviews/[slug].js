import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { createClient } from "contentful"
import Image from 'next/image'
import Link from "next/link"

const client =createClient({
  space:process.env.CONTENTFUL_SPACE_ID,
  accessToken:process.env.CONTENTFUL_ACCESS_KEY,
 })


export const getStaticPaths=async()=>{
  const res =await client.getEntries({content_type:"review"})
  const paths=res.items.map(i=>{
    return{
      params:{slug:i.fields.slug}
    }
  })
  return{
    paths:paths,
    fallback:true
  }
} 

export async function getStaticProps({params}) {
  
  
  const {items} =await client.getEntries({
    content_type:"review",
    "fields.slug":params.slug
  })
  return {
    props:{
      review:items[0],
     
    },
    revalidate:10
  }

}
export default function FullReview({review}) {
  // console.log(review)
  if(!review) return <div>Loading ....</div>

  const { dateOfRelease, title, director, iMdB, poster, reviewmovie} = review.fields
  // console.log(poster)
   
    return (
      <div>
        <div className="grid justify-items-center text-xl font-semibold pb-3">Review in 100s</div>
        <div className="flex justify-center">
        
        <Image 
          src={'https:' + poster.fields.file.url}
          width={poster.fields.file.details.image.width}
          height={poster.fields.file.details.image.height} 
          alt="poster" 
        />
        
           
        </div>
        <h2 className="font-semibold">{ title }</h2>
        
          
          
          <p className="pt-2 flex flex-wrap ">
            <span className="border-2 border-gray-900 rounded-lg m-1 p-1 ">Date of Release -{dateOfRelease}</span>
            <span className="border-2 border-gray-900 rounded-lg m-1 p-1">Director -{director}</span>
            <span className="border-2 border-gray-900 rounded-lg m-1 p-1">IMDb -{iMdB}</span>
            
          </p>
          <div>
          {documentToReactComponents(reviewmovie)}
          </div>
          <div> 
          <Link href="/">
          <a>
           <div className=" text-center flex justify-center  bg-black text-gray-50 rounded-md mt-3 mx-32">
              go back and read more !!
           </div>
          </a>
          </Link>
          </div>
        
  
        

      </div>
    )
  }