import {Switch,Route} from 'react-router-dom'
import Layout from './Components/Layouts/Layout';
import Homepage from './Pages/Homepage';
import {Helmet} from 'react-helmet'
import CardPicture from './assets/intro/CardPicture.jpg'

function App() {
  return (
    <>
      <Helmet>
        <title>Eric's World</title>
        <meta
          name="description"
          content="Eric's portfolio site. you can get all of info about Eric Shin. Eric Shin is Full-Stack Developer"
        />
        <meta
          name="keywords"
          content="Eric, eric, Portfolio, Full-Stack, Developer, Front-End"
        />
        <meta name="twitter:card" content="Eric's portfolio site" />
        <meta name="twitter:site" content="@EricWorld" />
        <meta name="twitter:title" content="Eric's World" />
        <meta
          name="twitter:description"
          content="Eric's portfolio site. you can get all of info about Eric Shin. Eric Shin is Full-Stack Developer"
        />
        <meta name="twitter:image" content={CardPicture} />

        <meta property="og:title" content="Eric's World" />
        <meta property="og:type" content="article" />
        <meta
          property="og:url"
          content="https://rudwo8134.github.io/ericworld/#/"
        />
        <meta property="og:image" content={CardPicture} />
        <meta
          property="og:description"
          content="Eric's portfolio site. you can get all of info about Eric Shin. Eric Shin is Full-Stack Developer"
        />
        <meta property="og:site_name" content="Eric's World" />
        <meta property="fb:admins" content="rudwo8134" />
      </Helmet>
      <Layout>
        <Switch>
          <Route exact path="/" render={() => <Homepage />} />
        </Switch>
      </Layout>
    </>
  );
}

export default App;
