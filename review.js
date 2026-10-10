const REVIEWS = {
  sujie: {name:'速界机场', slug:'sujie', kicker:'IEPL 专线 · 低延迟', title:'速界机场评测：专线直达，极速无界', intro:'速界定位为高稳定、低延迟的企业级 IEPL 专线机场，主打端到端专线、跨平台客户端和流媒体解锁。', score:'9.6', price:'¥15 / 50GB', ref:'年付活动 8 折；公开信息称新客可试用 24 小时', line:'IEPL 专线', nodes:'全球智能接入点，具体节点以订阅页为准', code:'sujie888', source:'机场选 sujie.html', updated:'2026-10-07', suitable:'稳定性优先、4K/8K 视频、远程办公、跨境开发', caution:'上线时间较短，长期稳定性、无日志政策和专线类型仍需持续观察。', claims:['官方称采用端到端 IEPL 国际专线','支持 Shadowsocks、V2Ray、Trojan 与主流平台','覆盖桌面、移动端、OpenWrt 与软路由'], plans:[['首月试用','¥15','50GB','先测试晚高峰'],['极速版','¥25/月','日常使用','公开活动以结算页为准'],['超速版','¥50/月','进阶需求','大流量用户'],['年付体验包','约 ¥6/月','年付折算','8 折参考']], speed:'公开页面提供的是演示报告，不是本站实时测速；建议连续 7 天记录延迟、丢包与持续带宽。', unlock:['Netflix','Disney+','YouTube','ChatGPT','Claude','Gemini'], faq:[['速界是 IEPL 还是 IPLC？','公开介绍主打 IEPL。页面中的 IPLC 仅用于解释专线类产品的通用拓扑，不代表速界同时销售 IPLC。'],['第一次购买怎么选？','先使用试用或最低月付，分别测试白天、晚高峰和常用平台，再考虑更长周期。'],['优惠码怎么用？','结算时输入 sujie888，并在付款前确认最终金额与套餐细则。']] },
  kexinyun: {name:'可信云机场', slug:'kexinyun', kicker:'IEPL 专线 · 多设备', title:'可信云机场评测：低门槛，多设备，专线覆盖', intro:'可信云公开定位为高性价比 IEPL 专线机场，支持通用订阅，并公开称不限速、不限制设备数量。', score:'8.9', price:'¥8/月起（年付折算参考）', ref:'60GB/月起；优惠码 KX888', line:'IEPL 专线', nodes:'公开信息称 60+ 节点，覆盖港、台、日、美', code:'KX888', source:'机场选 kexinyun.html', updated:'2026-10-07', suitable:'轻中度用户、多设备、流媒体与 AI 入门', caution:'“不限速、全线解锁、不限设备”等均来自公开描述，需自行核验规则与晚高峰表现。', claims:['公开称 60+ IEPL 专线节点','公开称支持 Netflix、Disney+、ChatGPT 等','适合先用月付验证本地运营商匹配度'], plans:[['年费小礼包','¥96/年','60GB/月','折合约 ¥8/月'],['月付小包','¥15/月','60GB/月','首次测试优先'],['基础版','¥25/月','150GB/月','流量升级']], speed:'指定页面未提供可复核的独立测速原始文件，本文仅整理公开定位；购买前应在 20:00–23:00 连续测试。', unlock:['Netflix','Disney+','YouTube','ChatGPT','Claude','Gemini'], faq:[['60GB 够用吗？','轻量网页和聊天通常更容易控制在 60GB 内；高码率视频和多设备长期使用可能不足。'],['可信云靠谱吗？','不能由套餐表直接认证，应观察订阅刷新、公告、工单和晚高峰连续表现。'],['优惠码怎么用？','在结算页输入 KX888，若未生效以官网公告和结算页为准。']] },
  jilianyun: {name:'极连云机场', slug:'jilianyun', kicker:'IPLC / IEPL 全专线', title:'极连云机场评测：专线低价，多设备友好', intro:'极连云公开定位为高性价比专线机场，支持 Trojan 与 Shadowsocks，公开称全线 1 倍率、不限速、不限制设备数量。', score:'9.2', price:'约 ¥8/月起', ref:'公开优惠码 JLY888；低价套餐以官网结算页为准', line:'IPLC / IEPL 全专线', nodes:'港、台、日、新、美及东南亚、欧洲等地区', code:'JLY888', source:'机场选 jilianyun.html', updated:'2026-10-07', suitable:'预算敏感、多设备、流媒体与 AI 用户', caution:'7×24 售后、自动切换与全解锁属于公开描述，尚未由本站独立认证。', claims:['公开称全节点 1 倍率扣费','支持 Trojan 与 Shadowsocks','公开称提供多地区专线与多渠道售后'], plans:[['轻量体验','¥96/年','60GB/月','折合约 ¥8/月'],['基础套餐','¥15.50/月','100GB/月','全专线定位'],['进阶套餐','¥30.50/月','200GB/月','AI 场景'],['不限时套餐','¥399/次','600GB','一次性流量']], speed:'参考页给出最高 2.5Gbps 等公开描述，但没有可复核原始测速文件；本文不将其作为本站实测。', unlock:['Netflix','YouTube','ChatGPT','Gemini','Disney+','TikTok'], faq:[['极连云支持哪些协议？','公开资料列出 Trojan 和 Shadowsocks，实际订阅格式以用户中心为准。'],['真的 1 倍率吗？','公开称全线无倍率陷阱，下单后仍应在订阅页核对特殊节点规则。'],['购买建议是什么？','先月付测试晚高峰、倍率、流媒体和 AI，再考虑年付或不限时包。']] },
  bianyuan: {name:'边缘节点机场', slug:'bianyuan', kicker:'VLESS + IEPL · 原生 IP', title:'边缘节点机场评测：VLESS + IEPL，低价专线与原生 IP', intro:'边缘节点（EdgeNova）公开采用轻量化 VLESS 协议与 IEPL 专线，提供 60+ 节点、自研客户端和不限设备套餐。', score:'9.0', price:'¥9/月起（年付折算参考）', ref:'45GB/月年付包；优惠码 xk808', line:'VLESS + IEPL', nodes:'港、台、新、日、美、马来西亚等 60+ 节点', code:'xk808', source:'机场选 bianyuan.html', updated:'2026-10-07', suitable:'低价专线、新手、流媒体与 AI 用户', caution:'参考资料称 2026 年 6 月上线，运营记录较短，长期稳定性仍需观察。', claims:['公开称使用 VLESS + IEPL','公开称支持 UDP FullCone 的多数节点','提供自研客户端及主流客户端兼容'], plans:[['限时月付小包','¥15/月','72GB/月','短期测试'],['限时年付','¥108/年','45GB/月','折合约 ¥9/月'],['标准套餐','¥25/月','120GB/月','日常流量'],['进阶套餐','¥50/月','250GB/月','中高流量']], speed:'参考页称香港、日本单线程下行超过 500Mbps，但本站未独立复测，也未获得完整原始测试文件。', unlock:['Netflix','Disney+','YouTube','ChatGPT','Gemini','Midjourney'], faq:[['最低套餐多少钱？','限时年付 ¥108/年、每月 45GB；月付小包 ¥15/月、72GB。'],['支持哪些协议？','公开资料称全线使用 VLESS，主力节点使用 IEPL，并搭配 BGP 智能入口。'],['xk808 一定有效吗？','代码由用户指定，是否适用、折扣比例和适用套餐必须以结算页为准。']] },
  kuaili: {name:'快狸机场', slug:'kuaili', kicker:'IEPL / IPLC · 全专线', title:'快狸机场评测：全专线、多设备，晚高峰稳定优先', intro:'快狸主打全 IEPL/IPLC 国际内网专线、全节点 1 倍率和不限设备同时在线，公开节点覆盖多个地区。', score:'9.0', price:'¥10/月起（年付折算参考）', ref:'30GB/月年付小套餐；优惠码 sujie888', line:'IEPL / IPLC 全专线', nodes:'港、台、日、新、美及欧洲、东南亚等多地区', code:'sujie888', source:'机场选 kuaili.html', updated:'2026-10-07', suitable:'多设备、4K/8K、家庭共享、AI 与下载', caution:'公开资料称晚高峰最高测速 800Mbps+，但本站未独立复测，实际因地区而异。', claims:['公开称全节点 1 倍率','公开称不限设备同时在线','公开称智能路由自动择优'], plans:[['森狸年付','¥120/年','30GB/月','折合约 ¥10/月'],['月狸月付','¥15/月','50GB/月','首次测试优先'],['小狸基础版','¥22/月','100GB/月','日常浏览'],['灵狸标准版','¥35/月','250GB/月','流媒体用户']], speed:'公开评测记录香港、日本、新加坡晚高峰峰值 800Mbps+；数据来自参考页，非本站重新测速。', unlock:['Netflix','Disney+','YouTube','ChatGPT','Disney+','TikTok'], faq:[['快狸最低多少钱？','森狸年付小套餐 ¥120/年、每月 30GB，月狸月付小套餐 ¥15/月、50GB。'],['是否全节点 1 倍率？','公开称全节点按 1 倍率扣费，购买后应在用户中心再次确认。'],['多设备可否共享？','公开称不限设备，但应遵守账户共享和合理使用规则。']] },
  yuntu: {name:'云图机场', slug:'yuntu', kicker:'金融级专线 · 原生 IP', title:'云图机场评测：金融级专线，稳定出海', intro:'云图机场公开定位为高品质网络服务商，采用金融级专线传输，主打原生 IP、全节点 1 倍率和主流平台解锁。', score:'8.9', price:'¥20/月起', ref:'150GB/月；5 台设备；优惠码 yt88', line:'金融级专线', nodes:'具体节点以订阅页和用户中心为准', code:'yt88', source:'机场选 yuntu.html', updated:'2026-10-07', suitable:'流媒体、AI、原生 IP 与中等流量用户', caution:'参考页没有提供本站可复核的独立测速原始数据，需先月付验证。', claims:['公开称全节点 1 倍率','默认最多 5 台设备','公开称支持 Netflix、Disney+、ChatGPT、TikTok'], plans:[['岚图','¥20/月','150GB/月','5 台设备'],['梦图','¥49/月','300GB/月','5 台设备'],['星图','¥99/月','600GB/月','5 台设备'],['50G 不限时','¥78/次','50GB','一次性套餐']], speed:'指定页面未提供独立测速原始文件，本文只整理公开定位；正式测试应记录延迟、丢包、持续带宽和 4K 播放。', unlock:['Netflix','Disney+','YouTube','ChatGPT','TikTok','Gemini'], faq:[['最低套餐多少钱？','岚图 ¥20/月、150GB/月；梦图 ¥49/月、300GB/月；星图 ¥99/月、600GB/月。'],['设备限制是多少？','公开信息称默认最多 5 台设备，实际规则以用户中心为准。'],['优惠码怎么使用？','结算时输入 yt88，并在付款前检查折后金额。']] },
  guannt: {name:'光年梯机场', slug:'guannt', kicker:'IPLC / IEPL · 不限时包', title:'光年梯机场评测：全专线架构，低延迟与不限时流量包', intro:'光年梯主打 IPLC/IEPL 全专线和“零过墙”线路，公开套餐涵盖年付、月付及一次性不限时流量包。', score:'9.1', price:'约 ¥9.83/月起', ref:'100GB/月年付；500GB 不限时包；优惠码 GNT80', line:'IPLC / IEPL 全专线', nodes:'公开描述为广深入口与香港机房专线互联', code:'GNT80', source:'机场选 guannt.html', updated:'2026-10-07', suitable:'低延迟、游戏、备用线路与低频使用', caution:'“100% 可用率”“零过墙”等为服务描述，实际需结合路由和长期测试验证。', claims:['公开称广深、深港专线入口','支持 Clash Verge、Shadowrocket、Quantumult X','公开提供不限时流量包'], plans:[['入门年付','¥118/年','100GB/月','约 ¥9.83/月'],['进阶月付','¥29/月','300GB/月','月/季/年付'],['不限时流量包','¥120/次','500GB','低频备用']], speed:'公开测试记录香港节点下行 950Mbps、延迟 28ms、抖动 1.2ms；本站未独立复测。', unlock:['Netflix','Disney+','YouTube','ChatGPT','Gemini','Steam / 游戏'], faq:[['有免费试用吗？','参考页显示没有免费试用，建议从月付或低损失套餐开始。'],['不限时包会过期吗？','公开信息称 500GB 一次性流量不限时，购买前仍应确认账户有效期。'],['游戏延迟真实吗？','参考测试给出香港 28ms、抖动 1.2ms，实际结果取决于地区与游戏服务器。']] },
  kunpjs: {name:'鲲鹏加速机场', slug:'kunpjs', kicker:'BGP 优化 · 低延迟办公', title:'鲲鹏加速机场评测：多线 BGP，低延迟办公与流媒体', intro:'公开信息将鲲鹏加速定位为多线 BGP 优化专线，适合视频会议、远程桌面、跨境办公与日常流媒体。', score:'9.0', price:'¥12/月起；榜单折后约 ¥15.40/月', ref:'1 元 1GB 尝鲜包；公开场景含会议与远程办公', line:'BGP 优化专线', nodes:'多线入口与常用地区节点，具体以订阅页为准', code:'未提供统一公开码', source:'机场选 kunpjs.html', updated:'2026-10-07', suitable:'视频会议、远程桌面、低抖动办公、AI', caution:'晚高峰约 460Mbps 为公开卡片参考，不代表本站独立测速。', claims:['多线 BGP 入口就近接入','公开定位强调低抖动、低丢包','包含 1 元 1GB 尝鲜包'], plans:[['扶摇尝鲜','¥1/次','1GB','低成本测试'],['逍遥畅游','¥12/月','99GB/月','日常办公'],['吞吐山海','¥22/月','199GB/月','重度追剧与多设备']], speed:'公开卡片显示晚高峰参考约 460Mbps；应在自己的运营商环境中测试会议、远程桌面与 4K。', unlock:['Netflix','YouTube','ChatGPT','Disney+','TikTok','会议 / 办公'], faq:[['最低套餐多少钱？','公开信息包含 1 元 1GB 尝鲜包与 12 元 99GB/月常规包。'],['适合远程办公吗？','定位更偏向低抖动办公，但应实测 Zoom、Teams 和远程桌面长连接。'],['有统一优惠码吗？','机场选页面未给出统一公开码，付款以官网活动与结算页为准。']] },
  yunjiexian: {name:'云界线机场', slug:'yunjiexian', kicker:'IEPL 优选 · 轻量备用', title:'云界线机场评测：轻量备用，IEPL 优选', intro:'公开信息将云界线定位为 IEPL 优选高速专线，适合低频浏览、临时使用和备用线路。', score:'8.9', price:'约 ¥15.40/月（7 折参考）', ref:'原价参考 ¥22/月；优惠码 yjx888', line:'IEPL 优选专线', nodes:'具体地区与节点以订阅页为准', code:'yjx888', source:'机场选 yunjiexian.html', updated:'2026-10-07', suitable:'网页浏览、轻办公、备用线路、低预算用户', caution:'公开页面偏向推荐定位，420Mbps 为卡片参考，本站未独立复测。', claims:['IEPL 优选高速专线定位','折后月费较低，适合控制试错成本','适合轻量备用与临时切换'], plans:[['基础月付','¥22/月','公开信息未完整披露','轻量浏览与备用'],['7 折参考','约 ¥15.40/月','以结算页为准','优惠后参考']], speed:'公开卡片显示晚高峰参考约 420Mbps；正式购买前应连续测试延迟、丢包与移动网络。', unlock:['Netflix','YouTube','ChatGPT','Disney+','TikTok','AI 工具'], faq:[['最低多少钱？','公开卡片原价约 ¥22/月，7 折参考约 ¥15.40/月。'],['适合什么用户？','更适合轻量浏览、临时使用和备用线路，不应只依据低价判断长期稳定性。'],['优惠码怎么用？','结算时输入 yjx888，付款前确认折后金额、流量与设备规则。']] },
  dalaoyun: {name:'大佬云机场', slug:'dalaoyun', kicker:'高速 IEPL · 多设备', title:'大佬云机场评测：高速 IEPL，多设备友好', intro:'公开信息将大佬云列为高速性价比方案，晚高峰参考速度约 500Mbps，适合家庭共享、高频下载与 AI 使用。', score:'9.1', price:'约 ¥16.10/月（7 折参考）', ref:'原价参考 ¥23/月；优惠码 dly888', line:'高速 IEPL 多线专线', nodes:'具体地区与节点以订阅页为准', code:'dly888', source:'机场选 dalaoyun.html', updated:'2026-10-07', suitable:'家庭共享、多设备、高频下载、AI 与视频会议', caution:'500Mbps 为公开卡片参考，实际体验与本地线路、节点和负载有关。', claims:['高速 IEPL 多线专线定位','公开场景偏向多设备和家庭共享','适合下载、AI、视频会议和流媒体'], plans:[['基础月付','约 ¥23/月','日常多设备','原价参考'],['7 折参考','约 ¥16.10/月','以结算页为准','优惠后参考']], speed:'公开卡片记录晚高峰参考约 500Mbps，本文不将其作为本站实测。', unlock:['Netflix','YouTube','Disney+','ChatGPT','Gemini','TikTok'], faq:[['价格是多少？','公开卡片原价约 ¥23/月，7 折参考约 ¥16.10/月。'],['适合多设备吗？','公开定位强调多设备，但购买前应确认同时在线和合理使用规则。'],['优惠码怎么使用？','结算时输入 dly888 并检查最终金额。']] },
  hqyun: {name:'环球梯机场', slug:'hqyun', kicker:'BGP + IEPL · 入门优选', title:'环球梯机场评测：BGP 接入，IEPL 入门优选', intro:'公开信息将环球梯定位为 BGP 接入 + IEPL 专线方案，适合网页浏览、轻办公和低门槛月付测试。', score:'8.9', price:'约 ¥15.40/月（7 折参考）', ref:'原价参考 ¥22/月；优惠码 HQ66', line:'BGP + IEPL 专线', nodes:'具体地区与节点以订阅页为准', code:'HQ66', source:'机场选 hqyun.html', updated:'2026-10-07', suitable:'网页、轻办公、入门月付、基础流媒体', caution:'440Mbps 为公开卡片参考，需用自己的运营商和常用节点验证。', claims:['BGP 接入配合 IEPL 专线','折后价格亲民，适合入门测试','公开场景包含网页、4K 与常用流媒体'], plans:[['基础月付','约 ¥22/月','网页与轻办公','原价参考'],['7 折参考','约 ¥15.40/月','以结算页为准','优惠后参考']], speed:'公开卡片显示晚高峰参考约 440Mbps，本文未进行独立复测。', unlock:['Netflix','YouTube','Disney+','ChatGPT','Gemini','TikTok'], faq:[['价格是多少？','公开原价参考约 ¥22/月，7 折参考约 ¥15.40/月。'],['BGP + IEPL 有什么意义？','BGP 多线入口可按网络环境选择入口，IEPL 强调跨境私有链路；实际效果需持续测试。'],['HQ66 怎么用？','结算页输入 HQ66，确认优惠适用范围。']] },
  shandians: {name:'闪电鼠机场', slug:'shandians', kicker:'双入口 IEPL · 4K / 办公', title:'闪电鼠机场评测：双入口 IEPL，4K 与办公首选', intro:'公开信息将闪电鼠列为综合首选，采用广深/沪日双入口冗余专线，公开晚高峰参考约 520Mbps。', score:'9.3', price:'约 ¥15.40/月（7 折参考）', ref:'原价参考 ¥22/月；优惠码 sd88', line:'双入口 IEPL 冗余专线', nodes:'广深、沪日双入口及多地区节点', code:'sd88', source:'机场选 shandians.html', updated:'2026-10-07', suitable:'4K/8K、跨境办公、流媒体与 AI', caution:'520Mbps 为公开卡片参考，不是本站复测；双入口实际切换效果需自测。', claims:['广深 / 沪日双入口冗余','公开定位适合 4K 与办公','公开称可解锁 Netflix、ChatGPT、Disney+'], plans:[['基础月付','¥22/月','日常与 4K','原价参考'],['7 折参考','¥15.40/月','以结算页为准','优惠后参考']], speed:'公开卡片记录晚高峰参考约 520Mbps，购买前应测试双入口、4K 播放和长连接。', unlock:['Netflix','Disney+','YouTube','ChatGPT','Gemini','办公工具'], faq:[['双入口有什么作用？','当一条入口异常时，冗余入口有机会提供切换路径，但实际切换速度和自动化程度需验证。'],['520Mbps 是实测吗？','这是机场选公开卡片参考，不是本站独立测速。'],['sd88 怎么用？','结算时输入 sd88，付款前核对最终金额。']] },
  liulianyun: {name:'榴莲云机场', slug:'liulianyun', kicker:'IPLC / IEPL · 流媒体均衡', title:'榴莲云机场评测：IPLC / IEPL，流媒体均衡', intro:'公开信息将榴莲云定位为 IPLC / IEPL 组合专线，公开晚高峰参考约 480Mbps，重点覆盖流媒体与日常浏览。', score:'9.0', price:'约 ¥16.80/月（7 折参考）', ref:'原价参考 ¥24/月；优惠码 ll88', line:'IPLC / IEPL 组合专线', nodes:'多地区覆盖，具体以订阅页为准', code:'ll88', source:'机场选 liulianyun.html', updated:'2026-10-07', suitable:'追剧、流媒体、网页浏览、日常使用', caution:'480Mbps 为公开卡片参考，实际片库和 IP 信誉会随节点变化。', claims:['IPLC / IEPL 组合线路','公开定位为流媒体均衡方案','适合追剧与日常浏览'], plans:[['基础月付','约 ¥24/月','流媒体与浏览','原价参考'],['7 折参考','约 ¥16.80/月','以结算页为准','优惠后参考']], speed:'公开卡片显示晚高峰参考约 480Mbps，本站未实时复测。', unlock:['Netflix','Disney+','YouTube','ChatGPT','Gemini','TikTok'], faq:[['价格是多少？','公开原价参考约 ¥24/月，7 折参考约 ¥16.80/月。'],['IPLC / IEPL 有什么区别？','两者都强调私有专线，但实际带宽、入口和共享方式需看运营商资料与持续测试。'],['适合哪些用户？','更偏向流媒体、追剧和日常浏览用户，仍建议先月付验证。']] },
  sxjiasu: {name:'神行加速机场', slug:'sxjiasu', kicker:'IEPL 智能路由 · 移动端', title:'神行加速机场评测：IEPL 智能路由，移动端友好', intro:'公开信息将神行加速定位为 IEPL 智能路由专线，适合手机、平板和经常切换 Wi-Fi/移动数据的用户。', score:'9.0', price:'约 ¥16.10/月（7 折参考）', ref:'原价参考 ¥23/月；优惠码 sx0077', line:'IEPL 智能路由', nodes:'具体地区与移动端入口以订阅页为准', code:'sx0077', source:'机场选 sxjiasu.html', updated:'2026-10-07', suitable:'移动端、Wi-Fi 切换、AI 登录、视频与会议', caution:'460Mbps 为公开卡片参考，切换网络时还需重点观察重连时间和丢包。', claims:['IEPL 智能路由定位','侧重移动端 Wi-Fi / 蜂窝数据切换','公开场景包含视频、AI、网页和会议'], plans:[['基础月付','约 ¥23/月','移动端和日常','原价参考'],['7 折参考','约 ¥16.10/月','以结算页为准','优惠后参考']], speed:'公开卡片记录晚高峰参考约 460Mbps，本站未独立复测。', unlock:['Netflix','YouTube','Disney+','ChatGPT','Gemini','TikTok'], faq:[['为什么说移动端友好？','公开定位强调智能路由和网络切换场景，实际要观察手机 Wi-Fi 与移动数据切换时的重连体验。'],['460Mbps 是实测吗？','这是机场选公开卡片参考，不是本站实时测速。'],['购买前测什么？','优先测试移动数据、视频首开、AI 登录、网页浏览和会议长连接。']] }
};

