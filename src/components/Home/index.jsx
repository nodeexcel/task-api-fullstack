import ChatPaySection from './ChatPaySection'
import CryptoSection from './CryptoSection'
import FirstFold from './FirstFold'
import OwnBank from './OwnBank'
import QuestionSection from './QuestionSection'
import SecondFold from './SecondFold'
import StoriesSection from './StoriesSection'
import TeamSection from './TeamSection'
import TransactionSection from './TransactionSection'
import UserSaySection from './UserSaySection'

const LandingPage = () => {
  return (
    <>
      <OwnBank />
      {/* <VideoSection /> */}
      {/* <Gallery/> */}
      {/* <TokenSection /> */}
      <FirstFold/>
      {/* <Section1/> */}
      <CryptoSection />
      {/* <TransactionSection />
      <ChatPaySection/> */}
      <SecondFold/>
      <UserSaySection />
      <TeamSection/>
      <StoriesSection/>
      <QuestionSection/>
      
    </>
  )
}

export default LandingPage
