"use client";
import AnimatedGridBackground from '@/components/animatingBackground'
import React from 'react'
import SpeakerCard from '@/components/SpeakerCard'
import { SpeakerType } from '@/components/speakerData'
import { speakers } from '@/components/speakerData'
import { useRouter } from 'next/navigation'


export default function page() {
  const router = useRouter();
  
  return (
    <>
      <AnimatedGridBackground/>
      <div className="flex flex-col items-center justify-center min-h-screen py-12 px-4">
        <div className="w-full max-w-6xl bg-white p-8 rounded-xl shadow-lg">
          <h1 className="text-3xl font-bold text-center mb-12 text-gray-800">Our Speakers</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
            {speakers.map((speaker: SpeakerType) => (
              <div key={speaker.id} onClick={() => {speaker.name!="Shuvra S. Bhattacharya"?router.push(`/speakers/${speaker.name}`):null}} style={{ cursor: 'pointer' }}>
                <SpeakerCard speaker={speaker} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}