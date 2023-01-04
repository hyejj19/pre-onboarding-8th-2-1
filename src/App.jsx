import { RecoilRoot } from 'recoil';
import GlobalStyle from './style/Globalstyle';
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
