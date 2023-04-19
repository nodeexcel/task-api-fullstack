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
import ChatPaySection from './ChatPaySection'

const LandingPage = () => {
  return (
    <>
      <OwnBank />
      <VideoSection />
      {/* <Gallery/> */}
      <TokenSection />
      <CryptoSection />
      <TransactionSection />
      <ChatPaySection/>
      <UserSaySection />
      <TeamSection/>
      <StoriesSection/>
      <QuestionSection/>
      
    </>
  )
}

export default LandingPage
