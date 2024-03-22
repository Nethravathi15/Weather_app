export const getLocationAPI = () => {
  return new Promise((resolve, reject) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        position => {
          const { latitude, longitude } = position.coords;
          resolve({ latitude, longitude, error: null });
        },
        error => {
          reject({ latitude: null, longitude: null, error: error.message });
        }
      );
    } else {
      reject({ latitude: null, longitude: null, error: 'Geolocation is not supported by this browser.' });
    }
  });
};
