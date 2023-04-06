import React from 'react'
import OwnBank from './OwnBank'
import TokenSection from './TokenSection'
import VideoSection from './VideoSection'
import CryptoSection from './CryptoSection'
import TransactionSection from './TransactionSection'
import ChatPaySection from './ChatPaySection'
import FeaturesSection from './FeaturesSection'

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
    </div>
  )
}

export default LandingPage
