export default function MorningShineWebsite() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      {/* Hero Section */}
      <section className="bg-black text-white py-20 px-6 text-center">
        <h1 className="text-5xl font-bold mb-4">DailyCarCare</h1>
        <p className="text-xl max-w-2xl mx-auto">
          Daily Morning Car Cleaning Service at Your Doorstep
        </p>
        <<a
  href="https://wa.me/919634004355?text=Hi%20I%20want%20to%20book%20DailyCarCare%20service"
  target="_blank"
>
  <button className="mt-8 bg-white text-black px-8 py-3 rounded-2xl font-semibold hover:scale-105 transition">
    Book on WhatsApp
  </button>
</a>
      </section>

      {/* Services */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-3xl p-6 shadow-lg">
            <h3 className="text-2xl font-semibold mb-3">Basic Cleaning</h3>
            <p className="mb-4">Daily outer body cleaning and dust removal.</p>
            <p className="font-bold text-xl">₹499/month</p>
          </div>

          <div className="bg-white rounded-3xl p-6 shadow-lg">
            <h3 className="text-2xl font-semibold mb-3">Premium Wash</h3>
            <p className="mb-4">Outer cleaning with tyre polish and shine.</p>
            <p className="font-bold text-xl">₹799/month</p>
          </div>

          <div className="bg-white rounded-3xl p-6 shadow-lg">
            <h3 className="text-2xl font-semibold mb-3">Interior Cleaning</h3>
            <p className="mb-4">Weekly dashboard and seat vacuum cleaning.</p>
            <p className="font-bold text-xl">₹999/month</p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-white py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us?</h2>

        <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          <div className="bg-gray-100 rounded-2xl p-6 text-center shadow">
            <h3 className="font-bold text-xl mb-2">Daily Service</h3>
            <p>Early morning cleaning before your day starts.</p>
          </div>

          <div className="bg-gray-100 rounded-2xl p-6 text-center shadow">
            <h3 className="font-bold text-xl mb-2">Affordable</h3>
            <p>Low-cost monthly plans for everyone.</p>
          </div>

          <div className="bg-gray-100 rounded-2xl p-6 text-center shadow">
            <h3 className="font-bold text-xl mb-2">Trusted Team</h3>
            <p>Professional and careful car handling.</p>
          </div>

          <div className="bg-gray-100 rounded-2xl p-6 text-center shadow">
            <h3 className="font-bold text-xl mb-2">Easy Payments</h3>
            <p>Online monthly subscription available.</p>
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-16 px-6 max-w-4xl mx-auto">
        <div className="bg-white rounded-3xl shadow-xl p-8">
          <h2 className="text-3xl font-bold mb-6 text-center">Book Your Service</h2>

          <div className="grid md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className="border p-3 rounded-xl"
            />

            <input
              type="text"
              placeholder="Phone Number"
              className="border p-3 rounded-xl"
            />

            <input
              type="text"
              placeholder="Car Model"
              className="border p-3 rounded-xl"
            />

            <input
              type="text"
              placeholder="Location"
              className="border p-3 rounded-xl"
            />
          </div>

          <button className="mt-6 w-full bg-black text-white py-3 rounded-2xl font-semibold hover:scale-105 transition">
            Submit Booking
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-8 text-center">
        <h3 className="text-2xl font-bold">DailyCarCare</h3>
        <p className="mt-2">Daily Car Cleaning Service</p>
        <p className="mt-4 text-gray-400">© 2026 DailyCarCare. All rights reserved.</p>
      </footer>
    </div>
  )
}
