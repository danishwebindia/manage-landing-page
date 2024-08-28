const btn = document.querySelector(".menu");
const navigation = document.querySelector(".nav");
const body = document.querySelector("body");

    btn.addEventListener("click", () => {
        navigation.classList.toggle("opened");
        body.classList.toggle("backdrop");
    });

    const slider = new A11YSlider(document.querySelector(".slider"), {
        slidesToShow: 1,
        arrows: true, // arrows enabled 767px and down
        dots: false,
        responsive: {
          240: {
            slidesToShow: 1,
            arrows: false,
            dots:false
          },
          768: {
            slidesToShow: 2,
            arrows: false
          },
          1280: {
            disable: false,
            slidesToShow: 3,
            dots: true // dots enabled 1280px and up
          }
        }
      });