import React from "react";

export default function HeroSection() {
  return (
    <div class="hero">
      <div class="hero-section bg-section parallaxie">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-12">
              {/* <!-- Hero Content Start --> */}
              <div class="hero-content">
                <div class="section-title">
                  <h3 class="wow fadeInUp">welcome to Flash Cab</h3>
                  <h1 class="text-anime-style-3" data-cursor="-opaque">
                    Looking for affordable, reliable cab rides?
                  </h1>
                  <p class="wow fadeInUp" data-wow-delay="0.25s">
                    Whether you're heading out for a weekend getaway, a business
                    meeting, or simply need a dependable ride across town, One
                    Cab offers affordable and reliable transportation options to
                    fit your every need.
                  </p>
                </div>

                <div
                  class="hero-content-body wow fadeInUp"
                  data-wow-delay="0.5s"
                >
                  <a href="#" class="btn-default">
                    book a cab
                  </a>
                  <a href="#" class="btn-default btn-highlighted">
                    learn more
                  </a>
                </div>
              </div>
              {/* <!-- Hero Content End --> */}
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Rent Details Section Start --> */}
      <div class="rent-details wow fadeInUp" data-wow-delay="0.75s">
        <div class="container">
          {/* <!-- Filter Form Start --> */}
          <form action="#" method="get">
            <div class="row no-gutters align-items-center">
              <div class="col-md-12">
                <div class="rent-details-box">
                  <div class="rent-details-form">
                    {/* <!-- Rent Details Item Start --> */}
                    <div class="rent-details-item">
                      <div class="icon-box">
                        <img src="/src/images/icon-rent-details-1.svg" alt="" />
                      </div>
                      <div class="rent-details-content">
                        <h3>car type</h3>
                        <select class="rent-details-form form-select">
                          <option value="" disabled selected>
                            Choose Car Type
                          </option>
                          <option value="sport_car">sport car</option>
                          <option value="convertible_car">
                            convertible car
                          </option>
                          <option value="sedan_car">sedan car</option>
                          <option value="luxury_car">luxury car</option>
                          <option value="electric_car">electric car</option>
                          <option value="coupe_car">coupe car</option>
                        </select>
                      </div>
                    </div>
                    {/* <!-- Rent Details Item End --> */}

                    {/* <!-- Rent Details Item Start --> */}
                    <div class="rent-details-item">
                      <div class="icon-box">
                        <img src="/src/images/icon-rent-details-2.svg" alt="" />
                      </div>
                      <div class="rent-details-content">
                        <h3>pickup location</h3>
                        <select class="rent-details-form form-select">
                          <option value="" disabled selected>
                            Pick Up Location
                          </option>
                          <option value="abu_dhabi">abu dhabi</option>
                          <option value="alain">alain</option>
                          <option value="dubai">dubai</option>
                          <option value="sharjah">sharjah</option>
                        </select>
                      </div>
                    </div>
                    {/* Rent Details Item End  */}

                    {/* <!-- Rent Details Item Start --> */}
                    <div class="rent-details-item">
                      <div class="icon-box">
                        <img src="/src/images/icon-rent-details-3.svg" alt="" />
                      </div>
                      <div class="rent-details-content">
                        <h3>pickup date</h3>
                        <p>
                          <input
                            type="text"
                            name="date"
                            placeholder="mm/dd/yyyy"
                            class="rent-details-form datepicker"
                            required
                          />
                        </p>
                      </div>
                    </div>
                    {/* <!-- Rent Details Item End --> */}

                    {/* <!-- Rent Details Item Start --> */}
                    <div class="rent-details-item">
                      <div class="icon-box">
                        <img src="/src/images/icon-rent-details-4.svg" alt="" />
                      </div>
                      <div class="rent-details-content">
                        <h3>Dropoff location</h3>
                        <select class="rent-details-form form-select">
                          <option value="" disabled selected>
                            Drop Off Location
                          </option>
                          <option value="abu_dhabi">abu dhabi</option>
                          <option value="alain">alain</option>
                          <option value="sharjah">sharjah</option>
                        </select>
                      </div>
                    </div>
                    {/* <!-- Rent Details Item End --> */}

                    {/* <!-- Rent Details Item Start --> */}
                    <div class="rent-details-item">
                      <div class="icon-box">
                        <img src="/src/images/icon-rent-details-5.svg" alt="" />
                      </div>
                      <div class="rent-details-content">
                        <h3>Return Date</h3>
                        <p>
                          <input
                            type="text"
                            name="date"
                            placeholder="mm/dd/yyyy"
                            class="rent-details-form datepicker"
                            required
                          />
                        </p>
                      </div>
                    </div>
                    {/* <!-- Rent Details Item End --> */}

                    <div class="rent-details-item rent-details-search">
                      <a href="#">
                        <i class="fa-solid fa-magnifying-glass"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
          {/* <!-- Filter Form End --> */}
        </div>
      </div>
      {/* <!-- Rent Details Section End --> */}
    </div>
  );
}
