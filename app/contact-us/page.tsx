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
const Linkedin = FaLinkedinIn as React.FC<React.SVGProps<SVGSVGElement>>;

/* =====================
   FORM DATA
===================== */
interface FormData {
  name: string;
  email: string;
  phone: string;
  service: string;
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
  return (
    <div className="bg-semiblueviolet rounded-xl p-6 shadow-lg text-black">
      <form className="space-y-5" onSubmit={handleSubmit}>
        {/* Name */}
        <input
          type="text"
          placeholder="Full Name"
          required
          value={formData.name}
          onChange={(e) =>
            setFormData((p) => ({ ...p, name: e.target.value }))
          }
          className="w-full p-3 rounded bg-gray-200"
        />

        {/* Email */}
        <input
          type="email"
          placeholder="Email Address"
          required
          value={formData.email}
          onChange={(e) =>
            setFormData((p) => ({ ...p, email: e.target.value }))
          }
          className="w-full p-3 rounded bg-gray-200"
        />

        {/* Phone (SINGLE FIELD) */}
        <PhoneInput
          country="in"
          value={formData.phone}
          onChange={(value) =>
            setFormData((p) => ({ ...p, phone: `+${value}` }))
          }
          enableSearch
          inputClass="!w-full !py-3 !bg-gray-200 !text-black"
          containerClass="w-full"
        />

        {/* Service */}
        <select
          value={formData.service}
          onChange={(e) =>
            setFormData((p) => ({ ...p, service: e.target.value }))
          }
          className="w-full p-3 rounded bg-gray-200"
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
            setFormData((p) => ({ ...p, message: e.target.value }))
          }
          className="w-full p-3 rounded bg-gray-200"
        />

        {/* Submit */}
        <button
          type="submit"
          disabled={loading}
          className="w-full py-3 rounded-full border font-semibold"
        >
          {loading ? "Submitting..." : "Submit"}
        </button>

        {responseMessage && (
          <p className="text-center font-medium">{responseMessage}</p>
        )}
      </form>
    </div>
  );
};

/* =====================
   CONTACT INFO
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
        loading="lazy"
        style={{ border: 0 }}
        title="Location Map"
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
    phone: "",
    service: "Math Tutoring",
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
      phoneNumber: formData.phone,
      serviceNeeded: formData.service,
      message: formData.message,
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

      const data = await res.json();

      if (res.ok && data.success) {
        setResponseMessage("Message sent successfully!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          service: "Math Tutoring",
          message: "",
        });
      } else {
        setResponseMessage(data.message || "Something went wrong!");
      }
    } catch (err) {
      setResponseMessage("Server error. Please try again later.");
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
