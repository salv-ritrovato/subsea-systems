import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { MotionConfig } from 'framer-motion'
import Layout from './components/layout/Layout'
import HomePage from './pages/HomePage'
import EngineeringPage from './pages/EngineeringPage'
import DeepOceanPage from './pages/DeepOceanPage'
import NotFoundPage from './pages/NotFoundPage'
import FleetUnitPage from './pages/FleetUnitPage'

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/engineering" element={<EngineeringPage />} />
          <Route path="/deep-ocean" element={<DeepOceanPage />} />
          <Route path="/fleet/:slug" element={<FleetUnitPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </MotionConfig>
  )
}
