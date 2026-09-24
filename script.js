const lessonData = {
  materials: { index: '01 / MATERIAL', title: '箱包材料', intro: '材料决定包袋的外观、手感、耐用性与成本。了解性能、检验方法与适用场景，才能做出正确选材。', items: [
    { title: 'PU / PVC', tag: '合成革', text: 'PU 手感柔软、透气性较好，适合时尚包；PVC 耐磨、防水且成本较低。验收需确认厚度、底布、剥离强度、耐黄变及批次色差。' },
    { title: '尼龙', tag: '化纤面料', text: '轻量、耐磨、强度高，常见 210D、420D、600D 等规格。D 数表示纱线粗细，还需关注密度、涂层、防泼水和色牢度。' },
    { title: '帆布', tag: '天然质感', text: '多用棉或涤棉平纹织造，挺括且有自然纹理。量产前需测试缩水率、摩擦色牢度，并留意深色面料移染。' },
    { title: '真皮', tag: '天然皮革', text: '常用牛皮、羊皮，表面可能存在天然纹路与轻微伤痕。应按部位排版，确认厚度、软硬度、色差和利用率限度。' },
    { title: '里料', tag: '内部材料', text: '常用 210D 尼龙、涤纶布或棉布。需检查勾纱、色差、缩水、掉色以及与面料的搭配。' },
    { title: '五金', tag: '辅料', text: '包括拉链、扣具、铆钉与链条。重点确认电镀颜色、盐雾测试、开合顺畅度、拉力和表面保护。' }
  ]},
  structure: { index: '02 / STRUCTURE', title: '箱包结构', intro: '看懂部位名称，是阅读纸格、工艺单和准确沟通的第一步。', items: [
    { title: '包身', tag: '主体结构', text: '前幅、后幅、侧围和底部共同组成包身。结构线、补强和辅料搭配决定容量、轮廓与挺度。' },
    { title: '袋口', tag: '开口系统', text: '常见拉链口、磁扣口、束口和翻盖结构。设计时要综合考虑安全性、开口尺寸和单手操作便利性。' },
    { title: '肩带', tag: '携带系统', text: '由带身、连接耳和调节扣组成。重点校核长度范围、受力点补强、边缘舒适度及动态负重。' },
    { title: '内部组织', tag: '收纳结构', text: '包括贴袋、拉链袋、插袋、夹层及钥匙扣。位置和尺寸应匹配常用物品并避免与外观车线冲突。' },
    { title: '包边', tag: '收口结构', text: '包边用于包覆裁片毛边并加强轮廓。需要控制包边条宽度、拉力、接驳位置和转角顺滑度。' }
  ]},
  process: { index: '03 / PROCESS', title: '生产工艺', intro: '稳定品质来自每一道工序的标准化控制，而不只是最终验货。', items: [
    { title: '开料与备料', tag: 'STEP 01', text: '按纸格裁切面料、里料和辅料，完成编号、配对、铲薄与印位。方向性材料必须统一纹路和毛向。' },
    { title: '台面加工', tag: 'STEP 02', text: '进行折边、贴合、油边、打孔等预处理。油边需遵循打磨、底油、干燥、面油的节拍，避免一次过厚。' },
    { title: '车缝组装', tag: 'STEP 03', text: '按工序组合内袋、面部及里布。首件需确认针距、边距、线张力、回针和关键尺寸。' },
    { title: '整形包装', tag: 'STEP 04', text: '清洁线头与胶渍，安装五金、整形、终检后按客户要求填充、套袋和装箱。' }
  ]},
  quality: { index: '04 / QUALITY', title: '常见质量问题', intro: '品质管理应形成“现象—原因—措施—验证”的闭环。', items: [
    { title: '色差', tag: '外观缺陷', text: '用标准光源对照确认样，区分来料批次并记录 ΔE 或限度样。改善方式包括同缸配套裁切、批次隔离和首件确认。' },
    { title: '线迹不良', tag: '缝制缺陷', text: '断线、跳针、浮线常与针线搭配、张力、针板损伤或操作手势有关。需先停线调机，以连续试车样确认。' },
    { title: '油边问题', tag: '表面缺陷', text: '爆边、起泡、不匀时，应检查边缘打磨、底油干燥、油料黏度、环境温湿度和单层厚度。' },
    { title: '五金异常', tag: '功能缺陷', text: '刮花、氧化、色差或开合不良需隔离处理。来料抽检并层间保护，关键扣具应做拉力、疲劳及盐雾测试。' }
  ]},
  japanese: { index: '05 / JAPANESE', title: '箱包日语术语', intro: '每个词条同时提供中文、日文、假名读音和业务解释，点击词条可进入详情。', japanese: true, items: [
    { title: '生地', kana: 'きじ', zh: '面料', tag: '材料', text: '指构成包袋表面或内部的织物。表生地（おもてきじ）为面料，裏生地（うらきじ）为里料。' },
    { title: '裏地', kana: 'うらじ', zh: '里料', tag: '材料', text: '包袋内部使用的衬里材料。确认时常涉及颜色、厚度、勾纱和色牢度。' },
    { title: '縫製', kana: 'ほうせい', zh: '缝制', tag: '工艺', text: '使用缝纫设备组合部件的工序。相关词有縫い目（线迹）、糸切れ（断线）、返し縫い（回针）。' },
    { title: '金具', kana: 'かなぐ', zh: '五金件', tag: '辅料', text: '拉链头、扣具、铆钉等金属配件的统称。金具のメッキ色をご確認ください意为请确认五金电镀色。' },
    { title: '検品', kana: 'けんぴん', zh: '验货 / 检查', tag: '品质', text: '对产品品质进行检查。全数検品（ぜんすうけんぴん）是全检，抜き取り検品（ぬきとりけんぴん）是抽检。' },
    { title: '納期', kana: 'のうき', zh: '交期', tag: '业务', text: '约定的交货期限。納期を厳守いたします意为我们会严格遵守交期。' },
    { title: 'サンプル', kana: 'さんぷる', zh: '样品', tag: '开发', text: '来自英语 sample。確認サンプル是确认样，量産前サンプル是量产前样。' }
  ]},
  cases: { index: '06 / CASE STUDY', title: '日本客户实务案例', intro: '面对问题，及时报告事实、说明影响、提出对策和防止再发措施。', items: [
    { title: '大货与确认样有色差', tag: 'CASE 01', text: '立即封存物料并在标准光源下对比；报告涉及数量，寄送实物色卡供判定，同时提出换料或分色出货方案。' },
    { title: '交期可能延误', tag: 'CASE 02', text: '不要等到最后才通知。说明延误工序和预计影响，提供赶工、分批空运等选项，并每日更新实际进度。' },
    { title: '规格书存在歧义', tag: 'CASE 03', text: '将不明确处编号并用照片或示意图标注，整理问题清单一次性书面确认，未经确认不擅自生产。' },
    { title: '推荐回复结构', tag: 'TEMPLATE', text: 'お世話になっております（问候）→ 事实与原因 → 影响范围 → 临时对策 → 再发防止策 → 请求确认与致歉。' }
  ]}
};

