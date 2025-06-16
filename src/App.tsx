import React from 'react'
import { DataDisplay } from './components/DataDisplay'
import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <header className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            React + Vite + Serverless Functions
          </h1>
          <p className="text-gray-600">
            Data loading with Supabase Edge Functions
          </p>
        </header>
        
        <main>
          <DataDisplay />
        </main>
      </div>
    </div>
  )
}

export default App