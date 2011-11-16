
/**
 * Model component of the Model View Controller implementation
 * @param {Object=} data Initial data for the model
 * @constructor
 */
com.nowradio.website.Model = function( data ) {
	
	/**
	 * Dispatched when the time is updated
	 * @type {com.nowradio.Event}
	 */
	this.onTimeChanged = new com.nowradio.Event( this );
	
	/**
	 * @private
	 * The data stored in this Model
	 * @type {Object}
	 */
	this._data = data || {};
}

/**
 * @return {Date} The current time.
 */
com.nowradio.website.Model.prototype.getTime = function() {
	return this._data.time;
}

/**
 * @param {Date} time The current time
 */
com.nowradio.website.Model.prototype.setTime = function( time ) {
	this._data.time = time;
	this.onTimeChanged.notify( time );
}