import MasterLayout from '@layouts/masterLayout'
import { Button, Space } from 'antd'
import { BiArrowBack, TbRoute } from 'react-icons/all'

function Home() {
  return (
    <MasterLayout>
      <Space>
        <BiArrowBack/> <h2 className='mr-[16px]'>N5: Tiếng nhật hàng ngày</h2>
        <Button className='flex items-center uppercase font-bold text-[#424B5A] rounded-[6px]'> <TbRoute className='mr-[2.5px]' /> Lộ trình</Button>
      </Space>

    </MasterLayout>
  )
}

export default Home