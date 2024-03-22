import React, { useEffect } from 'react';

const TomorrowWeatherWidget = () => {
  useEffect(() => {
    const scriptElement = document.createElement('script');
    scriptElement.src = 'https://www.tomorrow.io/v1/widget/sdk/sdk.bundle.min.js';
    scriptElement.async = true;
    document.body.appendChild(scriptElement);

    return () => {
      document.body.removeChild(scriptElement);
    };
  }, []);

  return (
    <div className="tomorrow"
      data-location-id="INXX0012" // Bangalore location ID
      data-language="EN"
      data-unit-system="METRIC"
      data-skin="light"
      data-widget-type="upcoming"
      style={{ paddingBottom: '22px', position: 'relative' }}
    >
      <a
        href="https://www.tomorrow.io/weather-api/"
        rel="nofollow noopener noreferrer"
        target="_blank"
        style={{ position: 'absolute', bottom: '0', transform: 'translateX(-50%)', left: '50%' }}
      >
        <img
          alt="Powered by the Tomorrow.io Weather API"
          src="https://weather-website-client.tomorrow.io/img/powered-by.svg"
          width="250"
          height="18"
        />
      </a>
    </div>
  );
};

export default TomorrowWeatherWidget;
