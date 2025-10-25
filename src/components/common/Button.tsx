import type { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'danger';
  children: ReactNode;
}

const Button = ({ variant = 'primary', children, ...props }: ButtonProps) => {
  const styles = {
    primary: { backgroundColor: '#007bff' },
    secondary: { backgroundColor: '#6c757d' },
    danger: { backgroundColor: '#dc3545' }
  };

  return (
    <button
      style={{
        padding: '10px 20px',
        color: 'white',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        fontSize: '14px',
        ...styles[variant],
        ...(props.disabled && { backgroundColor: '#ccc', cursor: 'not-allowed' })
      }}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;