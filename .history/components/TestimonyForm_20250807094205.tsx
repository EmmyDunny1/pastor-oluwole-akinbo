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

  const [uploading, setUploading] = useState(false);

  // Replace with your Cloudinary details
  const CLOUD_NAME = "your_cloud_nam";
  const UPLOAD_PRESET = "testimony-uploads";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    let videoUrl = null;
    setUploading(true);

    // Upload video to Cloudinary if present
    if (formData.video) {
      const data = new FormData();
      data.append("file", formData.video);
      data.append("upload_preset", UPLOAD_PRESET);

      try {
        const res = await fetch(`https://api.cloudinary.com/v1_1/${CLOUD_NAME}/video/upload`, {
          method: "POST",
          body: data,
        });
        const result = await res.json();
        videoUrl = result.secure_url;
      } catch (error) {
        alert("Video upload failed. Please try again.");
        setUploading(false);
        return;
      }
    }

    // Here you'd send formData + videoUrl to your backend or database
    console.log({ ...formData, video: videoUrl });

    setSubmitted(true);
    setUploading(false);
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
          <label htmlFor="video-upload" className="flex items-center gap-2 cursor-pointer bg-none  border border-gray-300 rounded-md px-4 py-2 w-[47%] md:w-[37%] hover:bg-gray-800 transition">
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
          className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition disabled:opacity-60"
          disabled={uploading}
        >
          {uploading ? "Uploading..." : "Submit"}
        </button>
      </form>
    </div>
  );
}
