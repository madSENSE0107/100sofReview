import Link from "next/link"

export default function Review({r}){
    // console.log(r.fields)
    const{title,slug,poster}=r.fields
    const posterUrl="https:"+poster.fields.file.url
   
    return(
        
        <div className="my-4 p-5 h-96 w-5/6 shadow-lg shadow-slate-400 bg-cover bg-center bg-stone-500 bg-blend-multiply rounded-3xl md:mr-6 md:w-5/12 " style={{ backgroundImage: `url(${posterUrl})`}}>
            
            <div className="text-stone-100 text-xl font-bold mb-4">{title}</div>

            <Link href={"/reviews/"+slug}>
                <a className="bg-stone-100 text-xl text-slate-900 p-2 rounded-md hover:bg-slate-200" >Read</a>
            </Link> 
        </div>
        
        
    )

}