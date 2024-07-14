import Container from "../Container";
import Link from "next/link";
import { Redressed } from "next/font/google";
import CartIcon from "../CartIcon";
import UserIcon from "../UserIcon";
import SearchBar from "../SearchBar";

const redressed = Redressed({ subsets: ['latin'], weight: '400' });

const itemCount = 3;
const hasUserNotification = true;

const Navbar = () => {
    return (
        <div className="sticky top-0 w-full bg-slate-100 z-30 shadow-sm">
            <div className="py-4 border-b[1px]">
                <Container>
                    <div className="flex items-center justify-between gap-3 md:gap-0">
                        <Link href={"/"} className={`${redressed.className} font-bold text-2xl text-sky-900`}>Kisama Apparel</Link>
                        <div className="hidden md:block">
                            <SearchBar/>
                        </div>
                        <div className="flex items-center gap-8 md:gap-12">
                            <CartIcon itemCount={itemCount} />
                            <UserIcon hasNotification={hasUserNotification} />
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    );
};

export default Navbar;
