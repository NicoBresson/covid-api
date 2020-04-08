import Stats from '../components/Stats';
import CountrySelector from '../components/CountrySelector';
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  html {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
`;

const Page = () => {
  return <div>
    <GlobalStyle/>
      <Stats url='https://covid19.mathdro.id/api/' />
      <CountrySelector />
  </div>
}

export default Page;
