"use client";

import React, { useState, FormEvent } from "react";
import FAQ from "../components/FAQ/index";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import {
  IoCallOutline,
  IoMailOutline,
  IoLocationOutline,
} from "react-icons/io5";
import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaLinkedinIn,
} from "react-icons/fa";

/* =====================
   ICON COMPONENTS
===================== */
const CallOutline = IoCallOutline as React.FC<React.SVGProps<SVGSVGElement>>;
const MailOutline = IoMailOutline as React.FC<React.SVGProps<SVGSVGElement>>;
const LocationOutline =
  IoLocationOutline as React.FC<React.SVGProps<SVGSVGElement>>;
const FacebookF = FaFacebookF as React.FC<React.SVGProps<SVGSVGElement>>;
const Instagram = FaInstagram as React.FC<React.SVGProps<SVGSVGElement>>;
const Whatsapp = FaWhatsapp as React.FC<React.SVGProps<SVGSVGElement>>;
const MapMarkerAlt = FaMapMarkerAlt as React.FC<React.SVGProps<SVGSVGElement>>;
const Linkedin = FaLinkedinIn as React.FC<React.SVGProps<SVGSVGElement>>;

/* =====================
   FORM DATA INTERFACE
===================== */
interface FormData {
  name: string;
  email: string;
  countryCode: string;
  contact: string;
  subjects: string;
  message: string;
}

/* =====================
   CONTACT FORM
===================== */
const ContactForm: React.FC<{
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
  loading: boolean;
  responseMessage: string;
}> = ({ formData, setFormData, handleSubmit, loading, responseMessage }) => {
  const [emailError, setEmailError] = useState("");
  const [contactError, setContactError] = useState("");

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setFormData((prev) => ({ ...prev, email: value }));
    setEmailError(
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
        ? ""
        : "Please enter a valid email"
    );
  };

  const handleContactChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const numericValue = e.target.value.replace(/\D/g, "");
    setFormData((prev) => ({ ...prev, contact: numericValue }));
    setContactError(
      numericValue.length !== 10
        ? "Contact number must be exactly 10 digits"
        : ""
    );
  };

  return (
    <div className="bg-semiblueviolet rounded-xl p-6 shadow-lg text-black">
      <form className="space-y-6" onSubmit={handleSubmit}>
        {/* Name + Email */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Full Name"
            value={formData.name}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, name: e.target.value }))
            }
            required
            className="p-3 rounded bg-gray-200"
          />

          <div>
            <input
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleEmailChange}
              required
              className={`p-3 rounded bg-gray-200 w-full ${
                emailError ? "border border-red-500" : ""
              }`}
            />
            {emailError && (
              <p className="text-red-500 text-sm mt-1">{emailError}</p>
            )}
          </div>
        </div>

        {/* Country Code + Contact */}
        <div className="grid lg:grid-cols-2 gap-4">
          <PhoneInput
            country="in"
            value={formData.countryCode}
            onChange={(code) =>
              setFormData((prev) => ({ ...prev, countryCode: `+${code}` }))
            }
            enableSearch
          />

          <div>
            <input
              type="tel"
              placeholder="Contact or WhatsApp Number"
              value={formData.contact}
              onChange={handleContactChange}
              required
              className={`p-3 rounded bg-gray-200 w-full ${
                contactError ? "border border-red-500" : ""
              }`}
            />
            {contactError && (
              <p className="text-red-500 text-sm mt-1">{contactError}</p>
            )}
          </div>
        </div>

        {/* Subjects */}
        <select
          value={formData.subjects}
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, subjects: e.target.value }))
          }
          className="p-3 rounded bg-gray-200 w-full"
        >
          <option>Math Tutoring</option>
          <option>Science Tutoring</option>
          <option>English & Language Arts</option>
          <option>Test Preparation</option>
        </select>

        {/* Message */}
        <textarea
          rows={4}
          placeholder="Briefly describe your message"
          value={formData.message}
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, message: e.target.value }))
          }
          className="p-3 rounded bg-gray-200 w-full"
        />

        {/* Submit */}
        <button
  type="submit"
  disabled={loading || emailError !== "" || contactError !== ""}
  className="py-2 px-8 rounded-full border"
>
  {loading ? "Submitting..." : "Submit"}
</button>


        {responseMessage && (
          <p className="text-center mt-3 font-medium text-black">
            {responseMessage}
          </p>
        )}
      </form>
    </div>
  );
};

/* =====================
   CONTACT INFO + MAP
===================== */
const ContactInfo: React.FC = () => (
  <div className="flex flex-col gap-8">
    <div className="rounded-xl p-6 shadow-lg bg-paleblue">
      <h3 className="text-2xl font-semibold text-orange-500">
        Contact Information
      </h3>

      <p className="flex items-center gap-2 mt-3 text-gray-300">
        <CallOutline />
        <a href="tel:+917646095877">+91 7646095877</a>
      </p>

      <p className="flex items-center gap-2 mt-3 text-gray-300">
        <MailOutline />
        tutor4study24x7@gmail.com
      </p>

      <p className="flex items-center gap-2 mt-3 text-gray-300">
        <LocationOutline />
        New Town, Kolkata, West Bengal – 700135
      </p>

      <div className="flex gap-4 mt-4 text-orange-500">
        <FacebookF />
        <Instagram />
        <Whatsapp />
        <Linkedin />
      </div>
    </div>

    <div className="rounded-xl overflow-hidden border border-white/10 shadow-lg">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3689.6855257208064!2d88.514568!3d22.627530!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a027557c1ede4e1%3A0x7a8e7a1f63c19e4d!2sShapoorji%20Bus%20Stop%2C%20Action%20Area%20III%2C%20New%20Town%2C%20Kolkata%2C%20West%20Bengal%20700135!5e0!3m2!1sen!2sin!4v1732800000000!5m2!1sen!2sin" 
        width="100%"
        height="300"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Location map"
      />
    </div>
  </div>
);

/* =====================
   MAIN COMPONENT
===================== */
const ContactUs: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    countryCode: "+91",
    contact: "",
    subjects: "Math Tutoring",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  setLoading(true);
  setResponseMessage("");

  const payload = {
    name: formData.name,
    email: formData.email,
    message: formData.message,
    phoneNumber: `${formData.countryCode}${formData.contact}`,
    serviceNeeded: formData.subjects,
    deadline: "Not specified",
  };

  try {
    const res = await fetch(
      "https://dashbord-backend-wixl.onrender.com/api/website/contact",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      }
    );

    // ✅ YAHI ADD KARNA HAI
    const data = await res.json();
    console.log("API RESPONSE:", data);

    if (res.ok && data.success) {
      setResponseMessage(data.message || "Message sent successfully!");
      setFormData({
        name: "",
        email: "",
        countryCode: "+91",
        contact: "",
        subjects: "Math Tutoring",
        message: "",
      });
    } else {
      setResponseMessage(data.message || "Something went wrong!");
    }
  } catch (error) {
    console.error("API ERROR:", error);
    setResponseMessage("Server error. Try again later.");
  } finally {
    setLoading(false);
  }
};


  return (
    <>
      <section className="max-w-7xl mx-auto px-6 pt-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <ContactForm
            formData={formData}
            setFormData={setFormData}
            handleSubmit={handleSubmit}
            loading={loading}
            responseMessage={responseMessage}
          />
          <ContactInfo />
        </div>
      </section>
      <FAQ />
    </>
  );
};

export default ContactUs;
