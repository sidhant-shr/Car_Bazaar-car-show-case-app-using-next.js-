'use client';

import Image from "next/image";
import Link from "next/link";
import { footerLinks } from "@/constants";


const Footer = () => {
    
  return (
    <footer className="flex flex-col text-black-100 mt-5 border-t border-gray-100 ">
        <div className="flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10">
            <div className="flex flex-col justify-start items-start gap-6">
                <Image src="/logo.svg" alt="logo" width={118} height={18} 
                className="object-contain" />
                <p className="text-base text-gray-700">
                    CarBazaar 2023 <br />
                    All rights reserved &copy;

                </p>

            </div>
            <div className="footer__links">
                {footerLinks.map((Link) => (
                    <div key={Link.title} className="footer_link">
                        <h3 className="font-bold">{Link.title}</h3>
                        {Link.links.map((Item) =>(
                            <div
                                key={Item.title}
                                className="text-gray-500 flex"
                            >
                                {Item.title}
                            </div>

                        ))}
                    </div>


                ))}


            </div>
        </div>
            <div className="flex justify-between items-center flex-wrap mt-10 border-t border-gray-100 sm:px-16 px-6 py-10">
                <p>@2023 CarBazaar. All Rights Reserved</p>
                
                <div className="footer__copyrights-link">
                    <Link href="/" className="text-gray-500">
                        Privacy Policy
                    </Link>
                    <Link href="/" className="text-gray-500">
                        Terms of Use
                    </Link>


                </div>


            </div>


 



    </footer>

  )
}

export default Footer;
