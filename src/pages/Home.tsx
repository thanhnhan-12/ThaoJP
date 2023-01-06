import CourseItem from '@components/courses/courseitem'
import MasterLayout from '@layouts/masterLayout'
import { Button, Space } from 'antd'
import { BiArrowBack, TbRoute } from 'react-icons/all'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

function Home() {
  return (
    <MasterLayout>
      <Space>
        <BiArrowBack /> <h2 className='mr-[16px] font-bold text-[#424B5A] text-[28px]'>N5: Tiếng nhật hàng ngày</h2>
        <Button className='flex items-center uppercase font-bold text-[#424B5A] rounded-[6px]'> <TbRoute className='mr-[2.5px]' /> Lộ trình</Button>
      </Space>

      {/* Card */}
      <Carousel responsive={responsive}>
        <CourseItem />
        <CourseItem />
        <CourseItem />
        <CourseItem />
        <CourseItem />
      </Carousel>
    </MasterLayout>
  )
}

export default Home