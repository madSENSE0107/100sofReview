import Link from 'next/link'
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Layout({ children }) {
  return (
    <div className=" font-sans m-4 md:mx-36 flex flex-col md:flex-row md:justify-between ">
      <div className='md:w-4/6'>
        <header className="flex justify-start">
          <Link href="/">
            <a>
              <h1 className="mt-4 flex flex-col">
                <span className="text-xl bg-gradient-to-r from-red-500 to-indigo-900 rounded text-white  p-2 font-semibold">100s</span>
              </h1>

            </a>
          </Link>
        </header>

        <div className="pt-5">
          {children}
        </div>

      </div>
      <footer className="md:w-1/5 md:mt-32 md:flex md:justify-start md:flex-col pt-8">
        <p className="mt-8 mb-3 text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-red-500 to-slate-800">Suggestions !</p>
        <div className="mb-8">
          Suggest me features or movies to watch
          by connecting with me through these socials.
          This is a project I made just for fun.TechStack used in this are NEXT.JS ,TailwindCSS And ContenfulCMS.
          Icons are from react-icon library package.
        </div>
        <ul className="mb-4 flex flex-row">
          <li className="mr-3 "><a className="" href="https://github.com/madSENSE0107"><FaGithub className="text-black text-3xl" /></a></li>
          <li className="mr-3 "><a className="" href="https://www.linkedin.com/in/saptarsi-chakrabarty/"><FaLinkedin className="text-blue-500 text-3xl" /></a></li>
          <li className="mr-3 "><a className="" href="https://mail.google.com/mail/?view=cm&fs=1&to=saptarsi2000@google.com"><MdEmail className="text-red-500 text-3xl" /></a></li>
        </ul>
      </footer>
    </div>
  )
}