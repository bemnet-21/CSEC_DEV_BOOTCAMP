import React from 'react'
import Header from './components/Header'
import AddTask from './components/AddTask'
import StatusCard from './components/StatusCard'

const App = () => {
  return (
    <section className='flex flex-col gap-y-4 w-full'>
      <Header />
      <AddTask />
      <div className='grid grid-cols-1 gap-y-3 gap-x-3 border border-green-500 mx-auto sm:grid-cols-2 lg:grid-cols-3'>
        <StatusCard label='Active' count={2} />
        <StatusCard label='Completed' count={2} />
        <StatusCard label='Total' count={2} />
      </div>
    </section>
  )
}

export default App
