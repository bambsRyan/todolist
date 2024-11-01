import React from 'react'

export default function HomePage() {
  const status = [
    'Not Started', 'In Progress', 'Completed'
  ]
  return (
    <div className="page border">
      {status.map((item,index) => (
        <div key={index} className="card">
          {item}
        </div>
      ))}
    </div>
  )
}
