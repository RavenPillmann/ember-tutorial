// Utility files are abstracted pieces of reusable code that can be used anywhere in the app.
// In this case, we're using a utility to work with the google maps api

import EmberObject from '@ember/object';

const google = window.google;

export default EmberObject.extend({

  init() {
    this.set('geocoder', new window.google.maps.Geocoder());
  },

  // Create the map
  createMap(element, location) {
    let map = new google.maps.Map(element, { scrollwheel: false, zoom: 10 });
    this.pinLocation(location, map);
    return map;
  },

  // pin the location
  pinLocation(location, map) {
    this.get('geocoder').geocode({address: location}, (result, status) => {
      if (status === google.maps.GeocoderStatus.OK) {
        let geometry = result[0].geometry.location;
        let position = { lat: geometry.lat(), lng: geometry.lng() };
        map.setCenter(position);
        new google.maps.Marker({ position, map, title: location });
      }
    });
  }
});