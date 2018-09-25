window.createContainers = function(name, parentEl) {
  let oldContainerEls = parentEl.querySelectorAll('main');

  oldContainerEls.forEach((currentEl) => {
    parentEl.removeChild(currentEl);
  });

  let containerEl = document.createElement('main');
  containerEl.classList.add('container');
  parentEl.appendChild(containerEl);

  window.createMessages(name, containerEl);
  window.createCanvas(name, containerEl);

  let asideEls = document.querySelectorAll('aside');

  asideEls.forEach((asideEl) => {
    let asideOuterClass = asideEl.className.split(' ')[0];

    asideEl.addEventListener('click', (event) => {
      asideEls.forEach((eventEl) => {
        if (eventEl.classList.contains('none')) return eventEl.classList.remove('none');
        if (eventEl.classList.contains('extended')) return eventEl.classList.remove('extended');
        if (eventEl.classList.contains(asideOuterClass)) return eventEl.classList.add('extended');
        eventEl.classList.add('none');
      });
    });
  });
};