console.log("Programmed by: Mausam Baduwal");

let a = document.getElementsByTagName("a");
Array.from(a).forEach((aTag) => {
  aTag.addEventListener("click", (event) => {
    event.preventDefault();
  });
});

const setupSlider = (
  sliderSelector,
  nextSelector,
  prevSelector,
  imagesSelector,
  buttonsSelector
) => {
  let slider = document.querySelector(sliderSelector);
  let right = document.querySelector(nextSelector);
  let left = document.querySelector(prevSelector);
  let images = document.querySelectorAll(imagesSelector);
  let buttons = document.querySelectorAll(buttonsSelector);
  let length = images.length;
  let slideNum = 1;

  const resetBg = () => {
    buttons.forEach((button) => {
      button.style.backgroundColor = "transparent";
    });
  };

  const changeColor = () => {
    resetBg();
    buttons[slideNum - 1].style.backgroundColor = "black";
  };

  const updateSlide = (newSlideNum) => {
    slider.style.transform = `translateX(-${(newSlideNum - 1) * 100}%)`;
    slideNum = newSlideNum;
    changeColor();
  };

  right.addEventListener("click", () => {
    updateSlide(slideNum < length ? slideNum + 1 : 1);
  });

  left.addEventListener("click", () => {
    updateSlide(slideNum > 1 ? slideNum - 1 : length);
  });
};

setupSlider(".slider", ".next", ".prev", ".images", ".buttons");
setupSlider(".slider2", ".next2", ".prev2", ".images2", ".buttons2");


const showHide = (heroContentClass, nextBtn, prevBtn) => {
  let heroContent = document.querySelectorAll(heroContentClass);
  let right = document.querySelector(nextBtn);
  let left = document.querySelector(prevBtn);
  
  right.addEventListener("click", () => {
    heroContent.forEach(content => {
      content.classList.toggle("hide")
      content.classList.toggle("show")
    })
  })
  
  left.addEventListener("click", () => {
    heroContent.forEach(content => {
      content.classList.toggle("hide")
      content.classList.toggle("show")
    })
  })
}

showHide(".hero-content", ".next", ".prev")
showHide(".hero-content2", ".next2", ".prev2")
