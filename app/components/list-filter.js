import Component from '@ember/component';

export default Component.extend({
	classNames: ['list-filter'],
	value: '',

	init() {
		this._super(...arguments);
		// Initialize the filter function on nothing and set the results to results
		this.get('filter')('').then((allResults) => {
			this.set('results', allResults.results);
		});
	},

	actions: {
		handleFilterEntry() {
			// This is the value of the component
			let filterInputValue = this.get('value');
			// We'll define filter in the controller
			let filterAction = this.get('filter');
			// results is what we yield in the rental-listing template
			filterAction(filterInputValue).then((filterResults) => {
				if (filterResults.query === this.get('value')) {
					this.set('results', filterResults.results);
				}
			});
		}
	}
});
