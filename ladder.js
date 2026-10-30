(function () {
  const ladders = [
    {name:'速界机场',slug:'sujie',plan:'¥15 / 50GB',code:'sujie888',line:'IEPL 专线',ai:'ChatGPT / Claude / Gemini',devices:'多设备',score:'9.6',official:'https://lqy001.speedworldaff.com/#/register?code=p3EKNmlp'},
    {name:'可信云机场',slug:'kexinyun',plan:'¥15/月 · 60GB',code:'KX888',line:'IEPL 专线',ai:'ChatGPT / Claude / Gemini',devices:'不限设备',score:'8.9',official:'https://ermaozi01.kosingaff.com/#/register?code=FA6DjjDi'},
    {name:'极连云机场',slug:'jilianyun',plan:'¥15.50/月 · 100GB',code:'JLY888',line:'IPLC / IEPL',ai:'ChatGPT / Gemini',devices:'不限设备',score:'9.2',official:'https://liujie2002.jlyvipaff.com/#/?code=0MxRdXiu'},
    {name:'边缘节点机场',slug:'bianyuan',plan:'¥15/月 · 72GB',code:'xk808',line:'VLESS + IEPL',ai:'ChatGPT / Gemini / Midjourney',devices:'不限设备',score:'9.0',official:'https://zoio.edgenovaaff.cc/#/register?code=ti8OUEN2'},
    {name:'快狸机场',slug:'kuaili',plan:'¥15/月 · 50GB',code:'sujie888',line:'IEPL / IPLC',ai:'ChatGPT / Gemini',devices:'不限设备',score:'9.0',official:'https://yyo649929.kuailiaff.com/#/register?code=JVuUcHke'},
    {name:'云图机场',slug:'yuntu',plan:'¥20/月 · 150GB',code:'yt88',line:'金融级专线',ai:'ChatGPT / Gemini',devices:'5 台',score:'8.9',official:'https://super.ytjcok.org/#/register?code=iKpNlXer'},
    {name:'光年梯机场',slug:'guannt',plan:'¥118/年 · 100GB/月',code:'GNT80',line:'IPLC / IEPL',ai:'ChatGPT / Gemini',devices:'未公开',score:'9.1',official:'http://liujie2002.gntaff.com/#/?code=NoPkovej'},
    {name:'鲲鹏加速机场',slug:'kunpjs',plan:'¥12/月 · 99GB',code:'暂无统一码',line:'BGP 优化专线',ai:'ChatGPT',devices:'未公开',score:'9.0',official:'https://kunpengjiasu.com/#/register?code=99UgsawR'},
    {name:'云界线机场',slug:'yunjiexian',plan:'¥22/月',code:'yjx888',line:'IEPL 优选',ai:'ChatGPT / Gemini',devices:'未公开',score:'8.9',official:'https://liuajie7.yunjiexianaff.com/#/?code=AMWirEkQ'},
    {name:'大佬云机场',slug:'dalaoyun',plan:'约 ¥23/月',code:'dly888',line:'高速 IEPL',ai:'ChatGPT / Gemini',devices:'多设备',score:'9.1',official:'https://liujie2.dalaoyunaff.com/#/?code=mmPDuc6r'},
    {name:'环球梯机场',slug:'hqyun',plan:'约 ¥22/月',code:'HQ66',line:'BGP + IEPL',ai:'ChatGPT / Gemini',devices:'未公开',score:'8.9',official:'https://liuajie740.huanqiutiaff.com/#/?code=1PrqjboO'},
    {name:'闪电鼠机场',slug:'shandians',plan:'¥22/月',code:'sd88',line:'双入口 IEPL',ai:'ChatGPT / Gemini',devices:'未公开',score:'9.3',official:'https://liujie2.shandianshuaff.com/#/?code=vwBNE30O'},
    {name:'榴莲云机场',slug:'liulianyun',plan:'约 ¥24/月',code:'ll88',line:'IPLC / IEPL',ai:'ChatGPT / Gemini',devices:'未公开',score:'9.0',official:'https://liuajie74.liulianyunaff.com/#/?code=rp2bbeus'},
    {name:'神行加速机场',slug:'sxjiasu',plan:'约 ¥23/月',code:'sx0077',line:'IEPL 智能路由',ai:'ChatGPT / Gemini',devices:'未公开',score:'9.0',official:'https://wuhan01.shenxingaff.com/#/?code=z3ybkLVj'},
    {name:'二猫云机场',slug:'ermaoyun',plan:'¥20/月 · 100GB',code:'官方活动为准',line:'企业级 IEPL 专线',ai:'ChatGPT / Claude / Gemini',devices:'多设备',score:'9.2',official:'https://guangs.2maoyunaff.cc/#/?code=wMKtwSYr'}
  ];

  const rows = document.getElementById('ladder-rows');
  if (!rows) return;

  function esc(value) {
    return String(value).replace(/[&<>'"]/g, function (char) {
      return {'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[char];
    });
  }

  rows.innerHTML = ladders.map(function (item, index) {
    return '<tr>' +
      '<td class="ladder-name-cell"><span class="ladder-number">' + String(index + 1).padStart(2, '0') + '</span><a href="review-' + esc(item.slug) + '.html"><strong>' + esc(item.name) + '</strong><small>查看本站评测 →</small></a></td>' +
      '<td><strong class="ladder-plan">' + esc(item.plan) + '</strong></td>' +
      '<td><code>' + esc(item.code) + '</code></td>' +
      '<td>' + esc(item.line) + '</td>' +
      '<td><span class="ladder-ai">' + esc(item.ai) + '</span></td>' +
      '<td>' + esc(item.devices) + '</td>' +
      '<td><span class="ladder-score">' + esc(item.score) + '</span></td>' +
      '<td><a class="ladder-official" href="' + esc(item.official) + '" target="_blank" rel="sponsored nofollow noopener noreferrer">进入官网 ↗</a></td>' +
      '</tr>';
  }).join('');
})();
