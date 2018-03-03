import DS from 'ember-data';

export default DS.JSONAPIAdapter.extend({
	// Give our namespace here, this adapter is used to determine how ember will communicate with our backend
	namespace: 'api'
});
