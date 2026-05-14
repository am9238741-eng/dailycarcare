"use client";
import Navbar from './components/Navbar';
import { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import {
  FaWhatsapp,
  FaEllipsisV,
  FaUser
} from 'react-icons/fa';
import {
  Home as HomeIcon,
  Car,
  Calendar,
  User
} from 'lucide-react';

export default function Home() {
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [name, setName] = useState("");
const [vehicle, setVehicle] = useState("");
const [activeTab, setActiveTab] = useState('home');
const [loggedIn, setLoggedIn] = useState(false);
const [showSplash, setShowSplash] = useState(true);
const [showPopup, setShowPopup] = useState(false);
const [bookingDone, setBookingDone] = useState(false);
const [loading, setLoading] = useState(false);
const [selectedService, setSelectedService] = useState("Daily Cleaning");
useEffect(() => {
  const savedUser = localStorage.getItem("carspaUser");

  if (savedUser) {
    setLoggedIn(true);
  }
}, []);

  const whatsappNumber = "919634004355";

 const cars: any = {
  Mahindra: [
    "Thar",
    "Thar Roxx",
    "Scorpio N",
    "Scorpio Classic",
    "XUV700",
    "XUV 3XO",
    "Bolero",
    "Bolero Neo",
    "Marazzo",
    "XUV400",
  ],

  Tata: [
    "Tiago",
    "Tigor",
    "Altroz",
    "Punch",
    "Nexon",
    "Curvv",
    "Harrier",
    "Safari",
    "Tiago EV",
    "Punch EV",
    "Nexon EV",
  ],

  Hyundai: [
    "Grand i10 Nios",
    "i20",
    "Aura",
    "Exter",
    "Venue",
    "Verna",
    "Creta",
    "Alcazar",
    "Tucson",
    "Ioniq 5",
  ],

  Maruti: [
    "Alto K10",
    "S-Presso",
    "WagonR",
    "Celerio",
    "Swift",
    "Dzire",
    "Baleno",
    "Ignis",
    "Fronx",
    "Brezza",
    "Ertiga",
    "XL6",
    "Grand Vitara",
    "Jimny",
    "Invicto",
    "Ciaz",
    "Eeco",
  ],

  Kia: [
    "Sonet",
    "Seltos",
    "Carens",
    "Carnival",
    "EV6",
  ],

  Toyota: [
    "Glanza",
    "Rumion",
    "Urban Cruiser Hyryder",
    "Innova Crysta",
    "Innova Hycross",
    "Fortuner",
    "Legender",
    "Hilux",
    "Camry",
    "Vellfire",
  ],

  Honda: [
    "Amaze",
    "City",
    "City Hybrid",
    "Elevate",
  ],

  MG: [
    "Comet EV",
    "Astor",
    "Hector",
    "Hector Plus",
    "Gloster",
    "ZS EV",
  ],

  Renault: [
    "Kwid",
    "Triber",
    "Kiger",
  ],

  Nissan: [
    "Magnite",
    "X-Trail",
  ],

  Volkswagen: [
    "Virtus",
    "Taigun",
    "Tiguan",
  ],

  Skoda: [
    "Slavia",
    "Kushaq",
    "Kodiaq",
  ],

  Jeep: [
    "Compass",
    "Meridian",
    "Wrangler",
  ],

  Citroen: [
    "C3",
    "eC3",
    "C3 Aircross",
    "C5 Aircross",
  ],

  BMW: [
    "2 Series",
    "3 Series",
    "5 Series",
    "7 Series",
    "X1",
    "X3",
    "X5",
    "X7",
  ],

  Mercedes: [
    "A-Class",
    "C-Class",
    "E-Class",
    "S-Class",
    "GLA",
    "GLC",
    "GLE",
    "GLS",
    "G-Class",
  ],

  Audi: [
    "A4",
    "A6",
    "Q3",
    "Q5",
    "Q7",
    "Q8",
  ],

  BYD: [
    "Atto 3",
    "Seal",
    "e6",
  ],

  Volvo: [
    "XC40",
    "XC60",
    "XC90",
    "C40 Recharge",
  ],

  Lexus: [
    "ES",
    "NX",
    "RX",
    "LM",
  ],

  Porsche: [
    "Macan",
    "Cayenne",
    "911",
    "Panamera",
  ],

  LandRover: [
    "Defender",
    "Discovery Sport",
    "Range Rover Evoque",
    "Range Rover Velar",
    "Range Rover Sport",
  ],
};

 const plans = [
  {
    name: "Basic Care",
    price: "₹499",
    features: [
      "Exterior Cleaning",
      "Dashboard Cleaning",
      "Fresh Perfume",
      "Mat Cleaning",
      "Mirror Cleaning",
      "6 Days Weekly Service",
      "Dry & Wet Microfiber Cleaning",
    ],
  },

  {
    name: "Premium Care",
    price: "₹799",
    features: [
      "Exterior Cleaning",
      "Dashboard Cleaning",
      "Seat Foam Cleaning",
      "Door Panel Cleaning",
      "Fresh Perfume",
      "Mirror Cleaning",
      "Mat Cleaning",
      "6 Days Weekly Service",
      "Interior Cleaning",
    ],
  },

  {
    name: "Luxury Care",
    price: "₹1199",
    features: [
      "Full Interior Cleaning",
      "Seat Foam Cleaning",
      "Dashboard Cleaning",
      "Door Panel Cleaning",
      "Glass Cleaning",
      "Fresh Perfume",
      "2 Times AC Vent Cleaning Monthly",
      "2 Times Full Foam Cleaning Monthly",
      "Mat Cleaning",
      "6 Days Weekly Service",
    ],
  },
];
const handleLogin = () => {
  if (!name || !phone) {
    alert("Please fill all details");
    return;
  }

  localStorage.setItem(
    "carspaUser",
    JSON.stringify({
      name,
      phone,
    })
  );

  setLoggedIn(true);

  alert("Login Successful");
};  
const sendWhatsApp = (plan: any) => {
    const hiddenPhone =
  phone.length >= 3
    ? "*******" + phone.slice(-3)
    : phone;

const message =
  `Hello CarSPA Mathura%0A` +
  `Customer Name: ${name}%0A` +
  `Phone: ${hiddenPhone}%0A` +
  `Plan: ${plan.name}%0A` +
  `Price: ${plan.price}%0A` +
  `Brand: ${brand}%0A` +
  `Model: ${model}`;

    window.open(
      `https://wa.me/${whatsappNumber}?text=${message}`,
      "_blank"
    );
  };
if (showSplash) {
    <div className="fixed inset-0 bg-black flex flex-col items-center justify-center overflow-hidden">

      {/* Orange Glow */}
      <div className="absolute w-96 h-96 bg-orange-500/20 rounded-full blur-3xl animate-pulse" />

      {/* Logo */}
      <motion.div
        initial={{ scale: 0.7, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative z-10"
      >

        <h1 className="text-6xl md:text-7xl font-extrabold text-white">
          Car<span className="text-orange-500">SPA</span>
        </h1>

      </motion.div>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="text-gray-400 mt-5 text-lg"
      >
        Premium Daily Car Care
      </motion.p>

    </div>
}
  return (
        <>
          <Navbar />
          <main className="min-h-screen bg-black text-white pt-28 pb-24 transition-all duration-500">
      
      {/* HERO */}
      {/* PREMIUM HERO SECTION */}
      {activeTab === 'home' && (
<section id="home-section"
  className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black"
>

  {/* Background Glow */}
  <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 via-black to-black" />

  {/* Blur Effects */}
  <div className="absolute top-10 left-10 w-72 h-72 bg-orange-500/20 rounded-full blur-3xl" />
  <div className="absolute bottom-10 right-10 w-72 h-72 bg-yellow-500/10 rounded-full blur-3xl" />

  <div className="relative z-10 text-center px-6">

    <motion.h1
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="text-5xl md:text-7xl font-extrabold text-white leading-tight"
    >
      Premium
      <span className="text-orange-500"> CarSPA</span>
    </motion.h1>

    <motion.p
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2 }}
      className="mt-6 text-gray-300 text-lg max-w-xl mx-auto"
    >
      Daily Car Cleaning Service with Luxury Finish & Professional Care.
    </motion.p>

    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
      className="mt-10 flex items-center justify-center gap-4 flex-wrap"
    >

     <button
  onClick={() => setShowPopup(true)}
  className="bg-orange-500 hover:bg-orange-600 transition-all duration-300 px-8 py-4 rounded-2xl text-white font-bold shadow-[0_0_30px_rgba(255,140,0,0.5)]"
>
  Book Now
</button>

      <button className="border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white transition-all duration-300 px-8 py-4 rounded-2xl font-bold">
        Explore Services
      </button>

    </motion.div>

  </div>

</section>
)}

  {/* CAR SELECT */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="bg-zinc-900 rounded-[40px] border border-yellow-500/10 p-10">
          <h2 className="text-5xl font-bold text-yellow-500 text-center mb-12">
            Select Your Car
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <select
              value={brand}
              onChange={(e) => {
                setBrand(e.target.value);
                setModel("");
              }}
              className="bg-black border border-yellow-500/20 p-5 rounded-2xl"
            >
              <option value="">Select Brand</option>

              {Object.keys(cars).map((b) => (
                <option key={b}>{b}</option>
              ))}
            </select>

            <select
              value={model}
              onChange={(e) => setModel(e.target.value)}
              className="bg-black border border-yellow-500/20 p-5 rounded-2xl"
            >
              <option value="">Select Model</option>

              {brand &&
                cars[brand].map((m: string) => (
                  <option key={m}>{m}</option>
                ))}
            </select>
            {model && (
  <div className="mt-10 bg-yellow-500/10 border border-yellow-500/20 rounded-3xl p-8">

    <h3 className="text-3xl font-bold text-yellow-500">
      Recommended Plan For {model}
    </h3>

    <p className="text-gray-300 mt-5 leading-8 text-lg">
      Most customers with {model} prefer our
      <span className="text-yellow-500 font-bold">
        {" "}Premium Care ₹799 Plan
      </span>
      {" "}for balanced interior cleaning, seat foam cleaning,
      dashboard cleaning, and fresh cabin experience.
    </p>

    <div className="mt-6 flex flex-wrap gap-4">
      <span className="bg-black border border-yellow-500/20 px-5 py-3 rounded-2xl">
        ✔ Seat Foam Cleaning
      </span>

      <span className="bg-black border border-yellow-500/20 px-5 py-3 rounded-2xl">
        ✔ Dashboard Cleaning
      </span>

      <span className="bg-black border border-yellow-500/20 px-5 py-3 rounded-2xl">
        ✔ Fresh Perfume
      </span>

      <span className="bg-black border border-yellow-500/20 px-5 py-3 rounded-2xl">
        ✔ Interior Cleaning
      </span>
    </div>

    <p className="text-gray-500 mt-6 text-sm">
      You can still choose any plan according to your preference.
    </p>
  </div>
)}
          </div>
        </div>
      </section>
      {/* PLANS */}
      {activeTab === 'services' && (
      <section
  id="plans-section"
  className="max-w-7xl mx-auto px-6 py-20"
>
        <h2 className="text-6xl font-bold text-center text-yellow-500 mb-16">
          Premium Plans
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              whileHover={{ y: -10 }}
              key={index}
              className="bg-zinc-900 border border-yellow-500/10 rounded-[40px] p-10"
            >
              <h3 className="text-4xl font-bold">
                {plan.name}
              </h3>

              <p className="text-6xl text-yellow-500 font-extrabold mt-6">
                {plan.price}
              </p>

              <div className="space-y-5 mt-10 text-lg">
                {plan.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <span className="text-yellow-500">✔</span>

                    <p>{feature}</p>
                  </div>
                ))}
              </div>

              <button
                onClick={() => sendWhatsApp(plan)}
                className="w-full bg-yellow-500 text-black py-5 rounded-2xl font-bold text-lg mt-12 flex items-center justify-center gap-3"
              >
                <FaWhatsapp />
                Book On WhatsApp
              </button>
            </motion.div>
          ))}
        </div>
      </section>
)}

      {/* DASHBOARD */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="bg-zinc-900 rounded-[40px] border border-yellow-500/10 p-10">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-4xl font-bold text-yellow-500">
                Customer Dashboard
              </h2>

              <p className="text-gray-400 mt-3">
                Premium Member
              </p>
            </div>

            <FaUser className="text-4xl text-yellow-500" />
          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-10">
            <div className="bg-black rounded-3xl p-6 border border-yellow-500/10">
              <h3 className="text-yellow-500 text-2xl font-bold">
                Active Plan
              </h3>

              <p className="mt-4 text-gray-300">
                Premium Care
              </p>
            </div>

            <div className="bg-black rounded-3xl p-6 border border-yellow-500/10">
              <h3 className="text-yellow-500 text-2xl font-bold">
                Expiry Date
              </h3>

              <p className="mt-4 text-gray-300">
                12 Aug 2026
              </p>
            </div>

            <div className="bg-black rounded-3xl p-6 border border-yellow-500/10">
              <h3 className="text-yellow-500 text-2xl font-bold">
                Services Left
              </h3>

              <p className="mt-4 text-gray-300">
                12 Remaining
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CUSTOMER RATING */}
<section className="max-w-6xl mx-auto px-6 pb-20">
  <h2 className="text-5xl font-bold text-center text-yellow-500 mb-16">
    Rate Our Service
  </h2>

  <div className="bg-zinc-900 rounded-[40px] border border-yellow-500/10 p-10 max-w-3xl mx-auto">
    
    <div className="flex justify-center gap-4 text-5xl text-yellow-500 mb-10">
      <button className="hover:scale-125 transition">★</button>
      <button className="hover:scale-125 transition">★</button>
      <button className="hover:scale-125 transition">★</button>
      <button className="hover:scale-125 transition">★</button>
      <button className="hover:scale-125 transition">★</button>
    </div>

    <textarea
      placeholder="Write your experience with CarSPA Mathura..."
      className="w-full h-40 bg-black border border-yellow-500/20 rounded-3xl p-6 outline-none resize-none text-white"
    />

    <button className="bg-yellow-500 text-black px-8 py-4 rounded-2xl font-bold mt-8 w-full hover:scale-105 transition">
      Submit Review
    </button>
  </div>
