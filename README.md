# 梯子查网站框架

## 定位
面向需要梯子、机场、客户端与 AI 工具信息的中文用户，采用“少营销、重体验、可复核”的内容策略。视觉基于 Frutiger Aero：天空蓝到薄荷绿的渐变、半透明白色面板、深海蓝文字和轻盈圆角。

## 页面结构
- `index.html`：首页，品牌定位、入口卡片、数据底气。
- `ladder.html`：15 家梯子横向对比表，展示套餐、优惠码、线路、AI 解锁、设备数、评分与官网入口。
- `ladder.js`：梯子对比表的数据与自动渲染逻辑。
- `airport.html`：机场推荐，按轻量、均衡、性能型分层。
- `reviews.html`：机场评测，承载测速、晚高峰、流媒体和售后文章。
- `compare.html`：机场对比，用统一维度帮助选择。
- `clients.html`：Windows、macOS、iOS、Android、路由器教程入口。
- `network.html`：订阅、代理、测速、掉线等网络问题排查。
- `ai-tools.html`：20 个主流 AI 工具导航，支持分类筛选与站内搜索。
- `ai-tools/tools-data.js`：AI 工具官网、开发者、平台、访问环境和常见问题数据。
- `ai-tools/tool.html`：各工具共用的站内教程与问题排查详情页。
- `ai-tools/index.js`、`ai-tools/tool-page.js`：导航页与详情页的静态渲染逻辑。
- `faq.html`：机场订阅、流量、退款、链接安全 FAQ。
- `risk.html`：服务状态、付款安全与使用边界风险预警。

## 机场评测文章
`reviews.html` 是 14 篇文章的索引；每篇独立页面使用统一的长文结构：编辑结论、评分参考、套餐价格、测速报告、流媒体与 AI、专线拓扑、FAQ、最终结论。

- `review-sujie.html`：速界机场
- `review-kexinyun.html`：可信云机场
- `review-jilianyun.html`：极连云机场
- `review-bianyuan.html`：边缘节点机场
- `review-kuaili.html`：快狸机场
- `review-yuntu.html`：云图机场
- `review-guannt.html`：光年梯机场
- `review-kunpjs.html`：鲲鹏加速机场
- `review-yunjiexian.html`：云界线机场
- `review-dalaoyun.html`：大佬云机场
- `review-hqyun.html`：环球梯机场
- `review-shandians.html`：闪电鼠机场
- `review-liulianyun.html`：榴莲云机场
- `review-sxjiasu.html`：神行加速机场
- `review-ermaoyun.html`：二猫云机场

评测页由 `review.js` 按品牌数据渲染，`assets/review-cover.svg` 为统一的线路概念示意图。文章中的公开价格、优惠码、测速和解锁能力都标注了信息来源与“未独立复测”边界，不把第三方宣传写成本站实测。

## 内容更新建议
1. 每周更新机场状态和风险预警；每月复测重点线路。
2. 评测文章固定记录测试时间、网络环境、客户端版本和结论。
3. 通过 `styles.css` 统一视觉，不在单页增加新的色彩体系。
