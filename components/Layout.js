import Link from 'next/link'

export default function Layout({ children }) {
  return (
    <div className="font-sans  m-4 p-4 md:mx-12 md:px-36 lg:mx-56 lg:px-56 flex flex-col md:justify-center">
      <header className="flex justify-center">
        <Link href="/">
          <a>
            <h1 className="flex flex-col">
              <span className="text-5xl font-semibold">100s</span>
              <span className="text-2xl ">of Review</span>
            </h1> 
            
          </a>
        </Link>
      </header>

      <div className="pt-5">
        { children }
      </div>

      <footer className="pt-8">
        <p className="text-xl font-semibold pb-3">Suggestions !</p>
        <div className="pb-3">
          By default, Tailwind provides three font family utilities: 
          a cross-browser sans-serif stack, a cross-browser serif stack, 
        </div>
             <ul className="mb-4">
                <li className="pb-3"><a className="hover:text-gray-500 border-2 border-black p-1 " href="https://github.com/madSENSE0107">Github</a></li>
                <li className="pb-3"><a className="hover:text-gray-500 border-2 border-black p-1 " href="https://www.linkedin.com/in/saptarsi-chakrabarty/">Linkedin</a></li>
                <li className="pb-3"><a className="hover:text-gray-500 border-2 border-black p-1 " href="https://mail.google.com/mail/?view=cm&fs=1&to=saptarsi2000@google.com">Mail</a></li>
            </ul>
      </footer>
    </div>
  )
}