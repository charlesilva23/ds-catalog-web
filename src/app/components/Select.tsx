import React, { ReactNode } from 'react';

interface SelectProps {
  description?: string,
  className?: string,
  children: ReactNode,
  onChange?: (value: string) => void,
}

const Select: React.FC<SelectProps> = ({ description, className, children, onChange }) => {

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
  );
};

export default Select;
