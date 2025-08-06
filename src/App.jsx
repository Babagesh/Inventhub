import { useRoutes } from 'react-router-dom'
import TopNav from './components/TopNav'
import Home from './pages/Home'
import Edit from './pages/Edit'
import Create from './pages/Create'

export default function App()
{
  const element = useRoutes([
    {
      path :  '/',
      element : <Home />
    },
    {
      path : '/edit/:id',
      element: <Edit />
    },
    {
      path : '/create',
      element: <Create />
    }
  ])

  return (
    <div className = 'App'>
      <TopNav />
      {element}
    </div>
  );
}