import React, { useState } from "react";
import MyButton from "./components/form/MyButton";
import ConverterInput from "./converter/input";
import {convertDDToDMS} from '@testconv/functions';
import ConverterOutput from "./converter/output";
import MyGoogleMap from "./components/map/mygooglemap";
import { LatLongTypes } from "@testconv/datadefinitions";


/**
 * DD TO DMS coordinates converter
 * @returns 
 */
export function Converter() {
  const [errorMessage, setErrorMessage] = useState<string | undefined>(undefined);
  const [latDD, setlatDD] = useState<string | undefined>(undefined);
  const [longDD, setlongDD] = useState<string | undefined>(undefined);
  const [latDMS, setlatDMS] = useState<string | undefined>(undefined);
  const [longDMS, setlongDMS] = useState<string | undefined>(undefined);
  const defaultCenter: LatLongTypes = {lat: 14.5667, lng: 121.060204};
  const [currentCenter, setCurrentCenter] = React.useState<LatLongTypes>({...defaultCenter});

  const onDDLatLongChanges = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const id = e.target.id;
    const value = e.target.value;
    if(id === 'latitude') {
      setlatDD(value)
    } else {
      setlongDD(value)
    }
  };

  const doConversion = () => {
    const numLatDD = Number(latDD);
    const numLongDD = Number(longDD); 
    if(isNaN(numLatDD) || isNaN(Number(numLongDD))) {
      setErrorMessage('Please check coordinates again');
      return;
    }
    
    setErrorMessage(undefined);
    
    const latdms = convertDDToDMS(numLatDD);
    const longdms = convertDDToDMS(numLongDD);
    setlatDMS(latdms);
    setlongDMS(longdms);
    setCurrentCenter({lat: numLatDD, lng: numLongDD})
  }


  const doReset = () => {
    setlatDD(undefined);
    setlongDD(undefined);
    setlatDMS(undefined);
    setlongDMS(undefined);
    setCurrentCenter(defaultCenter);
  }

  return (
    <div className="p-4">
      <h2 className="my-4 font-medium text-lime-900">
        Convert Coordinates from "DD" to "DMS" format
      </h2>
      <p className="text-red-400 text-sm min-h-[20px] my-4">
        {errorMessage || ''}
      </p>
      <div className="border border-blue-200 rounded-lg p-5 bg-cool-gray-100">
        <ConverterInput lat={latDD} long={longDD} onChange={onDDLatLongChanges} />
        <div className="flex flex-row gap-4">
          <MyButton label="Convert" onClick={doConversion} />
          <MyButton label="Reset" onClick={doReset} />
        </div>
      </div>
      <div className="mt-1 py-5 bg-cool-gray-100">
        <ConverterOutput latDMS={latDMS} longDMS={longDMS} />
      </div>
      <div>
        <MyGoogleMap 
            center={{...currentCenter}}
        />
      </div>
    </div>
  );
}

export default Converter;
                                      