"use client"
import { useState } from "react"

export default function CarSPAMathura() {
  const [selectedBrand, setSelectedBrand] = useState("")
  const brands = {
    Mahindra: [
      "Scorpio N",
      "Scorpio Classic",
      "XUV700",
      "Thar",
      "Bolero",
      "Bolero Neo",
      "XUV3XO",
      "XUV400",
      "Marazzo"
    ],

    Tata: [
      "Nexon",
      "Punch",
      "Harrier",
      "Safari",
      "Tiago",
      "Tigor",
      "Altroz",
      "Curvv"
    ],

    Hyundai: [
      "Creta",
      "Venue",
      "Exter",
      "Verna",
      "i20",
      "Aura",
      "Alcazar",
      "Tucson"
    ],

    Maruti: [
      "Swift",
      "Baleno",
      "Brezza",
      "Dzire",
      "Fronx",
      "Grand Vitara",
      "Ertiga",
      "WagonR",
      "Alto",
      "Celerio"
    ],

    Kia: [
      "Seltos",
      "Sonet",
      "Carens",
      "Carnival"
    ],

    Toyota: [
      "Fortuner",
      "Innova Crysta",
      "Hycross",
      "Glanza",
      "Urban Cruiser Hyryder",
      "Rumion"
    ],

    Honda: [
      "City",
      "Amaze",
      "Elevate"
    ],

    MG: [
      "Hector",
      "Astor",
      "Comet EV",
      "ZS EV",
      "Gloster"
    ],

    Skoda: [
      "Kushaq",
      "Slavia",
      "Kodiaq",
      "Superb"
    ],

    Volkswagen: [
      "Virtus",
      "Taigun",
      "Tiguan"
    ],

    Renault: [
      "Kiger",
      "Triber",
      "Kwid"
    ],

    Nissan: [
      "Magnite",
      "X-Trail"
    ],

    Jeep: [
      "Compass",
      "Meridian",
      "Wrangler"
    ],

    BMW: [
      "X1",
      "X3",
      "X5",
      "3 Series",
      "5 Series"
    ],

    Mercedes: [
      "A-Class",
      "C-Class",
      "E-Class",
      "GLA",
      "GLC",
      "GLE"
    ],

    Audi: [
      "A4",
      "A6",
      "Q3",
      "Q5",
      "Q7"
    ]
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-6 md:px-12 py-5 border-b border-zinc-800 bg-black sticky top-0 z-50">
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-wide text-yellow-400">
          CarSPA Mathura
        </h1>

        <div className="hidden md:flex gap-8 text-lg">
          <a href="#services" className="hover:text-yellow-400 transition">Services</a>
          <a href="#pricing" className="hover:text-yellow-400 transition">Pricing</a>
          <a href="#booking" className="hover:text-yellow-400 transition">Booking</a>
          <a href="#contact" className="hover:text-yellow-400 transition">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center text-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?q=80&w=1600&auto=format&fit=crop"
          alt="SUV"
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />

        <div className="relative z-10 max-w-5xl px-6">
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
            Premium Car Cleaning
            <span className="block text-yellow-400 mt-3">Only in Mathura, UP</span>
          </h1>

          <p className="mt-6 text-lg md:text-2xl text-gray-200">
            Daily doorstep cleaning service for Mahindra, Tata, Hyundai, Maruti, Kia and more.
          </p>

          <a
            href="https://wa.me/919634004355?text=Hi%20I%20want%20to%20book%20CarSPA%20Mathura%20service"
            target="_blank"
          >
            <button className="mt-10 bg-yellow-400 text-black px-10 py-4 rounded-full text-lg font-bold hover:scale-105 transition duration-300 shadow-2xl">
              Book on WhatsApp
            </button>
          </a>
        </div>
      </section>

      {/* Brands */}
      <section className="py-20 bg-zinc-950 text-center">
        <h2 className="text-4xl font-bold mb-12">Supported Car Brands</h2>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 max-w-6xl mx-auto px-6">
          {Object.keys(brands).map((brand) => (
            <div
              key={brand}
              className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6 text-xl font-bold hover:border-yellow-400 hover:scale-105 transition"
            >
              {brand}
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-24 px-6 bg-black">
        <h2 className="text-4xl font-bold text-center mb-16">Our Services</h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          <div className="bg-zinc-900 rounded-3xl p-8 border border-zinc-800 hover:border-yellow-400 transition">
            <h3 className="text-2xl font-bold mb-4 text-yellow-400">Daily Cleaning</h3>
            <p className="text-gray-400">
              Daily morning exterior cleaning with premium microfiber cloth.
            </p>
          </div>

          <div className="bg-zinc-900 rounded-3xl p-8 border border-zinc-800 hover:border-yellow-400 transition">
            <h3 className="text-2xl font-bold mb-4 text-yellow-400">Interior Cleaning</h3>
            <p className="text-gray-400">
              Dashboard, seats and interior vacuum cleaning.
            </p>
          </div>

          <div className="bg-zinc-900 rounded-3xl p-8 border border-zinc-800 hover:border-yellow-400 transition">
            <h3 className="text-2xl font-bold mb-4 text-yellow-400">Tyre Polish</h3>
            <p className="text-gray-400">
              Premium tyre shine and SUV finishing.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-24 px-6 bg-zinc-950">
        <h2 className="text-4xl font-bold text-center mb-16">Monthly Pricing</h2>

        <div className="grid md:grid-cols-4 gap-8 max-w-7xl mx-auto">
          <div className="bg-black border border-zinc-800 rounded-3xl p-8 text-center hover:border-yellow-400 transition">
            <h3 className="text-2xl font-bold">Hatchback</h3>
            <p className="text-5xl font-bold mt-6 text-yellow-400">₹499</p>
            <p className="mt-3 text-gray-400">Swift, i20, Baleno</p>
          </div>

          <div className="bg-black border border-zinc-800 rounded-3xl p-8 text-center hover:border-yellow-400 transition">
            <h3 className="text-2xl font-bold">Sedan</h3>
            <p className="text-5xl font-bold mt-6 text-yellow-400">₹699</p>
            <p className="mt-3 text-gray-400">Verna, Dzire</p>
          </div>

          <div className="bg-yellow-400 text-black rounded-3xl p-8 text-center scale-105 shadow-2xl">
            <h3 className="text-2xl font-bold">SUV</h3>
            <p className="text-5xl font-bold mt-6">₹899</p>
            <p className="mt-3">Creta, Scorpio N, Nexon</p>
          </div>

          <div className="bg-black border border-zinc-800 rounded-3xl p-8 text-center hover:border-yellow-400 transition">
            <h3 className="text-2xl font-bold">Luxury SUV</h3>
            <p className="text-5xl font-bold mt-6 text-yellow-400">₹1299</p>
            <p className="mt-3 text-gray-400">XUV700, Harrier</p>
          </div>
        </div>
      </section>

      {/* Booking */}
      <section id="booking" className="py-24 px-6 bg-black">
        <div className="max-w-4xl mx-auto bg-zinc-900 border border-zinc-800 rounded-[40px] p-10 shadow-2xl">
          <h2 className="text-4xl font-bold text-center mb-10">
            Book Your Car Cleaning
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Your Name"
              className="bg-black border border-zinc-700 rounded-2xl p-4 text-white"
            />

            <input
              type="text"
              placeholder="Phone Number"
              className="bg-black border border-zinc-700 rounded-2xl p-4 text-white"
            />

            <select
              className="bg-black border border-zinc-700 rounded-2xl p-4 text-white"
              value={selectedBrand}
              onChange={(e) => setSelectedBrand(e.target.value)}
            >
              <option value="">Select Brand</option>
              {Object.keys(brands).map((brand) => (
                <option key={brand} value={brand}>
                  {brand}
                </option>
              ))}
            </select>

            <select className="bg-black border border-zinc-700 rounded-2xl p-4 text-white">
              <option>Select Model</option>

              {selectedBrand &&
               brands[selectedBrand as keyof typeof brands].map((model) => (
                  <option key={model}>{model}</option>
                ))}
            </select>
          </div>

          <div className="text-center mt-10">
            <a
              href="https://wa.me/919634004355?text=Hi%20I%20want%20to%20book%20CarSPA%20Mathura%20service"
              target="_blank"
            >
              <button className="bg-yellow-400 text-black px-10 py-4 rounded-full text-lg font-bold hover:scale-105 transition duration-300">
                Confirm Booking on WhatsApp
              </button>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/919634004355?text=Hi%20I%20want%20to%20book%20CarSPA%20Mathura%20service"
        target="_blank"
        className="fixed bottom-6 right-6 z-50"
      >
        <div className="bg-green-500 hover:scale-110 transition duration-300 text-white rounded-full w-16 h-16 flex items-center justify-center shadow-2xl text-3xl">
          💬
        </div>
      </a>

      {/* Google Reviews */}
      <section className="py-20 px-6 bg-zinc-950 text-center">
        <h2 className="text-4xl font-bold mb-12">Why Customers Love Us</h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          <div className="bg-black border border-zinc-800 rounded-3xl p-8">
            <div className="text-yellow-400 text-2xl mb-4">★★★★★</div>
            <p className="text-gray-300">
              Very professional service. My Scorpio always looks showroom clean.
            </p>
            <h4 className="mt-6 font-bold">Rahul Sharma</h4>
          </div>

          <div className="bg-black border border-zinc-800 rounded-3xl p-8">
            <div className="text-yellow-400 text-2xl mb-4">★★★★★</div>
            <p className="text-gray-300">
              Best daily car cleaning service in Mathura. Totally worth it.
            </p>
            <h4 className="mt-6 font-bold">Amit Verma</h4>
          </div>

          <div className="bg-black border border-zinc-800 rounded-3xl p-8">
            <div className="text-yellow-400 text-2xl mb-4">★★★★★</div>
            <p className="text-gray-300">
              DailyCarCare team is punctual and trusted. Highly recommended.
            </p>
            <h4 className="mt-6 font-bold">Saurabh Jain</h4>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-zinc-950 border-t border-zinc-800 py-10 text-center">
        <h3 className="text-3xl font-bold text-yellow-400">CarSPA Mathura</h3>

        <p className="mt-3 text-gray-400">
          Premium Daily Car Cleaning Service Available Only in Mathura, UP
        </p>

        <p className="mt-6 text-gray-500">
          © 2026 CarSPA Mathura. All rights reserved.
        </p>
      </footer>
    </div>
  )
}
