"use client"

import React, { useState } from 'react';
import { Phone, Mail, MapPin, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      message: '',
    });
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <div className="min-h-screen bg-primary text-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-[#27272c] rounded-xl shadow-xl p-8 relative">
            <h2 className="text-3xl font-bold mb-4 text-accent">Let's work together</h2>
            <p className="mb-6 text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt sit illo esse commodi.</p>
            {isSubmitted && (
              <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center rounded-xl">
                <div className="bg-[#27272c] p-6 rounded-lg shadow-lg text-center">
                  <CheckCircle className="mx-auto mb-4 h-16 w-16 text-accent" />
                  <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                  <p className="text-gray-300">I'll get back to you soon.</p>
                </div>
              </div>
            )}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First name"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="bg-gray-700 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-accent w-full"
                  required
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last name"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="bg-gray-700 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-accent w-full"
                  required
                />
              </div>
              <input
                type="email"
                name="email"
                placeholder="Email address"
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-gray-700 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-accent"
                required
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone number"
                value={formData.phone}
                onChange={handleChange}
                className="w-full bg-gray-700 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-accent"
              />
              <textarea
                name="message"
                placeholder="Type your message here."
                value={formData.message}
                onChange={handleChange}
                rows="4"
                className="w-full bg-gray-700 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-accent"
                required
              ></textarea>
              <button
                type="submit"
                className="w-full bg-accent hover:bg-purple-600 text-white font-bold py-2 px-4 rounded-xl transition duration-300"
              >
                Send message
              </button>
            </form>
          </div>
          
          <div className="bg-primary rounded-lg  p-8">
            <h2 className="text-3xl font-bold mb-8 text-accent">Contact Information</h2>
            <div className="space-y-6">
              <div className="flex items-center">
                <Phone className="h-6 w-6 text-accent mr-3" />
                <span>(+91) 767-857-4104</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-6 w-6 text-accent mr-3" />
                <span>shakeabhi403@gmail.com@email.com</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-6 w-6 text-accent mr-3" />
                <span>New Delhi India </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;