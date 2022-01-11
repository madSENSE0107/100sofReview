import { createClient } from "contentful"
import { useState } from "react"
import Review from "../components/Review"


export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  })
  const res = await client.getEntries({ content_type: "review" })
  return {
    props: {
      reviews: res.items,

    },
    revalidate: 10
  }
}


export default function Reviews({ reviews }) {
  const [blog, setBlog] = useState(null)
  const [search, setSearch] = useState("")
  const filteredReviews = search.length === 0 ? reviews :
    reviews.filter(r => r.fields.title.
      toLowerCase().includes(search.toLowerCase()));


  return (

    <div >
      <div className="mt-8 mb-2 text-5xl font-bold md:text-7xl">
       <span className=" font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-red-500 to-indigo-900">REVIEW</span>  IN 100 SECONDS
      </div>
      <div className="">Yes thats it. I watch movies a lot and feel strongly about not wasting someones time. 100 seconds are enough to give someone an idea. Ofcourse it is a parody 
      website and opinions might differ</div>
      <div className="mt-8 text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-red-500 to-blue-800">Reviews</div>

      <input
        type="search"
        placeholder="Search name"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="border-2 border-stone-800 w-full md:w-3/6 p-2 rounded-3xl active:border-yellow-300"
      />
      
      <div className="flex flex-col justify-center items-center md:flex md:flex-row md:flex-wrap md:justify-start md:mb-28">
        {filteredReviews.map(r => (
          <Review key={r.sys.id} r={r} />
        ))}
      </div>
    </div>


  )
}