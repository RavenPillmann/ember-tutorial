import Route from '@ember/routing/route';

export default Route.extend({
	// beforeModel is an example of a lifetime hook
	// Lifetime hooks are special functions that occur at different times of the
	// route handler's lifetime. In this case, we are calling rentals before 
	// data loads by using the beforeModel lifetime hook
	beforeModel() {
		this.replaceWith('rentals');
	}
});
