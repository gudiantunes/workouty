import { BrowserRouter as Router } from 'react-router-dom';
import { StyledApp } from './components.styled/App/App';
import GlobalStyle from './GlobalStyle';
import PageContentRouter from './routes/routes';

function App() {
  return (
    <StyledApp>
      <GlobalStyle/>
      <Router>
        <PageContentRouter />
      </Router>
    </StyledApp>
  );
}

export default App;
