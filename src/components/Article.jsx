import React from "react";

export default function Article() {
  return (
    <div class="latest-article">
      <div class="container">
        <div class="row section-row">
          <div class="col-lg-12">
            {/* <!-- Section Title Start --> */}
            <div class="section-title">
              <h3 class="wow fadeInUp">latest articles</h3>
              <h2 class="text-anime-style-3" data-cursor="-opaque">
                Stay informed and inspired for your next journey
              </h2>
            </div>
            {/* <!-- Section Title End --> */}
          </div>
        </div>

        <div class="row">
          <div class="col-lg-6">
            {/* <!-- Highlighted Article Post Start --> */}
            <div class="highlighted-article-post wow fadeInUp">
              {/* <!-- Highlighted Article Featured Image Start --> */}
              <div class="highlighted-article-featured-img">
                <figure>
                  <a href="#" class="image-anime" data-cursor-text="View">
                    <img src="/src/images/post-1.jpg" alt="" />
                  </a>
                </figure>
              </div>
              {/* <!-- Highlighted Article Featured Image End --> */}

              {/* <!-- Highlighted Article Body Start --> */}
              <div class="highlighted-article-body">
                {/* <!-- Article Meta Start --> */}
                <div class="article-meta">
                  <ul>
                    <li>
                      <a href="#">
                        <i class="fa-solid fa-calendar-days"></i> sep 19, 2024
                      </a>
                    </li>
                  </ul>
                </div>
                {/* <!-- Article Meta End --> */}

                {/* <!-- Highlighted Article Content Start --> */}
                <div class="highlighted-article-content">
                  <h3>
                    <a href="#">
                      Road Trip Essentials: What to Pack for a Smooth Journey
                    </a>
                  </h3>
                  <a href="#" class="section-icon-btn">
                    <img src="/src/images/arrow-white.svg" alt="" />
                  </a>
                </div>
                {/* <!-- Highlighted Article Content End --> */}
              </div>
              {/* <!-- Highlighted Article Body End --> */}
            </div>
            {/* <!-- Highlighted Article Post End --> */}
          </div>
          <div class="col-lg-6">
            {/* <!-- Article Post Start --> */}
            <div class="article-post wow fadeInUp">
              <div class="article-featured-img">
                <figure>
                  <a href="#" class="image-anime" data-cursor-text="View">
                    <img src="/src/images/post-2.jpg" alt="" />
                  </a>
                </figure>
              </div>

              <div class="article-post-body">
                {/* <!-- Article Meta Start --> */}
                <div class="article-meta">
                  <ul>
                    <li>
                      <a href="#">
                        <i class="fa-solid fa-calendar-days"></i> sep 20, 2024
                      </a>
                    </li>
                  </ul>
                </div>
                {/* <!-- Article Meta End --> */}

                <div class="article-post-content">
                  <h3>
                    <a href="#">
                      Exploring the City: Best Urban Destinations for a Weekend
                      Getaway
                    </a>
                  </h3>
                  <a href="#" class="read-story-btn">
                    read story
                  </a>
                </div>
              </div>
            </div>
            {/* <!-- Article Post End --> */}

            {/* <!-- Article Post Start --> */}
            <div class="article-post wow fadeInUp" data-wow-delay="0.25s">
              <div class="article-featured-img">
                <figure>
                  <a href="#" class="image-anime" data-cursor-text="View">
                    <img src="/src/images/post-3.jpg" alt="" />
                  </a>
                </figure>
              </div>

              <div class="article-post-body">
                {/* <!-- Article Meta Start --> */}
                <div class="article-meta">
                  <ul>
                    <li>
                      <a href="#">
                        <i class="fa-solid fa-calendar-days"></i> sep 21, 2024
                      </a>
                    </li>
                  </ul>
                </div>
                {/* <!-- Article Meta End --> */}

                <div class="article-post-content">
                  <h3>
                    <a href="#">
                      Exploring the City: Best Urban Destinations for a Weekend
                      Getaway
                    </a>
                  </h3>
                  <a href="#" class="read-story-btn">
                    read story
                  </a>
                </div>
              </div>
            </div>
            {/* <!-- Article Post End --> */}

            {/* <!-- Article Post Start --> */}
            <div class="article-post wow fadeInUp" data-wow-delay="0.5s">
              <div class="article-featured-img">
                <figure>
                  <a href="#" class="image-anime" data-cursor-text="View">
                    <img src="/src/images/post-4.jpg" alt="" />
                  </a>
                </figure>
              </div>

              <div class="article-post-body">
                {/* <!-- Article Meta Start --> */}
                <div class="article-meta">
                  <ul>
                    <li>
                      <a href="#">
                        <i class="fa-solid fa-calendar-days"></i> sep 22, 2024
                      </a>
                    </li>
                  </ul>
                </div>
                {/* <!-- Article Meta End --> */}

                <div class="article-post-content">
                  <h3>
                    <a href="#">
                      Exploring the City: Best Urban Destinations for a Weekend
                      Getaway
                    </a>
                  </h3>
                  <a href="#" class="read-story-btn">
                    read story
                  </a>
                </div>
              </div>
            </div>
            {/* <!-- Article Post End --> */}
          </div>
        </div>
      </div>
    </div>
  );
}
