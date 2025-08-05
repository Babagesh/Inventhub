import { useRoutes } from 'react-router-dom'
import TopNav from './components/TopNav'
export default function App()
{
  const element = useRoutes([

  ])

  return (
    <div className = 'App'>
      <TopNav />
      {element}
    </div>
  );
}