const cards = [...document.querySelectorAll('.module-card')];
const searchInput = document.querySelector('#globalSearch');
const searchResults = document.querySelector('#searchResults');
const emptyState = document.querySelector('.empty-state');
const modal = document.querySelector('#lessonModal');
const modalBack = document.querySelector('#modalBack');
let currentModule = null;

const normalize = value => value.toLowerCase().replace(/\s+/g, '');
const queryForms = value => {
  const query = normalize(value);
  return [...new Set([query, query.replace(/(工艺|处理|问题|术语)$/g, '')])].filter(Boolean);
};
const allEntries = Object.entries(lessonData).flatMap(([module, data]) => data.items.map(item => ({ module, moduleTitle: data.title, ...item })));

function matchesEntry(entry, query) {
  const content = normalize([entry.title, entry.kana, entry.zh, entry.tag, entry.text, entry.moduleTitle].filter(Boolean).join(' '));
  return queryForms(query).some(form => content.includes(form));
}
function filterCards() {
  const query = searchInput.value.trim();
  const active = document.querySelector('.filter-tabs .active');
  const selected = active ? active.dataset.filter : 'all';
  let shown = 0;
  cards.forEach(card => {
    const data = lessonData[card.dataset.module];
    const content = normalize(card.textContent + ' ' + data.items.map(i => Object.values(i).join(' ')).join(' '));
    const matchesQuery = !query || queryForms(query).some(form => content.includes(form));
    const matchesCategory = selected === 'all' || card.dataset.category === selected;
    card.hidden = !(matchesQuery && matchesCategory);
    if (!card.hidden) shown++;
  });
  emptyState.hidden = shown !== 0;
}
function renderSearchResults() {
  const query = searchInput.value.trim();
  filterCards();
  if (!query) { searchResults.hidden = true; searchResults.innerHTML = ''; return; }
  const matches = allEntries.filter(entry => matchesEntry(entry, query)).slice(0, 8);
  searchResults.innerHTML = matches.length ? matches.map(entry => `<button role="option" data-result-module="${entry.module}" data-result-entry="${entry.title}"><span><b>${entry.title}</b>${entry.kana ? `<small>${entry.kana} · ${entry.zh}</small>` : `<small>${entry.tag}</small>`}</span><em>${entry.moduleTitle} →</em></button>`).join('') : '<p>没有找到匹配词条，试试“车缝”“色差”或“検品”。</p>';
  searchResults.hidden = false;
}
searchInput.addEventListener('input', renderSearchResults);
searchInput.addEventListener('focus', renderSearchResults);
searchInput.addEventListener('keydown', event => {
  if (event.key === 'Enter') {
    const first = searchResults.querySelector('button');
    if (first) first.click(); else document.querySelector('#knowledge').scrollIntoView({ behavior: 'smooth' });
  }
  if (event.key === 'Escape') searchResults.hidden = true;
});
searchResults.addEventListener('click', event => {
  const result = event.target.closest('[data-result-module]');
  if (!result) return;
  openEntry(result.dataset.resultModule, result.dataset.resultEntry);
  searchResults.hidden = true;
});
document.addEventListener('click', event => { if (!event.target.closest('.hero-copy')) searchResults.hidden = true; });
document.querySelector('#searchFocus').addEventListener('click', () => { window.scrollTo({ top: 0, behavior: 'smooth' }); setTimeout(() => searchInput.focus(), 300); });
document.querySelectorAll('[data-query]').forEach(button => button.addEventListener('click', () => { searchInput.value = button.dataset.query; renderSearchResults(); searchInput.focus(); }));
document.querySelectorAll('.filter-tabs button').forEach(button => button.addEventListener('click', () => {
  document.querySelector('.filter-tabs .active').classList.remove('active'); button.classList.add('active'); filterCards();
}));

