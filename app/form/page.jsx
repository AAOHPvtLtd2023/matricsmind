"use client";
import { useState } from "react";
import { ArrowLeft, ArrowRight, CheckCircle } from "lucide-react";
import Image from "next/image";

import poster from "../../public/images/web1.jpg";

// -------------------
// Reusable Components
// -------------------
function InputField({ type = "text", placeholder, value, onChange, error }) {
  return (
    <div className="mb-4">
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500 transition-all bg-gray-800 text-white ${
          error ? "border-red-500" : "border-gray-700"
        }`}
      />
      {error && <p className="text-sm text-red-400 mt-1">{error}</p>}
    </div>
  );
}

function SelectField({ placeholder, value, onChange, options }) {
  return (
    <div className="mb-4">
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full px-4 py-3 border-2 border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-all bg-gray-800 text-white"
      >
        <option value="">{placeholder}</option>
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </div>
  );
}

function TextareaField({ placeholder, value, onChange, rows = 3 }) {
  return (
    <div className="mb-4">
      <textarea
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        rows={rows}
        className="w-full px-4 py-3 border-2 border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-all resize-none bg-gray-800 text-white"
      />
    </div>
  );
}

// -------------------
// Main Form Component
// -------------------
export default function EmailForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    interest: "",
    businessName: "",
    contactPerson: "",
    designation: "",
    phone: "",
    email: "",
    website: "",
    businessAddress: "",
    industry: "",
    yearsInBusiness: "",
    targetAudience: "",
    competitors: "",
    socialMedia: "",
    runningAds: "",
    adPlatforms: "",
    marketingGoals: [],
    budget: "",
    timeline: "",
    additionalNotes: "",
    promoCode: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const validateStep = (currentStep) => {
    const newErrors = {};
    if (currentStep === 2) {
      if (!formData.businessName)
        newErrors.businessName = "Business name is required";
      if (!formData.contactPerson)
        newErrors.contactPerson = "Contact person is required";
      if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) {
        newErrors.email = "Valid email is required";
      }
    }

    if (currentStep === 3) {
      if (!formData.industry) newErrors.industry = "Industry is required";
      if (!formData.budget) newErrors.budget = "Budget is required";
      // Optional extra rules
      if (formData.runningAds && !formData.adPlatforms) {
        newErrors.adPlatforms = "Please specify ad platforms";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateStep(3)) return; // ✅ now actually validates Step 3

    setLoading(true);
    try {
      const res = await fetch("/api/admin/form/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setSubmitted(true);
        // Reset form & step (optional)
        setFormData({
          businessName: "",
          contactPerson: "",
          email: "",
          phone: "",
          industry: "",
          budget: "",
          runningAds: "",
          adPlatforms: "",
          objectives: "",
        });
        setStep(1);
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Submission error:", error);
      alert("Error submitting form. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const steps = [
    { number: 1, title: "Interest", icon: "💡" },
    { number: 2, title: "Basic Info", icon: "👤" },
    { number: 3, title: "Business & Marketing", icon: "🏢" },
  ];

  const progress = (step / steps.length) * 100;

  const updateFormData = (key, value) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
    if (errors[key]) setErrors((prev) => ({ ...prev, [key]: "" }));
  };

  const industries = [
    "Technology",
    "Retail",
    "Education",
    "Healthcare",
    "Hospitality",
    "Finance",
    "Real Estate",
    "Other",
  ];
  const years = [
    "<1 Year",
    "1-3 Years",
    "3-5 Years",
    "5-10 Years",
    "10+ Years",
  ];
  const goals = [
    "Brand Awareness",
    "Lead Generation",
    "Website Traffic",
    "Online Sales",
    "Social Media Growth",
    "Other",
  ];

  if (submitted) {
    return (
      <div className="p-8 max-w-md mx-auto text-center bg-gray-900 rounded-2xl shadow-xl">
        <div className="w-16 h-16 bg-purple-800 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-8 h-8 text-pink-500" />
        </div>
        <h1 className="text-2xl font-bold text-white mb-4">Thank you!</h1>
        <p className="text-gray-300">
          We’ve received your details and will connect with you shortly.
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 py-8">
      <div className="max-w-md mx-auto p-6 bg-gray-800 rounded-2xl shadow-2xl">
        {/* Stepper */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            {steps.map((s) => (
              <div key={s.number} className="flex flex-col items-center">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold transition-all ${
                    step > s.number
                      ? "bg-[#1c3784] text-white"
                      : step === s.number
                      ? "bg-[#1c378480] text-white"
                      : "bg-gray-700 text-gray-400"
                  }`}
                >
                  {step > s.number ? "✓" : s.number}
                </div>
                <span className="text-xs text-gray-400 mt-1">{s.title}</span>
              </div>
            ))}
          </div>
          <div className="w-full bg-gray-700 rounded-full h-1">
            <div
              className="bg-gradient-to-r from-[#ff9100] to-[#1c378480] h-1 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* STEP 1 */}
          {step === 1 && (
            <div className="text-center">
              <div className="text-4xl mb-4">{steps[0].icon}</div>
              <h1 className="text-2xl font-bold text-white mb-6">
                Are you interested?
              </h1>
              <div className="space-y-3">
                <button
                  type="button"
                  className="w-full bg-gradient-to-r from-[#ff9100] to-[#ff910080] text-white py-4 px-6 rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
                  onClick={() => {
                    updateFormData("interest", "Interested");
                    setStep(2);
                  }}
                >
                  Yes, I’m Interested
                </button>
                <button
                  type="button"
                  className="w-full bg-gray-700 text-gray-300 py-4 px-6 rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
                  onClick={() => {
                    updateFormData("interest", "Not Interested");
                    setSubmitted(true);
                  }}
                >
                  Not Right Now
                </button>
              </div>
              <Image
                src={poster}
                className="w-fit mt-3 rounded-sm"
                alt="Poster"
              />
            </div>
          )}

          {/* STEP 2 */}
          {step === 2 && (
            <div>
              <h2 className="text-xl font-bold text-white mb-6 flex items-center">
                {steps[1].icon} {steps[1].title}
              </h2>
              <InputField
                placeholder="Business Name"
                value={formData.businessName}
                onChange={(val) => updateFormData("businessName", val)}
                error={errors.businessName}
              />
              <InputField
                placeholder="Contact Person"
                value={formData.contactPerson}
                onChange={(val) => updateFormData("contactPerson", val)}
                error={errors.contactPerson}
              />
              <InputField
                type="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={(val) => updateFormData("email", val)}
                error={errors.email}
              />
              <InputField
                type="tel"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={(val) => updateFormData("phone", val)}
              />
              <div className="flex space-x-3 pt-2">
                <button
                  type="button"
                  className="flex-1 bg-gray-700 text-gray-300 py-3 px-4 rounded-xl font-medium hover:bg-gray-600 transition-colors flex items-center justify-center"
                  onClick={() => setStep(1)}
                >
                  <ArrowLeft className="w-5 h-5 mr-2" />
                  Back
                </button>
                <button
                  type="button"
                  className="flex-1 bg-gradient-to-r from-pink-500 to-purple-500 text-white py-3 px-4 rounded-xl font-semibold hover:shadow-lg transition-all flex items-center justify-center"
                  onClick={() => {
                    if (validateStep(2)) setStep(3);
                  }}
                >
                  Next
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 3 */}
          {step === 3 && (
            <motion.div
              key="step3"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.3 }}
              className="space-y-4"
            >
              <h2 className="text-xl font-semibold text-gray-800">
                Business Information
              </h2>

              {/* Industry */}
              <div>
                <SelectField
                  placeholder="Select Industry"
                  options={["IT", "Healthcare", "Retail", "Education"]}
                  value={formData.industry}
                  onChange={updateFormData.bind(null, "industry")}
                />
                {errors.industry && (
                  <p className="text-red-500 text-sm mt-1">{errors.industry}</p>
                )}
              </div>

              {/* Budget */}
              <div>
                <InputField
                  placeholder="Budget"
                  value={formData.budget}
                  onChange={updateFormData.bind(null, "budget")}
                />
                {errors.budget && (
                  <p className="text-red-500 text-sm mt-1">{errors.budget}</p>
                )}
              </div>

              {/* Running Ads */}
              <div>
                <SelectField
                  placeholder="Running Ads?"
                  options={["Yes", "No"]}
                  value={formData.runningAds}
                  onChange={updateFormData.bind(null, "runningAds")}
                />
              </div>

              {/* Ad Platforms (only if Running Ads = Yes) */}
              {formData.runningAds === "Yes" && (
                <div>
                  <InputField
                    placeholder="Ad Platforms"
                    value={formData.adPlatforms}
                    onChange={updateFormData.bind(null, "adPlatforms")}
                  />
                  {errors.adPlatforms && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.adPlatforms}
                    </p>
                  )}
                </div>
              )}
            </motion.div>
          )}
        </form>
      </div>
    </div>
  );
}
