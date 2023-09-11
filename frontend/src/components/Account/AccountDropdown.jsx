import React from "react";
import { Link } from "react-router-dom";

const AccountDropdown = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const handleOpen = () => setIsOpen((s) => !s);
  return (
    <div className="relative">
      <button
        onClick={handleOpen}
        className="block h-10 w-10 border-2 border-gray-600 focus:outline-none focus:border-blue-500 rounded-full overflow-hidden"
      >
        <img
          className="h-full w-full object-cover "
          src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60"
          alt="person img"
        />
      </button>
      <div
        className={`absolute ${
          !isOpen ? "hidden" : "visible"
        } right-0 mt-2 py-2 w-36  bg-white text-gray-800 rounded-md shadow-xl`}
      >
        <Link
          to="#"
          className="block px-4 py-1 text-gray-800  hover:bg-indigo-500 hover:text-white"
        >
          Profile
        </Link>
        <Link
          to="#"
          className="block px-4 py-1 text-gray-800 hover:bg-indigo-500 hover:text-white"
        >
          Sign out
        </Link>
      </div>
    </div>
  );
};

export default AccountDropdown;
