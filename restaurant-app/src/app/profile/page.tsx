"use client";

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";

export default function ProfilePage() {
  const { data: session, update } = useSession();
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    oldPassword: "",
    newPassword: "",
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (session?.user) {
      setForm({
        firstName: session.user.firstName || "",
        lastName: session.user.lastName || "",
        email: session.user.email || "",
        mobile: session.user.mobile || "",
        oldPassword: "",
        newPassword: "",
      });
    }
  }, [session]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      // Password বাদ দিয়ে আলাদা করলাম
      const { oldPassword, newPassword, ...profileData } = form;

      const body: any = { ...profileData };
      if (oldPassword && newPassword) {
        body.oldPassword = oldPassword;
        body.newPassword = newPassword;
      }

      const res = await fetch("/api/user/update", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Something went wrong");

      setMessage("Profile updated successfully ✅");
      setForm({ ...form, oldPassword: "", newPassword: "" });
      update(); // next-auth session refresh
    } catch (err: any) {
      setMessage(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 bg-white shadow-lg rounded-2xl p-8">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">My Profile</h1>

      {message && (
        <p
          className={`mb-4 text-center font-medium ${
            message.includes("success") ? "text-green-600" : "text-red-500"
          }`}
        >
          {message}
        </p>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="firstName"
          value={form.firstName}
          onChange={handleChange}
          placeholder="First Name"
          className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-pink-400 focus:outline-none"
        />
        <input
          type="text"
          name="lastName"
          value={form.lastName}
          onChange={handleChange}
          placeholder="Last Name"
          className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-pink-400 focus:outline-none"
        />
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Email"
          className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-pink-400 focus:outline-none"
        />
        <input
          type="text"
          name="mobile"
          value={form.mobile}
          onChange={handleChange}
          placeholder="Mobile"
          className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-pink-400 focus:outline-none"
        />

        {/* Password fields */}
        <input
          type="password"
          name="oldPassword"
          value={form.oldPassword}
          onChange={handleChange}
          placeholder="Old Password"
          className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-pink-400 focus:outline-none"
        />
        <input
          type="password"
          name="newPassword"
          value={form.newPassword}
          onChange={handleChange}
          placeholder="New Password"
          className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-pink-400 focus:outline-none"
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full py-2 bg-pink-600 text-white font-medium rounded-lg shadow hover:bg-pink-700 transition disabled:opacity-50"
        >
          {loading ? "Updating..." : "Update Profile"}
        </button>
      </form>
    </div>
  );
}
