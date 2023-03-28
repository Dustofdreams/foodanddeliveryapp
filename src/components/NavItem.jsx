import React from 'react'

function NavItem({title}) {
  return (
    <div className='mr-[46px] hover:border-b-[2px] border-primary hover:mb-[-2px]'>
        {title}
    </div>
  )
}

export default NavItem