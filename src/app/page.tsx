import { AnimatedGridBackground } from '@/components/animatingBackground'
import Announcements from '@/components/Announcements'
import Countdown from '@/components/Time'
import HomePage from '@/components/vantaglobe/HomePage'
import React from 'react'

export default function page() {
  return (
    <>
      <HomePage/>
      <Countdown/>
      <AnimatedGridBackground/>
      <Announcements/>
    </>
  )
}
