'use client';

import { useEffect, useState } from 'react';
import { collection, query, orderBy, onSnapshot } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { motion } from 'framer-motion';
import { Dialog } from '@headlessui/react';
import { FaPlay } from 'react-icons/fa';

// Types
type Testimony = {
  id: string;
  name: string;
  state: string;
  branch: string;
  message?: string;
  videoUrl?: string | null;
  createdAt?: any;
};

export default function TestimoniesPage() {
  const [testimonies, setTestimonies] = useState<Testimony[]>([]);
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  useEffect(() => {
    // 🔹 Listen to all testimonies stored in Firebase
    const q = query(collection(db, 'testimonies'), orderBy('createdAt', 'desc'));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const data: Testimony[] = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as Testimony[];
      setTestimonies(data);
    });
    return () => unsubscribe();
  }, []);

  // Separate videos (Cloudinary URLs stored in Firebase) & text testimonies
  const videoTestimonies = testimonies.filter((t) => t.videoUrl);
  const textTestimonies = testimonies.filter((t) => !t.videoUrl && t.message);

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-10">
      <h1 className="text-3xl font-bold text-center mb-8">
        Celebrating God’s Goodness
      </h1>

      {/* Grid Partition */}
      <div className="grid md:grid-cols-2 gap-8">
        
        {/* 🎥 Video Testimonies */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl shadow-md p-6"
        >
          <h2 className="text-2xl text-gray-950 font-semibold mb-4"> Video Testimonies</h2>
          {videoTestimonies.length === 0 ? (
            <p className="text-gray-500">No video testimonies yet.</p>
          ) : (
            <div className="grid grid-cols-2 gap-4">
              {videoTestimonies.map((t) => (
                <div
                  key={t.id}
                  className="relative group cursor-pointer rounded-xl overflow-hidden shadow"
                  onClick={() => setSelectedVideo(t.videoUrl!)}
                >
                  <video
                    src={t.videoUrl!}
                    className="w-full h-40 object-cover"
                    muted
                  />
                  {/* Overlay Play Button */}
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                    <FaPlay className="w-10 h-10 text-gray-500" />
                  </div>
                </div>
              ))}
            </div>
          )}
        </motion.div>

        {/*  Text Testimonies */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl shadow-md p-6"
        >
          <h2 className="md:text-2xl text-gray-950 text-center font-semibold mb-4">Written Testimonies</h2>
          {textTestimonies.length === 0 ? (
            <p className="text-gray-500">No written testimonies yet.</p>
          ) : (
            <div className="space-y-4 max-h-[500px] overflow-y-auto pr-2">
              {textTestimonies.map((t) => (
                <div
                  key={t.id}
                  className="p-4 border rounded-lg bg-gray-50 shadow-sm hover:shadow transition"
                >
                  <p className="text-gray-800 italic">“{t.message}”</p>
                  <div className="mt-2 text-sm text-gray-600">
                    — {t.name}, {t.state} ({t.branch})
                  </div>
                </div>
              ))}
            </div>
          )}
        </motion.div>
      </div>

      {/* 🎬 Video Modal */}
      <Dialog open={!!selectedVideo} onClose={() => setSelectedVideo(null)} className="relative z-50">
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center p-4">
          <Dialog.Panel className="w-full max-w-3xl bg-black rounded-xl overflow-hidden">
            {selectedVideo && (
              <video src={selectedVideo} controls autoPlay className="w-full h-auto" />
            )}
          </Dialog.Panel>
        </div>
      </Dialog>
    </div>
  );
}
