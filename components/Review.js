import Link from "next/link"

export default function Review({r}){
    // console.log(r.fields)
    const{title,date,slug}=r.fields

    return(
        
        <div className="m-2 p-2 ">
            <div>{title}</div>
            {/* <div>{date}</div> */}
            <Link href={"/reviews/"+slug}>
                <a className="border-2 border-black rounded-md p-1">read</a>
            </Link>
        </div>
        
        
    )

}