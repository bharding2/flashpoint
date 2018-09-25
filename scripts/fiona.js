window.launchFIONA = function(name, titleSections, parentEl) {
  console.log('fiona has entered the building');

  titleSections.forEach((ele, idx) => {
    setTimeout(() => {
      ele.className = `fiona-color-${idx % 2}`;
    }, idx * 50);
  });

  let oldContainerEls = parentEl.querySelectorAll('main');

  oldContainerEls.forEach((currentEl) => {
    parentEl.removeChild(currentEl);
  });

  let containerEl = document.createElement('main');
  containerEl.classList.add(`${name}-container`);
  parentEl.appendChild(containerEl);

  window.createMessages(name, containerEl);
  createCanvas(name, containerEl);

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

function createCanvas(name, parentEl) {
  let asideEl = document.createElement('aside');
  asideEl.classList.add(`${name}-canvas`);

  parentEl.appendChild(asideEl);
}