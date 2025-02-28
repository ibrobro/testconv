
export interface ConverterOutputValuesProps {
  title: string | undefined;
  value: string | undefined;
}

/**
 * 
 */
export default function ConverterOutputValue({value, title}: ConverterOutputValuesProps) {
  return (
    <div className="relative border border-blue-200 p-4 rounded-sm mb-4 min-h-[60px]">
      <span className="absolute -top-[12px] px-2 bg-white font-medium">Converted {title}</span>
      <p className="font-bold text-2xl text-blue-900">{value}</p>
    </div>
  )
}