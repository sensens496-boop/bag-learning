const lessonData = {
  materials: { index: '01 / MATERIAL', title: '箱包材料入门', intro: '材料决定了包袋的外观、手感、耐用性与成本。先从四类核心材料开始认识。', items: [['面料', '常见有真皮、PU、PVC、尼龙、涤纶与帆布。选材时关注克重、厚度、色牢度、耐磨性和防水性。'], ['里料', '常用210D尼龙、涤纶布或棉布。需检查勾纱、色差、缩水及与面料的搭配。'], ['辅料', '包括海绵、无纺布、胶板、纸板等，主要用于定型、支撑和改善手感。'], ['五金', '拉链、扣具、铆钉与链条等。重点确认电镀颜色、盐雾测试、开合顺畅度与拉力。']] },
  structure: { index: '02 / STRUCTURE', title: '箱包结构解析', intro: '看懂部位名称，是阅读纸格、工艺单和准确沟通的第一步。', items: [['主体结构', '前幅、后幅、侧围和底部共同组成包身，结构决定容量和基本轮廓。'], ['开口系统', '常见拉链口、磁扣口、束口和翻盖结构，需要兼顾安全与使用便利。'], ['携带系统', '手挽、肩带、背带及连接耳。设计时要考虑受力、长度调节和人体工学。'], ['内部组织', '包括贴袋、拉链袋、插袋、夹层及钥匙扣，直接影响收纳体验。']] },
  process: { index: '03 / PROCESS', title: '生产工艺流程', intro: '稳定的品质来自每一道工序的标准化控制，而不仅仅是最终验货。', items: [['开料与备料', '按纸格裁切面料、里料和辅料，并完成编号、配对、铲薄与印位。'], ['台面加工', '进行折边、贴合、油边、打孔等预处理，保证部件尺寸与外观。'], ['车缝组装', '按工序组合内袋、面部及里布，控制针距、边距、线迹和回针。'], ['整形包装', '清洁线头与胶渍，安装五金、整形、终检后按客户要求包装。']] },
  quality: { index: '04 / QUALITY', title: '常见质量问题', intro: '品质管理要形成“现象—原因—措施—验证”的闭环。', items: [['色差', '先用标准光源对色并区分来料批次；大货前确认限度样，裁切时做好同色配套。'], ['线迹不良', '断线、跳针或浮线多与针线搭配、张力和操作有关；需先调机再复测。'], ['油边问题', '爆边、起泡、不均匀时，应检查边缘打磨、底油干燥、油料黏度和涂层厚度。'], ['五金异常', '刮花、氧化、色差或开合不良；来料抽检并隔层保护，关键扣具需做疲劳测试。']] },
  japanese: { index: '05 / JAPANESE', title: '箱包日语术语', intro: '先记住业务中使用频率最高的词，并结合邮件与规格书语境学习。', items: [['生地（きじ）', '面料。例：表生地（表面面料）、裏生地（里料）。'], ['縫製（ほうせい）', '缝制。関連词：縫い目（线迹）、糸切れ（断线）、返し縫い（回针）。'], ['金具（かなぐ）', '五金件。例：金具のメッキ色をご確認ください（请确认五金电镀色）。'], ['検品（けんぴん）', '验货、检查。例：全数検品（全检）、抜き取り検品（抽检）。'], ['納期（のうき）', '交期。例：納期を厳守いたします（我们会严格遵守交期）。']] },
  cases: { index: '06 / CASE STUDY', title: '日本客户实务案例', intro: '面对问题时，及时报告事实、说明影响、提出对策和防止再发措施。', items: [['案例：大货与确认样有色差', '处理：立即封存该批物料并在标准光源下拍摄对比；报告涉及数量，寄送实物色卡供客户判定，同时提出换料或分色出货方案。'], ['案例：交期可能延误', '处理：不要等到最后才通知。说明延误工序和预计影响，提供赶工、分批空运等选项，并每日更新实际进度。'], ['案例：规格书存在歧义', '处理：将不明确处编号，用照片或示意图标注；整理成问题清单一次性书面确认，未经确认不擅自生产。'], ['推荐回复结构', 'お世話になっております（问候）→ 事实与原因 → 影响范围 → 临时对策 → 再发防止策 → 请求确认与致歉。']] }
};

