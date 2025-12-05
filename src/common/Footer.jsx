import React from "react";

const Footer = () => {
  return (
    <footer className="mt-5 bg-blue-700 text-white py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-10">

        
        <div>
          <div className="w-48 h-32 lg:border lg:border-white  flex items-center justify-center text-lg font-semibold">
            <img src="src/images/logo.png" alt="logo" className="md:mr-20" />
          </div>

          <p className="text-sm mt-4">@ 2025 Least action company. All rights reserved.</p>

          <div className="flex gap-6 mt-4 text-sm">
            <a href="#" className="hover:underline">Terms of service</a>
            <a href="#" className="hover:underline">Privacy policy</a>
          </div>
        </div>

        
        <div>
          <h3 className="text-xl font-semibold mb-3">Sell</h3>
          <ul className="space-y-2 text-sm text-gray-200">
            <li><a href="#" className="hover:underline">How to sell</a></li>
            <li><a href="#" className="hover:underline">Seller Dashboard</a></li>
            <li><a href="#" className="hover:underline">Seller Now</a></li>
            <li><a href="#" className="hover:underline">Get a free valuation</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-3">Buy</h3>
          <ul className="space-y-2 text-sm text-gray-200">
            <li><a href="#" className="hover:underline">Browse</a></li>
            <li><a href="#" className="hover:underline">How to buy</a></li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-3">Rent</h3>
          <ul className="space-y-2 text-sm text-gray-200">
            <li><a href="#" className="hover:underline">View Rental websites</a></li>
            <li><a href="#" className="hover:underline">Short term rentals</a></li>
          </ul>
        </div>

        
        <div>
          <h3 className="text-xl font-semibold mb-3">The Website</h3>
          <ul className="space-y-2 text-sm text-gray-200">
            <li><a href="#" className="hover:underline">Features</a></li>
            <li><a href="#" className="hover:underline">Pricing</a></li>
            <li><a href="#" className="hover:underline">Testimonials</a></li>
          </ul>
        </div>

       
        <div>
          <h3 className="text-xl font-semibold mb-3">Support & Help</          h3>
          <ul className="space-y-2 text-sm text-gray-200">
            <li><a href="#" className="hover:underline">Help Center</a></li>
            <li><a href="#" className="hover:underline">Tutorials & Guides</a></li>
            <li><a href="#" className="hover:underline">Contact Us</a></li>
            <li><a href="#" className="hover:underline">Report a Bug</a></li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-3">Company</h3>
          <ul className="space-y-2 text-sm text-gray-200">
            <li><a href="#" className="hover:underline">About Us</a></li>
            <li><a href="#" className="hover:underline">Our Mission</a></li>
            <li><a href="#" className="hover:underline">Careers</a></li>
          </ul>
        </div>

      </div>

      
      <div className="border-t border-white/30 mt-10 pt-5 text-center text-sm">
        Powered by Least action company Ltd
      </div>
    </footer>
  );
};

export default Footer;