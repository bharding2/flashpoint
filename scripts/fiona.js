window.launchFIONA = function(name, titleSections, parentEl) {
  console.log(`${name} has entered the building`);

  titleSections.forEach((ele, idx) => {
    setTimeout(() => {
      ele.className = `${name}-color-${idx % 2}`;
    }, idx * 50);
  });

  window.createContainers(name, parentEl);
};
