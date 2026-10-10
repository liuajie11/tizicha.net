(function () {
  const COMPARE_DATA = [
    {
      id: 'sujie',
      name: '速界机场',
      slug: 'sujie',
      minPrice: '¥6 / 月 (年付折算)',
      plan: '¥15/月 · 50GB',
      unitPriceNum: 0.120,
      unitPriceStr: '¥0.120 / GB',
      lineType: '端到端 IEPL 专线',
      protocol: 'Shadowsocks, V2Ray, Trojan',
      nodes: '香港、日本、新加坡、美国、台湾',
      ai: 'ChatGPT, Claude, Gemini, Codex',
      streaming: 'Netflix, Disney+, YouTube 4K, TikTok',
      client: '自研客户端 + 全平台兼容',
      devices: '多设备 (全家共享)',
      estDate: '2024 年',
      suitable: '稳定性优先、4K/8K视频、AI全解锁',
      score: '9.6',
      official: 'https://lqy001.speedworldaff.com/#/register?code=p3EKNmlp'
    },
    {
      id: 'kexinyun',
      name: '可信云机场',
      slug: 'kexinyun',
      minPrice: '¥8 / 月 (年付折算)',
      plan: '¥15/月 · 60GB',
      unitPriceNum: 0.133,
      unitPriceStr: '¥0.133 / GB',
      lineType: 'IEPL 专线',
      protocol: 'Shadowsocks, Trojan',
      nodes: '港、台、日、美 60+ 节点',
      ai: 'ChatGPT, Claude, Gemini',
      streaming: 'Netflix, Disney+, YouTube',
      client: '通用客户端 (Clash/小火箭)',
      devices: '不限设备',
      estDate: '2023 年',
      suitable: '多设备、轻中度影音',
      score: '8.9',
      official: 'https://ermaozi01.kosingaff.com/#/register?code=FA6DjjDi'
    },
    {
      id: 'jilianyun',
      name: '极连云机场',
      slug: 'jilianyun',
      minPrice: '¥8 / 月 (年付折算)',
      plan: '¥15.50/月 · 100GB',
      unitPriceNum: 0.155,
      unitPriceStr: '¥0.155 / GB',
      lineType: 'IPLC / IEPL 全专线',
      protocol: 'Trojan, Shadowsocks',
      nodes: '港台日新美、东南亚、欧洲',
      ai: 'ChatGPT, Gemini',
      streaming: 'Netflix, YouTube, Disney+, TikTok',
      client: '通用客户端',
      devices: '不限设备',
      estDate: '2023 年',
      suitable: '预算敏感、多设备共享',
      score: '9.2',
      official: 'https://liujie2002.jlyvipaff.com/#/?code=0MxRdXiu'
    },
    {
      id: 'bianyuan',
      name: '边缘节点机场',
      slug: 'bianyuan',
      minPrice: '¥9 / 月 (年付折算)',
      plan: '¥15/月 · 72GB',
      unitPriceNum: 0.200,
      unitPriceStr: '¥0.200 / GB',
      lineType: 'VLESS + IEPL 专线',
      protocol: 'VLESS, Hysteria 2',
      nodes: '港台日新美、马来西亚 60+',
      ai: 'ChatGPT, Gemini, Midjourney',
      streaming: 'Netflix, Disney+, YouTube',
      client: '自研客户端 + 兼容软件',
      devices: '不限设备',
      estDate: '2024 年',
      suitable: '低价专线、VLESS 协议体验',
      score: '9.0',
      official: 'https://zoio.edgenovaaff.cc/#/register?code=ti8OUEN2'
    },
    {
      id: 'kuaili',
      name: '快狸机场',
      slug: 'kuaili',
      minPrice: '¥10 / 月 (年付折算)',
      plan: '¥15/月 · 50GB',
      unitPriceNum: 0.300,
      unitPriceStr: '¥0.300 / GB',
      lineType: 'IEPL / IPLC 全专线',
      protocol: 'Shadowsocks, Trojan',
      nodes: '港台日新美、欧洲',
      ai: 'ChatGPT, Gemini',
      streaming: 'Netflix, Disney+, YouTube, TikTok',
      client: '通用客户端',
      devices: '不限设备',
      estDate: '2023 年',
      suitable: '家庭共享、高带宽影音',
      score: '9.0',
      official: 'https://yyo649929.kuailiaff.com/#/register?code=JVuUcHke'
    },
    {
      id: 'yuntu',
      name: '云图机场',
      slug: 'yuntu',
      minPrice: '¥20 / 月',
      plan: '¥20/月 · 150GB',
      unitPriceNum: 0.133,
      unitPriceStr: '¥0.133 / GB',
      lineType: '金融级专线',
      protocol: 'Shadowsocks, V2Ray',
      nodes: '港台日新美原生 IP',
      ai: 'ChatGPT, Gemini',
      streaming: 'Netflix, Disney+, YouTube, TikTok',
      client: '通用客户端',
      devices: '5 台设备',
      estDate: '2022 年',
      suitable: '原生 IP 解锁、流媒体',
      score: '8.9',
      official: 'https://super.ytjcok.org/#/register?code=iKpNlXer'
    },
    {
      id: 'guannt',
      name: '光年梯机场',
      slug: 'guannt',
      minPrice: '¥9.83 / 月 (年付)',
      plan: '¥118/年 · 100GB/月',
      unitPriceNum: 0.098,
      unitPriceStr: '¥0.098 / GB',
      lineType: 'IPLC / IEPL 全专线',
      protocol: 'Shadowsocks, V2Ray',
      nodes: '广深/深港 专线机房',
      ai: 'ChatGPT, Gemini',
      streaming: 'Netflix, Disney+, YouTube, Steam',
      client: '通用客户端',
      devices: '未公开',
      estDate: '2023 年',
      suitable: '低延迟游戏、备用不限时包',
      score: '9.1',
      official: 'http://liujie2002.gntaff.com/#/?code=NoPkovej'
    },
    {
      id: 'kunpjs',
      name: '鲲鹏加速机场',
      slug: 'kunpjs',
      minPrice: '¥12 / 月',
      plan: '¥12/月 · 99GB',
      unitPriceNum: 0.121,
      unitPriceStr: '¥0.121 / GB',
      lineType: 'BGP 优化专线',
      protocol: 'Shadowsocks, Trojan',
      nodes: '多线 BGP 接入与常用节点',
      ai: 'ChatGPT, Gemini',
      streaming: 'Netflix, YouTube, Disney+',
      client: '通用客户端',
      devices: '未限制设备',
      estDate: '2023 年',
      suitable: '视频会议、远程办公、低抖动',
      score: '9.0',
      official: 'https://kunpengjiasu.com/#/register?code=99UgsawR'
    },
    {
      id: 'yunjiexian',
      name: '云界线机场',
      slug: 'yunjiexian',
      minPrice: '¥15.40 / 月 (折后)',
      plan: '¥22/月 · 100GB',
      unitPriceNum: 0.154,
      unitPriceStr: '¥0.154 / GB',
      lineType: 'IEPL 优选专线',
      protocol: 'Shadowsocks, V2Ray',
      nodes: '港日新美常用节点',
      ai: 'ChatGPT, Gemini',
      streaming: 'Netflix, YouTube, Disney+',
      client: '通用客户端',
      devices: '多设备支持',
      estDate: '2024 年',
      suitable: '轻量浏览、临时备用',
      score: '8.9',
      official: 'https://youxia01.yunjiexianaff.com/#/?code=8ImGvubv'
    },
    {
      id: 'dalaoyun',
      name: '大佬云机场',
      slug: 'dalaoyun',
      minPrice: '¥16.10 / 月 (折后)',
      plan: '¥23/月 · 150GB',
      unitPriceNum: 0.107,
      unitPriceStr: '¥0.107 / GB',
      lineType: '高速 IEPL 多线专线',
      protocol: 'Shadowsocks, Trojan',
      nodes: '港台日新美韩常用节点',
      ai: 'ChatGPT, Gemini',
      streaming: 'Netflix, YouTube, Disney+, TikTok',
      client: '通用客户端',
      devices: '多设备支持',
      estDate: '2023 年',
      suitable: '家庭共享、高频下载、AI 办公',
      score: '9.1',
      official: 'https://liu01.dalaoyunaff.com/#/?code=9A9fbKzz'
    },
    {
      id: 'hqyun',
      name: '环球梯机场',
      slug: 'hqyun',
      minPrice: '¥15.40 / 月 (折后)',
      plan: '¥22/月 · 120GB',
      unitPriceNum: 0.128,
      unitPriceStr: '¥0.128 / GB',
      lineType: 'BGP + IEPL 专线',
      protocol: 'Shadowsocks, V2Ray',
      nodes: 'BGP 入口与海外优质节点',
      ai: 'ChatGPT, Gemini',
      streaming: 'Netflix, YouTube, Disney+',
      client: '通用客户端',
      devices: '多设备支持',
      estDate: '2023 年',
      suitable: '网页浏览、轻办公、入门月付',
      score: '8.9',
      official: 'https://123pps01.huanqiutiaff.com/#/?code=iJzShI5m'
    },
    {
      id: 'shandians',
      name: '闪电鼠机场',
      slug: 'shandians',
      minPrice: '¥15.40 / 月 (折后)',
      plan: '¥22/月 · 120GB',
      unitPriceNum: 0.128,
      unitPriceStr: '¥0.128 / GB',
      lineType: '双入口 IEPL 冗余专线',
      protocol: 'Shadowsocks, Trojan',
      nodes: '广深 / 沪日双入口冗余节点',
      ai: 'ChatGPT, Gemini',
      streaming: 'Netflix, Disney+, YouTube 4K',
      client: '通用客户端',
      devices: '多设备支持',
      estDate: '2023 年',
      suitable: '4K/8K 视频、跨境办公',
      score: '9.3',
      official: 'https://eothvip01.shandianshuaff.com/#/?code=qNodU3f6'
    },
    {
      id: 'liulianyun',
      name: '榴莲云机场',
      slug: 'liulianyun',
      minPrice: '¥16.80 / 月 (折后)',
      plan: '¥24/月 · 150GB',
      unitPriceNum: 0.112,
      unitPriceStr: '¥0.112 / GB',
      lineType: 'IPLC / IEPL 组合专线',
      protocol: 'Shadowsocks, V2Ray',
      nodes: '多地区流媒体节点',
      ai: 'ChatGPT, Gemini',
      streaming: 'Netflix, Disney+, YouTube, TikTok',
      client: '通用客户端',
      devices: '多设备支持',
      estDate: '2023 年',
      suitable: '追剧、流媒体均衡使用',
      score: '9.0',
      official: 'http://853vip01.liulianyunaff.com/#/?code=O6mS8K5N'
    },
    {
      id: 'sxjiasu',
      name: '神行加速机场',
      slug: 'sxjiasu',
      minPrice: '¥16.10 / 月 (折后)',
      plan: '¥23/月 · 130GB',
      unitPriceNum: 0.124,
      unitPriceStr: '¥0.124 / GB',
      lineType: 'IEPL 智能路由',
      protocol: 'Shadowsocks, Trojan',
      nodes: '移动端切网优化节点',
      ai: 'ChatGPT, Gemini',
      streaming: 'Netflix, YouTube, Disney+, TikTok',
      client: '通用客户端',
      devices: '多设备支持',
      estDate: '2024 年',
      suitable: '移动端、Wi-Fi切换、视频会议',
      score: '9.0',
      official: 'https://fugui0077.shenxingaff.com/#/?code=z3ybkLVj'
    }
  ];

  const esc = s => String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));

  document.addEventListener('DOMContentLoaded', function() {
    const checkboxContainer = document.getElementById('compare-checkboxes');
    const tableContainer = document.getElementById('compare-table-container');
    const selectAllBtn = document.getElementById('select-all-btn');
    const selectNoneBtn = document.getElementById('select-none-btn');
    const resetDefaultBtn = document.getElementById('reset-default-btn');

    if (!checkboxContainer || !tableContainer) return;

    // 默认全选 selected state map
    let selectedState = {};
    COMPARE_DATA.forEach(item => {
      selectedState[item.id] = true;
    });

    // 渲染勾选框
    function renderCheckboxes() {
      checkboxContainer.innerHTML = COMPARE_DATA.map(item => {
        const checked = selectedState[item.id] ? 'checked' : '';
        return `<label class="compare-checkbox-label">
          <input type="checkbox" data-id="${item.id}" ${checked}>
          <span>${esc(item.name)}</span>
        </label>`;
      }).join('');

      checkboxContainer.querySelectorAll('input[type="checkbox"]').forEach(chk => {
        chk.addEventListener('change', function() {
          selectedState[this.dataset.id] = this.checked;
          renderTable();
        });
      });
    }

    // 渲染对比矩阵表格
    function renderTable() {
      const activeAirports = COMPARE_DATA.filter(item => selectedState[item.id]);

      if (activeAirports.length === 0) {
        tableContainer.innerHTML = `<div class="ai-empty">请在上方勾选至少一家机场进行对比。</div>`;
        return;
      }

      // 计算当前显示机场中单价最低的数值
      const minUnitPrice = Math.min(...activeAirports.map(item => item.unitPriceNum));

      // 行字段映射
      const rows = [
        { label: '项目', key: 'name', type: 'header' },
        { label: '最低价格', key: 'minPrice' },
        { label: '主打套餐', key: 'plan' },
        { label: '每 GB 单价', key: 'unitPriceStr', isUnitPrice: true },
        { label: '线路类型', key: 'lineType' },
        { label: '协议', key: 'protocol' },
        { label: '节点 / 地区', key: 'nodes' },
        { label: 'AI 支持', key: 'ai' },
        { label: '流媒体', key: 'streaming' },
        { label: '客户端', key: 'client' },
        { label: '设备数', key: 'devices' },
        { label: '成立时间', key: 'estDate' },
        { label: '适合场景', key: 'suitable' },
        { label: '综合评分', key: 'score', isScore: true }
      ];

      let tableHtml = `<div class="compare-table-wrap"><table class="compare-matrix-table"><tbody>`;

      rows.forEach(row => {
        tableHtml += `<tr><td class="row-header">${esc(row.label)}</td>`;

        activeAirports.forEach(ap => {
          if (row.type === 'header') {
            tableHtml += `<th class="col-header">
              <strong style="display:block;margin-bottom:6px;">${esc(ap.name)}</strong>
              <div style="display:flex;gap:6px;flex-wrap:wrap;">
                <a href="review-${esc(ap.slug)}.html" style="font-size:11px;color:#128db5;font-weight:700;">查看评测 →</a>
                <a href="${esc(ap.official)}" target="_blank" rel="noopener sponsored" style="font-size:11px;color:#21a473;font-weight:750;">进入官网 ↗</a>
              </div>
            </th>`;
          } else if (row.isUnitPrice) {
            const isBest = Math.abs(ap.unitPriceNum - minUnitPrice) < 0.001;
            const bestClass = isBest ? ' best-value' : '';
            tableHtml += `<td class="col-cell${bestClass}">${esc(ap.unitPriceStr)}</td>`;
          } else if (row.isScore) {
            tableHtml += `<td class="col-cell"><span class="ladder-score">${esc(ap.score)}</span></td>`;
          } else {
            tableHtml += `<td class="col-cell">${esc(ap[row.key])}</td>`;
          }
        });

        tableHtml += `</tr>`;
      });

      tableHtml += `</tbody></table></div>`;
      tableContainer.innerHTML = tableHtml;
    }

    // 按钮动作
    if (selectAllBtn) {
      selectAllBtn.addEventListener('click', function() {
        COMPARE_DATA.forEach(item => { selectedState[item.id] = true; });
        renderCheckboxes();
        renderTable();
      });
    }

    if (selectNoneBtn) {
      selectNoneBtn.addEventListener('click', function() {
        COMPARE_DATA.forEach(item => { selectedState[item.id] = false; });
        renderCheckboxes();
        renderTable();
      });
    }

    if (resetDefaultBtn) {
      resetDefaultBtn.addEventListener('click', function() {
        COMPARE_DATA.forEach(item => { selectedState[item.id] = true; });
        renderCheckboxes();
        renderTable();
      });
    }

    renderCheckboxes();
    renderTable();
  });
})();
