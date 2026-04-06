import React, { useState } from "react";

const PopupForm = ({ close, type }) => {
  const [formData, setFormData] = useState({
    parent_name: "",
    phone: "",
    email: "",
    kid_name: "",
    age: "",
    gender: "",
    program: "",
    school: "",
    address: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  // 🔹 Handle Change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // 🔹 Validation
  const validate = () => {
    let newErrors = {};

    if (!formData.parent_name) newErrors.parent_name = "Required";
    if (!formData.phone) {
      newErrors.phone = "Required";
    } else if (!/^[6-9]\d{9}$/.test(formData.phone)) {
      newErrors.phone = "Invalid number";
    }

    return newErrors;
  };

  // 🔹 Submit
  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const message = `
📌 *${type === "enroll" ? "New Enrollment Request" : "New Demo Booking"}*

👨 Parent: ${formData.parent_name}
📞 Phone: ${formData.phone}
📧 Email: ${formData.email}

👦 Kid: ${formData.kid_name}
🎂 Age: ${formData.age}
⚧ Gender: ${formData.gender}

📚 Program: ${formData.program}
🏫 School: ${formData.school}

📍 Address: ${formData.address}

📝 Message: ${formData.message}
    `;

    const url = `https://wa.me/918411963829?text=${encodeURIComponent(message)}`;

    setSuccess(true);

    setTimeout(() => {
      window.open(url, "_blank");
      close();
    }, 1500);
  };

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex justify-center items-center z-50 px-4">

      {/* 🔹 Modal */}
      <div className="bg-white w-full max-w-4xl rounded-2xl shadow-2xl p-6 md:p-8 relative">

        {/* Header */}
        <div className="flex justify-between items-center mb-6 border-b pb-3">
          <h2 className="text-2xl font-bold text-gray-800">
                {type === "enroll" ? "Enroll Now ♟️" : "Book a Free Demo ♟️"}
              </h2>
          <button onClick={close} className="text-gray-500 hover:text-red-500 text-xl">
            ✖
          </button>
        </div>

        {/* 🔥 SUCCESS UI */}
        {success ? (
          <div className="text-center py-10 animate-fadeInUp">
            <h2 className="text-2xl font-bold text-green-600 mb-3">
              ✅ Request Sent Successfully!
            </h2>
            <p className="text-gray-600">
              Redirecting you to WhatsApp...
            </p>
          </div>
        ) : (

          <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-4">

            {/* Parent Name */}
            <div>
              <input
                name="parent_name"
                placeholder="Parent Name *"
                onChange={handleChange}
                className="border rounded-lg p-3 w-full"
              />
              {errors.parent_name && (
                <p className="text-red-500 text-sm">{errors.parent_name}</p>
              )}
            </div>

            {/* Phone */}
            <div>
              <input
                name="phone"
                placeholder="WhatsApp Number *"
                onChange={handleChange}
                className="border rounded-lg p-3 w-full"
              />
              {errors.phone && (
                <p className="text-red-500 text-sm">{errors.phone}</p>
              )}
            </div>

            {/* Email */}
            <input name="email" placeholder="Email" onChange={handleChange} className="border rounded-lg p-3" />

            {/* Kid Name */}
            <input name="kid_name" placeholder="Kid Name" onChange={handleChange} className="border rounded-lg p-3" />

            {/* Age */}
            <input name="age" placeholder="Kid Age" onChange={handleChange} className="border rounded-lg p-3" />

            {/* Gender */}
            <select name="gender" onChange={handleChange} className="border rounded-lg p-3">
              <option value="">Select Gender</option>
              <option>Male</option>
              <option>Female</option>
            </select>

            {/* Program */}
            <select name="program" onChange={handleChange} className="border rounded-lg p-3">
              <option value="">Select Program</option>
              <option>Beginner</option>
              <option>Intermediate</option>
              <option>Advanced</option>
            </select>

            {/* School */}
            <input name="school" placeholder="School Name" onChange={handleChange} className="border rounded-lg p-3" />

            {/* Address */}
            <input name="address" placeholder="Address" onChange={handleChange} className="border rounded-lg p-3 col-span-2" />

            {/* Message */}
            <textarea name="message" placeholder="Message" onChange={handleChange} className="border rounded-lg p-3 col-span-2"></textarea>

            {/* Buttons */}
            <div className="col-span-2 flex justify-end gap-3">
              <button type="button" onClick={close} className="bg-gray-200 px-5 py-2 rounded-lg">
                Cancel
              </button>
              <button type="submit" className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg">
                Submit
              </button>
            </div>

          </form>
        )}
      </div>
    </div>
  );
};

export default PopupForm;