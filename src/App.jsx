import React from 'react'
import Hero from './components/Hero'
import Journal from './components/Journal'
import data from './data'
// import './App.css'

function App() {
  const dataJournal = data.map((item) => {
    return (
        <Journal 
        key={item.id}
        {...item}
        />
    )
})
  return (
    <div>
            <Hero />
            {dataJournal}
        </div>
  )
}

export default App
