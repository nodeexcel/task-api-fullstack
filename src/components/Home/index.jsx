import React from 'react'
import OwnBank from './OwnBank'
import TokenSection from './TokenSection'
import VideoSection from './VideoSection'
import CryptoSection from './CryptoSection'
import TransactionSection from './TransactionSection'
import ChatPaySection from './ChatPaySection'
import FeaturesSection from './FeaturesSection'
import NewsSection from './NewsSection'
import UserSaySection from './UserSaySection'
import BackedSection from './BackedSection'
import StoriesSection from './StoriesSection'
import PortfolioSection from './PortfolioSection'

const LandingPage = () => {
  return (
    <div>
      <OwnBank />
      <VideoSection />
      <TokenSection />
      <CryptoSection />
      <TransactionSection />
      <ChatPaySection />
      <FeaturesSection />
      <UserSaySection />
      <StoriesSection/>
      <NewsSection/>
      <PortfolioSection/>
    </div>
  )
}

export default LandingPage
