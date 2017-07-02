(() => {
function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}


function optimizeEvent(type, obj = window) {
  const name = 'optimized' + capitalizeFirstLetter(type);
  let running = false;

  const func = function() {
    //TODO pass original event along
    if (running) { return; }
    running = true;
    requestAnimationFrame(function() {
      obj.dispatchEvent(new CustomEvent(name));
      running = false;
    });
  };

  obj.addEventListener(type, func);
}

function optimizeResize() {
  optimizeEvent('resize');
}

optimizeResize();
})();
