// Ember data is a library that helps with data persistence. We must define a model that has the shape of our data
import DS from 'ember-data';

// Ember data requires us to extend the DSModel
export default DS.Model.extend({
	// DS.attr is a way to define attributes on a DSModel. We can pass in the attribute type (string, number, boolean, date) and a defaultValue
	title: DS.attr(),
	owner: DS.attr(),
	city: DS.attr(),
	category: DS.attr(),
	image: DS.attr(),
	bedrooms: DS.attr(),
	description: DS.attr()
});
