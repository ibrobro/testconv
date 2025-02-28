import React from 'react';
import { ComponentProps } from 'react';


export interface MyFloatInputProps extends ComponentProps<'input'>{
  label: string;
  errorMessage?: String | undefined;
};


/**
 * Customized input valid for number (can be float or integer) Only
 */
export default function MyFloatInput({label, value,id, onChange, errorMessage, ...props}: MyFloatInputProps) {
  const [hasError, setHasError] = React.useState<boolean>(false);
  
  // Check error and process input value
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.validity.patternMismatch) {
      setHasError(true);
    } else {
      setHasError(false);
    }
    onChange && onChange(event);
  };

  // Float pattern
  const pattern = '[+\\-]?(?:0|[1-9]\\d*)(?:\\.\\d+)?';
  const errorTextClassname = 
      `text-sm text-red-800 bg-blue-200 h-[20px] ${!hasError && "invisible"}`;
  
  return (
    <div className="relative border my-6 border-blue-200 rounded-sm bg-cool-gray-100 p-2">
      <label className="absolute -top-5 p-2 bg-white z-50 font-medium" htmlFor={id}>
        {label}
      </label>
      <input
        type="text"
        autoComplete="off"
        id={id}
        pattern={pattern}
        value={value !== undefined ? value.toString() : ''}
        onChange={handleChange}
        className="
            focus:outline-none focus:outline-0 focus:border-b focus:[&:not(:invalid)]:border-blue-300
            px-4 py-2 w-full
            text-right 
            tabular-nums  
            invalid:border-red-600 invalid:border-b-2 
            "
        aria-describedby={`${id}-helper-text`}
        {...props}
      />
      <p className={errorTextClassname}>
        {hasError && (errorMessage ? errorMessage : "Please check again..")}
      </p>
    </div>
  );
}