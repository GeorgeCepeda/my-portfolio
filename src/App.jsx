import { useState } from 'react'
import {Route, 
  createBrowserRouter, 
  createRoutesFromElements, 
  RouterProvider} from 'react-router-dom'
import MainLayout from './layout/MainLayout'
import Homepage from './pages/Homepage'
import NotFoundPage from './pages/NotFoundPage'
import UnderConstructionPage from './pages/UnderConstructionPage'
import AboutMePage from './pages/AboutMePage'
import SkillsPage from './pages/SkillsPage'
import ProjectsPage from './pages/ProjectsPage'
import ProjectPage from './pages/ProjectPage'
import ContactMePage from './pages/ContactMePage'
import ExperiencesPage from './pages/ExperiencesPage'

function App() {
  const [count, setCount] = useState(0)

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainLayout />}>
        <Route index element={<Homepage /> } />
        <Route path='/about' element={<AboutMePage />} />
        <Route path='/projects' element={<ProjectsPage />} />
        <Route path='/project/:index' element={<ProjectPage/> } />
        <Route path='/skills' element={<SkillsPage />} />
        <Route path='/experience' element= {<ExperiencesPage /> } />
        <Route path='/contact' element={<ContactMePage />} />
        <Route path='*' element={ <NotFoundPage /> } />
      </Route>
    )
  )

  return <RouterProvider router={router}/>
}

export default App
