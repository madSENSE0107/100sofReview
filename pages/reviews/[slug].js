import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { createClient } from "contentful"
import Image from 'next/image'
import Link from "next/link"
import { FaPlay, FaArrowLeft } from "react-icons/fa"

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_KEY,
})


export const getStaticPaths = async () => {
  const res = await client.getEntries({ content_type: "review" })
  const paths = res.items.map(i => {
    return {
      params: { slug: i.fields.slug }
    }
  })
  return {
    paths: paths,
    fallback: true
  }
}

export async function getStaticProps({ params }) {


  const { items } = await client.getEntries({
    content_type: "review",
    "fields.slug": params.slug
  })
  return {
    props: {
      review: items[0],

    },
    revalidate: 10
  }

}
export default function FullReview({ review }) {
  // console.log(review)
  if (!review) return <div>Loading ....</div>

  const { dateOfRelease, title, director, iMdB, poster, reviewmovie,trailerLink,watchTime } = review.fields
  const posterUrl = "https:" + poster.fields.file.url

  return (
    <div className="lg:flex lg:justify-center" >
      <div className="flex m-8  justify-center items-center rounded-xl   " >

        <Image
          src={'https:' + poster.fields.file.url}
          width={poster.fields.file.details.image.width}
          height={poster.fields.file.details.image.height}
          alt="poster"
          className="rounded-xl "
        />


      </div>
      <div className="p-5">
        <div className="text-4xl font-bold ">{title}</div>
        <p className="pt-2  ">
          <span className=" ">{dateOfRelease} .</span>
          <span className="">Directed by</span> <br />
          <span className="font-semibold text-xl text-slate-700">{director}</span>

        </p>
        <span className=" text-red-600 font-bold">IMDb -{iMdB}</span>
        <br />
        <button className="p-2 bg-slate-800 text-slate-200 rounded-md mr-2  "><FaPlay className="text-blue-100 text-base mr-2" /> <a href={trailerLink}>Trailer</a></button>
        <span>{watchTime} mins</span>
        <div>
          {documentToReactComponents(reviewmovie)}
        </div>
        <div className="mt-5 text-slate-400">
          Read some more reviews like this
          <Link href="/">
            <a>
              <FaArrowLeft className="text-slate-800 text-3xl mr-2" />
            </a>
          </Link>
        </div>

      </div>



    </div>
  )
}