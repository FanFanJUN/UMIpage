import React, { Fragment } from 'react';
import { List, Typography, Icon, Tag, Badge, Input } from 'antd';
import request from 'umi-request';
import { getDicOptions, getDicNameByKey } from '../../util';
import { getArticleNum } from '../../service/api';

const { CheckableTag } = Tag;
const { Search } = Input;
const tagsFromServer = ['Movies', 'Books', 'Music', 'Sports'];

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
let pagesYums = [];
for (let i = 0; i < 23; i++) {
  pagesYums.push(...pagesYum);
}
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

  state = {
    selectedTags: [],
    articles: [],
    pagination: {},
    articleNum: [],
  };

  componentDidMount() {
      this.getDataSource({});
      const dicparams = [
        { dictionaryCategoryNo: 'article_category' },
      ];

      getDicOptions(dicparams).then(res=>{
        console.log(res);
        this.setState(()=>({
          dicData: res || {},
        }))
      })

      getArticleNum().then(res=> {
        this.setState(()=>({
          articleNum: res || [],
        }))
      })
  }

  getDataSource = (params)=> {
    request
      .post('/api/lc/SELECTLISTARTICLE', {
        data: {
          pageNum: 1,
          pageSize: 10,
          ...params,
        },
      })
      .then((response) => {
        const {data: {dataSource, pagination}} = response;
        this.setState(()=>({
          articles: dataSource,
          pagination,
        }))
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  handleChange(tag, checked) {
    const { selectedTags, dicData } = this.state;
    const nextSelectedTags = checked ? [...selectedTags, tag] : selectedTags.filter(t => t !== tag);
    console.log('You are interested in: ', nextSelectedTags);
    const allDic = dicData.article_category;
    const params = allDic.filter(item=> {
      return nextSelectedTags.includes(item.dictionaryNm);
    }).map(item=>{
      return item.dictionaryNo;
    });
    this.setState({ selectedTags: nextSelectedTags }, ()=>{
      this.getDataSource({articleCategory: params.join(',')});
    });
  }

  render() {
    const { selectedTags, articles, pagination, dicData, articleNum } = this.state;
    return (
      <Fragment>
        <div style={{ padding: '0px 18px', marginTop: '10px', width: '100%', marginBottom: '10px' }}>
          <span style={{ marginRight: 8 }}>类别:</span>
          {articleNum.length > 0 && articleNum.map(tag => (
            <span style={{ marginRight: '10px' }}>
              <Badge count={tag.totalTitel}>
                <CheckableTag
                  key={tag}
                  checked={selectedTags.length > 0 && selectedTags.indexOf(tag.articleCategoryName) > -1}
                  onChange={checked => this.handleChange(tag.articleCategoryName, checked)}
                >
                  {tag.articleCategoryName}
                </CheckableTag>
              </Badge>
            </span>
          ))}
          <span style={{width: '40%', float: 'right'}}>
          <Search
            placeholder="输入查询关键字"
            enterButton="搜索"
            size="samll"
            onSearch={value => console.log(value)}
          />
          </span>
        </div>
        <hr style={{marginTop: '5px',border: '2px solid powderblue'}}/>
        <List
          size="small"
          itemLayout="vertical"
          pagination={{
            onChange: page => {
              console.log(page);
            },
            ...pagination,
          }}
          dataSource={articles}
          renderItem={(item, index) => (
            <List.Item
              key={item.articleTitle}
              actions={[<a key="list-loadmore-edit" href={item.articleHref} target="_blank">查看</a>]}
            >
              <Typography.Text mark>[{getDicNameByKey(item.articleCategory,'article_category', dicData)}]</Typography.Text> {item.articleTitle}
            </List.Item>
          )}
        />
      </Fragment>
    );
  }
}
export default Dashboard;