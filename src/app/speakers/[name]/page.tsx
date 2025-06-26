'use client';

import AnimatedGridBackground from "@/components/animatingBackground"
import React, { useEffect, useState } from "react";
import { SpeakerType, speakers } from "@/components/speakerData";
import { useRouter } from 'next/navigation';
import Image from 'next/image';

interface PageProps {
  params: Promise<{ name: string }> | { name: string };
}

export default function Page({ params }: PageProps) {
  const [speaker, setSpeaker] = useState<SpeakerType | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const loadSpeaker = async () => {
      try {
        // Handle both Promise and direct object cases
        const resolvedParams = await Promise.resolve(params);
        const { name } = resolvedParams;
        
        // Find the speaker by matching the name parameter (case-insensitive, handle URL encoding)
        const decodedName = decodeURIComponent(name).toLowerCase().replace(/[^a-z0-9]/g, '');
        const foundSpeaker = speakers.find((s: SpeakerType) => 
          s.name.toLowerCase().replace(/[^a-z0-9]/g, '').includes(decodedName) ||
          decodedName.includes(s.name.toLowerCase().replace(/[^a-z0-9]/g, ''))
        );

        setSpeaker(foundSpeaker || null);
      } catch (error) {
        console.error('Error loading speaker:', error);
        setSpeaker(null);
      } finally {
        setLoading(false);
      }
    };

    loadSpeaker();
  }, [params]);

  // Loading state
  if (loading) {
    return (
      <>
        <AnimatedGridBackground/>
        <div className="min-h-screen py-12 px-4 flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600 mx-auto"></div>
            <p className="mt-4 text-gray-600">Loading speaker profile...</p>
          </div>
        </div>
      </>
    );
  }

  // Speaker not found
  if (!speaker) {
    return (
      <>
        <AnimatedGridBackground/>
        <div className="min-h-screen py-12 px-4 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Speaker Not Found</h1>
            <p className="text-gray-600 mb-8">The speaker you're looking for doesn't exist.</p>
            <button 
              onClick={() => router.push('/speakers')}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors duration-200 font-medium"
            >
              ← Back to Speakers
            </button>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <AnimatedGridBackground/>
      <div className="min-h-screen py-12 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Speaker Profile Header */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-8">
            <div className="flex flex-col lg:flex-row">
              {/* Speaker Image */}
              <div className="lg:w-1/3 p-8 flex justify-center items-start">
                <div className="w-64 h-64 relative rounded-lg overflow-hidden shadow-md">
                  <Image
                    src={speaker.imageUrl}
                    alt={speaker.name}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
              
              {/* Speaker Details */}
              <div className="lg:w-2/3 p-8">
                <h1 className="text-4xl font-bold text-gray-800 mb-2">
                  {speaker.name.trim()}
                </h1>
                
                {speaker.title && (
                  <div className="mb-6">
                    <h2 className="text-xl font-semibold text-blue-600 mb-2">
                      Session Title:
                    </h2>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      {speaker.title}
                    </p>
                  </div>
                )}
                
                <div className="text-gray-600">
                  <h3 className="text-lg font-semibold mb-3">Professional Background</h3>
                  <div className="text-sm leading-relaxed">
                    <p className="text-gray-700 text-justify">
                      {speaker.bio}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Abstract/About Section */}
          {speaker.about && (
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Abstract
              </h2>
              <div className="text-gray-700 leading-relaxed space-y-4">
                {speaker.about.split('\n').filter(paragraph => paragraph.trim()).map((paragraph, index) => (
                  <p key={index} className="text-justify">
                    {paragraph.trim()}
                  </p>
                ))}
              </div>
            </div>
          )}

          {/* Navigation Back */}
          <div className="mt-8 text-center">
            <button 
              onClick={() => router.push('/speakers')}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors duration-200 font-medium"
            >
              ← Back to Speakers
            </button>
          </div>
        </div>
      </div>
    </>
  );
}