window.launchNOAH = function(name, titleSections, parentEl) {
  console.log('noah has entered the building');

  titleSections.forEach((ele, idx) => {
    setTimeout(() => {
      ele.className = `noah-color-${idx % 2}`;
    }, idx * 50);
  });

  window.createMessages(name, parentEl);
};
