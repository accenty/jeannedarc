  /**
  *
  * Plugin by Jan-Gerke Salomon
  * Released under MIT License
  * http://en.wikipedia.org/wiki/MIT_License
  *
  **/
  $.fn.eqHeight = function(removeHeight)  {
    if ($(this).length == 1) return this;

    if (removeHeight) {
      $(this).each(function() {
        var style = $(this).attr('style');

        if (style) {
          style = style.replace(/height:[^;]*;/, '');
          $(this).attr('style', style);
        }
      });
    } else {
      $(this).css('height', 'auto');
    }

    var els        = $(this);
    var startIndex = 0;
    var endIndex   = -1;
    var maxH       = 0;

    for (var i = 0; i < $(this).length; ++i) {

      var cur  = $(this[i]);
      var nxt  = $(this[i + 1]);
      var off1 = cur.offset().top;
      var off2 = (nxt.length) ? nxt.offset().top : false;

      if (cur.outerHeight() > maxH) {
        maxH = cur.outerHeight();
      }

      endIndex++;
      if (off1 !== off2) {
        for (var a = startIndex; a <= endIndex; ++a) {
          els.eq(a).css("height", maxH);
        }
        maxH = 0;
        startIndex = endIndex + 1;
      }

    }

    return this;
  }