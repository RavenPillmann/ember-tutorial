// A javascript file for the rental-listing component. This defines the way the rental-listing component behaves,
// but not how it looks (that's defined in templates/components/rental-listing.hbs)
import Component from '@ember/component';

export default Component.extend({
	// Properties of the component
	isWide: false,

	// The actions hash is an object of functions that can be called on the component
	actions: {
		toggleImageSize() {
			this.toggleProperty('isWide');
		}
	}
});
