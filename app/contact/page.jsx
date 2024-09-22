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
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitted(false);
    setIsLoading(true);

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('Email sent successfully client side');
        setIsSubmitted(true);
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          message: '',
        });
        
        setTimeout(() => setIsSubmitted(false), 3000);
      } else {
        console.error('Failed to send email hehe client side');
      }
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setIsLoading(false);
    }
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
                className={`w-full bg-accent hover:bg-purple-600 text-white font-bold py-2 px-4 rounded-xl transition duration-300 ${isLoading ? 'opacity-75 cursor-not-allowed' : ''}`}
                disabled={isLoading}
              >
                {isLoading ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </span>
                ) : (
                  'Send message'
                )}
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