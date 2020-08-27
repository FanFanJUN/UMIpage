import React from 'react';
import { List, Typography, Icon } from 'antd';
import request from 'umi-request';

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;
const pagesYum = [
  { title: "云服务器安装NGINX详细安装步骤", href: "https://github.com/FanFanJUN/STUDY-DAY-BY-DAY/blob/master/nginx/NGINXinstall.md" },
  { title: "云服务器安装NGINX配置文件解析", href: "https://github.com/FanFanJUN/STUDY-DAY-BY-DAY/blob/master/nginx/NGINXconf.md" },
  { title: "云服务器安装mysql详细安装步骤", href: "https://github.com/FanFanJUN/STUDY-DAY-BY-DAY/blob/master/yumMysql.md" },
  { title: "云服务器安装java详细安装步骤", href: "https://github.com/FanFanJUN/STUDY-DAY-BY-DAY/blob/master/yumJava.md" },
  { title: "Nginx配置参数详解", href: "https://github.com/FanFanJUN/STUDY-DAY-BY-DAY/blob/master/nginx/NGINXdetail.md" },
];
const pagesDocker = [
  { title: "云服务器安装docker详细安装步骤", href: "https://github.com/FanFanJUN/STUDY-DAY-BY-DAY/blob/master/docker/dockerinstall.md" },
  { title: "docker详细安装nginx步骤", href: "docker详细安装nginx步骤](https://github.com/FanFanJUN/STUDY-DAY-BY-DAY/blob/master/docker/dockerNGINX.md" },
];
const pagesDetools = [
  { title: "前端开发助手", href: "https://github.com/zxlie/FeHelper" },
];
// #### NGINX
// ##### [云服务器安装NGINX详细安装步骤](https://github.com/FanFanJUN/STUDY-DAY-BY-DAY/blob/master/nginx/NGINXinstall.md)
// ##### [云服务器安装NGINX配置文件解析](https://github.com/FanFanJUN/STUDY-DAY-BY-DAY/blob/master/nginx/NGINXconf.md)
// ##### [云服务器安装mysql详细安装步骤](https://github.com/FanFanJUN/STUDY-DAY-BY-DAY/blob/master/yumMysql.md)
// ##### [云服务器安装java详细安装步骤](https://github.com/FanFanJUN/STUDY-DAY-BY-DAY/blob/master/yumJava.md)

// #### DOCKER
// ##### [云服务器安装docker详细安装步骤](https://github.com/FanFanJUN/STUDY-DAY-BY-DAY/blob/master/docker/dockerinstall.md)
// ##### [docker详细安装nginx步骤](https://github.com/FanFanJUN/STUDY-DAY-BY-DAY/blob/master/docker/dockerNGINX.md)
const listData = [];
for (let i = 0; i < 23; i++) {
  listData.push({
    href: 'http://ant.design',
    title: `ant design part ${i}`,
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    description:
      'Ant Design, a design language for background applications, is refined by Ant UED Team.',
    content:
      'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
  });
}
const IconText = ({ type, text }) => (
  <span>
    <Icon type={type} style={{ marginRight: 8 }} />
    {text}
  </span>
);
const data = [
  'Racing car sprays burning fuel into crowd.',
  'Japanese princess to wed commoner.',
  'Australian walks 100km after outback crash.',
  'Man charged over missing wedding girl.',
  'Los Angeles battles huge wildfires.',
];
class Dashboard extends React.Component {

  componentDidMount() {
    request
      .get('/api/users')
      .then((response) => {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  render() {
    return (
      <List
        size="large"
        itemLayout="vertical"
        size="small"
        pagination={{
          onChange: page => {
            console.log(page);
          },
          pageSize: 13,
        }}
        dataSource={pagesYum}
        renderItem={(item, index) => (
          <List.Item
            key={item.title}
            actions={[<a key="list-loadmore-edit" href={item.href} target="_blank">查看</a>]}
          >
            <Typography.Text mark>[{index}]</Typography.Text> {item.title}
          </List.Item>
        )}
      />
    );
  }
}
export default Dashboard;