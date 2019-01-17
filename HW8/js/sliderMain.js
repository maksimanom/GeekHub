document.addEventListener('DOMContentLoaded', () => {
  let activeNumber = 2,
    slides = document.getElementsByClassName('selected-date'),
    length = slides.length,
    pickers = document.getElementsByClassName('date-of-performance'),
    prevButton = document.getElementById('arrowLeft'),
    nextButton = document.getElementById('arrowRight'),
    poster = document.getElementById('poster');

  addItemNumbers(slides);
  addItemNumbers(pickers);
  activate(slides, activeNumber);
  activate(pickers, activeNumber);

  document.addEventListener('slide', function (e) {
    activeNumber = e.detail.item;
    console.log(`Activate ${activeNumber} slide`);
    activate(slides, activeNumber);
    activate(pickers, activeNumber);
  }, false);

  function addItemNumbers(items) {
    for (let i = 0; i < items.length; i++) {
      items[i].dataset.itemNumber = i;
    }
  }

  function activate(items, k) {
    for (let i = 0; i < items.length; i++) {
      item = items[i];
      if (i === k) {
        item.classList.add('displayFlex');
        i == 0  ? poster.style.backgroundImage="url(\"./img/preview1.png\")" : console.log();
        i == 1  ? poster.style.backgroundImage="url(\"./img/preview2.png\")" : console.log();
        i == 2  ? poster.style.backgroundImage="url(\"./img/preview3.png\")" : console.log();
        i == 3  ? poster.style.backgroundImage="url(\"./img/preview4.png\")" : console.log();
        i == 4  ? poster.style.backgroundImage="url(\"./img/preview5.png\")" : console.log();
      } else {
        item.classList.remove('displayFlex');
      }
    }
  }

  nextButton.addEventListener('click', function (e) {
    e.preventDefault();
    let i = (activeNumber + 1) % length,
      event = new CustomEvent('slide', { detail: {item: i} });
    document.dispatchEvent(event);
  });

  prevButton.addEventListener('click', function (e) {
    e.preventDefault();
    let i = activeNumber === 0 ? length - 1 : activeNumber - 1,
      event = new CustomEvent('slide', { detail: {item: i} });
    document.dispatchEvent(event);
  });

  for (let item of pickers) {
    item.addEventListener('click', function (e) {
      let event = new CustomEvent('slide', { detail: {item: +this.dataset.itemNumber} });
      document.dispatchEvent(event);
    });
  }
});
