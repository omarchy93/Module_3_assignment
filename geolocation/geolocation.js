function getCurrentLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
        function(position) {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;
          document.write('Latitude:', latitude);
          document.write('Longitude:', longitude);
        },
        function(error) {
          document.error('Error getting location:', error);
        }
      );
    } else {
      document.error('Geolocation is not supported by this browser.');
    }
  }

  getCurrentLocation();
  