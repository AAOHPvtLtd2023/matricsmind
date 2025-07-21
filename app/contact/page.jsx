import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import ContactUs1 from "../components/ContactUs";

export default function ContactPage() {
  return (
    <div className="animate-fadeIn min-h-screen">
      <Link
        href="/"
        className="group absolute top-5 left-5 inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 cursor-pointer"
      >
        <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />
        Back to Home
      </Link>
      {/* Add your contact form or content here */}
      <ContactUs1 />
    </div>
  );
}
