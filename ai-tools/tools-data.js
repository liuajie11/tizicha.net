(function () {
  const globalAccess = '需位于官方支持的国家或地区，并能稳定访问官网、登录验证与静态资源域名；账号、应用商店和支付地区应保持一致。';
  const mainlandAccess = '中国大陆通常可直接访问；建议使用稳定的常用网络，注册手机号、实名或支付信息按官方要求完成。';

  window.AI_TOOL_CATEGORIES = ['全部', '通用助手', '研究办公', '图像设计', '视频音频', '编程开发'];
  window.AI_TOOLS = [
    {
      id: 'chatgpt', name: 'ChatGPT', mark: 'CG', developer: 'OpenAI', category: '通用助手',
      official: 'https://chatgpt.com/',
      purpose: '对话问答、写作、资料分析、图像生成、语音与多模态工作流。',
      platforms: ['Web', 'Windows', 'macOS', 'iOS', 'Android'],
      access: globalAccess,
      level: '地区限制明显',
      issues: ['所在地或账号地区不在支持范围', '登录验证循环、Cookie 或脚本被拦截', '应用商店地区不匹配，客户端无法下载', '支付卡发行地或账单信息不被接受'],
      checks: ['先查看 OpenAI 官方支持地区列表', '允许 chatgpt.com 必要 Cookie 与 JavaScript', '校准系统时间并减少频繁切换网络出口', '只从官网或官方应用商店安装客户端']
    },
    {
      id: 'gemini', name: 'Gemini', mark: 'GE', developer: 'Google', category: '通用助手',
      official: 'https://gemini.google.com/',
      purpose: '通用问答、写作、图片理解、Google 服务协作与多模态任务。',
      platforms: ['Web', 'iOS', 'Android'],
      access: '需位于 Gemini 官方开放地区，并稳定访问 Google 登录、验证码与内容资源；Workspace 账号还受管理员策略影响。',
      level: 'Google 账号依赖',
      issues: ['Google 账号年龄、地区或组织策略不符合要求', 'Workspace 管理员未开启 Gemini', '移动端功能与网页端、不同国家不完全一致', '登录页或验证码资源加载失败'],
      checks: ['确认个人或 Workspace 账号是否获准使用', '检查 Google 账号地区、年龄和语言设置', '企业用户联系管理员检查服务开关', '用最新版浏览器并允许必要登录 Cookie']
    },
    {
      id: 'claude', name: 'Claude', mark: 'CL', developer: 'Anthropic', category: '通用助手',
      official: 'https://claude.ai/',
      purpose: '长文阅读、写作、代码、文件分析、研究与团队协作。',
      platforms: ['Web', 'Windows', 'macOS', 'iOS', 'Android'],
      access: globalAccess,
      level: '地区限制明显',
      issues: ['所在国家或手机号不在支持范围', '登录后提示地区不可用', '团队或付费方案结算失败', '长文件上传中断或对话加载失败'],
      checks: ['核对 Anthropic 官方支持地区', '使用真实且一致的账号与手机号信息', '检查浏览器隐私扩展是否拦截验证', '上传文件时保持稳定上行并控制文件大小']
    },
    {
      id: 'copilot', name: 'Microsoft Copilot', mark: 'MC', developer: 'Microsoft', category: '通用助手',
      official: 'https://copilot.microsoft.com/',
      purpose: '网页问答、写作、图像生成，以及 Microsoft 生态内的办公辅助。',
      platforms: ['Web', 'Windows', 'macOS', 'iOS', 'Android', 'Edge'],
      access: '需要 Microsoft 账号及可访问的登录、Copilot 与内容分发域名；企业或学校账号的功能由许可证和管理员策略决定。',
      level: '账号策略相关',
      issues: ['个人版与 Microsoft 365 Copilot 权限混淆', '企业管理员禁用或许可证未分配', '登录回调被企业代理拦截', '图像或新模型功能按地区分批开放'],
      checks: ['确认使用的是个人版还是组织版', '组织账号检查许可证和管理员策略', '更新 Edge 或 Copilot 客户端', '清理旧 Microsoft 登录会话后重新授权']
    },
    {
      id: 'perplexity', name: 'Perplexity', mark: 'PX', developer: 'Perplexity AI', category: '研究办公',
      official: 'https://www.perplexity.ai/',
      purpose: '联网搜索、带来源的研究问答、资料汇总与深度研究。',
      platforms: ['Web', 'Windows', 'macOS', 'iOS', 'Android'],
      access: globalAccess,
      level: '搜索资源依赖',
      issues: ['搜索结果或引用网页在本地网络不可达', '登录邮件、Google 或 Apple 授权失败', 'Pro 订阅受支付地区限制', '浏览器扩展与隐私插件冲突'],
      checks: ['分别测试官网、登录方式和引用来源', '允许弹窗与第三方授权回调', '确认账单地区与支付方式一致', '引用无法打开时查看原始来源的地区限制']
    },
    {
      id: 'deepseek', name: 'DeepSeek', mark: 'DS', developer: '深度求索（DeepSeek）', category: '通用助手',
      official: 'https://chat.deepseek.com/',
      purpose: '中文问答、推理、写作、代码与文档处理。',
      platforms: ['Web', 'iOS', 'Android'],
      access: mainlandAccess,
      level: '大陆通常直连',
      issues: ['高峰期提示服务器繁忙或限流', '短信或邮箱验证码延迟', '官方服务与仿冒套壳网站混淆', '长对话或文件在生成中断开'],
      checks: ['认准 deepseek.com 官方域名与官方商店开发者', '高峰拥堵时稍后重试，避免连续刷新', '保存长文本并拆分超大任务', '不要向未知第三方提交账号或 API 密钥']
    },
    {
      id: 'grok', name: 'Grok', mark: 'GR', developer: 'xAI', category: '通用助手',
      official: 'https://grok.com/',
      purpose: '实时信息问答、写作、图像与社交热点辅助分析。',
      platforms: ['Web', 'iOS', 'Android', 'X'],
      access: '需在 xAI/Grok 官方开放地区使用，并保证 grok.com、身份验证和应用商店服务可用；X 内入口与独立站权限可能不同。',
      level: '地区与账号分批开放',
      issues: ['独立 Grok 与 X 内 Grok 权限或套餐不同', '应用商店尚未在账号地区上架', '年龄或地区验证不通过', '实时搜索内容受来源可用性影响'],
      checks: ['优先从 grok.com 确认当前账号入口', '核对 X 账号与独立账号登录方式', '检查应用商店地区和系统版本', '实时信息应打开来源交叉核验']
    },
    {
      id: 'meta-ai', name: 'Meta AI', mark: 'MA', developer: 'Meta', category: '通用助手',
      official: 'https://www.meta.ai/',
      purpose: '对话、图片生成，以及 WhatsApp、Instagram、Messenger 内的助手功能。',
      platforms: ['Web', 'iOS', 'Android', 'WhatsApp', 'Instagram', 'Messenger'],
      access: '按国家、账号和产品分批开放；需要 Meta 账号及相关应用服务可用。同一地区中，网页版与社交应用入口也可能不同步。',
      level: '分地区灰度开放',
      issues: ['应用已更新但看不到 Meta AI 入口', '网页版和 WhatsApp/Instagram 功能不一致', '账号年龄或地区未获开放', '隐私、记忆与个性化设置理解不清'],
      checks: ['查看 Meta 官方公布的开放国家和产品范围', '将相关应用更新到最新版', '确认登录的是同一 Meta 账号体系', '在设置中检查隐私、记忆和数据使用选项']
    },
    {
      id: 'kimi', name: 'Kimi', mark: 'KM', developer: '月之暗面（Moonshot AI）', category: '研究办公',
      official: 'https://www.kimi.com/',
      purpose: '中文长文阅读、搜索、写作、文件分析与办公辅助。',
      platforms: ['Web', 'Windows', 'macOS', 'iOS', 'Android'],
      access: mainlandAccess,
      level: '大陆通常直连',
      issues: ['繁忙时搜索或生成速度下降', '大文件解析排队或失败', '客户端与网页功能更新不同步', '第三方仿冒下载页和代充风险'],
      checks: ['从 kimi.com 或官方应用商店进入', '超大文件先压缩或拆分后上传', '长任务保留原始资料与中间结果', '遇到功能差异先更新客户端']
    },
    {
      id: 'doubao', name: '豆包', mark: 'DB', developer: '字节跳动', category: '通用助手',
      official: 'https://www.doubao.com/',
      purpose: '中文问答、写作、图片、语音、学习与日常办公。',
      platforms: ['Web', 'Windows', 'macOS', 'iOS', 'Android'],
      access: mainlandAccess,
      level: '大陆通常直连',
      issues: ['不同端的模型或功能入口不一致', '短信登录或设备验证频繁', '语音、图片权限未开启', '从非官方渠道下载到仿冒客户端'],
      checks: ['认准 doubao.com 与官方应用商店开发者', '检查麦克风、相册和通知权限', '更新客户端后重新登录同步功能', '涉及个人资料时先确认隐私和数据设置']
    },
    {
      id: 'notebooklm', name: 'NotebookLM', mark: 'NL', developer: 'Google', category: '研究办公',
      official: 'https://notebooklm.google.com/',
      purpose: '基于自有资料的问答、摘要、学习指南与音频概览。',
      platforms: ['Web', 'iOS', 'Android'],
      access: '需处于 NotebookLM 支持地区并可正常使用 Google 账号、Drive 及资料来源；组织账号可能被管理员限制。',
      level: 'Google 账号依赖',
      issues: ['账号地区或年龄不符合要求', 'Drive 文件权限导致来源导入失败', '组织账号禁止 NotebookLM', '音频概览语言或配额存在差异'],
      checks: ['确认 NotebookLM 对账号和地区开放', '检查 Drive/Docs 文件共享权限', '组织账号联系管理员确认服务状态', '按支持格式和单个笔记本限制整理来源']
    },
    {
      id: 'notion-ai', name: 'Notion AI', mark: 'NA', developer: 'Notion Labs', category: '研究办公',
      official: 'https://www.notion.com/product/ai',
      purpose: '工作区搜索、会议记录、写作、数据库辅助与团队知识问答。',
      platforms: ['Web', 'Windows', 'macOS', 'iOS', 'Android'],
      access: '需要稳定访问 Notion 登录、同步和内容域名；团队空间中的 AI 功能由工作区套餐、席位与管理员配置决定。',
      level: '工作区权限相关',
      issues: ['个人免费功能与团队 AI 套餐混淆', '工作区管理员未开启或未购买 AI', '桌面端同步正常但 AI 请求失败', '导入资料权限不足，搜索不到内容'],
      checks: ['确认当前工作区的 AI 套餐和席位', '检查页面、数据库和连接应用的权限', '更新桌面端并测试网页版', '敏感团队资料先核对企业数据政策']
    },
    {
      id: 'midjourney', name: 'Midjourney', mark: 'MJ', developer: 'Midjourney, Inc.', category: '图像设计',
      official: 'https://www.midjourney.com/',
      purpose: '高质量图片生成、风格探索、角色与视觉概念设计。',
      platforms: ['Web', 'Discord'],
      access: '需在服务开放地区稳定访问 Midjourney 网页；使用 Discord 工作流时还需保证 Discord 登录、机器人和媒体 CDN 可用。',
      level: '订阅与媒体资源依赖',
      issues: ['网页账号与 Discord 账号未正确绑定', '订阅成功但生成权限未同步', '图片 CDN 加载缓慢或下载失败', '公开作品、版权和商用条款理解不足'],
      checks: ['从 midjourney.com 登录并核对订阅状态', '旧工作流用户检查 Discord 账号绑定', '媒体加载失败时排查 CDN 和浏览器拦截', '商用前阅读当前套餐与使用条款']
    },
    {
      id: 'adobe-firefly', name: 'Adobe Firefly', mark: 'AF', developer: 'Adobe', category: '图像设计',
      official: 'https://firefly.adobe.com/',
      purpose: '图片与视频生成、扩图、生成式填充及 Adobe 创意工作流。',
      platforms: ['Web', 'iOS', 'Android', 'Creative Cloud'],
      access: '需使用可用的 Adobe ID，并稳定访问 Adobe 登录、Firefly 与 Creative Cloud 资源；生成额度和模型按地区、套餐及应用版本变化。',
      level: 'Adobe 账号依赖',
      issues: ['Adobe ID 国家/地区与订阅不一致', '生成积分不足或套餐权益未刷新', '企业账号被管理员限制生成式 AI', '上传素材或生成结果被内容规则拦截'],
      checks: ['核对 Adobe ID 地区、套餐与生成积分', '企业用户确认管理员已开放 Firefly', '更新 Creative Cloud 与相关应用', '上传前确认格式、版权和内容规范']
    },
    {
      id: 'canva-magic-studio', name: 'Canva Magic Studio', mark: 'CA', developer: 'Canva', category: '图像设计',
      official: 'https://www.canva.com/magic-studio/',
      purpose: '模板设计、演示文稿、图片生成、文案与一键改版。',
      platforms: ['Web', 'Windows', 'macOS', 'iOS', 'Android'],
      access: '需要稳定访问 Canva 登录、编辑器、素材库和媒体 CDN；部分 AI 功能受国家、语言、年龄、团队管理员和套餐额度影响。',
      level: '素材 CDN 依赖',
      issues: ['编辑器打开但素材或字体加载不全', '团队模板或 AI 功能权限不足', '导出大文件失败或进度卡住', '免费版与 Pro/团队版额度混淆'],
      checks: ['确认账号套餐与团队权限', '允许 Canva 素材和上传域名加载', '大文件导出时保持标签页前台与网络稳定', '检查浏览器硬件加速和可用存储空间']
    },
    {
      id: 'runway', name: 'Runway', mark: 'RW', developer: 'Runway AI', category: '视频音频',
      official: 'https://app.runwayml.com/',
      purpose: '文生视频、图生视频、视频编辑、角色与镜头创作。',
      platforms: ['Web', 'iOS'],
      access: '需在官方服务可用地区使用，并具备稳定上行和可访问的上传、生成与视频 CDN；视频任务对延迟不敏感，但怕丢包和中途断线。',
      level: '带宽与额度要求高',
      issues: ['视频上传卡住或生成任务失败', '生成额度消耗与排队时间超出预期', 'Safari/浏览器编解码或硬件加速问题', '移动端与网页端功能不同步'],
      checks: ['先用短素材和低分辨率测试工作流', '保证稳定上行并避免上传时切换网络', '核对 credits、队列和输出规格', '使用最新版 Chromium 浏览器并开启硬件加速']
    },
    {
      id: 'suno', name: 'Suno', mark: 'SU', developer: 'Suno, Inc.', category: '视频音频',
      official: 'https://suno.com/',
      purpose: '用提示词生成歌曲、伴奏、人声与音乐创意草稿。',
      platforms: ['Web', 'iOS', 'Android'],
      access: '需在 Suno 开放地区稳定访问登录、音频流和生成服务；移动应用上架范围、付费方式和功能可能随地区变化。',
      level: '音频流与地区相关',
      issues: ['应用商店搜不到官方应用', '歌曲生成完成但播放或下载失败', '免费额度、订阅与商用权限理解不清', '歌词或音频触发内容与版权限制'],
      checks: ['从 suno.com 跳转官方应用商店', '确认浏览器允许音频播放和下载', '创作前阅读当前套餐的商用规则', '保留提示词、版本和授权记录']
    },
    {
      id: 'elevenlabs', name: 'ElevenLabs', mark: 'EL', developer: 'ElevenLabs', category: '视频音频',
      official: 'https://elevenlabs.io/',
      purpose: '文本转语音、配音、声音设计、语音代理与多语言音频。',
      platforms: ['Web', 'iOS', 'Android', 'API'],
      access: '需在官方支持地区访问账号、音频与 API 服务；上传、克隆或发布声音时必须遵守授权、同意和身份验证要求。',
      level: '音频与身份验证相关',
      issues: ['语音克隆要求额外验证或同意证明', '音频生成成功但流媒体播放失败', '字符额度、并发和 API 限制', 'Reader 等移动应用与创作平台功能混淆'],
      checks: ['确认使用的是创作平台还是 Reader 应用', '只上传有权使用并获得同意的声音', '核对套餐字符数、并发和 API 配额', '检查音频 CDN、浏览器自动播放和下载权限']
    },
    {
      id: 'github-copilot', name: 'GitHub Copilot', mark: 'GC', developer: 'GitHub（Microsoft）', category: '编程开发',
      official: 'https://github.com/features/copilot',
      purpose: '代码补全、聊天、代码审查、代理式开发与终端辅助。',
      platforms: ['GitHub Web', 'VS Code', 'Visual Studio', 'JetBrains', 'Xcode', 'Eclipse', 'CLI'],
      access: '需要可正常登录 GitHub，并让 IDE 扩展访问 Copilot 服务；企业代理、TLS 检查、自签名证书和组织策略是常见阻断点。',
      level: '开发环境配置相关',
      issues: ['IDE 已登录 GitHub 但 Copilot 未授权', '企业组织未分配席位或禁用某些功能', '代理/TLS 检查导致扩展连接失败', '编辑器扩展版本过旧或与账号缓存冲突'],
      checks: ['在 GitHub 设置中确认 Copilot 订阅或席位', '重新完成 IDE 设备授权流程', '企业环境按官方文档放行所需域名和证书', '更新 IDE 与官方 Copilot 扩展后重载窗口']
    },
    {
      id: 'cursor', name: 'Cursor', mark: 'CU', developer: 'Anysphere', category: '编程开发',
      official: 'https://cursor.com/',
      purpose: 'AI 代码编辑、仓库问答、智能改写与代理式编程。',
      platforms: ['Windows', 'macOS', 'Linux'],
      access: '需要稳定访问 Cursor 下载、更新、登录及模型服务；企业网络中的代理、证书检查、WebSocket 和模型提供方地区政策可能影响使用。',
      level: '桌面连接依赖',
      issues: ['浏览器登录成功但无法返回桌面客户端', 'Chat/Agent 一直连接或索引失败', '企业代理和自签名证书导致请求报错', '模型、套餐额度或隐私模式设置不清'],
      checks: ['从 cursor.com 下载与更新', '允许浏览器打开 Cursor 登录回调', '检查防火墙、代理、TLS 证书和 WebSocket', '在设置中核对模型、用量、代码库索引和隐私模式']
    }
  ];
})();
