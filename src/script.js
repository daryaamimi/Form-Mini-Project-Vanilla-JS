const nameEL = document.getElementById("fname");
const emailEl = document.getElementById("femail");
const mainImgEl = document.getElementById("fmain-image");
const galleryEl = document.getElementById("fgallery");
const forms = document.querySelectorAll(".needs-validation");

/* Form part */
const fieldOne = document.getElementById(`field-one`);

/* Images part */
const fieldTwo = document.getElementById(`field-two`);

/* Form validation */

Array.prototype.slice.call(forms).forEach(function (form) {
  form.addEventListener(
    "submit",
    function (event) {
      if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      }

      form.classList.add("was-validated");
    },
    false
  );
});

/* Over Carousel Gallery */
function displayingOverCarouselGallery() {
  const galleryConSecond = document.getElementById(`first-row`);

  /* Whole Container */
  const wholeCon = document.createElement(`div`);
  wholeCon.id = `carouselExampleIndicators`;
  wholeCon.classList.add(`carousel`, `slide`);
  wholeCon.setAttribute(`data-bs-interval`, `false`);
  wholeCon.setAttribute(`style`, `margin-left: 61px`);

  /* Indicators */
  const indicators = document.createElement(`div`);
  indicators.className = `carousel-indicators`;
  for (let i = 0; i < galleryEl.files.length; i++) {
    const button = document.createElement(`button`);
    button.setAttribute(`type`, `button`);

    if (i === 0) {
      button.classList.add(`active`);
      button.setAttribute(`aria-current`, `true`);
    }

    button.setAttribute(`data-bs-target`, `#carouselExampleIndicators`);
    button.setAttribute(`data-bs-slide-to`, i);
    button.setAttribute(`aria-label`, `Slide ${i + 1}`);
    indicators.appendChild(button);
  }

  /* Appending indicators to the whole container */
  wholeCon.appendChild(indicators);

  /* Inner COntainer */
  const innerCon = document.createElement("div");
  innerCon.className = `carousel-inner`;

  /* Making Images Gallery */
  for (let i = 0; i < galleryEl.files.length; i++) {
    /* Container of each image */
    const divCon = document.createElement(`div`);
    if (i === 0) divCon.classList.add(`carousel-item`, `active`);
    else divCon.classList.add(`carousel-item`);

    /* Image */
    const imgEl = document.createElement(`img`);
    imgEl.classList.add(`mainImgStyle`);
    const url = URL.createObjectURL(galleryEl.files[i]);
    imgEl.setAttribute(`src`, url);
    imgEl.setAttribute(`alt`, `slide ${i + 1}`);

    /* Append each image to each container */
    divCon.appendChild(imgEl);

    /* Append each container to the inner container */
    innerCon.appendChild(divCon);
  }

  /* Append inner container to the whole container */
  wholeCon.appendChild(innerCon);

  /* Check number of images gallery for adding button */
  if (innerCon.children.length > 1) {
    /* Making previous button */
    const prevBtn = document.createElement(`button`);
    prevBtn.classList.add(`carousel-control-prev`);
    prevBtn.setAttribute(`type`, `button`);
    prevBtn.setAttribute(`data-bs-target`, `#carouselExampleIndicators`);
    prevBtn.setAttribute(`data-bs-slide`, `prev`);

    const firstSpan = document.createElement(`span`);
    firstSpan.classList.add(`carousel-control-prev-icon`);
    firstSpan.setAttribute(`aria-hidden`, `true`);

    prevBtn.appendChild(firstSpan);

    const secondSpan = document.createElement(`span`);
    secondSpan.classList.add(`visually-hidden`);
    secondSpan.innerHTML = `Previous`;

    prevBtn.appendChild(secondSpan);

    wholeCon.appendChild(prevBtn);

    /* Making next button */
    const nextBtn = document.createElement(`button`);
    nextBtn.classList.add(`carousel-control-next`);
    nextBtn.setAttribute(`type`, `button`);
    nextBtn.setAttribute(`data-bs-target`, `#carouselExampleIndicators`);
    nextBtn.setAttribute(`data-bs-slide`, `next`);

    const thirdSpan = document.createElement(`span`);
    thirdSpan.classList.add(`carousel-control-next-icon`);
    thirdSpan.setAttribute(`aria-hidden`, `true`);

    nextBtn.appendChild(thirdSpan);

    const fourthSpan = document.createElement(`span`);
    fourthSpan.classList.add(`visually-hidden`);
    fourthSpan.innerHTML = `Next`;

    nextBtn.appendChild(fourthSpan);

    wholeCon.appendChild(nextBtn);
  }

  galleryConSecond.appendChild(wholeCon);
}

document.querySelector("form").addEventListener("submit", function (event) {
  event.preventDefault();

  //check if there aren't any empty field
  if (
    nameEL.length !== 0 &&
    emailEl.length !== 0 &&
    mainImgEl.files.length !== 0
  ) {
    /* Validation */
    if (
      isNaN(nameEL.value) &&
      (document.getElementById(`ftel`).value.length === 0 ||
        isNaN(document.getElementById(`ftel`).value) === false) &&
      (document.getElementById(`fzip-code`).value.length === 0 ||
        isNaN(document.getElementById(`fzip-code`).value) === false)
    ) {
      /*       //divide page to 2 col when enter the details
      fieldOne.className = "col-sm-5";

      //creating img element
      const mainImgCon = document.createElement("img");
      mainImgCon.id = "mainImgCon";

      const galleryConFirst = document.createElement("div");
      galleryConFirst.id = `first-row`;

      fieldTwo.appendChild(galleryConFirst);

      //remove the last main img
      if (document.querySelectorAll(`#first-row`).length > 1) {
        fieldTwo.removeChild(document.querySelectorAll(`#first-row`)[0]);
      }

      //send address of img to gallery container
      const [file] = mainImgEl.files;
      if (file) {
        mainImgCon.src = URL.createObjectURL(file);
      }

      //append main img container to gallery container
      galleryConFirst.appendChild(mainImgCon);

      displayingOverCarouselGallery();

      if (document.querySelector(`.carousel-inner`).children.length === 0) {
        galleryConFirst.style.height = `350px`;
      }
 */
      event.preventDefault();

      /* Go to another page */
      window.location.href = "src/success.html";
    } else if (isNaN(nameEL.value) === false) {
      alert(`لطفا برای نام فقط حروف وارد کنید`);
    }
    if (isNaN(document.getElementById(`ftel`).value)) {
      alert(`لطفا برای شماره تلفن فقط عدد وارد کنید`);
    }
    if (isNaN(document.getElementById(`fzip-code`).value)) {
      alert(`لطفا برای کد پستی فقط عدد وارد کنید`);
    }
  }
});
