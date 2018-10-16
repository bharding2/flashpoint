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
          note: new Audio('./assets/piano/middle_c.mp3'),
          color: 'white',
        }, 
        49: { // 1
          note: new Audio('./assets/piano/mid_c_sharp.mp3'),
          color: 'black',
        },
        81: { // q
          note: new Audio('./assets/piano/middle_d.mp3'),
          color: 'white',
        },
        50: { // 2
          note: new Audio('./assets/piano/mid_d_sharp.mp3'),
          color: 'black',
        },
        87: { // w
          note: new Audio('./assets/piano/middle_e.mp3'),
          color: 'white',
        },
        69: { // e
          note: new Audio('./assets/piano/middle_f.mp3'),
          color: 'white',
        },
        52: { // 4
          note: new Audio('./assets/piano/mid_f_sharp.mp3'),
          color: 'black',
        },
        82: { // r
          note: new Audio('./assets/piano/middle_g.mp3'),
          color: 'white',
        },
        53: { // 5
          note: new Audio('./assets/piano/mid_g_sharp.mp3'),
          color: 'black',
        },
        84: { // t
          note: new Audio('./assets/piano/middle_a.mp3'),
          color: 'white',
        },
        54: { // 6
          note: new Audio('./assets/piano/mid_a_sharp.mp3'),
          color: 'black',
        },
        89: { // y
          note: new Audio('./assets/piano/middle_b.mp3'),
          color: 'white',
        },
        85: { // u
          note: new Audio('./assets/piano/high_c.mp3'),
          color: 'white',
        },
        56: { // 8
          note: new Audio('./assets/piano/high_c_sharp.mp3'),
          color: 'black',
        },
        73: { // i
          note: new Audio('./assets/piano/high_d.mp3'),
          color: 'white',
        },
        57: { // 9
          note: new Audio('./assets/piano/high_d_sharp.mp3'),
          color: 'black',
        },
        79: { // o
          note: new Audio('./assets/piano/high_e.mp3'),
          color: 'white',
        },
        80: { // p
          note: new Audio('./assets/piano/high_f.mp3'),
          color: 'white',
        },
        189: { // -
          note: new Audio('./assets/piano/high_f_sharp.mp3'),
          color: 'black',
        },
        219: { // [
          note: new Audio('./assets/piano/high_g.mp3'),
          color: 'white',
        },
        187: { // =
          note: new Audio('./assets/piano/high_g_sharp.mp3'),
          color: 'black',
        },
        221: { // ]
          note: new Audio('./assets/piano/high_a.mp3'),
          color: 'white',
        },
        8: { // delete (backspace)
          note: new Audio('./assets/piano/high_a_sharp.mp3'),
          color: 'black',
        },
        220: { // 
          note: new Audio('./assets/piano/high_b.mp3'),
          color: 'white',
        }
      };

      let topRow = [
        {
          key: keys[9],
          size: 'end'
        },
        {
          key: keys[49],
          size: 'black-key'
        },
        {
          key: keys[81],
          size: 'mid'
        },
        {
          key: keys[50],
          size: 'black-key'
        },
        {
          key: keys[87],
          size: 'end'
        },
        {
          key: keys[69],
          size: 'end'
        },
        {
          key: keys[52],
          size: 'black-key'
        },
        {
          key: keys[82],
          size: 'mid'
        },
        {
          key: keys[53],
          size: 'black-key'
        },
        {
          key: keys[84],
          size: 'mid'
        },
        {
          key: keys[54],
          size: 'black-key'
        },
        {
          key: keys[89],
          size: 'end'
        },
        {
          key: keys[85],
          size: 'end'
        },
        {
          key: keys[56],
          size: 'black-key'
        },
        {
          key: keys[73],
          size: 'mid'
        },
        {
          key: keys[57],
          size: 'black-key'
        },
        {
          key: keys[79],
          size: 'end'
        },
        {
          key: keys[80],
          size: 'end'
        },
        {
          key: keys[189],
          size: 'black-key'
        },
        {
          key: keys[219],
          size: 'mid'
        },
        {
          key: keys[187],
          size: 'black-key'
        },
        {
          key: keys[221],
          size: 'mid'
        },
        {
          key: keys[8],
          size: 'black-key'
        },
        {
          key: keys[220],
          size: 'end'
        }
      ];

      let bottomRow = [
        {
          key: keys[9],
          size: 'white-key'
        },
        {
          key: keys[81],
          size: 'white-key'
        },
        {
          key: keys[87],
          size: 'white-key'
        },
        {
          key: keys[69],
          size: 'white-key'
        },
        {
          key: keys[82],
          size: 'white-key'
        },
        {
          key: keys[84],
          size: 'white-key'
        },
        {
          key: keys[89],
          size: 'white-key'
        },
        {
          key: keys[85],
          size: 'white-key'
        },
        {
          key: keys[73],
          size: 'white-key'
        },
        {
          key: keys[79],
          size: 'white-key'
        },
        {
          key: keys[80],
          size: 'white-key'
        },
        {
          key: keys[219],
          size: 'white-key'
        },
        {
          key: keys[221],
          size: 'white-key'
        },
        {
          key: keys[220],
          size: 'white-key'
        }
      ];

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

