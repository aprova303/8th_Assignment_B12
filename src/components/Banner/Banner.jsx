import React from "react";
import hero from "../../assets/hero.png";
const Banner = () => {
  return (
    <div>
      <div className="bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-5">
              We Build <br></br>
              <span className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
                Productive
              </span>{" "}
              Apps
            </h1>
            <p>
              At HERO.IO, we craft innovative apps designed to make everyday
              life simpler, smarter, and more exciting.<br></br>Our goal is to
              turn your ideas into digital experiences that truly make an
              impact.
            </p>
          </div>
        </div>
        <div className="flex justify-center">
          <a href="https://play.google.com/store/apps" className="btn mr-3">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRb5LOPUgzjbz_m4aVulC-GU5zu-30HBdYnAg&s"
              className="w-7 h-7"
              alt=""
            />{" "}
            Google PLay
          </a>

          <a href="https://www.apple.com/app-store/" className="btn mr-3">
            <img
              src="https://www.apple.com/v/app-store/c/images/overview/icon_appstore__ev0z770zyxoy_large_2x.png"
              className="w-7 h-7"
              alt=""
            />
            App Store
          </a>
        </div>
        <div className="w-full h-screen flex items-center justify-center">
          <img
            src={hero}
            alt="Hero"
            className="max-w-full h-auto object-contain"
          />
        </div>
      </div>

      <div className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] p-7 w-full">
        <h1 className="font-bold text-4xl text-center m-7">Trusted by Millions, Built for You</h1>
        <div className="md:flex justify-around">
          <div className="text-center">
            <h3>Total Downloads</h3>
            <h1 className="text-5xl font-extrabold m-3">29.6M</h1>
            <p>21% more than last month</p>
          </div>
           <div className="text-center">
            <h3>Total Reviews</h3>
            <h1 className="text-5xl font-extrabold m-3">906K</h1>
            <p>46% more than last month</p>
          </div>
           <div className="text-center">
            <h3>Active Apps</h3>
            <h1 className="text-5xl font-extrabold m-3">132+</h1>
            <p>31 more will Launch</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