function entryMarkup(item, isJapanese) {
  return `<button class="lesson-item" data-open-entry="${item.title}"><span class="lesson-title"><b>${item.title}</b>${isJapanese ? `<i>${item.kana}</i><strong>${item.zh}</strong>` : `<i>${item.tag}</i>`}</span><p>${item.text}</p><span class="entry-arrow">查看详情 →</span></button>`;
}
function showDialog() { if (!modal.open) modal.showModal(); document.querySelector('#modalContent').scrollTop = 0; }
function openModule(module) {
  const lesson = lessonData[module]; if (!lesson) return;
  currentModule = module; modalBack.hidden = true;
  document.querySelector('#modalIndex').textContent = lesson.index;
  document.querySelector('#modalContent').innerHTML = `<div class="modal-body"><div class="breadcrumb"><button data-home>首页</button><span>/</span><b>${lesson.title}</b></div><h2>${lesson.title}</h2><p>${lesson.intro}</p><div class="lesson-list">${lesson.items.map(item => entryMarkup(item, lesson.japanese)).join('')}</div></div>`;
  showDialog();
}
function openEntry(module, title) {
  const lesson = lessonData[module]; const item = lesson && lesson.items.find(entry => entry.title === title); if (!item) return;
  currentModule = module; modalBack.hidden = false;
  document.querySelector('#modalIndex').textContent = `${lesson.index} / ENTRY`;
  document.querySelector('#modalContent').innerHTML = `<article class="modal-body entry-detail"><div class="breadcrumb"><button data-home>首页</button><span>/</span><button data-module-back>${lesson.title}</button><span>/</span><b>${item.title}</b></div><span class="detail-tag">${item.tag}</span><h2>${item.title}</h2>${item.kana ? `<div class="language-grid"><span>日文<strong>${item.title}</strong></span><span>假名读音<strong>${item.kana}</strong></span><span>中文<strong>${item.zh}</strong></span></div>` : ''}<h3>详细解释</h3><p>${item.text}</p><div class="tip"><b>学习提示</b><span>记录关键词，并结合实际样品、工艺单或品质报告理解，会记得更牢。</span></div></article>`;
  showDialog();
}
function closeAndHome() { modal.close(); window.scrollTo({ top: 0, behavior: 'smooth' }); }

