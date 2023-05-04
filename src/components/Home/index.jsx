import CryptoSection from './CryptoSection'
import FirstFold from './FirstFold'
import OwnBank from './OwnBank'
import QuestionSection from './QuestionSection'
import SecondFold from './SecondFold'
import StoriesSection from './StoriesSection'
import TeamSection from './TeamSection'
import UserSaySection from './UserSaySection'

const LandingPage = () => {
  return (
    <>
      <OwnBank />
      <FirstFold/>
      <CryptoSection />
      <SecondFold/>
      <UserSaySection />
      <TeamSection/>
      <StoriesSection/>
      <QuestionSection/>
    </>
  )
}

export default LandingPage
