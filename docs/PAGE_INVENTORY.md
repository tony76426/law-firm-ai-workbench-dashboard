# PAGE INVENTORY｜頁面清單

| 頁面 | 檔名 | 主要功能 | 來源／性質 | 主要入口 | RWD |
|---|---|---|---|---|---|
| 儀表板 | `index.html` | KPI、案件進度、AI 建議、文件動態 | 對應首頁 UI | Logo／側欄 | 桌機／平板／手機完成 |
| 案件中心 | `cases.html` | 案件列表、搜尋、篩選、新增 | 對應案件中心 UI | 側欄 | 完成 |
| 案件詳情 | `case-detail.html` | 基本資料、爭點、文件、團隊 | 依 PRD 補齊 | 案件列表 | 完成 |
| 案件時間軸 | `case-timeline.html` | 法院、電話、Email、任務、期限與稽核 | 依附件高規格頁面整合 | 案件詳情 | 完成 |
| 文件庫 | `documents.html` | 資料夾、文件列表、上傳、搜尋 | 依 PRD 補齊 | 側欄 | 完成 |
| 文件詳情 | `document-detail.html` | 文件原件預覽、Metadata、AI 摘要 | 依 PRD 補齊 | 文件列表 | 完成 |
| AI 分類 | `ai-classification.html` | 分類建議、信心分數、人工確認 | 對應 AI 分類 UI | 側欄 | 完成 |
| 卷證整理 | `evidence.html` | 卷證清冊、索引、缺件、流程 | 對應卷證整理 UI | 側欄 | 完成 |
| 開庭行程 | `calendar.html` | 週曆、庭期詳情、準備清單 | 對應開庭行程 UI | 側欄 | 完成 |
| 任務追蹤 | `tasks.html` | Kanban、期限、責任人、完成狀態 | 對應任務追蹤 UI | 側欄 | 完成 |
| 團隊協作 | `collaboration.html` | 協作案件、討論、共享文件、負載 | 對應團隊協作 UI | 側欄 | 完成 |
| 報表分析 | `reports.html` | 案件、文件、律師績效與趨勢 | 對應報表分析 UI | 側欄 | 完成 |
| 系統設定 | `settings.html` | 通知、整合、AI、安全、角色 | 對應設定 UI | 側欄 | 完成 |
| 通知中心 | `notifications.html` | 未讀、期限、AI、團隊通知 | 自行補齊 | 頂部鈴鐺 | 完成 |
| 個人資料 | `profile.html` | 帳號資料、偏好、密碼模擬 | 自行補齊 | 使用者選單 | 完成 |
| 使用者權限 | `users.html` | 角色、人員、案件 ACL 示意 | 自行補齊 | 設定／使用者選單 | 完成 |
| 稽核紀錄 | `audit.html` | 操作、IP、資源與前後值 | 自行補齊 | 設定／使用者選單 | 完成 |
| 登入 | `login.html` | 登入與錯誤狀態模擬 | 自行補齊 | 登出 | 完成 |
| 404 | `404.html` | 無效路徑引導 | 自行補齊 | 測試／錯誤路徑 | 完成 |

## 導覽關係

- 左側 Logo → `index.html`
- 全域側欄 → 10 個主要模組
- 案件列表 → `case-detail.html`
- 案件詳情 → `case-timeline.html`、`evidence.html`、`collaboration.html`
- 文件列表 → `document-detail.html`
- 頂部通知 → `notifications.html`
- 使用者選單 → `profile.html`、`users.html`、`audit.html`、`settings.html`、`login.html`
