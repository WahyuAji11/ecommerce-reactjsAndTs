import { Component } from "react"
import FooterList from "./FooterList"
import Container from "../Container"
import Link from "next/link"
import { MdFacebook } from "react-icons/md";
import {AiFillTwitterCircle, AiFillInstagram, AiFillYoutube } from "react-icons/ai"

const Footer = () => {
    return (
        <footer className="bg-slate-100 text-slate-900 text-sm mt-16">
            <Container>
                <div className="flex flex-col md:flex-row justify-between pt-16 pb-8">
                    <FooterList>
                        <h3 className="text-base font-bold mb-2">Shop Categories</h3>
                        <Link href={'#'}>Phones</Link>
                        <Link href={'#'}>Laptops</Link>
                        <Link href={'#'}>Dekstop</Link>
                        <Link href={'#'}>Watches</Link>
                        <Link href={'#'}>Tvs</Link>
                        <Link href={'#'}>Accessories</Link>
                    </FooterList>
                    <FooterList>
                        <h3 className="text-base font-bold mb-2">Custommer Services</h3>
                        <Link href={'#'}>Contact Us</Link>
                        <Link href={'#'}>Shipping Policy</Link>
                        <Link href={'#'}>Return & Exchanges</Link>
                        <Link href={'#'}>Watches</Link>
                        <Link href={'#'}>FAQs</Link>
                    </FooterList>
                    <div className="w-full md:w-1/3 mb-6 md:mb-0">
                        <h3 className="text-base font-bold mb-2">About Us</h3>
                        <p className="mb-2">At our electronics store. we are dedicated to providing our customers. With a wide selection of phones, TVs, laptops, watches, and accessories.</p>
                        <p>&copy; {new Date().getFullYear()} The Shop. All rights reserved</p>
                    </div>
                    <FooterList>
                        <h3 className="text-base font-bold mb-2">Follow Us</h3>
                        <div className="flex gap-2">
                            <Link href={'#'}>
                                <MdFacebook size={24} />
                            </Link>
                            <Link href={'#'}>
                                <AiFillTwitterCircle size={24} />
                            </Link>
                            <Link href={'#'}>
                                <AiFillInstagram  size={24} />
                            </Link>
                            <Link href={'#'}>
                                <AiFillYoutube size={24} />
                            </Link>
                        </div>
                    </FooterList>
                </div>
            </Container>
        </footer>
    )
}

export default Footer