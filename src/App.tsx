import { lazy, Suspense } from 'react'
import Header from './components/layout/Header'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Projects from './components/sections/Projects'
import Contact from './components/sections/Contact'

const SpinningCube = lazy(() => import('./components/3d/SpinningCube'))

function App() {
  return (
    <div className="bg-slate-900 text-white">
      <Header />
      <div className="fixed inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-96 h-96 opacity-50">
          <Suspense fallback={null}>
            <SpinningCube />
          </Suspense>
        </div>
      </div>
      <div className="relative z-10">
        <Hero />
        <About />
        <Projects />
        <Contact />
      </div>
    </div>
  )
}

export default App
