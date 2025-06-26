"use client";
import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    position: "",
    email: "",
    profile: "",
    contact: "",
    customers: "",
    solution: "",
    budget: "",
    additionalInfo: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const templateParams = {
      fullName: formData.fullName,
      position: formData.position,
      email: formData.email,
      profile: formData.profile,
      contact: formData.contact,
      customers: formData.customers,
      solution: formData.solution,
      budget: formData.budget,
      additionalInfo: formData.additionalInfo,
    };

    emailjs
      .send(
        "service_plxt57q",
        "template_202nhbm",
        templateParams,
        "c91DXjVd0At0lFQsJ"
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          toast.success("Your message has been sent successfully!");
          setFormData({
            fullName: "",
            position: "",
            email: "",
            profile: "",
            contact: "",
            customers: "",
            solution: "",
            budget: "",
            additionalInfo: "",
          });
        },
        (error) => {
          console.error("FAILED...", error);
          toast.error("Failed to send the message. Please try again.");
        }
      )
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <div
      className="min-h-screen bg-gray-100 flex items-center justify-center py-10"
      style={{
        backgroundImage: `url('/assets/contact.jpg')`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container mb-24 mt-24 mx-auto p-6 bg-white rounded-lg shadow-lg max-w-5xl flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 p-6">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">
            Need Guidance? Have Questions?
          </h2>
          <h3 className="text-2xl font-bold text-blue-600 mb-6">
            GET EARLY ACCESS!
          </h3>
          <p className="text-gray-600 mb-6">Why Schedule a Meeting?</p>
          <ul className="list-disc pl-5 text-gray-600 space-y-2">
            <li>
              Personalized Consultation: Get one-on-one support tailored to your
              needs.
            </li>
            <li>
              Save Time: No waiting around—just pick a time, and we’ll be ready
              for you.
            </li>
            <li>
              Friendly Guidance: We’re happy to answer your questions, share
              insights, and help you plan your next steps.
            </li>
          </ul>
          <div className="mt-6 space-y-4">
            <div className="flex items-center space-x-4">
              <span className="text-blue-600">💡</span>
              <p className="text-gray-600">NeuroBrain</p>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-blue-600">⏱️</span>
              <p className="text-gray-600">30 minutes</p>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-blue-600">💻</span>
              <p className="text-gray-600">Zoom Meeting</p>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/2 p-6">
          <form className="space-y-4" onSubmit={handleSubmit}>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Full Name"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
              required
            />
            <input
              type="text"
              name="position"
              value={formData.position}
              onChange={handleChange}
              placeholder="Current Position in Your Org"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter Your Email Address"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
            />
            <input
              type="url"
              name="profile"
              value={formData.profile}
              onChange={handleChange}
              placeholder="Your LinkedIn Profile / Company Website"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
              required
            />
            <input
              type="tel"
              name="contact"
              value={formData.contact}
              onChange={handleChange}
              placeholder="Your Contact / WhatsApp"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
              required
            />
            <div>
              <p className="text-gray-600 mb-2">
                Customers you're currently dealing with?
              </p>
              <div className="flex space-x-4">
                {["10 - 100", "100 - 1k", "1k - 10k", "10k+"].map((option) => (
                  <label key={option} className="flex items-center space-x-2">
                    <input
                      type="radio"
                      name="customers"
                      value={option}
                      checked={formData.customers === option}
                      onChange={handleChange}
                      required
                    />
                    <span>{option}</span>
                  </label>
                ))}
              </div>
            </div>
            <div>
              <p className="text-gray-600 mb-2">
                What type of AI solution are you interested in?
              </p>
              <div className="flex space-x-4">
                {["Chatbot", "Voice Assistant", "Both", "Not Sure"].map(
                  (option) => (
                    <label key={option} className="flex items-center space-x-2">
                      <input
                        type="radio"
                        name="solution"
                        value={option}
                        checked={formData.solution === option}
                        onChange={handleChange}
                        required
                      />
                      <span>{option}</span>
                    </label>
                  )
                )}
              </div>
            </div>
            <input
              type="text"
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              placeholder="Your estimated budget for this project? (BDT)"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
              required
            />
            <textarea
              name="additionalInfo"
              value={formData.additionalInfo}
              onChange={handleChange}
              placeholder="Necessary Info for Building Your AI Agent"
              rows={3}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
              required
            />
            <button
              type="submit"
              className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition"
              disabled={isSubmitting}
            >
              FREE TRY
            </button>
          </form>
        </div>
      </div>

      <ToastContainer position="top-center" />
    </div>
  );
};

export default Contact;
