/*
 * crmComunicacion
 * https://github.com/kbardi/crmComunicacion
 *
 * Copyright (c) 2015 kbardi
 * Licensed under the MIT license.
 */

(function($) {

  // Collection method.
  $.fn.crmComunicacion = function() {
    return this.each(function(i) {
      // Do something awesome to each selected element.
      $(this).html('awesome' + i);
    });
  };

  // Static method.
  $.crmComunicacion = function(options) {
    // Override default options with passed-in options.
    options = $.extend({}, $.crmComunicacion.options, options);
    // Return something awesome.
    return 'awesome' + options.punctuation;
  };

  // Static method default options.
  $.crmComunicacion.options = {
    punctuation: '.'
  };

  // Custom selector.
  $.expr[':'].crmComunicacion = function(elem) {
    // Is this element awesome?
    return $(elem).text().indexOf('awesome') !== -1;
  };

}(jQuery));
