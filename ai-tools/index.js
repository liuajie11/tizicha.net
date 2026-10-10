(function () {
  const tools = window.AI_TOOLS || [];
  const categories = window.AI_TOOL_CATEGORIES || ['全部'];
  const grid = document.getElementById('ai-tool-grid');
  const filters = document.getElementById('ai-filters');
  const search = document.getElementById('ai-search');
  const count = document.getElementById('ai-result-count');
  const empty = document.getElementById('ai-empty');
  if (!grid || !filters || !search) return;

  let activeCategory = '全部';

  function escapeHtml(value) {
    return String(value).replace(/[&<>'"]/g, function (char) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[char];
    });
  }

  function card(tool, index) {
    const platformText = tool.platforms.join(' · ');
    return '<article class="ai-tool-card">' +
      '<div class="ai-tool-top"><div class="ai-tool-mark">' + escapeHtml(tool.mark) + '</div>' +
      '<div><span class="ai-rank">NO. ' + String(index + 1).padStart(2, '0') + '</span><h3>' + escapeHtml(tool.name) + '</h3><p class="ai-developer">' + escapeHtml(tool.developer) + '</p></div>' +
      '<span class="ai-category">' + escapeHtml(tool.category) + '</span></div>' +
      '<p class="ai-purpose">' + escapeHtml(tool.purpose) + '</p>' +
      '<dl class="ai-facts"><div><dt>可用平台</dt><dd>' + escapeHtml(platformText) + '</dd></div><div><dt>网络提示</dt><dd><span class="ai-level">' + escapeHtml(tool.level) + '</span></dd></div></dl>' +
      '<div class="ai-issue-preview"><strong>常见问题</strong><span>' + escapeHtml(tool.issues.slice(0, 2).join('；')) + '</span></div>' +
      '<div class="ai-tool-actions"><a class="btn btn-primary" href="' + escapeHtml(tool.official) + '" target="_blank" rel="noopener noreferrer nofollow">进入官网 <span>↗</span></a>' +
      '<a class="btn btn-ghost" href="ai-tools/tool.html?tool=' + encodeURIComponent(tool.id) + '">教程与排查</a></div>' +
      '</article>';
  }

  function renderFilters() {
    filters.innerHTML = categories.map(function (category) {
      return '<button type="button" class="ai-filter' + (category === activeCategory ? ' active' : '') + '" data-category="' + escapeHtml(category) + '">' + escapeHtml(category) + '</button>';
    }).join('');
  }

  function render() {
    const keyword = search.value.trim().toLowerCase();
    const visible = tools.filter(function (tool) {
      const categoryMatch = activeCategory === '全部' || tool.category === activeCategory;
      const haystack = [tool.name, tool.developer, tool.category, tool.purpose, tool.platforms.join(' '), tool.issues.join(' ')].join(' ').toLowerCase();
      return categoryMatch && (!keyword || haystack.includes(keyword));
    });

    grid.innerHTML = visible.map(function (tool) {
      return card(tool, tools.indexOf(tool));
    }).join('');
    count.textContent = visible.length + ' 个工具';
    empty.hidden = visible.length !== 0;
  }

  filters.addEventListener('click', function (event) {
    const button = event.target.closest('[data-category]');
    if (!button) return;
    activeCategory = button.dataset.category;
    renderFilters();
    render();
  });
  search.addEventListener('input', render);

  renderFilters();
  render();
})();