const cards = [...document.querySelectorAll('.module-card')];
const searchInput = document.querySelector('#globalSearch');
const emptyState = document.querySelector('.empty-state');

function filterCards() {
  const query = searchInput.value.trim().toLowerCase();
  const selected = document.querySelector('.filter-tabs .active').dataset.filter;
  let shown = 0;
  cards.forEach(card => {
    const matchesQuery = !query || card.dataset.search.toLowerCase().includes(query) || card.textContent.toLowerCase().includes(query);
    const matchesCategory = selected === 'all' || card.dataset.category === selected;
    card.hidden = !(matchesQuery && matchesCategory);
    if (!card.hidden) shown++;
  });
  emptyState.hidden = shown !== 0;
}

searchInput.addEventListener('input', filterCards);
searchInput.addEventListener('keydown', event => {
  if (event.key === 'Enter') document.querySelector('#knowledge').scrollIntoView({ behavior: 'smooth' });
});
document.querySelector('#searchFocus').addEventListener('click', () => searchInput.focus());
document.querySelectorAll('[data-query]').forEach(button => button.addEventListener('click', () => {
  searchInput.value = button.dataset.query;
  filterCards();
  document.querySelector('#knowledge').scrollIntoView({ behavior: 'smooth' });
}));
document.querySelectorAll('.filter-tabs button').forEach(button => button.addEventListener('click', () => {
  document.querySelector('.filter-tabs .active').classList.remove('active');
  button.classList.add('active');
  filterCards();
}));

const modal = document.querySelector('#lessonModal');
document.querySelectorAll('[data-modal]').forEach(button => button.addEventListener('click', () => {
  const lesson = lessonData[button.dataset.modal];
  document.querySelector('#modalIndex').textContent = lesson.index;
  document.querySelector('#modalContent').innerHTML = `<div class="modal-body"><h2>${lesson.title}</h2><p>${lesson.intro}</p><div class="lesson-list">${lesson.items.map(item => `<div class="lesson-item"><b>${item[0]}</b><p>${item[1]}</p></div>`).join('')}</div></div>`;
  modal.showModal();
}));
document.querySelector('#closeModal').addEventListener('click', () => modal.close());
modal.addEventListener('click', event => { if (event.target === modal) modal.close(); });

const noteText = document.querySelector('#noteText');
const saveStatus = document.querySelector('#saveStatus');
const savedNote = localStorage.getItem('bagLearningNote');
if (savedNote) noteText.value = savedNote;
document.querySelector('#noteDate').textContent = new Intl.DateTimeFormat('zh-CN', { month: 'long', day: 'numeric' }).format(new Date());
function saveNote() {
  localStorage.setItem('bagLearningNote', noteText.value);
  saveStatus.textContent = '已自动保存';
  const toast = document.querySelector('#toast');
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 1800);
}
noteText.addEventListener('input', () => saveStatus.textContent = '有未保存的修改');
document.querySelector('#saveNote').addEventListener('click', saveNote);
document.querySelector('#newNote').addEventListener('click', () => { noteText.value = ''; noteText.focus(); saveStatus.textContent = '新笔记'; });

const sections = [...document.querySelectorAll('main section[id]')];
window.addEventListener('scroll', () => {
  const current = sections.filter(section => section.getBoundingClientRect().top < 180).at(-1);
  document.querySelectorAll('.main-nav a').forEach(link => link.classList.toggle('active', current && link.getAttribute('href') === `#${current.id}`));
}, { passive: true });
