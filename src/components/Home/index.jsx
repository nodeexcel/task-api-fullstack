import React from 'react'
import OwnBank from './OwnBank'
import TokenSection from './TokenSection'
import VideoSection from './VideoSection'
import CryptoSection from './CryptoSection'
import TransactionSection from './TransactionSection'
import UserSaySection from './UserSaySection'
import StoriesSection from './StoriesSection'
import QuestionSection from './QuestionSection'
import TeamSection from './TeamSection'
import Gallery from './Gallery'

const LandingPage = () => {
  return (
    <div>
      <Gallery/>
      <OwnBank />
      <VideoSection />
      <TokenSection />
      <CryptoSection />
      <TransactionSection />
      <UserSaySection />
      <TeamSection/>
      <StoriesSection/>
      <QuestionSection/>
    </div>
  )
}

export default LandingPage
