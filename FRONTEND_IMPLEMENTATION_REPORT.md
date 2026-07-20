# FRONTEND IMPLEMENTATION REPORT

## 完成範圍

- 完成 19 個獨立 HTML 頁面。
- 以 `assets/css/main.css` 統一 Design Tokens、版面、元件、狀態與 RWD。
- 以 `assets/js/main.js` 共用側欄、頂部列、SVG 圖示、通知、使用者選單、Modal、Drawer、Toast、Tabs、LocalStorage 與 Mock Flow。
- 將附件案件時間軸頁整合為 `case-timeline.html`，並把所有內部路徑改為本專案現有頁面。

## 版面與元件

- 固定側邊欄、Sticky Header、全域搜尋、通知及使用者選單
- KPI 漸層卡片、表格、分頁、篩選器、Tabs、Badge、Progress
- 案件列表、文件資料夾樹、文件閱讀器、AI 信心分數
- 行事曆、時間軸、Kanban、流程圖、折線圖、圓環圖與橫條圖
- Modal、Drawer、Popover、Toast、Skeleton、Empty、Error、Loading

## 滾動條實作

1. 側邊導覽：4px 寬、透明 Track、圓角 Thumb、無上下箭頭。
2. 平時低透明度；Hover 或實際滾動時加深，550ms 後恢復。
3. 主頁：穩定 Scrollbar Gutter，避免內容寬度跳動。
4. 表格、看板、行事曆、Tabs、Modal、Drawer、通知及文件閱讀器：7px 窄型滾動條。
5. 小畫面以橫向滾動保留高資訊密度，避免表格欄位被硬擠壓。

## 已完成前端互動

- 跨頁導覽、Logo 返回首頁、手機側欄開合
- 全域搜尋快捷鍵 Ctrl／Cmd + K
- 通知及使用者 Popover
- Tabs、Modal、Drawer、Toast
- 搜尋列表、案件列點擊進詳情
- 模擬新增、編輯、儲存、完成、批次確認
- 模擬 AI 處理 Loading 與結果
- 檔案選取與上傳佇列提示
- 設定 Switch、通知已讀、登入／登出

## LocalStorage

使用 `liran_` 前綴保存設定、任務、AI 執行、表單及登入等模擬狀態；不保存真實密碼、個資或 API Key。

## 與附件的主要對齊

- 使用相同類型的深藍固定側欄、金色品牌區、卡片陰影與窄型滾動條。
- 使用黏著式頂部工具列、內容最大寬度、工作區分欄與高資訊密度。
- 延續附件中桌機側欄收合、平板抽屜與手機底部導覽的 RWD 邏輯。

## 已知限制

- 純前端版本沒有真實多人資料、登入、檔案、AI 或 Google 整合。
- 瀏覽器間原生滾動條仍會有些微差異；Chrome／Edge 使用 WebKit 規則，Firefox 使用 `scrollbar-width` 與 `scrollbar-color`。
- 圖表為前端示意，不是由即時資料計算。
