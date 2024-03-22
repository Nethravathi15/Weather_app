// import React, { useState } from 'react';
// import { getLocationAPI } from '../api/geolocationAPI';
// const GeoLocation = () => {
//   const [latitude, setLatitude] = useState(null);
//   const [longitude, setLongitude] = useState(null);
//   const [error, setError] = useState(null);

//   const handleGetLocation = () => {
//     getLocationAPI(setLatitude, setLongitude, setError); // Call the getLocation function
//   };

//   return (
//     <div>
//       <button onClick={handleGetLocation}>Get Location</button>
//       {latitude && longitude && (
//         <p>
//           Latitude: {latitude}, Longitude: {longitude}
//         </p>
//       )}
//       {error && <p>Error: {error}</p>}
//     </div>
//   );
// };

// export default GeoLocation;
