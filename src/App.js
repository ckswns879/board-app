import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navigation from './components/Navigation';
import ListPage from './page/ListPage';
import WritePage from './page/WritePage';

function App() {
  return (
<>
<Navigation />
<Routes>
<Route path='/' exact={true} element={<ListPage />} />
<Route path='/write' exactct={true} element={<WritePage />} />
</Routes>
</>
  );
}


export default App;
