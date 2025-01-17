import React from 'react'
import Nav from './Nav'

// import { RxHamburgerMenu } from "react-icons/rx";

function Header() {
  return (
    <div>
        <header>
           
            <Nav/>
            <div className="h-48  md:h-96 w-full flex justify-start -z-30 text-white font-serif relative"
                style={{
                    backgroundImage: "url(/assets/wine_glass.webp)",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat"
                }}
            >
                <div className="w-1/2 flex flex-col absolute left-4 bottom-5 py-10">
               
                    
                    <p className="md:text-4xl md:w-96 md:leading-tight w-full">Elevate your wine experience</p>
                </div>
            </div>
        </header>
    </div>
  )
}

export default Header