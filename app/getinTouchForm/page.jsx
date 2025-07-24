"use client";

import { Input } from "../../@/components/ui/input";
import { Textarea } from "../../@/components/ui/textarea";
import { Button } from "../../@/components/ui/button";
import { Label } from "../../components/ui/label";

export default function GetInTouchForm() {
  return (
    <section className="w-full px-4 py-12 md:px-16 text-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-12 items-start">
        {/* Left Heading */}
        <div className="md:col-span-2 space-y-4">
          <h4 className="text-sm font-medium text-white">Get in Touch</h4>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight text-white">
            Ready to get started?
          </h2>
        </div>

        {/* Form Inputs */}
        <form className="md:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* First & Last Name */}
          <div>
            <Label htmlFor="firstName">First name*</Label>
            <Input id="firstName" placeholder="Enter your first name" required />
          </div>
          <div>
            <Label htmlFor="lastName">Last name*</Label>
            <Input id="lastName" placeholder="Enter your last name" required />
          </div>

          {/* Email & Phone */}
          <div>
            <Label htmlFor="email">Email*</Label>
            <Input id="email" type="email" placeholder="you@example.com" required />
          </div>
          <div>
            <Label htmlFor="phone">Phone*</Label>
            <Input id="phone" type="tel" placeholder="+91 9876543210" required />
          </div>

          {/* Company Name (full width) */}
          <div className="md:col-span-2">
            <Label htmlFor="company">Company / Organization Name*</Label>
            <Input id="company" placeholder="Your company name" required />
          </div>

          {/* Message (full width) */}
          <div className="md:col-span-2">
            <Label htmlFor="message">How can we help?</Label>
            <Textarea
              id="message"
              rows={6}
              placeholder="Write your message here..."
            />
          </div>

          {/* Submit Button (full width) */}
          <div className="md:col-span-2">
            <Button
  type="submit"
  className="w-full bg-white/20 backdrop-blur-md text-white font-medium border border-gray-300 hover:bg-white/30 transition-all duration-300 py-5 rounded-lg cursor-pointer hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2"
>
  Send Message
</Button>

          </div>
        </form>
      </div>
    </section>
  );
}
