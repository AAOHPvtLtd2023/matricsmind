"use client";

import { useState } from "react";
import { Input } from "../../@/components/ui/input";
import { Textarea } from "../../@/components/ui/textarea";
import { Button } from "../../@/components/ui/button";
import { Label } from "../../components/ui/label";
import { toast } from "sonner"; // You must have sonner installed

export default function GetInTouchForm() {
  const [loading, setLoading] = useState(false);

const handleSubmit = (e) => {
  e.preventDefault();
  setLoading(true);

  const form = e.target;
  const firstName = form.firstName.value.trim();
  const lastName = form.lastName.value.trim();
  const email = form.email.value.trim();
  const phone = form.phone.value.trim();
  const company = form.company.value.trim();
  const message = form.message.value.trim();

  const fullMessage = `
*New Contact Request* 📩

👤 Name: ${firstName} ${lastName}
📧 Email: ${email}
📞 Phone: ${phone}
🏢 Company: ${company}
📝 Message: ${message}
  `.trim();

  // Encode message
  const encodedMessage = encodeURIComponent(fullMessage);

  // Replace with your WhatsApp number (with country code, no +)
  const phoneNumber = "917367024433"; // example: India number

  const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  // Simulate delay and then redirect to WhatsApp
  setTimeout(() => {
    setLoading(false);
    window.open(whatsappURL, "_blank"); // Open WhatsApp link in new tab
    toast.success("Redirecting to WhatsApp...");
  }, 1000);
};


  return (
    <section className="w-[90vw] px-4 py-16 md:px-16 bg-gradient-to-br from-[#1C3784] to-[#0e183a] text-white flex justify-self-center rounded-b-xl shadow-lg relative overflow-hidden">
      {/* Decorative clip-path background */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-12 items-start">
        {/* Left Heading */}
        <div className="md:col-span-2 space-y-4">
          <h4 className="text-xl font-semibold text-[#FF9100]">Get in Touch</h4>
          <h2 className="text-4xl md:text-6xl font-extrabold leading-none text-white">
            Ready to get started?
          </h2>

          <p className="text-white/80 text-sm">
            Fill out the form and our team will get back to you within 24 hours.
          </p>
        </div>

        {/* Form Inputs */}
        <form
          onSubmit={handleSubmit}
          className="md:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-6 bg-white/5 p-6 rounded-xl backdrop-blur-md shadow-lg border border-white/10"
        >
          {/* First & Last Name */}
          <AnimatedField id="firstName" label="First name*"  name="firstName" required />
          <AnimatedField id="lastName" label="Last name*" name="lastName" required />
          <AnimatedField
            id="email"
            label="Email*"
            type="email"
            placeholder="you@example.com"
            required
          />
          <AnimatedField
            id="phone"
            label="Phone*"
            type="tel"
            placeholder="+91 9876543210"
            required
          />
          <AnimatedField
            id="company"
            label="Company / Organization Name*"
            name="company"
            required
            full
          />

          {/* Message */}
          <div className="md:col-span-2 group">
            <Label htmlFor="message" className="text-[#FF9100]">
              How can we help?
            </Label>
            <Textarea
              id="message"
              name="message"
              rows={6}
              placeholder="Write your message here..."
              className="bg-white/5 text-white border border-white/20 mt-1 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#FF9100] transition-all duration-300 outline-none focus:outline-none"
            />
          </div>

          {/* Submit Button */}
          <div className="md:col-span-2">
            <Button
              type="submit"
              className="w-full bg-[#FF9100] text-white font-semibold py-5 rounded-lg hover:bg-orange-500 transition-all duration-300 shadow-md"
              disabled={loading}
            >
              {loading ? "Sending..." : "🚀 Send Message"}
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
}

// Reusable animated input field component
function AnimatedField({
  id,
  label,
  type = "text",
  placeholder = "",
  required = false,
  full = false,
}) {
  return (
    <div className={full ? "md:col-span-2 group" : "group"}>
      <Label htmlFor={id} className="text-[#FF9100]">
        {label}
      </Label>
      <Input
        id={id}
        type={type}
        placeholder={placeholder}
        required={required}
        className="bg-white/5 text-white border border-white/20 mt-1 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#FF9100] transition-all duration-300 outline-none focus:outline-none group-hover:scale-[1.01]"
      />
    </div>
  );
}
