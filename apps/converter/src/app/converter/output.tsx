import ConverterOutputValue from "./outputvalue";


export interface ConverterOutputProps {
  latDMS: string | undefined;
  longDMS: string | undefined;
}


/**
 * 
 */
export default function ConverterOutput({latDMS, longDMS}: ConverterOutputProps) {
  return (
    <div className="md:grid md:grid-cols-2 mt-4 gap-4">
      <ConverterOutputValue title='Latitude DMS' value={latDMS} />
      <ConverterOutputValue  title='Longitude DMS' value={longDMS} />
    </div>
  )
}