import React from 'react'
import type { StatusCardProps } from '../interface'

const StatusCard = ({count, label}:StatusCardProps) => {
  const textColor = (label.toLowerCase() === "completed") ? "text-green-400" : (label.toLowerCase() === "active") ? "text-blue-400" : ""
  return (
    <div className='w-64 h-32 bg-white p-4 flex flex-col justify-between rounded-xl '>
      <h1 className={`font-semibold text-3xl ${textColor}`}>{count}</h1>
      <h2 className='text-xl font-light'>{label}</h2>
    </div>
  )
}

export default StatusCard
