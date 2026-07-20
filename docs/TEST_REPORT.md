# TEST REPORT

## 測試環境

- 檔案模式：所有資源採相對路徑，設計為可透過 `file://` 雙擊開啟。
- 靜態檢查：Python + BeautifulSoup、Node.js 語法檢查、ZIP 解壓後重複驗證。
- 自動瀏覽器：執行環境的 Chromium／Playwright 導覽遭系統管理政策阻擋，因此無法在此環境產生瀏覽器截圖；此限制不是網站的網路或路徑錯誤。

## 通過項目

- 19 個 HTML 均包含文件標題、Viewport、UTF-8 與繁體中文語系。
- 共用頁面均正確引用 `assets/css/main.css` 及 `assets/js/main.js`。
- `case-timeline.html` 的內部 CSS、SVG 與 JavaScript 語法檢查通過。
- `assets/js/main.js` 通過 `node --check`。
- 所有相對 HTML、CSS、JS 連結目標存在。
- Tabs、Modal、Drawer 目標 ID 均存在。
- SVG `<use>` 圖示引用均能對應既有 Symbol。
- 無重複 ID。
- 無 `/static/`、`localhost`、Windows 絕對路徑。
- 無 Flask、Python 後端、Node 後端、資料庫、`.env` 或 API Key。
- 除 Schema.org JSON-LD 外，沒有外部網路資源依賴。
- 以本機靜態 HTTP Server 檢查全部 19 個 HTML 與共用 CSS／JS／JSON，均回傳 HTTP 200。
- 無殘留指向附件原始 `law-firm-*.html` 檔名的連結。

## RWD 檢查範圍

CSS 已建立以下斷點及行為：

- 1400px：五欄 KPI 轉三欄，工作臺側區重排。
- 1250px：側欄收合至 76px。
- 1100px：複合網格與頁籤重排。
- 900px：側欄改抽屜，顯示手機底部導覽。
- 700px：表單、摘要與卡片轉單欄或雙欄。
- 480px：KPI 單欄、主按鈕全寬。

## 滾動區檢查

- 側邊導覽具有獨立 `overflow-y:auto`，不會拖動整個主內容。
- 表格、看板、行事曆、流程、文件預覽與 Tabs 皆有專屬橫向或縱向 Overflow。
- Scrollbar Track 透明、Thumb 圓角、按鈕隱藏。
- `overscroll-behavior` 用於側欄與橫向工作區，降低捲動穿透。

## 尚需人工驗收

在使用者電腦以 Chrome／Edge 直接雙擊 `index.html` 後，建議快速確認：

1. 側邊欄 Hover 與滾動時 Thumb 深淺變化。
2. 1280px 以下側欄收合。
3. 900px 以下抽屜導覽及底部導覽。
4. 表格及文件預覽的橫向／縱向滾動手感。
5. 系統字型因 Windows 字型設定產生的細微差異。
