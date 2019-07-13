import React from 'react';
import { Typography, Divider, Collapse } from 'antd';
const { Panel } = Collapse;

const { Paragraph } = Typography;
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
class Dashboard extends React.Component {

  render() {
    return (
      <Collapse accordion>
        <Panel header="服务器相关" key="1">
          <Typography>
            <Paragraph>
              <ul>
                {pagesYum.map((item) => {
                  return (
                    <li>
                      <a href={item.href}>{item.title}</a>
                    </li>
                  );
                })}
              </ul>
            </Paragraph>
          </Typography>
        </Panel>
        <Panel header="DOCKER" key="2">
          <Typography>
            <Paragraph>
              <ul>
                {pagesDocker.map((item) => {
                  return (
                    <li>
                      <a href={item.href}>{item.title}</a>
                    </li>
                  );
                })}
              </ul>
            </Paragraph>
          </Typography>
        </Panel>
        <Panel header="antd-------umi------js" key="3">
          <p>{text}</p>
        </Panel>
        <Panel header="软件工具" key="4">
          <Typography>
            <Paragraph>
              <ul>
                {pagesDetools.map((item) => {
                  return (
                    <li>
                      <a href={item.href}>{item.title}</a>
                    </li>
                  );
                })}
              </ul>
            </Paragraph>
          </Typography>
        </Panel>
      </Collapse>
    );
  }
}
export default Dashboard;