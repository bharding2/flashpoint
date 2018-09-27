window.launchSTELLA = function(name, titleSections, parentEl) {
  console.log(`${name} has entered the building`);

  titleSections.forEach((ele, idx) => {
    setTimeout(() => {
      ele.className = `${name}-color-${idx}`;
    }, idx * 50);
  });

  window.createContainers(name, parentEl);
};
