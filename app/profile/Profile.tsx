import React from 'react';
import { FaUserEdit, FaHeart, FaHistory, FaCog } from 'react-icons/fa';

const Profile = () => {
    return (
        <div className="max-w-4xl mx-auto p-4">
            <div className="bg-white shadow-md rounded p-6 mb-6 flex flex-col items-center">
                <FaUserEdit size={50} className="text-gray-500" />
                <h2 className="text-xl font-semibold mt-4">Adjie</h2>
                <p className="text-gray-600">Email: hahahadoe@example.com</p>
                <button className="mt-4 bg-slate-700 text-white py-2 px-4 rounded hover:opacity-80">
                    Edit Profile
                </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white shadow-md rounded p-6 flex flex-col items-center">
                    <FaHeart size={30} className="text-red-500" />
                    <h3 className="text-lg font-semibold mt-2">Wishlist</h3>
                    <ul className="mt-4 text-gray-600">
                        <li>Product 1</li>
                        <li>Product 2</li>
                        <li>Product 3</li>
                    </ul>
                </div>
                <div className="bg-white shadow-md rounded p-6 flex flex-col items-center">
                    <FaHistory size={30} className="text-slate-900" />
                    <h3 className="text-lg font-semibold mt-2">Order History</h3>
                    <ul className="mt-4 text-gray-600">
                        <li>Order #12345</li>
                        <li>Order #67890</li>
                        <li>Order #54321</li>
                    </ul>
                </div>
                <div className="bg-white shadow-md rounded p-6 flex flex-col items-center">
                    <FaCog size={30} className="text-slate-900" />
                    <h3 className="text-lg font-semibold mt-2">Settings</h3>
                    <button className="mt-4 bg-slate-700 text-white py-2 px-4 rounded hover:opacity-80">
                        Change Password
                    </button>
                    <button className="mt-4 bg-slate-700 text-white py-2 px-4 rounded hover:opacity-80">
                        Manage Notifications
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Profile;
