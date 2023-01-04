import { RecoilRoot } from 'recoil';
import GlobalStyle from './Globalstyle';
import Main from './pages/Main';

const App = () => {
  return (
    <RecoilRoot>
      <GlobalStyle />
      <Main />
    </RecoilRoot>
  );
};

export default App;