const REVIEW_LINKS = Object.freeze({
  sujie: 'https://lqy001.speedworldaff.com/#/register?code=p3EKNmlp',
  kexinyun: 'https://ermaozi01.kosingaff.com/#/register?code=FA6DjjDi',
  jilianyun: 'https://liujie2002.jlyvipaff.com/#/?code=0MxRdXiu',
  bianyuan: 'https://zoio.edgenovaaff.cc/#/register?code=ti8OUEN2',
  kuaili: 'https://yyo649929.kuailiaff.com/#/register?code=JVuUcHke',
  yuntu: 'https://super.ytjcok.org/#/register?code=iKpNlXer',
  guannt: 'http://liujie2002.gntaff.com/#/?code=NoPkovej',
  kunpjs: 'https://kunpengjiasu.com/#/register?code=99UgsawR',
  yunjiexian: 'https://youxia01.yunjiexianaff.com/#/?code=8ImGvubv',
  dalaoyun: 'https://liu01.dalaoyunaff.com/#/?code=9A9fbKzz',
  hqyun: 'https://123pps01.huanqiutiaff.com/#/?code=iJzShI5m',
  shandians: 'https://eothvip01.shandianshuaff.com/#/?code=qNodU3f6',
  liulianyun: 'http://853vip01.liulianyunaff.com/#/?code=O6mS8K5N',
  sxjiasu: 'https://fugui0077.shenxingaff.com/#/?code=z3ybkLVj'
});

