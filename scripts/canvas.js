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
        49: { // 1
          src: '',
          note: '',
          color: 'black',
        },
        81: { // q
          src: '',
          note: '',
          color: 'white',
        },
        50: { // 2
          src: '',
          note: '',
          color: 'black',
        },
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
        52: { // 4
          src: '',
          note: '',
          color: 'black',
        },
        82: { // r
          src: '',
          note: '',
          color: 'white',
        },
        53: { // 5
          src: '',
          note: '',
          color: 'black',
        },
        84: { // t
          src: '',
          note: '',
          color: 'white',
        },
        54: { // 6
          src: '',
          note: '',
          color: 'black',
        },
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
        56: { // 8
          src: '',
          note: '',
          color: 'black',
        },
        73: { // i
          src: '',
          note: '',
          color: 'white',
        },
        57: { // 9
          src: '',
          note: '',
          color: 'black',
        },
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
        189: { // -
          src: '',
          note: '',
          color: 'black',
        },
        219: { // [
          src: '',
          note: '',
          color: 'white',
        },
        187: { // =
          src: '',
          note: '',
          color: 'black',
        },
        221: { // ]
          src: '',
          note: '',
          color: 'white',
        },
        8: { // delete (backspace)
          src: '',
          note: '',
          color: 'black',
        },
        220: { // \
          src: '',
          note: '',
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

