import React from 'react'
import styled from 'styled-components'
import { Heading, Text, BaseLayout } from 'voidfarm-toolkit'
import useI18n from 'hooks/useI18n'
import Page from 'components/layout/Page'
import FarmStakingCard from 'views/Home/components/FarmStakingCard'
import CakeStats from 'views/Home/components/CakeStats'
import TotalValueLockedCard from 'views/Home/components/TotalValueLockedCard'
import EarnAPYCard from 'views/Home/components/EarnAPYCard'
import EarnAssetCard from 'views/Home/components/EarnAssetCard'
import WinCard from 'views/Home/components/WinCard'
import useTheme from 'hooks/useTheme'
import TwitterCard from './components/TwitterCard'

const Hero = styled.div`
  align-items: center;
  background-image: url('/images/tokens/void.png');
  background-repeat: no-repeat;
  background-position: top center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: auto;
  margin-bottom: 32px;
  padding-top: 116px;
  text-align: center;
  padding-top: 0;
  background-position: left center, right center;
  background-size: contain;

  ${({ theme }) => theme.mediaQueries.lg} {
    background-image: url('/images/tokens/void.png');
    background-position: left center, right center;
    height: 165px;
    padding-top: 0;
    margin-bottom: 5px;
    background-position: left center, right center;
    background-size: contain;
  }
`

const StyledHeading = styled(Heading)`
  background: rgb(2,0,36);
  background: radial-gradient(circle, rgba(2,0,36,1) 5%, rgba(78,6,132,0.9500000683867297) 45%, rgba(202,66,173,1) 90%);
  color: red; 
  opacity: 0.75;
  border-radius: 10px 35px;
  justify-content: center;
  margin-top: 150px;
  -webkit-box-shadow: 3px 3px 14px 2px rgba(186,50,159,0.6); 
  box-shadow: 3px 3px 14px 2px rgba(186,50,159,0.6);
  ${({ theme }) => theme.mediaQueries.lg} {
    margin-top: 15px;
  }
`

const Cards = styled(BaseLayout)`
  align-items: stretch;
  justify-content: stretch;
  margin-bottom: 32px;

  & > div {
    grid-column: span 6;
    width: 100%;
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    & > div {
      grid-column: span 8;
    }
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    & > div {
      grid-column: span 6;
    }
  }
`

const CTACards = styled(BaseLayout)`
  align-items: start;
  margin-bottom: 32px;

  & > div {
    grid-column: span 6;
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    & > div {
      grid-column: span 8;
    }
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    & > div {
      grid-column: span 6;
    }
  }
`

const Home: React.FC = () => {
  const TranslateString = useI18n()
  const { isDark, toggleTheme } = useTheme()

  return (
    <Page>
      <Hero>
        <Heading as="h1" size="xl" mb="24px" color="secondary" fontSize="80px">
          {TranslateString(576, 'VOID Farm')}
        </Heading>
        <Text>{TranslateString(578, 'Face the void.')}</Text>
        <StyledHeading fontSize="35px" mt="15px">
          <Text mr="20px" ml="20px" color={isDark ? '#e0aaff' : '#faf9fa'}>{TranslateString(578, 'Token and farming will be available when our audits are completed')}</Text>  
          <Text mr="20px" ml="20px" color={isDark ? '#e0aaff' : '#faf9fa'}>{TranslateString(578, 'Check our social networks for the lastest news.')}</Text>  
        </StyledHeading>
      </Hero>
      <div>
        <Cards>
          <FarmStakingCard />
          <TwitterCard/>
        </Cards>
        <CTACards>
          <EarnAPYCard />
          {/* <EarnAssetCard /> */}
        </CTACards>
        <Cards>
          <CakeStats />
          <TotalValueLockedCard />
        </Cards>
      </div>
    </Page>
  )
}

export default Home