</section>
{/* PREMIUM STATS */}
<section className="max-w-7xl mx-auto px-6 py-10">

  <div className="grid grid-cols-2 md:grid-cols-4 gap-5">

    <div className="bg-zinc-900/60 backdrop-blur-lg border border-orange-500/20 rounded-3xl p-6 text-center shadow-[0_0_30px_rgba(255,140,0,0.08)] hover:scale-105 transition-all duration-300">

      <h2 className="text-4xl font-bold text-orange-500">
        500+
      </h2>

      <p className="text-gray-400 mt-2">
        Cars Cleaned
      </p>

    </div>

    <div className="bg-zinc-900/60 backdrop-blur-lg border border-orange-500/20 rounded-3xl p-6 text-center shadow-[0_0_30px_rgba(255,140,0,0.08)] hover:scale-105 transition-all duration-300">

      <h2 className="text-4xl font-bold text-orange-500">
        4.9★
      </h2>

      <p className="text-gray-400 mt-2">
        Customer Rating
      </p>

    </div>

    <div className="bg-zinc-900/60 backdrop-blur-lg border border-orange-500/20 rounded-3xl p-6 text-center shadow-[0_0_30px_rgba(255,140,0,0.08)] hover:scale-105 transition-all duration-300">

      <h2 className="text-4xl font-bold text-orange-500">
        24/7
      </h2>

      <p className="text-gray-400 mt-2">
        Support
      </p>

    </div>

    <div className="bg-zinc-900/60 backdrop-blur-lg border border-orange-500/20 rounded-3xl p-6 text-center shadow-[0_0_30px_rgba(255,140,0,0.08)] hover:scale-105 transition-all duration-300">

      <h2 className="text-4xl font-bold text-orange-500">
        100%
      </h2>

      <p className="text-gray-400 mt-2">
        Satisfaction
      </p>

    </div>

  </div>

