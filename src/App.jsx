import { CategoryList } from './components/Category/CategoryList/CategoryList';
import { Topbar } from './components/Topbar/Topbar';
import { Home } from './pages/Home/Home';

export function App() {
  return (
    <>
      <Topbar />
      <Home />
      <CategoryList />
    </>
  );
};
