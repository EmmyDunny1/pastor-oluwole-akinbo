'use client';

import { useState } from 'react';
import { FaRegFile } from 'react-icons/fa';

export default function TestimonyForm() {
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    state: '',
    branch: '',
    message: '',
    video: null as File | null,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormData(prev => ({
      ...prev,
      video: file,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Here you'd send `formData` to your backend or database
    console.log(formData);

    setSubmitted(true);
    // Reset form
    setFormData({
      name: '',
      state: '',
      branch: '',
      message: '',
      video: null,
    });
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h2 className="text-2xl font-semibold mb-6 text-center">Submit Your Testimony</h2>

      {submitted && (
        <div className="bg-blue-100 text-blue-900 p-4 rounded-md mb-4">
          Thank you! Your testimony has been submitted.
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="block font-medium mb-1">Name</label>
          <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full border px-4 py-2 rounded-md focus:outline-none focus:ring focus:border-blue-500"
          />
        </div>

        <div>
          <label className="block font-medium mb-1">State of Residence</label>
          <input
            type="text"
            name="state"
            required
            value={formData.state}
            onChange={handleChange}
            className="w-full border px-4 py-2 rounded-md focus:outline-none focus:ring focus:border-blue-500"
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Branch</label>
          <input
            type="text"
            name="branch"
            required
            value={formData.branch}
            onChange={handleChange}
            className="w-full border px-4 py-2 rounded-md focus:outline-none focus:ring focus:border-blue-500"
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Text Testimony</label>
          <textarea
            name="message"
            rows={4}
            required
            value={formData.message}
            onChange={handleChange}
            className="w-full border px-4 py-2 rounded-md focus:outline-none focus:ring focus:border-blue-500"
          ></textarea>
        </div>

        <div>
          <label className="block font-medium mb-1">Video Testimony (optional)</label>
          <label htmlFor="video-upload" className="flex items-center gap-2 cursor-pointer bg-none  border border-gray-300 rounded-md px-4 py-2 flex-shrink w-[40%] hover:bg-gray-800 transition">
            <FaRegFile className="text-xl text-gray-300" />
            <span>{formData.video ? formData.video.name : "Choose video file..."}</span>
            <input
              id="video-upload"
              type="file"
              name="video"
              accept="video/*"
              onChange={handleFileChange}
              className="hidden"
            />
          </label>
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
