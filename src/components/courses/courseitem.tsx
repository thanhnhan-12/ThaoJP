import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import PlayCover from '@components/playCover';
import { Avatar, Button, Card, Space } from 'antd';
import { FiUser } from 'react-icons/all';


const { Meta } = Card;

const CourseItem: React.FC = () => (
  <Card
    style={{ width: "100%" }}
    cover={
      <>
        <PlayCover src={"./src/assets/images/n5/1.png"} size="medium" />
        <div className="fij mt-1 space-x-1">
          <PlayCover src={"./src/assets/images/n5/1.png"} size="small" />
          <PlayCover src={"./src/assets/images/n5/2.png"} size="small" />
          <PlayCover src={"./src/assets/images/n5/3.png"} size="small" />
        </div>
      </>
    }
    className={"course-item"}
  >
    <Meta
      title={<>
        <div className={"fij"}>
          <span className=''>N5: Nấu cơm</span>
          <Space size={"1"}>
            <FiUser /><small>1400</small>
          </Space>
        </div>
        <div className="fij space-x-1 mt-2">
          <Button block>
            <Space>
              <img src="./src/assets/images/icons/listening.png" alt="" />Nghe nói
            </Space>
          </Button>

          <Button block>
            <Space>
              <img src="./src/assets/images/icons/reading.png" alt="" />Đọc viết
            </Space>
          </Button>

          <Button block>
            <Space>
              <img src="./src/assets/images/icons/camera.png" alt="" />Trải nghiệm
            </Space>
          </Button>
        </div>
      </>}
    />
  </Card>
);

export default CourseItem;