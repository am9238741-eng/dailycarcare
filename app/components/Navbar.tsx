'use client';
import { Sparkles } from 'lucide-react';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [showLogin, setShowLogin] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [showLogoutPopup, setShowLogoutPopup] = useState(false);

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const handleLogin = () => {
    setLoggedIn(true);

    setShowSuccess(true);

    setTimeout(() => {
      setShowSuccess(false);
    }, 2500);
  };

  const handleLogout = () => {
  setShowLogoutPopup(true);
};

  return (
    <>
      {/* TOP NAVBAR */}
      <div className="fixed top-0 left-0 w-full bg-black text-white flex items-center justify-between px-4 py-4 z-50 border-b border-orange-500">

        {/* LEFT MENU BUTTON */}
        <button onClick={() => setMenuOpen(true)}>
          <Menu size={28} className="text-orange-500" />
        </button>

        {/* CENTER TITLE */}
        <h1 className="text-xl font-bold text-center flex-1 text-orange-500">
          CarSPA Mathura
        </h1>

        <div className="w-7"></div>
      </div>

      {/* SIDEBAR OVERLAY */}
{menuOpen && (
  <div
    className="fixed inset-0 bg-black/60 z-40"
    onClick={() => setMenuOpen(false)}
  />
)}

{/* SIDEBAR */}
<div
  onClick={(e) => e.stopPropagation()}
  className={`fixed top-0 left-0 h-full w-64 bg-black text-white z-50 transform transition-transform duration-300 ${
    menuOpen ? 'translate-x-0' : '-translate-x-full'
  }`}
>
        {/* HEADER */}
        <div className="flex items-center justify-between p-4 border-b border-orange-500">
          <h2 className="text-orange-500 text-xl font-bold">Menu</h2>

          <button onClick={() => setMenuOpen(false)}>
            <X size={28} className="text-white" />
          </button>
        </div>

        {/* MENU ITEMS */}
        <div className="flex flex-col p-5 gap-5 text-base">

          <button className="text-left hover:text-orange-500 transition">
            Profile
          </button>

          <button className="text-left hover:text-orange-500 transition">
            Subscription
          </button>

          <button className="text-left hover:text-orange-500 transition">
            Support
          </button>

          {!loggedIn ? (
            <button
             onClick={() => setShowLogin(true)}
              className="bg-orange-500 text-black py-2 rounded-xl font-semibold"
            >
              Login
            </button>
          ) : (
            <button
              onClick={handleLogout}
              className="bg-red-500 text-white py-2 rounded-xl font-semibold"
            >
              Logout
            </button>
          )}
        </div>
      </div>
      {/* LOGIN POPUP */}
{showLogin && (
  <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 px-5">

    <div className="bg-zinc-900 w-full max-w-md rounded-3xl p-8 border border-orange-500/20">

      <h2 className="text-3xl font-bold text-orange-500 text-center mb-8">
        Login
      </h2>

      <input
        type="text"
        placeholder="Enter Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full bg-black text-white placeholder:text-gray-500 border border-orange-500/20 p-4 rounded-2xl mb-5"
      />

      <input
        type="text"
        placeholder="Phone Number"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        className="w-full bg-black text-white placeholder:text-gray-500 border border-orange-500/20 p-4 rounded-2xl mb-5"
      />

      <button
  onClick={() => {
    if (!name || !phone) {
      return;
    }

    localStorage.setItem(
      'carspaUser',
      JSON.stringify({ name, phone })
    );

    setLoggedIn(true);
    setShowLogin(false);

    setShowSuccess(true);

    setTimeout(() => {
      setShowSuccess(false);
    }, 2500);

  }}
  className="w-full bg-orange-500 text-black py-4 rounded-2xl font-bold mt-8"
>
  Continue
</button>

    </div>
  </div>
)}
 {/* CLEAN SUCCESS ANIMATION */}
{showSuccess && (
  <div className="fixed inset-0 flex items-center justify-center z-[100] bg-black/70">

    <div className="bg-zinc-900 border border-orange-500/20 rounded-[40px] px-10 py-12 text-center shadow-2xl animate-pulse">

      <div className="flex justify-center mb-6">
        <div className="bg-orange-500 p-5 rounded-full animate-spin">
          <Sparkles size={45} className="text-black" />
        </div>
      </div>

      <h2 className="text-3xl font-bold text-orange-500">
        Car Cleaned Successfully
      </h2>

      <p className="text-gray-300 mt-4 text-lg">
        Welcome to CarSPA Premium Service
      </p>

    </div>
  </div>
)}
{/* LOGOUT POPUP */}
{showLogoutPopup && (
  <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-[100] px-5">

    <div className="bg-zinc-900 border border-orange-500/20 rounded-3xl p-8 w-full max-w-sm text-center">

      <h2 className="text-2xl font-bold text-orange-500 mb-4">
        Logout
      </h2>

      <p className="text-gray-300 mb-8">
        Are you sure you want to logout?
      </p>

      <div className="flex gap-4">

        <button
          onClick={() => setShowLogoutPopup(false)}
          className="flex-1 bg-zinc-800 text-white py-3 rounded-2xl"
        >
          Cancel
        </button>

        <button
          onClick={() => {
            setLoggedIn(false);
            setMenuOpen(false);
            localStorage.removeItem('carspaUser');
            setShowLogoutPopup(false);
          }}
          className="flex-1 bg-orange-500 text-black py-3 rounded-2xl font-bold"
        >
          Logout
        </button>

      </div>

    </div>

  </div>
)}   
    </>
  );
}