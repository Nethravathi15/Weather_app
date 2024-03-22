export const formatDate = (timestamp) => {
    const dateObj = new Date(timestamp);
  
    // Get the date
    const date = dateObj.toLocaleDateString(); // Change the date format if needed
  
    // Get the day
    const options = { weekday: 'long' };
    const day = dateObj.toLocaleDateString(undefined, options); // Change the locale if needed
  
    // Get the time
    const time = dateObj.toLocaleTimeString(); // Change the time format if needed
  
    return { date, day, time };
  };
  