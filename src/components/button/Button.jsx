import React from 'react'
import { Link } from 'react-router-dom'

const Button = () => {
  return (
    <div>
        <button>
            <Link to={"/leaveRequest"}>Записаться</Link>
        </button>
    </div>
  )
}

export default Button