</section>
{/* BOOKING POPUP */}
{activeTab === 'booking' && showPopup && (
  <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-end justify-center z-50">

    <div className="w-full max-w-md bg-zinc-900 rounded-t-3xl p-6 border-t border-orange-500 shadow-2xl">

      <h2 className="text-3xl font-bold text-orange-500 mb-6">
  Book Your Service
</h2>

<div className="space-y-4">

  <input
    type="text"
    placeholder="Your Name"
    value={name}
    onChange={(e) => setName(e.target.value)}
    className="w-full bg-black border border-orange-500/10 rounded-2xl px-5 py-4 text-white outline-none focus:border-orange-500"
  />

  <input
  type="text"
  placeholder="Vehicle Last 4 Digits"
  value={vehicle}
  onChange={(e) => setVehicle(e.target.value)}
  className="w-full bg-black border border-orange-500/10 rounded-2xl px-5 py-4 text-white outline-none focus:border-orange-500"
/>
<select
  value={selectedService}
  onChange={(e) => setSelectedService(e.target.value)}
  className="w-full bg-black border border-orange-500/10 rounded-2xl px-5 py-4 text-white outline-none focus:border-orange-500"
>

  <option>Daily Cleaning</option>
  <option>Interior Spa</option>
  <option>Microfiber Care</option>
  <option>Premium Wash</option>

</select>
  <button
  onClick={() => {
    setLoading(true);

    setTimeout(() => {

      window.open(
        `https://wa.me/919634004355?text=Hello CarSPA Mathura,%0AName: ${name}%0AVehicle: ${vehicle}%0AService: ${selectedService}%0AI want to book a premium car cleaning service.`,
        "_blank"
      );

      setShowPopup(false);
      setBookingDone(true);
      setLoading(false);

      setTimeout(() => {
        setBookingDone(false);
      }, 3000);

    }, 1500);
  }}
  className="w-full bg-orange-500 hover:bg-orange-600 py-4 rounded-2xl text-white font-bold transition-all duration-300"
>
  {loading ? "Processing..." : "Confirm Booking"}
</button>
</div>

      <p className="text-gray-300 leading-7">
        Your premium CarSPA booking request has been submitted successfully.
      </p>

      <button
        onClick={() => setShowPopup(false)}
        className="mt-6 w-full bg-orange-500 hover:bg-orange-600 py-4 rounded-2xl text-white font-bold transition-all duration-300"
      >
        Done
          </button>

    </div>

  </div>

)}

