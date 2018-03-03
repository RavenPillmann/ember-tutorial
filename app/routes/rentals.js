import Route from '@ember/routing/route';

export default Route.extend({
	// Route handlers are responsible for loading data and templates. Here we'll use the model function,
	// which is a hook that has ember calling the data for us.

	model() {
		// Interact with the store like this to get data back, the store is passed into all routes and controllers
		// Calling findAll will use the adapter to try and get data from /api/rentals
		return this.get('store').findAll('rental');	
	}
});
