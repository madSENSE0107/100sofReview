import Link from "next/link"

export default function Review({r}){
    // console.log(r.fields)
    const{title,slug,poster}=r.fields
    const posterUrl="https:"+poster.fields.file.url
   
    return(
        
        <div  className="my-4 p-5 h-72 w-5/6  bg-cover bg-center bg-stone-500 bg-blend-multiply rounded-3xl md:mr-6 md:w-3/12 md:h-72 " style={{ backgroundImage: `url(${posterUrl})`}}>
            
            <div className="text-stone-100 text-lg font-bold mb-1">{title}</div>

            <Link href={"/reviews/"+slug}>
                <a className="bg-stone-100 text-lg text-slate-900 p-1 rounded-md hover:bg-slate-200" >Read</a>
            </Link> 
        </div>
        
        
    )

}