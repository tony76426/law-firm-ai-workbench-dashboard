# MANUAL FOLLOW-UP｜後續正式串接清單

| 項目 | 目前前端模擬 | 未來正式串接位置 | 後端／人工準備 | 優先級 | 阻礙正式上線 |
|---|---|---|---|---|---|
| 登入與 2FA | LocalStorage／頁面跳轉 | Auth Service | 帳號政策、密碼規則、2FA Provider | P0 | 是 |
| 案件與權限 | 靜態資料及畫面差異 | Matters／ACL API | 角色矩陣、案件權限規則 | P0 | 是 |
| PostgreSQL | `mock-data.json`、LocalStorage | REST／GraphQL API | Schema、Migration、備份 | P0 | 是 |
| Google Drive | Mock 狀態、文件清單 | Drive Integration | Workspace、OAuth、Shared Drive | P0 | 是 |
| 真實檔案上傳 | File Input 與 Toast | Upload／Scan Service | 大小限制、病毒掃描、版本規則 | P0 | 是 |
| 期限與提醒 | 前端日期及 Switch | Job／Notification Service | 法定期限規則、升級流程 | P0 | 是 |
| AI 文件分類 | Loading、分類、信心分數 | AI Provider／Worker | 模型、Prompt、成本與評測集 | P1 | 部分 |
| OCR／RAG | 文件摘要示意 | OCR／Embedding／Search | OCR Provider、向量模型、來源引用 | P1 | 部分 |
| Google Calendar | 前端週曆 | Calendar API | OAuth Scope、同步規則 | P1 | 否 |
| Email／LINE | 通知選項 | Notification Adapter | 寄件網域、LINE Channel | P1 | 否 |
| 即時協作 | 靜態留言 | WebSocket／SSE | 事件模型、衝突與版本策略 | P2 | 否 |
| 部署與網域 | ZIP 靜態檔 | GitHub／Render／CDN | 網域、SSL、環境變數 | P0 | 是 |
| 資安與法遵 | UI 提示 | Audit／DLP／SIEM | 保存政策、弱掃、滲測、個資盤點 | P0 | 是 |
| 使用者驗收 | 示範資料 | Staging | 真實工作流程、角色與測試案例 | P0 | 是 |

本次交付不包含任何真實憑證、OAuth Token、API Key、後端程式或正式個資。
