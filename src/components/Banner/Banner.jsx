import React from 'react';

const Banner = () => {
    return (
          <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className='text-center'>
      <h1 className="text-5xl font-bold mb-5">We Build <br></br><span className='bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent'>
Productive</span> Apps</h1>
<p>At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.<br></br>Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
      {/* <button className="btn btn-primary bg-[#23BE0A] border-none">View the list</button> */}
    </div>
  </div>
</div>
    );
};

export default Banner;