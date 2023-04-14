import { useEffect, useState } from 'react';

function Gallery() {
  function setupCarousel() {
    const carousel = document.getElementById("carousel-multiple");
    const itemsPerSlide = parseInt(carousel.getAttribute('data-maximum-items-per-slide'));
    const totalItems = carousel.querySelectorAll('.carousel-item').length;
    const reserve = 1;
    const itemsContainer = carousel.querySelector('.carousel-inner');
    const nextBtn = document.getElementById('next-button');

    carousel.addEventListener('slide.bs.carousel', function (e) {
      const it = (itemsPerSlide + reserve) - (totalItems - e.to);

      if (it > 0) {
        for (let i = 0; i < it; i++) {
          const items = carousel.querySelectorAll('.carousel-item');
          const newItem = e.direction === 'left' ? items[i] : items[0];
          itemsContainer.appendChild(newItem);
        }
      }
    });

    // nextBtn.addEventListener('click', function() {
    //   carousel.querySelector('.carousel-control-next').click();
    // });
  }

  useEffect(() => {
    setupCarousel();
  }, [])


  return (
    <>
      <div class="container py-3">
        <div class="p-3 m-n3 overflow-hidden">
          <div id="carousel-multiple" class="carousel slide carousel-multiple" data-ride="carousel"
            data-maximum-items-per-slide="6">
            <div class="row position-relative">
              <div class="row d-flex carousel-inner mx-0">
                <div class="carousel-item col-sm-6 col-md-4 col-lg-3 col-xl-2 active">
                  <div class="p-5 w-100 text-center bg-primary rounded shadow-sm display-1 text-light">
                    1
                  </div>
                </div>
                <div class="carousel-item col-sm-6 col-md-4 col-lg-3 col-xl-2">
                  <div class="p-5 w-100 text-center bg-primary rounded shadow-sm display-1 text-light">
                    2
                  </div>
                </div>
                <div class="carousel-item col-sm-6 col-md-4 col-lg-3 col-xl-2">
                  <div class="p-5 w-100 text-center bg-primary rounded shadow-sm display-1 text-light">
                    3
                  </div>
                </div>
                <div class="carousel-item col-sm-6 col-md-4 col-lg-3 col-xl-2">
                  <div class="p-5 w-100 text-center bg-primary rounded shadow-sm display-1 text-light">
                    4
                  </div>
                </div>
                <div class="carousel-item col-sm-6 col-md-4 col-lg-3 col-xl-2">
                  <div class="p-5 w-100 text-center bg-primary rounded shadow-sm display-1 text-light">
                    5
                  </div>
                </div>
                <div class="carousel-item col-sm-6 col-md-4 col-lg-3 col-xl-2">
                  <div class="p-5 w-100 text-center bg-primary rounded shadow-sm display-1 text-light">
                    6
                  </div>
                </div>
                <div class="carousel-item col-sm-6 col-md-4 col-lg-3 col-xl-2">
                  <div class="p-5 w-100 text-center bg-primary rounded shadow-sm display-1 text-light">
                    7
                  </div>
                </div>
                <div class="carousel-item col-sm-6 col-md-4 col-lg-3 col-xl-2">
                  <div class="p-5 w-100 text-center bg-primary rounded shadow-sm display-1 text-light">
                    8
                  </div>
                </div>
              </div>
              <a class="carousel-control-prev w-auto px-5 px-xl-4" href="#carousel-multiple" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
              </a>
              <a class="carousel-control-next w-auto px-5 px-xl-4" href="#carousel-multiple" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <hr class="my-5" />
      <div class="container py-3">
        <h1 class="h4">What should you know about Bootstrap multiple carousel?</h1>
        <p>
          You should not use carousel if total items count is less than <em>data-maximum-items-per-slide + 2</em>. The
          functionality of carousel then breaks.
        </p>
        <p>I recommend to init carousel with javascript and make a condition to not load if items are less than
          <em>data-maximum-items-per-slide + 2</em>.</p>
      </div>

    </>
  );
}

export default Gallery;
