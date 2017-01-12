'use strict';

const DOM = require('../../util/dom');

/**
 * A `LogoControl` is a control that adds the Mapbox watermark
 * to the map as required by the [terms of service](https://www.mapbox.com/tos/) for Mapbox
 * vector tiles and core styles.
 *
 * @implements {IControl}
**/

class LogoControl {

    onAdd() {
        this._container = DOM.create('div', 'mapboxgl-ctrl');
        const anchor = DOM.create('a', 'mapboxgl-ctrl-logo');
        anchor.target = "_blank";
        anchor.href = "https://www.mapbox.com/";
        anchor.setAttribute("aria-label", "Mapbox logo");
        this._container.appendChild(anchor);
        return this._container;
    }

    onRemove() {
        this._container.parentNode.removeChild(this._container);
    }

    getDefaultPosition() {
        return 'bottom-left';
    }
}


module.exports = LogoControl;
