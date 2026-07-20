# 律所案件管理暨 AI 法律工作臺｜純前端展示專案

本專案是可直接預覽的多頁面純前端版本，依照律所案件管理、卷證整理、AI 文件分類、任務期限、開庭行程、團隊協作、報表及設定等需求製作。所有正式後端、資料庫、Google Drive、AI Provider、Email／LINE 與身分驗證均未串接；相關流程使用 JavaScript、LocalStorage 與 Mock Data 模擬。

## 本次版面升級

- 全站統一為固定深色側邊欄、Sticky 頂部工具列、最大內容寬度與密集型法律工作臺版面。
- 重新建立卡片、表格、頁籤、Modal、Drawer、通知 Popover、文件預覽、行事曆、看板與狀態元件。
- 所有頁面共用同一組 Design Tokens、元件樣式及 SVG 圖示。
- 側邊欄滾動條改為 4px、透明軌道、無箭頭按鈕；預設低辨識度，Hover 或實際滾動時才加深。
- 表格、看板、行事曆、頁籤、Modal、Drawer、通知與文件預覽均使用窄型圓角滾動條。
- 針對 1440、1280、1024、768、390、375 px 完成響應式規則。

## 直接開啟

1. 解壓縮 ZIP。
2. 進入 `complete_frontend_website` 資料夾。
3. 雙擊 `index.html`。
4. 建議使用最新版 Chrome、Edge 或 Firefox。

所有核心資源均使用相對路徑，無須安裝 Flask、Node.js、Python 套件或資料庫。

## 完整頁面

1. `index.html`－儀表板
2. `cases.html`－案件中心
3. `case-detail.html`－案件工作臺／案件詳情
4. `case-timeline.html`－案件時間軸深度工作頁
5. `documents.html`－文件庫
6. `document-detail.html`－文件預覽及摘要
7. `ai-classification.html`－AI 分類
8. `evidence.html`－卷證整理
9. `calendar.html`－開庭行程
10. `tasks.html`－任務追蹤
11. `collaboration.html`－團隊協作
12. `reports.html`－報表分析
13. `settings.html`－系統設定
14. `notifications.html`－通知中心
15. `profile.html`－個人資料
16. `users.html`－使用者及權限
17. `audit.html`－操作與稽核紀錄
18. `login.html`－登入模擬
19. `404.html`－找不到頁面

## 專案結構

```text
complete_frontend_website/
├─ index.html
├─ cases.html
├─ case-detail.html
├─ case-timeline.html
├─ documents.html
├─ document-detail.html
├─ ai-classification.html
├─ evidence.html
├─ calendar.html
├─ tasks.html
├─ collaboration.html
├─ reports.html
├─ settings.html
├─ notifications.html
├─ profile.html
├─ users.html
├─ audit.html
├─ login.html
├─ 404.html
├─ assets/
│  ├─ css/main.css
│  ├─ js/main.js
│  └─ data/mock-data.json
├─ docs/
└─ README.md
```

## Mock 與 LocalStorage

主要按鈕、Modal、通知、設定開關、登入、AI 分析、檔案上傳、任務完成、批次確認及表單儲存均為前端模擬。部分操作寫入瀏覽器 LocalStorage，鍵名以 `liran_` 開頭。

清除模擬資料：

1. 開啟瀏覽器開發者工具。
2. 進入 Application／儲存空間。
3. 清除目前頁面的 LocalStorage。
4. 重新整理頁面。

也可以在 Console 執行：

```javascript
Object.keys(localStorage)
  .filter(key => key.startsWith('liran_'))
  .forEach(key => localStorage.removeItem(key));
location.reload();
```

## 尚未串接的正式功能

- 真實登入、Session、密碼與 2FA
- PostgreSQL、案件 ACL、角色權限與稽核後端
- Google Drive／Shared Drive 文件讀寫與同步
- Google Calendar、Email、LINE 通知
- 真實 AI、OCR、Embedding、RAG、語音與文件生成
- 真實檔案上傳、病毒掃描、版本與權限同步
- 即時多人協作、WebSocket／SSE

## 常見問題

### 雙擊後樣式沒有載入
確認 `assets` 資料夾與 HTML 位於同一個專案根目錄，且沒有只單獨移動 HTML 檔。

### 滾動條太淡
側邊欄的滾動條採低干擾設計；滑鼠移入側邊欄或開始滾動時會自動加深。表格與文件預覽區在內容超出時才顯示滾動能力。

### 資料未與其他電腦同步
本版本只使用目前瀏覽器的 LocalStorage，沒有正式資料庫或雲端同步。
