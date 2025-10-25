import { InputHTMLAttributes, forwardRef } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, ...props }, ref) => {
    return (
      <div style={{ marginBottom: '1rem' }}>
        {label && <label style={{ display: 'block', marginBottom: '0.5rem' }}>{label}</label>}
        <input
          ref={ref}
          style={{
            width: '100%',
            padding: '0.5rem',
            border: `1px solid ${error ? 'red' : '#ddd'}`,
            borderRadius: '4px'
          }}
          {...props}
        />
        {error && <span style={{ color: 'red', fontSize: '0.875rem' }}>{error}</span>}
      </div>
    );
  }
);

export default Input;