document.querySelectorAll('[data-modal]').forEach(button => button.addEventListener('click', event => { event.stopPropagation(); openModule(button.dataset.modal); }));
cards.forEach(card => {
  const activate = event => { if (event.target.closest('button')) return; openModule(card.dataset.module); };
  card.addEventListener('click', activate);
  card.addEventListener('keydown', event => { if ((event.key === 'Enter' || event.key === ' ') && event.target === card) { event.preventDefault(); openModule(card.dataset.module); } });
});
document.querySelectorAll('[data-entry]').forEach(button => button.addEventListener('click', event => { event.stopPropagation(); openEntry(button.closest('[data-module]').dataset.module, button.dataset.entry); }));
document.querySelector('#modalContent').addEventListener('click', event => {
  const entry = event.target.closest('[data-open-entry]'); if (entry) openEntry(currentModule, entry.dataset.openEntry);
  if (event.target.closest('[data-module-back]')) openModule(currentModule);
  if (event.target.closest('[data-home]')) closeAndHome();
});
modalBack.addEventListener('click', () => openModule(currentModule));
document.querySelector('#closeModal').addEventListener('click', () => modal.close());
modal.addEventListener('click', event => { if (event.target === modal) modal.close(); });
document.querySelector('#homeButton').addEventListener('click', closeAndHome);
document.querySelector('#profileButton').addEventListener('click', () => {
  currentModule = null; modalBack.hidden = true; document.querySelector('#modalIndex').textContent = 'LEARNING CENTER';
  document.querySelector('#modalContent').innerHTML = `<div class="modal-body"><div class="breadcrumb"><button data-home>首页</button><span>/</span><b>学习中心</b></div><h2>学习者中心</h2><p>从基础知识开始，建立自己的箱包行业学习路径。</p><div class="profile-stats"><span><b>6</b>知识模块</span><span><b>${allEntries.length}</b>精选词条</span><span><b>1</b>本地笔记</span></div><button class="primary-action" data-home>返回首页继续学习</button></div>`; showDialog();
});

const noteText = document.querySelector('#noteText');
const saveStatus = document.querySelector('#saveStatus');
const savedNote = localStorage.getItem('bagLearningNote');
if (savedNote) noteText.value = savedNote;
document.querySelector('#noteDate').textContent = new Intl.DateTimeFormat('zh-CN', { month: 'long', day: 'numeric' }).format(new Date());
function saveNote() { localStorage.setItem('bagLearningNote', noteText.value); saveStatus.textContent = '已自动保存'; const toast = document.querySelector('#toast'); toast.classList.add('show'); setTimeout(() => toast.classList.remove('show'), 1800); }
noteText.addEventListener('input', () => saveStatus.textContent = '有未保存的修改');
document.querySelector('#saveNote').addEventListener('click', saveNote);
document.querySelector('#newNote').addEventListener('click', () => { noteText.value = ''; noteText.focus(); saveStatus.textContent = '新笔记'; });

const sections = [...document.querySelectorAll('main section[id]')];
window.addEventListener('scroll', () => {
  const current = sections.filter(section => section.getBoundingClientRect().top < 180).at(-1);
  document.querySelectorAll('.main-nav a').forEach(link => link.classList.toggle('active', current ? link.getAttribute('href') === `#${current.id}` : link.getAttribute('href') === '#top'));
  document.querySelector('#homeButton').classList.toggle('visible', window.scrollY > 500);
}, { passive: true });
