import React from 'react'

const Button = ({ label, iconURL }) => {
  return (
    <button>
        {label}

        <img src={iconURL} alt="Button icon" />
    </button>
  )
}

export default Button