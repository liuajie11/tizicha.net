(function () {
  const root = document.getElementById('ai-tool-detail');
  const params = new URLSearchParams(window.location.search);
  const id = params.get('tool');
  const tools = window.AI_TOOLS || [];
  const tool = tools.find(function (item) { return item.id === id; });

  function escapeHtml(value) {
    return String(value).replace(/[&<>'"]/g, function (char) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[char];
    });
  }

  if (!tool) {
    document.title = '未找到该 AI 工具 · 梯子查';
    root.innerHTML = '<section class="ai-not-found"><span class="ai-tool-mark">?</span><h1>没有找到这项工具。</h1><p>链接可能已过期，请返回 AI 工具导航重新选择。</p><a class="btn btn-primary" href="../ai-tools.html">返回 AI 工具导航</a></section>';
    return;
  }

  document.title = tool.name + ' 官网、平台与访问问题 · 梯子查';
  document.querySelector('meta[name="description"]').setAttribute('content', tool.name + ' 官方入口、开发者、主要用途、可用平台、网络环境要求和常见访问问题排查。');

  const platformTags = tool.platforms.map(function (platform) { return '<span>' + escapeHtml(platform) + '</span>'; }).join('');
  const issueItems = tool.issues.map(function (issue, index) {
    return '<article class="ai-problem"><b>' + String(index + 1).padStart(2, '0') + '</b><div><h3>' + escapeHtml(issue) + '</h3><p>先按下方检查顺序排除账号、地区、客户端和网络环境问题，再查看官方状态与帮助中心。</p></div></article>';
  }).join('');
  const checkItems = tool.checks.map(function (check, index) {
    return '<li><b>' + (index + 1) + '</b><span>' + escapeHtml(check) + '</span></li>';
  }).join('');
  const related = tools.filter(function (item) { return item.id !== tool.id && item.category === tool.category; }).slice(0, 3).map(function (item) {
    return '<a class="card ai-related-card" href="tool.html?tool=' + encodeURIComponent(item.id) + '"><span class="ai-tool-mark small">' + escapeHtml(item.mark) + '</span><div><h3>' + escapeHtml(item.name) + '</h3><p>' + escapeHtml(item.purpose) + '</p><span class="card-arrow">查看资料 →</span></div></a>';
  }).join('');

  root.innerHTML =
    '<div class="review-breadcrumb"><a href="../index.html">首页</a><span>›</span><a href="../ai-tools.html">AI工具</a><span>›</span><span>' + escapeHtml(tool.name) + '</span></div>' +
    '<section class="ai-detail-hero"><div><span class="eyebrow">' + escapeHtml(tool.category) + ' · 官方资料导航</span><div class="ai-detail-title"><span class="ai-tool-mark large">' + escapeHtml(tool.mark) + '</span><h1>' + escapeHtml(tool.name) + '</h1></div><p class="lede">' + escapeHtml(tool.purpose) + '</p><div class="actions"><a class="btn btn-primary" href="' + escapeHtml(tool.official) + '" target="_blank" rel="noopener noreferrer nofollow">进入官方网站 <span>↗</span></a><a class="btn btn-ghost" href="#troubleshooting">查看问题排查</a></div></div>' +
    '<aside class="ai-official-card"><span>官方开发者</span><strong>' + escapeHtml(tool.developer) + '</strong><div class="ai-official-url">' + escapeHtml(tool.official.replace(/^https?:\/\//, '').replace(/\/$/, '')) + '</div><small>请核对浏览器地址栏域名，避免仿冒站与非官方安装包。</small></aside></section>' +
    '<section class="ai-detail-summary"><div><span>主要用途</span><p>' + escapeHtml(tool.purpose) + '</p></div><div><span>访问特征</span><p><strong class="ai-level">' + escapeHtml(tool.level) + '</strong></p></div><div class="wide"><span>可用平台</span><div class="ai-platform-tags">' + platformTags + '</div></div></section>' +
    '<nav class="toc"><strong>本页导航</strong><a href="#environment">网络与账号</a><a href="#troubleshooting">常见问题</a><a href="#steps">检查步骤</a><a href="#related">同类工具</a></nav>' +
    '<section class="review-section" id="environment"><span class="section-label">ACCESS ENVIRONMENT</span><h2>网络、地区与账号要求</h2><div class="ai-access-panel"><div class="card-icon">◎</div><div><h3>' + escapeHtml(tool.access) + '</h3><p>服务商可能随时调整开放地区、注册方式、模型权限与付费规则。官网可访问只代表网页连接正常，不代表账号一定具备注册、订阅或某项新功能权限。</p></div></div><div class="notice">建议：使用真实账号资料并保持常用设备、时区、账号地区与支付地区一致；不要依赖共享账号、代充或来路不明的“镜像站”。</div></section>' +
    '<section class="review-section" id="troubleshooting"><span class="section-label">COMMON ISSUES</span><h2>' + escapeHtml(tool.name) + ' 常见访问问题</h2><p>下面列出最常见的故障表现。功能灰度、套餐差异和组织权限也经常被误判为网络问题。</p><div class="ai-problem-grid">' + issueItems + '</div></section>' +
    '<section class="review-section" id="steps"><span class="section-label">QUICK CHECK</span><h2>建议按这个顺序检查</h2><ol class="ai-check-list">' + checkItems + '</ol><div class="ai-safety-note"><strong>安全提醒</strong><p>不要向陌生人提供验证码、Cookie、会话令牌、API Key 或远程控制权限。下载安装包前核对官网域名、应用商店开发者与数字签名。</p></div></section>' +
    '<section class="review-section" id="related"><span class="section-label">RELATED TOOLS</span><h2>同类工具</h2><div class="ai-related-grid">' + related + '</div></section>' +
    '<section class="final-section"><h2>资料边界</h2><p class="muted">本页用于整理官方入口、开发者、平台和常见环境问题，不承诺任何服务在特定地区可用，也不提供绕过服务地区限制的方法。功能、价格和支持地区请以 ' + escapeHtml(tool.name) + ' 官网的最新说明为准。</p><div class="final-actions"><a class="btn btn-primary" href="' + escapeHtml(tool.official) + '" target="_blank" rel="noopener noreferrer nofollow">打开官网</a><a class="btn btn-ghost" href="../ai-tools.html">返回全部工具</a></div></section>';
})();
