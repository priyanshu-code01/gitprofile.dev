import { useState } from 'react'
import ProfileViewer from './components/ProfileViewer'
import NavButton from './components/NavButton'
import RepoExplorer from './components/RepoExplorer'

const App = () => {

  const [activeTab, setActiveTab] = useState('profile')
  return (
    <div className='h-screen flex flex-col overflow-hidden'>
      <nav className="bg-gray-900 border-b border-gray-800 sticky top-0 z-50 shrink-0">
        <div className="flex justify-between items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <h1 className="text-xl font-bold text-white">Github Explorer</h1>
          <div className="flex gap-4">
            <NavButton onClick={() => setActiveTab('profile')} isActive={activeTab === 'profile'} >Profile Viewer</NavButton>
            <NavButton onClick={() => setActiveTab('repos')} isActive={activeTab === 'repos'} >Repo Explorer</NavButton>
          </div>
        </div>
      </nav>
      <main className="flex-1 overflow-auto">
    {activeTab === 'profile' ? <ProfileViewer /> : <RepoExplorer />}
      </main>
    </div>
  )
}

export default App
