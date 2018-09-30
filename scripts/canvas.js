window.createCanvas = function (name, parentEl) {
  let asideEl = document.createElement('aside');
  asideEl.classList.add('canvas');

  let personalCanvas = {
    FIONA: function(canvasEl) {
      // piano
      let pianoEl = document.createElement('figure');
      pianoEl.classList.add('piano');

      let keys = {
        9: { // tab
          row: 'bottom',
          src: '',
          note: '',
          color: '',
        }, 
        81: { // q
          row: 'bottom',
          src: '',
          note: '',
          color: '',
        },
        87: { // w
          row: 'bottom',
          src: '',
          note: '',
          color: '',
        },
        69: { // e
          row: 'bottom',
          src: '',
          note: '',
          color: '',
        },
        82: { // r
          row: 'bottom',
          src: '',
          note: '',
          color: '',
        },
        84: { // t
          row: 'bottom',
          src: '',
          note: '',
          color: '',
        },
        89: { // y
          row: 'bottom',
          src: '',
          note: '',
          color: '',
        },
        85: { // u
          row: 'bottom',
          src: '',
          note: '',
          color: '',
        },
        73: { // i
          row: 'bottom',
          src: '',
          note: '',
          color: '',
        },
        79: { // o
          row: 'bottom',
          src: '',
          note: '',
          color: '',
        },
        80: { // p
          row: 'bottom',
          src: '',
          note: '',
          color: '',
        },
        219: { // [
          row: 'bottom',
          src: '',
          note: '',
          color: '',
        },
        221: { // ]
          row: 'bottom',
          src: '',
          note: '',
          color: '',
        },
        220: { // \
          row: 'bottom',
          src: '',
          note: '',
          color: '',
        }
      };

      canvasEl.appendChild(pianoEl);
    },
    NOAH: function(canvasEl) {
      // rotating cube
      let cubeEl = document.createElement('figure');
      cubeEl.classList.add('cube');

      canvasEl.appendChild(cubeEl);
    },
    STELLA: function(canvasEl) {
      // paint
      let paintEl = document.createElement('figure');
      paintEl.classList.add('paint');

      canvasEl.appendChild(paintEl);
    }
  };

  if (personalCanvas[name]) personalCanvas[name](asideEl);

  parentEl.appendChild(asideEl);
};

