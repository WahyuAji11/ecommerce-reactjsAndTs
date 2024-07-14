'use client';

import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { useRouter } from 'next/navigation';

interface CartIconProps {
    itemCount: number;
}

const CartIcon: React.FC<CartIconProps> = ({ itemCount }) => {
const router = useRouter();

const handleClick = () => {
    router.push('/cart');
};

return (
    <div className="relative inline-block cursor-pointer" onClick={handleClick}>
        <FaShoppingCart size={24} />
        {itemCount > 0 && (
            <span className="absolute bottom-3 left-4 inline-flex items-center justify-center h-5 w-5 text-xs font-bold leading-none text-white bg-red-600 rounded-full">
            {itemCount}
            </span>
        )}
        </div>
    );
};

export default CartIcon;