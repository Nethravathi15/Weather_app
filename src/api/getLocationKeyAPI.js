const getLocationKey = async (latitude, longitude, apiKey) => {
    const url = `http://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=${apiKey}&q=${latitude},${longitude}`;
    
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Failed to fetch location key');
      }
      const data = await response.json();
      return data.Key; // Assuming the location key is returned as 'Key'
    } catch (error) {
      throw error;
    }
  };
  
  export default getLocationKey;
  