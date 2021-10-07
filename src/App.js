import {Switch,Route} from 'react-router-dom'
import Layout from './Components/Layouts/Layout';
import Homepage from './Pages/Homepage';

function App() {
  return (
   <>
   <Layout>
      <Switch>
        <Route exact path="/" render={()=><Homepage/>}/>
      </Switch>
   </Layout>
   </>
  );
}

export default App;
