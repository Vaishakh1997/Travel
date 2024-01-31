import React from 'react';
// import { Carousel } from 'react-responsive-carousel';
import { Carousel } from 'antd';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';


function DocumentViewer() {
  return (
    <Carousel className="py-8" arrows nextArrow={<BsChevronRight />} prevArrow={<BsChevronLeft />} style={{ maxWidth: 400, width: "100%", margin: "0 auto" }}>
      <div>
        <div className='font-bold text-xl text-center'>Front</div>
        <img className="w-full" src="/images/work-permit-1.png" alt="Front" />
      </div>
      <div>
        <div className='font-bold text-xl text-center'>Back</div>
        <img className="w-full" src="/images/work-permit-2.png" alt="Back" />
      </div>
    </Carousel>

  );
}

export default DocumentViewer;
