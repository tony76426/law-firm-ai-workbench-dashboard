(() => {
  'use strict';

  const pages = [
    ['index.html','儀表板','grid'],['cases.html','案件中心','briefcase'],['documents.html','文件庫','file'],
    ['ai-classification.html','AI 分類','ai'],['evidence.html','卷證整理','stack'],['calendar.html','開庭行程','calendar'],
    ['tasks.html','任務追蹤','check'],['collaboration.html','團隊協作','users'],['reports.html','報表分析','chart'],['settings.html','設定','settings']
  ];

  const sprite = `<svg aria-hidden="true" class="sr-only" id="iconSprite">
    <symbol id="i-grid" viewBox="0 0 24 24"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/></symbol>
    <symbol id="i-briefcase" viewBox="0 0 24 24"><rect x="3" y="7" width="18" height="13" rx="2"/><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 12h18M10 12v2h4v-2"/></symbol>
    <symbol id="i-file" viewBox="0 0 24 24"><path d="M6 2h8l4 4v16H6z"/><path d="M14 2v5h5M9 12h6M9 16h6"/></symbol>
    <symbol id="i-ai" viewBox="0 0 24 24"><path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M18.4 5.6l-2.1 2.1M7.7 16.3l-2.1 2.1"/><circle cx="12" cy="12" r="4"/></symbol>
    <symbol id="i-stack" viewBox="0 0 24 24"><path d="m12 3 9 5-9 5-9-5z"/><path d="m3 12 9 5 9-5M3 16l9 5 9-5"/></symbol>
    <symbol id="i-calendar" viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M8 3v4M16 3v4M3 10h18"/></symbol>
    <symbol id="i-check" viewBox="0 0 24 24"><path d="m5 12 4 4L19 6"/></symbol>
    <symbol id="i-users" viewBox="0 0 24 24"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></symbol>
    <symbol id="i-chart" viewBox="0 0 24 24"><path d="M4 20V10M10 20V4M16 20v-7M22 20H2"/></symbol>
    <symbol id="i-settings" viewBox="0 0 24 24"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .34 1.88l.06.06-2.83 2.83-.06-.06A1.7 1.7 0 0 0 15 19.4a1.7 1.7 0 0 0-1 .6 1.7 1.7 0 0 0-.4 1.1V21h-4v-.09A1.7 1.7 0 0 0 8.6 19.4a1.7 1.7 0 0 0-1.88.34l-.06.06-2.83-2.83.06-.06A1.7 1.7 0 0 0 4.6 15a1.7 1.7 0 0 0-.6-1 1.7 1.7 0 0 0-1.1-.4H3v-4h.09A1.7 1.7 0 0 0 4.6 8.6a1.7 1.7 0 0 0-.34-1.88l-.06-.06 2.83-2.83.06.06A1.7 1.7 0 0 0 9 4.6a1.7 1.7 0 0 0 1-.6 1.7 1.7 0 0 0 .4-1.1V3h4v.09A1.7 1.7 0 0 0 15.4 4.6a1.7 1.7 0 0 0 1.88-.34l.06-.06 2.83 2.83-.06.06A1.7 1.7 0 0 0 19.4 9c.17.36.48.72 1 .95.22.1.46.15.7.15H21v4h-.09a1.7 1.7 0 0 0-1.51.9z"/></symbol>
    <symbol id="i-search" viewBox="0 0 24 24"><circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/></symbol>
    <symbol id="i-bell" viewBox="0 0 24 24"><path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9M10 21h4"/></symbol>
    <symbol id="i-chevron" viewBox="0 0 24 24"><path d="m8 10 4 4 4-4"/></symbol>
    <symbol id="i-menu" viewBox="0 0 24 24"><path d="M4 6h16M4 12h16M4 18h16"/></symbol>
    <symbol id="i-close" viewBox="0 0 24 24"><path d="m6 6 12 12M18 6 6 18"/></symbol>
    <symbol id="i-refresh" viewBox="0 0 24 24"><path d="M20 11a8 8 0 0 0-15-4l-2 3M4 3v7h7M4 13a8 8 0 0 0 15 4l2-3M20 21v-7h-7"/></symbol>
    <symbol id="i-plus" viewBox="0 0 24 24"><path d="M12 5v14M5 12h14"/></symbol>
    <symbol id="i-alert" viewBox="0 0 24 24"><path d="M12 3 2 21h20z"/><path d="M12 9v5M12 18h.01"/></symbol>
    <symbol id="i-lock" viewBox="0 0 24 24"><rect x="4" y="10" width="16" height="11" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3"/></symbol>
    <symbol id="i-mail" viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></symbol>
    <symbol id="i-message" viewBox="0 0 24 24"><path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4z"/></symbol>
    <symbol id="i-download" viewBox="0 0 24 24"><path d="M12 3v12M7 10l5 5 5-5M4 21h16"/></symbol>
    <symbol id="i-filter" viewBox="0 0 24 24"><path d="M3 5h18M6 12h12M10 19h4"/></symbol>
    <symbol id="i-more" viewBox="0 0 24 24"><circle cx="5" cy="12" r="1"/><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/></symbol>
    <symbol id="i-edit" viewBox="0 0 24 24"><path d="m4 20 4.5-1 10-10-3.5-3.5-10 10zM14 6l3.5 3.5"/></symbol>
    <symbol id="i-eye" viewBox="0 0 24 24"><path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/></symbol>
    <symbol id="i-trend" viewBox="0 0 24 24"><path d="m3 17 6-6 4 4 8-9"/><path d="M15 6h6v6"/></symbol>
    <symbol id="i-pie" viewBox="0 0 24 24"><path d="M12 2v10h10A10 10 0 1 1 12 2z"/><path d="M15 2.5A10 10 0 0 1 21.5 9H15z"/></symbol>
    <symbol id="i-print" viewBox="0 0 24 24"><path d="M6 9V3h12v6M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><rect x="6" y="14" width="12" height="7"/></symbol>
    <symbol id="i-gavel" viewBox="0 0 24 24"><path d="m14 5 5 5M11 8l5 5M3 21l8-8M9 3l4 4-5 5-4-4zM15 9l4 4-5 5-4-4z"/></symbol>
    <symbol id="i-history" viewBox="0 0 24 24"><path d="M3 12a9 9 0 1 0 3-6.7L3 8"/><path d="M3 3v5h5M12 7v5l3 2"/></symbol>
    <symbol id="i-paperclip" viewBox="0 0 24 24"><path d="m21 11.5-9.2 9.2a6 6 0 0 1-8.5-8.5l9.2-9.2a4 4 0 1 1 5.7 5.7L9 17.9a2 2 0 1 1-2.8-2.8l8.5-8.5"/></symbol>
    <symbol id="i-save" viewBox="0 0 24 24"><path d="M5 3h12l2 2v16H5z"/><path d="M8 3v6h8V3M8 21v-7h8v7"/></symbol>
    <symbol id="i-phone" viewBox="0 0 24 24"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.4 19.4 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.5 2.1L8 10a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.9.3 1.9.6 2.9.7a2 2 0 0 1 1.7 2z"/></symbol>
    <symbol id="i-note" viewBox="0 0 24 24"><path d="M4 3h16v18H4z"/><path d="M8 8h8M8 12h8M8 16h5"/></symbol>
    <symbol id="i-sparkles" viewBox="0 0 24 24"><path d="m12 3 1.2 3.8L17 8l-3.8 1.2L12 13l-1.2-3.8L7 8l3.8-1.2zM5 14l.8 2.2L8 17l-2.2.8L5 20l-.8-2.2L2 17l2.2-.8zM19 13l.8 2.2L22 16l-2.2.8L19 19l-.8-2.2L16 16l2.2-.8z"/></symbol>
    <symbol id="i-folder" viewBox="0 0 24 24"><path d="M3 5h7l2 2h9v12H3z"/></symbol>
    <symbol id="i-shield" viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/><path d="m9 12 2 2 4-4"/></symbol>
    <symbol id="i-upload" viewBox="0 0 24 24"><path d="M12 16V4M7 9l5-5 5 5M4 20h16"/></symbol>
    <symbol id="i-clock" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></symbol>
    <symbol id="i-user-plus" viewBox="0 0 24 24"><path d="M15 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="8" cy="7" r="4"/><path d="M19 8v6M16 11h6"/></symbol>
    <symbol id="i-external" viewBox="0 0 24 24"><path d="M14 3h7v7M10 14 21 3"/><path d="M21 14v6a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h6"/></symbol>
    <symbol id="i-arrow" viewBox="0 0 24 24"><path d="M5 12h14M13 6l6 6-6 6"/></symbol>
  </svg>`;

  const icon = name => `<svg class="icon" aria-hidden="true"><use href="#i-${name}"></use></svg>`;
  const brand = `<a class="brand" href="index.html" aria-label="返回儀表板"><div><svg class="brand-mark" viewBox="0 0 64 64" aria-hidden="true"><path d="M8 52h48M13 47h38M17 19h30M21 14h22M26 9h12M15 23h34M19 23v24M27 23v24M37 23v24M45 23v24" fill="none" stroke="currentColor" stroke-width="2"/><path d="M32 4 9 18h46z" fill="none" stroke="currentColor" stroke-width="2"/><path d="M29 28h6v12h-6z" fill="none" stroke="currentColor" stroke-width="2"/></svg><div class="brand-name">理然法律事務所</div><div class="brand-en">LI RAN LAW FIRM</div></div></a>`;

  function currentPage() { return document.body.dataset.page || location.pathname.split('/').pop() || 'index.html'; }
  function layout() {
    if (document.body.dataset.shell === 'false' || !document.querySelector('.main')) return;
    const page = currentPage();
    document.body.insertAdjacentHTML('afterbegin', `<div class="app-loading" id="appLoading"><div class="loader-ring" aria-label="載入中"></div></div><aside class="sidebar" id="sidebar" aria-label="主要導覽">${brand}<nav class="sidebar-nav" id="sidebarNav">${pages.map(p=>`<a class="nav-item ${page===p[0]?'active':''}" href="${p[0]}" ${page===p[0]?'aria-current="page"':''}>${icon(p[2])}<span class="nav-label">${p[1]}</span></a>`).join('')}</nav><div class="sidebar-bottom">${icon('shield')}<strong>專業 · 誠信 · 創新</strong><small>EXPERTISE / INTEGRITY / INNOVATION</small></div></aside><div class="scrim" id="sidebarScrim" aria-hidden="true"></div>`);
    const title = document.body.dataset.title || document.title.split('｜')[0] || '儀表板';
    const desc = document.body.dataset.desc || '集中管理案件、文件與工作進度';
    document.querySelector('.main').insertAdjacentHTML('afterbegin', `<header class="topbar"><button class="icon-btn mobile-menu" id="menuBtn" aria-label="開啟導覽選單" aria-controls="sidebar" aria-expanded="false">${icon('menu')}</button><div class="page-title"><h1>${title}</h1><p>${desc}</p></div><div class="search-wrap">${icon('search')}<label class="sr-only" for="globalSearch">全站搜尋</label><input class="search-input" id="globalSearch" type="search" placeholder="搜尋案件、文件、律師或關鍵字…" autocomplete="off"><span class="kbd">Ctrl K</span></div><div class="top-actions"><button class="icon-btn" id="refreshBtn" aria-label="重新整理">${icon('refresh')}</button><button class="icon-btn" id="notificationBtn" aria-label="通知，3 則未讀" aria-expanded="false">${icon('bell')}<span class="notification-dot">3</span></button><button class="profile-btn" id="profileBtn" aria-label="使用者選單" aria-expanded="false"><span class="avatar">陳</span><div><div class="profile-name">陳律師</div><div class="profile-role">合夥律師</div></div>${icon('chevron')}</button></div></header>`);
    document.body.insertAdjacentHTML('beforeend', `<div class="popover" id="notificationPopover" role="dialog" aria-label="通知中心"><div class="popover-title">通知中心</div><a class="pop-row" href="notifications.html"><span class="dot"></span><div><p><strong>KZY001</strong> 言詞辯論狀期限剩 2 天。</p><time>8 分鐘前</time></div></a><a class="pop-row" href="ai-classification.html"><span class="dot" style="background:var(--ai)"></span><div><p>3 份文件完成 AI 分析，2 項待確認。</p><time>今天 10:18</time></div></a><a class="pop-row" href="calendar.html"><span class="dot" style="background:var(--warning)"></span><div><p>明日上午有 KZY001 準備程序庭。</p><time>今天 09:42</time></div></a></div><div class="popover profile-popover" id="profilePopover" role="dialog" aria-label="使用者選單"><a class="pop-link" href="profile.html">${icon('users')}個人資料</a><a class="pop-link" href="users.html">${icon('user-plus')}使用者與權限</a><a class="pop-link" href="audit.html">${icon('history')}操作紀錄</a><a class="pop-link" href="settings.html">${icon('settings')}系統設定</a><a class="pop-link" href="login.html">${icon('lock')}登出</a></div><nav class="bottom-nav" aria-label="行動版導覽"><a href="index.html" class="${page==='index.html'?'active':''}">${icon('grid')}<span>儀表板</span></a><a href="cases.html" class="${['cases.html','case-detail.html','case-timeline.html'].includes(page)?'active':''}">${icon('briefcase')}<span>案件</span></a><a href="documents.html" class="${['documents.html','document-detail.html'].includes(page)?'active':''}">${icon('file')}<span>文件</span></a><a href="tasks.html" class="${page==='tasks.html'?'active':''}">${icon('check')}<span>任務</span></a><a href="settings.html" class="${page==='settings.html'?'active':''}">${icon('settings')}<span>設定</span></a></nav><div class="toast-region" id="toastRegion" aria-live="polite"></div>`);
  }

  function initShell() {
    const sidebar = document.getElementById('sidebar');
    const scrim = document.getElementById('sidebarScrim');
    const menu = document.getElementById('menuBtn');
    const closeSidebar = () => { sidebar?.classList.remove('open'); document.body.classList.remove('no-scroll'); menu?.setAttribute('aria-expanded','false'); };
    menu?.addEventListener('click', () => { const open = !sidebar.classList.contains('open'); sidebar.classList.toggle('open', open); document.body.classList.toggle('no-scroll', open && innerWidth <= 900); menu.setAttribute('aria-expanded',String(open)); });
    scrim?.addEventListener('click', closeSidebar);
    document.querySelectorAll('.sidebar a').forEach(a=>a.addEventListener('click',closeSidebar));
    const nav = document.getElementById('sidebarNav'); let timer;
    nav?.addEventListener('scroll',()=>{nav.classList.add('is-scrolling');clearTimeout(timer);timer=setTimeout(()=>nav.classList.remove('is-scrolling'),550)},{passive:true});
    const notificationBtn = document.getElementById('notificationBtn');
    const profileBtn = document.getElementById('profileBtn');
    const notificationPopover = document.getElementById('notificationPopover');
    const profilePopover = document.getElementById('profilePopover');
    function togglePopover(target, button, other, otherButton){const open=!target.classList.contains('open');target.classList.toggle('open',open);button.setAttribute('aria-expanded',String(open));other?.classList.remove('open');otherButton?.setAttribute('aria-expanded','false');}
    notificationBtn?.addEventListener('click',e=>{e.stopPropagation();togglePopover(notificationPopover,notificationBtn,profilePopover,profileBtn)});
    profileBtn?.addEventListener('click',e=>{e.stopPropagation();togglePopover(profilePopover,profileBtn,notificationPopover,notificationBtn)});
    document.addEventListener('click',e=>{if(!e.target.closest('.popover')&&!e.target.closest('#notificationBtn')&&!e.target.closest('#profileBtn')){notificationPopover?.classList.remove('open');profilePopover?.classList.remove('open');notificationBtn?.setAttribute('aria-expanded','false');profileBtn?.setAttribute('aria-expanded','false')}});
    document.getElementById('refreshBtn')?.addEventListener('click',()=>{showToast('資料已重新整理','已更新目前頁面的模擬資料。');document.querySelector('.main')?.animate([{opacity:.75},{opacity:1}],{duration:220})});
    const search = document.getElementById('globalSearch');
    search?.addEventListener('keydown',e=>{if(e.key==='Enter'&&search.value.trim())location.href='cases.html?q='+encodeURIComponent(search.value.trim())});
    document.addEventListener('keydown',e=>{if((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()==='k'){e.preventDefault();search?.focus()}if(e.key==='Escape'){closeSidebar();closeAllModals();notificationPopover?.classList.remove('open');profilePopover?.classList.remove('open')}});
  }

  window.showToast = (title='操作已完成', message='變更已保存於本機模擬資料。', type='success') => {
    const region = document.getElementById('toastRegion') || document.body;
    const toast = document.createElement('div'); toast.className='toast'+(type==='error'?' error':'');
    toast.innerHTML=`<div class="toast-title">${title}</div><div class="toast-message">${message}</div>`; region.appendChild(toast);
    setTimeout(()=>{toast.style.opacity='0';toast.style.transform='translateY(8px)'},2600);setTimeout(()=>toast.remove(),2900);
  };
  window.saveMock = (key,val) => { try{localStorage.setItem('liran_'+key,JSON.stringify({value:val,updatedAt:new Date().toISOString()}));showToast('已儲存','資料已保留在 LocalStorage，重新整理後仍會存在。')}catch(e){showToast('儲存失敗','瀏覽器禁止本機儲存。','error')} };
  window.openModal = (id='modal') => { const modal=document.getElementById(id); if(!modal)return; modal.classList.add('open');document.body.classList.add('no-scroll');modal.querySelector('input,select,textarea,button')?.focus(); };
  window.closeModal = (id='modal') => { document.getElementById(id)?.classList.remove('open');document.body.classList.remove('no-scroll'); };
  function closeAllModals(){document.querySelectorAll('.modal-backdrop.open,.modal-layer.open').forEach(x=>x.classList.remove('open'));document.querySelectorAll('.drawer.open,.detail-drawer.open,.drawer-backdrop.open').forEach(x=>x.classList.remove('open'));document.body.classList.remove('no-scroll')}
  window.filterRows = (input,tableId) => { const q=(input.value||'').trim().toLowerCase();document.querySelectorAll(`#${tableId} tbody tr`).forEach(r=>r.hidden=!r.textContent.toLowerCase().includes(q)); };
  window.toggleDone = el => { const done=!el.classList.contains('success');el.classList.toggle('success',done);el.classList.toggle('primary',!done);el.innerHTML=done?`${icon('check')}已完成`:`${icon('clock')}進行中`;showToast('任務狀態已更新',done?'任務已標記完成。':'任務已恢復為進行中。');saveSilent('task_status',{done}); };
  window.mockAI = (btn,target='aiResult') => { const old=btn.innerHTML;btn.disabled=true;btn.innerHTML=`<span class="loader-ring" style="width:18px;height:18px;border-width:2px"></span>AI 分析中`;const targetEl=document.getElementById(target);targetEl?.classList.add('skeleton');setTimeout(()=>{btn.disabled=false;btn.innerHTML=old.includes('重新')?old:`${icon('refresh')}重新分析`;targetEl?.classList.remove('skeleton','empty');showToast('AI 模擬分析完成','已產生分類、摘要與信心分數，仍需律師確認。');saveSilent('ai_run',{completed:true})},1250); };
  function saveSilent(key,val){try{localStorage.setItem('liran_'+key,JSON.stringify({value:val,updatedAt:new Date().toISOString()}))}catch(e){}}

  function initTabs(){
    document.querySelectorAll('[data-tabs]').forEach(root=>{const buttons=[...root.querySelectorAll('[data-tab-target]')];buttons.forEach(btn=>btn.addEventListener('click',()=>{buttons.forEach(b=>b.classList.remove('active'));btn.classList.add('active');const target=btn.dataset.tabTarget;root.querySelectorAll('.tab-panel').forEach(p=>p.classList.toggle('active',p.id===target));}));});
    document.querySelectorAll('.tabs:not([data-static])').forEach(tabs=>{tabs.querySelectorAll('.tab,.tab-btn').forEach(btn=>{if(btn.dataset.tabTarget)return;btn.addEventListener('click',()=>{tabs.querySelectorAll('.tab,.tab-btn').forEach(b=>b.classList.remove('active'));btn.classList.add('active')})})});
  }
  function initModals(){
    document.querySelectorAll('[data-open-modal]').forEach(b=>b.addEventListener('click',()=>openModal(b.dataset.openModal)));
    document.querySelectorAll('[data-close-modal]').forEach(b=>b.addEventListener('click',()=>closeModal(b.dataset.closeModal||b.closest('.modal-backdrop,.modal-layer')?.id||'modal')));
    document.querySelectorAll('.modal-backdrop,.modal-layer').forEach(layer=>layer.addEventListener('mousedown',e=>{if(e.target===layer)closeModal(layer.id)}));
    document.querySelectorAll('[data-open-drawer]').forEach(b=>b.addEventListener('click',()=>{document.getElementById(b.dataset.openDrawer)?.classList.add('open');document.querySelector('.drawer-backdrop')?.classList.add('open');document.body.classList.add('no-scroll')}));
    document.querySelectorAll('[data-close-drawer],.drawer-backdrop').forEach(b=>b.addEventListener('click',()=>{document.querySelectorAll('.drawer.open,.detail-drawer.open,.drawer-backdrop.open').forEach(x=>x.classList.remove('open'));document.body.classList.remove('no-scroll')}));
  }
  function initActions(){
    document.querySelectorAll('[data-toast]').forEach(b=>b.addEventListener('click',()=>showToast(b.dataset.toast,b.dataset.toastMessage||'此功能目前以純前端方式模擬。')));
    document.querySelectorAll('[data-save]').forEach(b=>b.addEventListener('click',()=>saveMock(b.dataset.save,{saved:true}))); 
    document.querySelectorAll('.switch').forEach(s=>s.addEventListener('click',()=>{s.classList.toggle('on');s.setAttribute('aria-checked',String(s.classList.contains('on')));saveSilent('switch_'+(s.dataset.key||Math.random()),{on:s.classList.contains('on')});showToast('設定已更新',s.classList.contains('on')?'此通知或規則已啟用。':'此通知或規則已停用。')}));
    document.querySelectorAll('[data-row-link]').forEach(r=>{r.tabIndex=0;r.addEventListener('click',e=>{if(!e.target.closest('button,a,input,select'))location.href=r.dataset.rowLink});r.addEventListener('keydown',e=>{if(e.key==='Enter')location.href=r.dataset.rowLink})});
    document.querySelectorAll('[data-check-all]').forEach(b=>b.addEventListener('click',()=>{document.querySelectorAll(b.dataset.checkAll+' input[type=checkbox]').forEach(c=>c.checked=true);showToast('清單已更新','所有項目已勾選。')}));
    document.querySelectorAll('[data-upload]').forEach(input=>input.addEventListener('change',()=>{const name=input.files?.[0]?.name||'選取的檔案';const out=document.querySelector(input.dataset.upload);if(out)out.textContent=name;showToast('檔案已加入上傳佇列',name+' 將以 Mock Flow 處理。')}));
    const q=new URLSearchParams(location.search).get('q');if(q){document.querySelector('[data-query-value]')?.setAttribute('value',q);const input=document.querySelector('[data-query-value]');if(input&&input.dataset.table)filterRows(input,input.dataset.table)}
    document.querySelectorAll('button:not([type])').forEach(b=>b.type='button');
  }

  document.addEventListener('DOMContentLoaded',()=>{
    if(!document.getElementById('iconSprite')) document.body.insertAdjacentHTML('afterbegin',sprite);
    layout();initShell();initTabs();initModals();initActions();
    requestAnimationFrame(()=>setTimeout(()=>document.getElementById('appLoading')?.classList.add('hidden'),80));
  });
})();
