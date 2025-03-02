import React from 'react';
import { GoogleMap, Libraries, useJsApiLoader } from '@react-google-maps/api';
import { LatLongTypes } from "@testconv/datadefinitions";


const libraries = ['places', 'drawing', 'geometry'];


const containerStyle = {
  width: '100%',
  height: '400px',
}


export interface MyGoogleMapProps {
  center: LatLongTypes
}


/**
 * Google Map's Provider
 * @param param0 
 * @returns 
 */
export default function MyGoogleMap({ center }: MyGoogleMapProps) {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_API_KEY as string,
    libraries: libraries as Libraries,
  });
  
  const [map, setMap] = React.useState(null);

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds({...center});
    map.fitBounds(bounds);

    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])
  
  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={10}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      {/* Child components, such as markers, info windows, etc. */}
      <></>
    </GoogleMap>
  ) : (
    <></>
  )
}
                                                                                                                                