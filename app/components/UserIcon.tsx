// src/components/UserIcon.tsx
'use client';

import { useRouter } from 'next/navigation';
import React from 'react';
import { FaUser } from 'react-icons/fa';

interface UserIconProps {
    hasNotification: boolean;
}

const UserIcon: React.FC<UserIconProps> = ({ hasNotification }) => {
    const router = useRouter();

    const handleClick = () => {
        router.push('./profile')
    }

    return (
        <div className="relative inline-block cursor-pointer" onClick={handleClick}>
        <FaUser size={24} />
        {hasNotification}
        {/* kalo mau nambahin notif user pake code di bawah ini*/}
        {/* {hasNotification && (
            <span className="absolute top-0 right-0 inline-flex items-center justify-center h-3 w-3 text-xs font-bold leading-none text-white bg-red-600 rounded-full">
            &nbsp;
            </span>
        )} */}
        </div>
    );
};

export default UserIcon;
