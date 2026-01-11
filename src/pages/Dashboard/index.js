import React from 'react'

function Dashboard({isSidebarShow}) {
  return (
    <div className={`content-wrap ${!isSidebarShow ? 'setFull' :''}`}>Dashboard</div>
  )
}

export default Dashboard