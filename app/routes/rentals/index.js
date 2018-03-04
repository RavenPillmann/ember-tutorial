import Route from '@ember/routing/route';

export default Route.extend({
	model() {
		// Interact with the store like this to get data back, the store is passed into all routes and controllers
		// Calling findAll will use the adapter to try and get data from /api/rentals
		return this.get('store').findAll('rental');	
	}
});
