import React, { useState } from "react";
import BookingDialog from "./BookingDialog";

export default function HeroSection() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const openDialog = () => {
    setIsDialogOpen(true);
  };

  const closeDialog = () => {
    setIsDialogOpen(false);
  };

  return (
    <div class="hero">
      <div class="hero-section bg-section parallaxie">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-12">
              {/* <!-- Hero Content Start --> */}
              <div class="hero-content">
                <div class="section-title">
                  <h3 class="wow fadeInUp">welcome to Quick Hop</h3>
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
                  <a href="#" class="btn-default" onClick={openDialog}>
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

      {/* Booking Dialog */}
      <BookingDialog isOpen={isDialogOpen} onClose={closeDialog} />
    </div>
  );
}
