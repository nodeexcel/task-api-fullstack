import { useEffect, useState } from 'react';

function Gallery() {
  function SetupCarousel() {
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
  }

  useEffect(() => {
    SetupCarousel();
  }, [])


  return (
    <>
      <div className="container py-3">
        <div className="p-3 m-n3 overflow-hidden">
          <div id="carousel-multiple" className="carousel slide carousel-multiple" data-ride="carousel"
            data-maximum-items-per-slide="6">
            <div className="row position-relative">
              <div className="row d-flex carousel-inner mx-0">
                <div className="carousel-item col-sm-6 col-md-4 col-lg-3 col-xl-2 active">
                  <div className="p-5 w-100 text-center bg-primary rounded shadow-sm display-1 text-light">
                    1
                  </div>
                </div>
                <div className="carousel-item col-sm-6 col-md-4 col-lg-3 col-xl-2">
                  <div className="p-5 w-100 text-center bg-primary rounded shadow-sm display-1 text-light">
                    2
                  </div>
                </div>
                <div className="carousel-item col-sm-6 col-md-4 col-lg-3 col-xl-2">
                  <div className="p-5 w-100 text-center bg-primary rounded shadow-sm display-1 text-light">
                    3
                  </div>
                </div>
                <div className="carousel-item col-sm-6 col-md-4 col-lg-3 col-xl-2">
                  <div className="p-5 w-100 text-center bg-primary rounded shadow-sm display-1 text-light">
                    4
                  </div>
                </div>
                <div className="carousel-item col-sm-6 col-md-4 col-lg-3 col-xl-2">
                  <div className="p-5 w-100 text-center bg-primary rounded shadow-sm display-1 text-light">
                    5
                  </div>
                </div>
                <div className="carousel-item col-sm-6 col-md-4 col-lg-3 col-xl-2">
                  <div className="p-5 w-100 text-center bg-primary rounded shadow-sm display-1 text-light">
                    6
                  </div>
                </div>
                <div className="carousel-item col-sm-6 col-md-4 col-lg-3 col-xl-2">
                  <div className="p-5 w-100 text-center bg-primary rounded shadow-sm display-1 text-light">
                    7
                  </div>
                </div>
                <div className="carousel-item col-sm-6 col-md-4 col-lg-3 col-xl-2">
                  <div className="p-5 w-100 text-center bg-primary rounded shadow-sm display-1 text-light">
                    8
                  </div>
                </div>
              </div>
              <a className="carousel-control-prev w-auto px-5 px-xl-4" href="#carousel-multiple" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
              </a>
              <a className="carousel-control-next w-auto px-5 px-xl-4" href="#carousel-multiple" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <hr className="my-5" />
      <div className="container py-3">
        <h1 className="h4">What should you know about Bootstrap multiple carousel?</h1>
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
