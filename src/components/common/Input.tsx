import type { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

const Input = ({ label, error, ...props }: InputProps) => {
  return (
    <div style={{ marginBottom: '15px' }}>
      {label && (
        <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
          {label}
        </label>
      )}
      <input
        style={{
          width: '100%',
          padding: '10px',
          border: `1px solid ${error ? '#dc3545' : '#ddd'}`,
          borderRadius: '4px',
          fontSize: '14px'
        }}
        {...props}
      />
      {error && (
        <span style={{ color: '#dc3545', fontSize: '12px', marginTop: '5px' }}>
          {error}
        </span>
      )}
    </div>
  );
};

export default Input;