Object.keys(REVIEW_LINKS).forEach(key => {
  if (REVIEWS[key]) REVIEWS[key].official = REVIEW_LINKS[key];
});

const esc = s => String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const nav = `<a href="index.html">首页</a><a href="ladder.html">梯子推荐</a><a href="airport.html">机场推荐</a><a class="active" href="reviews.html">机场评测</a><a href="compare.html">机场对比</a><a href="clients.html">客户端</a><a href="network.html">网络问题</a><a href="ai-tools.html">AI工具</a><a href="faq.html">机场FAQ</a><a href="risk.html">风险预警</a>`;

function renderReview(key){
  const d = REVIEWS[key] || REVIEWS.sujie;
  const canonicalUrl = `https://tizicha.net/review-${d.slug}.html`;

  // 动态注入 Canonical 标签与 JSON-LD
  document.title = `${d.title} · 梯子查`;

  let canonicalLink = document.querySelector('link[rel="canonical"]');
  if (!canonicalLink) {
    canonicalLink = document.createElement('link');
    canonicalLink.rel = 'canonical';
    document.head.appendChild(canonicalLink);
  }
  canonicalLink.href = canonicalUrl;

  let jsonLd = document.getElementById('review-schema');
  if (!jsonLd) {
    jsonLd = document.createElement('script');
    jsonLd.id = 'review-schema';
    jsonLd.type = 'application/ld+json';
    document.head.appendChild(jsonLd);
  }
  jsonLd.textContent = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Review",
    "itemReviewed": {
      "@type": "Product",
      "name": d.name,
      "description": d.intro
    },
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": d.score,
      "bestRating": "10"
    },
    "author": {
      "@type": "Organization",
      "name": "梯子查"
    },
    "publisher": {
      "@type": "Organization",
      "name": "梯子查",
      "url": "https://tizicha.net/"
    }
  });

  document.body.innerHTML = `<header><div class="shell topbar"><a class="brand" href="index.html"><span class="brand-mark">↗</span>梯子查</a><nav class="nav">${nav}</nav></div></header><main class="review-shell"><div class="review-breadcrumb"><a href="index.html">首页</a><span>/</span><a href="reviews.html">机场评测</a><span>/</span><b>${esc(d.name)}</b></div><section class="review-hero"><div><span class="eyebrow">${esc(d.kicker)} · 2026.10</span><h1>${esc(d.title)}</h1><p class="lede">${esc(d.intro)}</p><div class="review-tags"><span>公开评分参考 ${esc(d.score)}</span><span>${esc(d.line)}</span><span>${esc(d.price)}</span></div><div class="actions"><a class="btn btn-primary" href="#verdict">看编辑结论 ↓</a><a class="btn btn-ghost" href="#plans">查看套餐</a></div></div><div class="review-cover"><img src="assets/review-cover.svg" alt="${esc(d.name)} 网络线路示意图"><div class="cover-caption">${esc(d.name)} · 线路与节点概念示意</div></div></section><section class="review-summary" id="verdict"><div class="summary-main"><span class="eyebrow">编辑结论</span><h2>${esc(d.name)}怎么样？</h2><p>${esc(d.intro)} 本文信息来自 <b>${esc(d.source)}</b> 的公开页面，购买前请以官网、结算页和实际短期测试为准。想看更多对比可前往 <a href="compare.html" style="color:#128db5;font-weight:750;">14家机场对比</a> 或 <a href="ladder.html" style="color:#128db5;font-weight:750;">梯子推荐</a>。</p><div class="fit"><div><strong>适合</strong><span>${esc(d.suitable)}</span></div><div><strong>注意</strong><span>${esc(d.caution)}</span></div></div></div><div class="score-card"><span>公开评分参考</span><strong>${esc(d.score)}<small>/10</small></strong><p>不等同于本站独立实测评分</p></div></section><aside class="toc"><strong>本文目录</strong><a href="#overview">${esc(d.name)}概览</a><a href="#plans">套餐价格</a><a href="#speed">测速报告</a><a href="#unlock">流媒体 & AI</a><a href="#network">专线拓扑</a><a href="#faq">常见问题</a><a href="#final">最终结论</a></aside><section class="review-section" id="overview"><span class="section-label">01 / OVERVIEW</span><h2>${esc(d.name)}简介与核心特点</h2><p>${esc(d.intro)} 公开资料还强调以下方向，均属于来源页面的服务定位，不代表本站认证。配置教程请查阅 <a href="clients.html" style="color:#128db5;font-weight:750;">全平台客户端指南</a>。</p><div class="claim-grid">${d.claims.map((x,i)=>`<div class="claim"><b>0${i+1}</b><h3>${esc(x)}</h3><p>建议在自己的网络环境中验证这一点。</p></div>`).join('')}</div></section><section class="review-section" id="plans"><span class="section-label">02 / PLANS & PRICING</span><h2>${esc(d.name)}套餐价格</h2><p class="muted">以下价格与套餐为公开页面整理，活动、倍率、设备数和退款规则请以结算页为准。</p><div class="plans-grid">${d.plans.map(p=>`<div class="plan"><span>${esc(p[0])}</span><strong>${esc(p[1])}</strong><em>${esc(p[2])}</em><p>${esc(p[3])}</p></div>`).join('')}</div><div class="notice">优惠码：<b>${esc(d.code)}</b> · 是否生效请在付款前确认折后金额。若遇到订阅更新失败，请参考 <a href="network.html#net1" style="color:#128db5;font-weight:750;">订阅排错指南</a>。</div></section><section class="review-section" id="speed"><span class="section-label">03 / SPEED REPORT</span><h2>${esc(d.name)}测速报告</h2><p>${esc(d.speed)} 晚高峰断连或减速排查请查阅 <a href="network.html#net3" style="color:#128db5;font-weight:750;">晚高峰优化指南</a>。</p><div class="speed-demo"><div><span>数据属性</span><strong>公开参考</strong></div><div><span>测试窗口</span><strong>20:00–23:00</strong></div><div><span>建议周期</span><strong>连续 5–7 天</strong></div><div><span>本站状态</span><strong>未独立复测</strong></div></div><p class="small-note">测速建议记录延迟、抖动、丢包、单线程/多线程速度、连接成功率和 4K 播放，不只看峰值。</p></section><section class="review-section" id="unlock"><span class="section-label">04 / STREAMING & AI</span><h2>流媒体与 AI 解锁情况</h2><p>以下为来源页面公开能力整理。平台会调整 IP 风控，同一服务的不同节点可能表现不同。更多 AI 平台接入可看 <a href="ai-tools.html" style="color:#128db5;font-weight:750;">AI 工具导航</a>。</p><div class="unlock-grid">${d.unlock.map((x,i)=>`<div class="unlock"><b>${i<3?'✓':'~'}</b><strong>${esc(x)}</strong><span>${i<3?'公开称支持':'节点相关，需自测'}</span></div>`).join('')}</div></section><section class="review-section" id="network"><span class="section-label">05 / NETWORK TOPOLOGY</span><h2>专线网络拓扑示意</h2><p>下图只解释设备、智能入口、跨境私有链路和海外落地之间的通用关系，不代表 ${esc(d.name)} 的真实机房、运营商合同或完整路由。</p><div class="topology"><span>用户设备</span><i>→</i><span>智能入口</span><i>→</i><span>${esc(d.line)}</span><i>→</i><span>海外落地节点</span></div></section><section class="review-section" id="faq"><span class="section-label">06 / FREQUENTLY ASKED</span><h2>${esc(d.name)}常见问题</h2><div class="faq-list">${d.faq.map((x,i)=>`<details><summary><b>0${i+1}</b>${esc(x[0])}<span>+</span></summary><p>${esc(x[1])}</p></details>`).join('')}</div><p style="margin-top:16px;">更多关于机场通用规则的问题，可参阅 <a href="faq.html" style="color:#128db5;font-weight:750;">机场 FAQ 100问</a>。</p></section><section class="review-section final-section" id="final"><span class="section-label">07 / FINAL VERDICT</span><h2>最终结论</h2><p>${esc(d.name)}更适合${esc(d.suitable)}。它的公开卖点有明确方向，但网络服务的实际体验受运营商、地区、客户端、节点负载和平台风控影响，建议先短周期验证。购买前请阅读 <a href="risk.html" style="color:#128db5;font-weight:750;">机场跑路与风险预警</a>。</p><div class="final-actions"><a class="btn btn-primary" href="reviews.html">返回机场评测</a><a class="btn btn-ghost" href="compare.html">对比其他机场</a></div><p class="disclaimer">本文最后更新：${esc(d.updated)}。内容依据 ${esc(d.source)} 公开信息整理，测速与解锁部分标注为公开参考或未独立复测。价格、活动和服务规则可能变化，请以官方结算页、公告与实际试用为准。本文仅作信息整理，不构成购买建议。</p></section></main><footer><div class="shell footer-line"><span>© <span data-year>${new Date().getFullYear()}</span> 梯子查 · <a href="sitemap.html">网站地图</a></span><span>公开信息整理 · 独立判断风险</span></div></footer>`;

  if (/^https?:\/\//i.test(d.official || '')) {
    const makeExternalButton = () => {
      const link = document.createElement('a');
      link.className = 'btn btn-primary';
      link.href = d.official;
      link.target = '_blank';
      link.rel = 'sponsored nofollow noopener noreferrer';
      link.textContent = '访问官网 / 注册 ↗';
      return link;
    };

    const heroActions = document.querySelector('.review-hero .actions');
    const heroPrimary = heroActions?.querySelector('.btn-primary');
    if (heroPrimary) heroPrimary.className = 'btn btn-ghost';
    heroActions?.prepend(makeExternalButton());

    const finalActions = document.querySelector('.final-actions');
    const finalPrimary = finalActions?.querySelector('.btn-primary');
    if (finalPrimary) finalPrimary.className = 'btn btn-ghost';
    finalActions?.prepend(makeExternalButton());

    const disclaimer = document.querySelector('.disclaimer');
    if (disclaimer) {
      const affiliateNote = document.createElement('p');
      affiliateNote.className = 'small-note';
      affiliateNote.textContent = '链接说明：页面中的“访问官网 / 注册”为推广链接，点击后将在新窗口打开对应服务的注册页面。';
      disclaimer.before(affiliateNote);
    }
  }
}
renderReview(document.body.dataset.review || 'sujie');
