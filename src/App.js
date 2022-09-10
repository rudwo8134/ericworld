import {Switch,Route} from 'react-router-dom'
import Layout from './Components/Layouts/Layout';
import Homepage from './Pages/Homepage';
import {Helmet} from 'react-helmet'
import { SEO } from './constant/SEO';

function App() {
  return (
    <>
      <Helmet>
        <title>{SEO.title}</title>
        <meta
          name="description"
          content={SEO.description}
        />
        <meta
          name="keywords"
          content={SEO.keyword}
        />
        <meta name="twitter:card" content={SEO.card} />
        <meta name="twitter:site" content={SEO.site} />
        <meta name="twitter:title" content={SEO.title} />
        <meta
          name="twitter:description"
          content={SEO.description}
        />
        <meta name="twitter:image" content={SEO.image} />

        <meta property="og:title" content={SEO.title} />
        <meta property="og:type" content="article" />
        <meta
          property="og:url"
          content={SEO.url}
        />
        <meta property="og:image" content={SEO.image} />
        <meta
          property="og:description"
          content={SEO.description}
        />
        <meta property="og:site_name" content={SEO.title} />
        <meta property="fb:admins" content={SEO.admins} />
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
