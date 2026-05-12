"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  FaStar,
  FaUser,
  FaWhatsapp,
  FaEllipsisV,
} from "react-icons/fa";

export default function Home() {
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [name, setName] = useState("");
const [phone, setPhone] = useState("");
const [loggedIn, setLoggedIn] = useState(false);
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

  return (
    <main className="min-h-screen bg-black text-white">
      {/* TOP NAVBAR */}
<header className="border-b border-yellow-500/10 bg-black/90 backdrop-blur-xl sticky top-0 z-50">
  <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

    <h1 className="text-2xl font-extrabold text-yellow-500">
      CarSPA Mathura
    </h1>

    <div className="hidden md:flex items-center gap-8 text-gray-300">

  <button
    onClick={() =>
      document
        .getElementById("home-section")
        ?.scrollIntoView({ behavior: "smooth" })
    }
    className="hover:text-yellow-500 transition"
  >
    Home
  </button>

  <button
    onClick={() =>
      document
        .getElementById("plans-section")
        ?.scrollIntoView({ behavior: "smooth" })
    }
    className="hover:text-yellow-500 transition"
  >
    Plans
  </button>

  <button
    onClick={() =>
      document
        .getElementById("about-section")
        ?.scrollIntoView({ behavior: "smooth" })
    }
    className="hover:text-yellow-500 transition"
  >
    About
  </button>

  <button
    onClick={() =>
      window.open("https://wa.me/919634004355", "_blank")
    }
    className="hover:text-yellow-500 transition"
  >
    Support
  </button>

  <button
    onClick={() =>
      window.open("https://wa.me/919634004355", "_blank")
    }
    className="hover:text-yellow-500 transition flex items-center gap-2"
  >
    <FaWhatsapp />
    WhatsApp
  </button>

</div>

    <div className="flex items-center gap-4">

      <button
        onClick={() =>
          document
            .getElementById("login-section")
            ?.scrollIntoView({ behavior: "smooth" })
        }
        className="border border-yellow-500/20 px-5 py-2 rounded-xl hover:bg-yellow-500 hover:text-black transition"
      >
        Login
      </button>

      <button
        onClick={() =>
          document
            .getElementById("login-section")
            ?.scrollIntoView({ behavior: "smooth" })
        }
        className="bg-yellow-500 text-black px-5 py-2 rounded-xl font-semibold"
      >
        Register
      </button>

    </div>
  </div>
</header>
      {/* HERO */}
      <section
  id="home-section"
  className="max-w-7xl mx-auto px-6 py-24"
>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block bg-yellow-500/10 border border-yellow-500/20 text-yellow-400 px-5 py-2 rounded-full text-sm mb-6">
              Premium Daily Car Cleaning Service
            </div>

            <h1 className="text-6xl md:text-7xl font-extrabold text-yellow-500 leading-tight">
              CarSPA Mathura
            </h1>

            <p className="text-gray-300 text-xl leading-9 mt-8 max-w-2xl">
              Start every office morning with a perfectly clean and fresh-smelling car.
            </p>

            <div className="flex flex-wrap gap-5 mt-10">
              <button className="bg-yellow-500 text-black px-8 py-4 rounded-2xl font-bold">
                Explore Plans
              </button>

              <button className="border border-yellow-500 text-yellow-400 px-8 py-4 rounded-2xl flex items-center gap-3">
                <FaWhatsapp />
                WhatsApp Booking
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="bg-zinc-900 border border-yellow-500/10 rounded-[40px] p-10"
          >
            <div className="flex items-center justify-between">
              <h2 className="text-4xl font-bold text-yellow-500">
                Premium Members
              </h2>

              <button className="text-white text-2xl">
                <FaEllipsisV />
              </button>
            </div>

            <div className="space-y-5 mt-10">
              <div className="bg-black rounded-2xl p-5 border border-yellow-500/10">
                ✔ Fresh-smelling cabin daily
              </div>

              <div className="bg-black rounded-2xl p-5 border border-yellow-500/10">
                ✔ Clean dashboard & mats
              </div>

              <div className="bg-black rounded-2xl p-5 border border-yellow-500/10">
                ✔ Scratch-free microfiber cleaning
              </div>
            </div>
          </motion.div>
        </div>
      </section>

    {/* LOGIN */}
<section
  id="login-section"
  className="max-w-6xl mx-auto px-6 py-20"
>
  <div className="bg-zinc-900 rounded-[40px] border border-yellow-500/10 p-10">

    <h2 className="text-5xl font-bold text-yellow-500 text-center mb-12">
      {loggedIn ? "Welcome Back" : "Login / Register"}
    </h2>

    {!loggedIn ? (
      <>
        <div className="grid md:grid-cols-2 gap-6">

          <input
  type="text"
  placeholder="Enter Name"
  value={name}
  onChange={(e) => setName(e.target.value)}
  className="bg-black border border-yellow-500/20 p-5 rounded-2xl"
/>

<input
  type="text"
  placeholder="Phone Number"
  value={phone}
  onChange={(e) => setPhone(e.target.value)}
  className="bg-black border border-yellow-500/20 p-5 rounded-2xl"
/>

       
        </div>

       <button
  onClick={handleLogin}
  className="bg-yellow-500 text-black px-8 py-4 rounded-2xl font-bold mt-8"
>
  Continue
</button>
      </>
    ) : (
      <div className="text-center">

        <h3 className="text-3xl font-bold text-yellow-500">
          You Are Logged In
        </h3>
<button
  onClick={() => {
    localStorage.removeItem("carspaUser");
    setLoggedIn(false);
  }}
  className="bg-red-500 text-white px-8 py-4 rounded-2xl font-bold mt-8"
>
  Logout
</button>
        <p className="text-gray-400 mt-4">
          Welcome to CarSPA Mathura Premium Dashboard.
        </p>

      </div>
    )}
  </div>
</section>

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
      {/* FOOTER */}
<footer className="border-t border-yellow-500/10 bg-zinc-950 mt-20">
  <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-4 gap-10">
    
    <div>
      <h2 className="text-3xl font-bold text-yellow-500">
        CarSPA Mathura
      </h2>

      <p className="text-gray-400 leading-8 mt-5">
        Premium doorstep daily car cleaning service for office-going customers in Mathura.
      </p>
    </div>

    <div>
      <h3 className="text-xl font-bold text-yellow-500 mb-5">
        Quick Links
      </h3>

      <div className="space-y-3 text-gray-400">
        <p>Home</p>
        <p>Plans</p>
        <p>About</p>
        <p>Support</p>
      </div>
    </div>

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

  <div className="border-t border-yellow-500/10 py-6 text-center text-gray-500 text-sm">
    © 2026 CarSPA Mathura. All Rights Reserved.
  </div>
</footer>
    </main>
  );
}