{/* SUCCESS POPUP */}
{bookingDone && (
  <div className="fixed top-6 right-6 bg-zinc-900 border border-orange-500/20 px-6 py-4 rounded-2xl shadow-[0_0_30px_rgba(255,140,0,0.2)] z-50">

    <h3 className="text-orange-500 font-bold text-lg">
      Booking Successful 🚘
    </h3>

    <p className="text-gray-300 text-sm mt-1">
      Your booking request has been sent.
    </p>

  </div>
)}
{activeTab === 'profile' && (
  <section
    id="profile-section"
    className="min-h-screen bg-black px-6 py-24"
  >
    <div className="max-w-md mx-auto bg-zinc-900 border border-orange-500/20 rounded-3xl p-8 shadow-[0_0_40px_rgba(255,140,0,0.08)]">

      {/* your profile content here */}

    </div>
  </section>
)}
 {/* FOOTER */}
<footer className="border-t border-yellow-500/10 bg-zinc-950 mt-20">

  <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-4 gap-10">

    {/* COLUMN 1 */}
    <div>
      <h2 className="text-3xl font-bold text-yellow-500">
        CarSPA Mathura
      </h2>

      <p className="text-gray-400 leading-8 mt-5">
        Premium doorstep daily car cleaning service for office-going customers in Mathura.
      </p>
    </div>

    {/* COLUMN 2 */}
    <div>
      <h3 className="text-xl font-bold text-yellow-500 mb-5">
        Quick Links
      </h3>

      <div className="space-y-3 text-gray-400">

        <button
          onClick={() => setActiveTab('home')}
          className="block hover:text-orange-500 transition"
        >
          Home
        </button>

        <button
          onClick={() => setActiveTab('services')}
          className="block hover:text-orange-500 transition"
        >
          Services
        </button>

        <button
          onClick={() => setActiveTab('booking')}
          className="block hover:text-orange-500 transition"
        >
          Booking
        </button>

        <button
          onClick={() => setActiveTab('profile')}
          className="block hover:text-orange-500 transition"
        >
          Profile
        </button>

      </div>
    </div>

    {/* COLUMN 3 */}
    <div>
      <h3 className="text-xl font-bold text-yellow-500 mb-5">
        Services
      </h3>

      <div className="space-y-3 text-gray-400">
        <p>Daily Car Cleaning</p>
        <p>Interior Cleaning</p>
        <p>Dashboard Cleaning</p>
        <p>Microfiber Cleaning</p>
      </div>
    </div>

    {/* COLUMN 4 */}
    <div>
      <h3 className="text-xl font-bold text-yellow-500 mb-5">
        Contact
      </h3>

      <div className="space-y-3 text-gray-400">
        <p>Mathura, Uttar Pradesh</p>
        <p>+91 9634004355</p>
        <p>support@carspamathura.in</p>
      </div>
    </div>

  </div>

  {/* COPYRIGHT */}
  <div className="border-t border-yellow-500/10 py-6 text-center text-gray-500 text-sm">
    © 2026 CarSPA Mathura. All Rights Reserved.
  </div>

