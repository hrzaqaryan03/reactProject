import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
const Button = ({title , id}) => {
  
  const navigate = useNavigate()

  const handleClick = () => {
    navigate("/leaveRequest" , {state: title})
  }

  return (
    <div>
        <button onClick={handleClick}>
          Записаться
        </button>
    </div>
  )
}

export default Button