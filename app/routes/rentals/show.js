import Route from '@ember/routing/route';

export default Route.extend({
	model(params) {
		// rental_id is available because we included it in the show path in the router
		return this.get('store').findRecord('rental', params.rental_id);
	}
});
