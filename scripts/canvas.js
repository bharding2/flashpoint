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
          src: '',
          note: '',
          color: 'white',
        }, 
        // 1
        81: { // q
          src: '',
          note: '',
          color: 'white',
        },
        // 2
        87: { // w
          src: '',
          note: '',
          color: 'white',
        },
        69: { // e
          src: '',
          note: '',
          color: 'white',
        },
        // 4
        82: { // r
          src: '',
          note: '',
          color: 'white',
        },
        // 5
        84: { // t
          src: '',
          note: '',
          color: 'white',
        },
        // 6
        89: { // y
          src: '',
          note: '',
          color: 'white',
        },
        85: { // u
          src: '',
          note: '',
          color: 'white',
        },
        // 8
        73: { // i
          src: '',
          note: '',
          color: 'white',
        },
        // 9
        79: { // o
          src: '',
          note: '',
          color: 'white',
        },
        80: { // p
          src: '',
          note: '',
          color: 'white',
        },
        // -
        219: { // [
          src: '',
          note: '',
          color: 'white',
        },
        // =
        221: { // ]
          src: '',
          note: '',
          color: 'white',
        },
        // delete
        220: { // \
          src: '',
          note: '',
          color: 'white',
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

