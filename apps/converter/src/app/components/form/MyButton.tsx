import React from 'react';


export interface MyButtonProps extends React.ComponentPropsWithoutRef<"button"> {
  label: string;
  onClick: () => void;
}


/**
 * Customized button
 */
export default function MyButton({label, onClick, ...props}: MyButtonProps) {
  return (
    <div>
      <button 
        onClick={onClick}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        {...props}
      >
        {label}
      </button>
    </div>
  )
}