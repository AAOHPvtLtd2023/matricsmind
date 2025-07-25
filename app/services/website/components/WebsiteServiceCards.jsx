import { motion } from 'framer-motion';

export default function WebsiteServiceCards() {
  return (
    <div className="flex flex-col md:flex-row justify-center gap-6 p-5 min-h-screen">
      <motion.div
        className="bg-blue-900 text-white rounded-lg p-6 w-full md:w-132 shadow-lg hover:shadow-xl h-[75vh]"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-xl font-bold mb-4">Full Fledged Company Website</h2>
        <ul className="list-none p-0 mb-6">
          <li className="mb-2">Multiple Web Pages</li>
          <li className="mb-2">Custom Layouts and Design</li>
          <li className="mb-2">"Coming Soon" Live Page</li>
          <li className="mb-2">Mobile-Optimized Design</li>
          <li className="mb-2">Social Media Links</li>
          <li className="mb-2">WhatsApp Icon for Chats</li>
          <li className="mb-2">One Year Free Hosting</li>
          <li className="mb-2">Inquiry Contact Form</li>
          <li className="mb-2">Basic SEO Setup</li>
          <li className="mb-2">Premium Images</li>
          <li className="mb-2">Content Writing</li>
          <li className="mb-2">Two Free Custom Emails</li>
        </ul>
        <motion.button
          className="bg-white text-blue-900 rounded-full py-2 w-full text-lg font-semibold"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Get a Free Quote Today
        </motion.button>
      </motion.div>
      <motion.div
        className="bg-white rounded-lg p-6 w-full md:w-132 shadow-lg text-black hover:shadow-xl h-[75vh]"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <h2 className="text-xl font-bold mb-4">Full Fledged Ecommerce Website</h2>
        <ul className="list-none p-0 mb-6 ">
          <li className="mb-2">Purchase Shopify Premium Theme</li>
          <li className="mb-2">Full Web Development Package</li>
          <li className="mb-2">Theme Setup, Customization, and Upload</li>
          <li className="mb-2">Pages: About, Contact, Story Setup</li>
          <li className="mb-2">Product Collections and Listings</li>
          <li className="mb-2">Responsive Design and Full Training</li>
          <li className="mb-2">Support and Guidance Included</li>
          <li className="mb-2">Product Listing: 20 NOS</li>
          <li className="mb-2">Two Free Custom Emails For a Year</li>
        </ul>
        <motion.button
          className="bg-blue-900 text-white rounded-full py-2 w-full text-lg font-semibold"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Get a Free Quote Today
        </motion.button>
      </motion.div>
    </div>
  );
}