import React from 'react';
import Link from 'next/link'

const Navbar = () => {
    const [open, setOpen] = React.useState(false);


    return (<nav className="bg-white sticky top-0 z-50 shadow-md">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 bg-white" >
    <a href="https://rodrigomendez.dev/" className="flex items-center">
        <span className="self-center text-lg font-semibold whitespace-nowrap text-primary">rodrigomendez.dev</span>
    </a>
    <button title="Open Menu" aria-label='Open Menu' onClick={() => setOpen(!open)}  type="button" className="inline-flex items-center p-2 ml-3 text-sm rounded-lg md:hidden focus:outline-none " aria-controls="navbar-default" aria-expanded="false">
      <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
    </button>
    <div className={`${open ? '' : 'hidden'} w-full md:block md:w-auto bg-white`}>
      <ul className="text-center font-medium flex flex-col p-2 md:p-0 mt-2  rounded-lg md:flex-row md:space-x-8 md:mt-0">
        <li>
          <Link href="/" onClick={()=> setOpen(false)} className="block py-2 pl-2 pr-2 rounded text-sm " aria-current="page">
            Inicio
          </Link>
        </li>
        <li>
          <Link href="/#acerca" onClick={()=> setOpen(false)} className="block py-2 pl-1 pr-2 rounded text-sm" aria-current="page">
            Acerca
          </Link>
        </li>
        <li>
          <Link href="/#proyectos" onClick={()=> setOpen(false)} className="block py-2 pl-1 pr-2 rounded text-sm" aria-current="page">
            Proyectos
          </Link>
        </li>
        <li>
          <Link href="/#contacto" onClick={()=> setOpen(false)} className="block py-2 pl-1 pr-4rounded text-sm" aria-current="page">
            Contacto
          </Link>
        </li>
      </ul>
    </div>
  </div>
</nav>

    );
};

export default Navbar;