import React, { ReactNode } from 'react'

interface SelectProps {
  description?: string,
  className?: string,
  children: ReactNode,
  onChange?: (value: string) => void,
}

const Select = ({ description, className, children, onChange }: SelectProps) => {

  return (
    <select
      className={className}
      defaultValue=""
      onChange={(e) => onChange?.(e.target.value)}
    >
      <option value="" disabled hidden>
        {description}
      </option>
      {children}
    </select>
  )
}

export default Select