</footer>
{/* FLOATING WHATSAPP BUTTON */}
<a
  href="https://wa.me/919634004355"
  target="_blank"
  rel="noopener noreferrer"
  className="fixed bottom-28 right-6 w-16 h-16 rounded-full bg-green-500 flex items-center justify-center text-white text-3xl shadow-[0_0_30px_rgba(34,197,94,0.5)] z-50 hover:scale-110 transition-all duration-300"
>
  💬
</a>
{/* BOTTOM NAVIGATION */}
<div className="fixed bottom-0 left-0 w-full bg-zinc-950/90 backdrop-blur-xl border-t border-orange-500/20 z-50 shadow-[0_-5px_30px_rgba(255,140,0,0.15)]">

  <div className="flex items-center justify-around py-4">

    <button
  onClick={() => {
    setActiveTab('home');
  }}
  className={`flex flex-col items-center text-sm gap-1 px-4 py-2 rounded-2xl transition-all duration-300 ${
    activeTab === 'home'
      ? 'text-orange-500 scale-110 bg-orange-500/10'
      : 'text-gray-300 hover:text-orange-400'
  }`}
>
  <HomeIcon size={22} />
  Home
</button>

    <button
  onClick={() => {
    setActiveTab('services');
  }}
  className={`flex flex-col items-center text-sm gap-1 px-4 py-2 rounded-2xl transition-all duration-300 ${
    activeTab === 'services'
      ? 'text-orange-500 scale-110 bg-orange-500/10'
      : 'text-gray-300 hover:text-orange-400'
  }`}
>
  <Car size={22} />
  Services
</button>

    <button
  onClick={() => {
    setActiveTab('booking');
  }}
  className={`flex flex-col items-center text-sm gap-1 px-4 py-2 rounded-2xl transition-all duration-300 ${
    activeTab === 'booking'
      ? 'text-orange-500 scale-110 bg-orange-500/10'
      : 'text-gray-300 hover:text-orange-400'
  }`}
>
  <Calendar size={22} />
  Booking
</button>

    <button
  onClick={() => {
    setActiveTab('profile');
  }}
  className={`flex flex-col items-center text-sm gap-1 px-4 py-2 rounded-2xl transition-all duration-300 ${
    activeTab === 'profile'
      ? 'text-orange-500 scale-110 bg-orange-500/10'
      : 'text-gray-300 hover:text-orange-400'
  }`}
>
  <User size={22} />
  Profile
</button>

  </div>

</div>

</main>

</>
);
}