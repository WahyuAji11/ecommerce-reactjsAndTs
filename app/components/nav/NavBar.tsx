'use client'
import Container from "../Container";
import Link from "next/link";
import { Redressed } from "next/font/google";
import { GrCart } from "react-icons/gr";
import { BsCircleFill } from "react-icons/bs";
import { FaSearch } from "react-icons/fa";
import SearchInput from "../SearchInput";

const redressed = Redressed({ subsets: ['latin'], weight: '400' });

const Navbar = () => {
    const handleSearch = () => {
        console.log("Search query:", );
        // Implement the search functionality here
    };

    return (
        <div className="sticky top-0 w-full bg-slate-100 z-30 shadow-sm">
            <div className="py-4 border-b-[1px]">
                <Container>
                    <div className="flex items-center justify-between gap-3 md:gap-0">
                        <Link href="/" className={`${redressed.className} font-bold text-2xl text-sky-900`}>
                            Kisama Apparel
                        </Link>
                        <div className="hidden md:flex items-center">
                            <FaSearch style={{ marginRight: '8px' }} />
                            <SearchInput onSearch={handleSearch} />
                        </div>
                        <div className="flex items-center gap-8 md:gap-12">
                            <div className="relative">
                                <Link href="/cart">
                                    <GrCart size={'1.5em'} />
                                </Link>
                                <BsCircleFill className="absolute bottom-[10px] left-[18px]" />
                            </div>
                            <div>UserMenu</div>
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    );
};

export default Navbar;
