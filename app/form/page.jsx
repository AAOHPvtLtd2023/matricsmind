"use client";
import { useState } from "react";
import { ArrowLeft, ArrowRight, CheckCircle } from "lucide-react";

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
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const validateStep = (currentStep) => {
    const newErrors = {};
    if (currentStep === 2) {
      if (!formData.businessName.trim())
        newErrors.businessName = "Business name is required";
      if (!formData.contactPerson.trim())
        newErrors.contactPerson = "Contact person is required";
      if (!formData.email.trim()) newErrors.email = "Email is required";
      else if (!/\S+@\S+\.\S+/.test(formData.email))
        newErrors.email = "Email is invalid";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateStep(3)) return;

    try {
      setLoading(true); // start loading

      const res = await fetch("/api/admin/form/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await res.json();

      if (res.ok) {
        setSubmitted(true);
        console.log("Form submitted and email sent successfully!");
      } else {
        console.error("Submission failed:", result.error);
        alert("Submission failed. Please try again.");
      }
    } catch (error) {
      console.error("Submission error:", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false); // stop loading
    }
  };

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

  const InputField = ({
    type = "text",
    placeholder,
    value,
    onChange,
    error,
  }) => (
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

  const SelectField = ({ placeholder, value, onChange, options }) => (
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

  const TextareaField = ({ placeholder, value, onChange, rows = 3 }) => (
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
                      ? "bg-pink-500 text-white"
                      : step === s.number
                      ? "bg-purple-500 text-white"
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
              className="bg-gradient-to-r from-pink-500 to-purple-500 h-1 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* STEP 1: Interest */}
          {step === 1 && (
            <div className="text-center">
              <div className="text-4xl mb-4">{steps[0].icon}</div>
              <h1 className="text-2xl font-bold text-white mb-6">
                Are you interested?
              </h1>
              <div className="space-y-3">
                <button
                  type="button"
                  className="w-full bg-gradient-to-r from-pink-500 to-purple-500 text-white py-4 px-6 rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
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
            </div>
          )}

          {/* STEP 2 and 3: same structure, just dark theme for inputs/buttons */}
          {step === 2 && (
            <div>
              <h2 className="text-xl font-bold text-white mb-6 flex items-center">
                {steps[1].icon} {steps[1].title}
              </h2>
              <InputField
                placeholder="Business Name"
                value={formData.businessName}
                onChange={updateFormData.bind(null, "businessName")}
                error={errors.businessName}
              />
              <InputField
                placeholder="Contact Person"
                value={formData.contactPerson}
                onChange={updateFormData.bind(null, "contactPerson")}
                error={errors.contactPerson}
              />
              <InputField
                type="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={updateFormData.bind(null, "email")}
                error={errors.email}
              />
              <InputField
                type="tel"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={updateFormData.bind(null, "phone")}
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

          {step === 3 && (
            <div>
              <h2 className="text-xl font-bold text-white mb-6 flex items-center">
                {steps[2].icon} {steps[2].title}
              </h2>
              <SelectField
                placeholder="Industry / Category"
                value={formData.industry}
                onChange={updateFormData.bind(null, "industry")}
                options={industries}
              />
              <SelectField
                placeholder="Years in Business"
                value={formData.yearsInBusiness}
                onChange={updateFormData.bind(null, "yearsInBusiness")}
                options={years}
              />
              <InputField
                placeholder="Target Audience"
                value={formData.targetAudience}
                onChange={updateFormData.bind(null, "targetAudience")}
              />
              <InputField
                placeholder="Competitors (if any)"
                value={formData.competitors}
                onChange={updateFormData.bind(null, "competitors")}
              />
              <SelectField
                placeholder="Running Ads?"
                value={formData.runningAds}
                onChange={updateFormData.bind(null, "runningAds")}
                options={["Yes", "No"]}
              />
              {formData.runningAds === "Yes" && (
                <InputField
                  placeholder="Ad Platforms (FB, Google, etc.)"
                  value={formData.adPlatforms}
                  onChange={updateFormData.bind(null, "adPlatforms")}
                />
              )}

              <div className="mb-4">
                <p className="text-sm font-semibold mb-2 text-gray-300">
                  Marketing Goals
                </p>
                <div className="grid grid-cols-1 gap-2">
                  {goals.map((goal) => (
                    <label
                      key={goal}
                      className="flex items-center space-x-2 text-white"
                    >
                      <input
                        type="checkbox"
                        checked={formData.marketingGoals.includes(goal)}
                        onChange={(e) => {
                          if (e.target.checked) {
                            updateFormData("marketingGoals", [
                              ...formData.marketingGoals,
                              goal,
                            ]);
                          } else {
                            updateFormData(
                              "marketingGoals",
                              formData.marketingGoals.filter((g) => g !== goal)
                            );
                          }
                        }}
                        className="accent-pink-500"
                      />
                      <span>{goal}</span>
                    </label>
                  ))}
                </div>
              </div>

              <InputField
                placeholder="Budget (per month)"
                value={formData.budget}
                onChange={updateFormData.bind(null, "budget")}
              />
              <InputField
                placeholder="Timeline / Duration"
                value={formData.timeline}
                onChange={updateFormData.bind(null, "timeline")}
              />
              <TextareaField
                placeholder="Additional Notes"
                value={formData.additionalNotes}
                onChange={updateFormData.bind(null, "additionalNotes")}
                rows={4}
              />

              <button
                type="submit"
                disabled={loading}
                className={`w-full py-4 px-6 rounded-xl font-semibold shadow-lg transform hover:scale-105 transition-all duration-200 ${
                  loading
                    ? "bg-gray-400 text-gray-200 cursor-not-allowed"
                    : "bg-gradient-to-r from-blue-500 to-indigo-600 text-white hover:shadow-xl"
                }`}
              >
                {loading ? "Submitting..." : "Submit Form"}
              </button>

              <button
                type="button"
                className="w-full mt-3 bg-gray-700 text-gray-300 py-3 px-4 rounded-xl font-medium hover:bg-gray-600 transition-colors"
                onClick={() => setStep(2)}
              >
                <ArrowLeft className="w-5 h-5 inline mr-2" />
                Back to Basic Info
              </button>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}
