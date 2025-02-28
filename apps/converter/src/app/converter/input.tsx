import MyFloatInput from "../components/form/MyFloatInput";


export interface ConverterInputType{
  lat: string | undefined;
  long: string | undefined;
  onChange: (e: React.ChangeEvent<HTMLInputElement>)=>void;
}


/**
 * 
 * @param param0 
 * @returns 
 */
export default function ConverterInput({lat, long, onChange}: ConverterInputType) {
  
  return (
    <div className="md:grid md:grid-cols-2 md:gap-4 md:items-center">
      <MyFloatInput label="Latitude" id="latitude" name="latitude" value={lat} onChange={onChange}/>
      <MyFloatInput label="Longitude" id="longitude" name="longitude" value={long} onChange={onChange}/>
    </div>
  )
}