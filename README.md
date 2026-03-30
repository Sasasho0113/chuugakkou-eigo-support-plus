# 中学校英語サポート＋ MVP

> 「わかる」より「点が取れる」英語へ。中1英語をテストで使える力に変える学習Webサービス。

---

## 📁 ファイル構成（最終版）

```
中学校英語サポートプラス/
│
├── README.md                       ← このファイル（プロジェクト全体の索引）
│
├── site/                           ← ★ そのままブラウザで動く実装コード
│   ├── index.html                  ← LP（保護者向け集客ページ）インラインCSS/JS・即公開可
│   ├── app.html                    ← メインアプリ SPA（全10画面）
│   ├── style.css                   ← 共通スタイルシート（968行・モバイルファースト）
│   └── js/
│       └── app.js                  ← アプリロジック＋全教材データ込み（1107行）
│
├── content/                        ← 教材コンテンツ（JSON形式）
│   ├── grammar-sandan-gen.json     ← 三単現のs（s01）完全版教材データ
│   ├── grammar-be-verb.json        ← be動詞（b01）完全版教材データ
│   ├── grammar-general-verb.json   ← 一般動詞（g01）完全版教材データ
│   ├── content-template.json       ← 新単元追加用テンプレート（JSON形式）
│   ├── content-template-source.md  ← 新単元追加用テンプレート（Markdown形式）
│   └── faq.md                      ← よくある質問（生徒向け10問・保護者向け10問）
│
├── docs/                           ← サービス設計・UX設計資料
│   ├── service-plan.md             ← サービス概要・価値提案・競合比較・拡張方針
│   ├── sitemap.md                  ← 画面一覧・画面遷移図・URLルーティング
│   ├── wireframes.md               ← 全10画面のワイヤーフレーム（テキスト形式）
│   ├── ux-design.md                ← UX詳細設計（インタラクション・アニメーション）
│   ├── design-guide.md             ← デザインガイド（色・文字・コンポーネント仕様）
│   ├── operations.md               ← 質問機能の運用設計・SLA・FAQ化方針
│   └── sow-30days.md               ← 30日立ち上げ計画（SOW形式）
│
└── marketing/                      ← 集客・運用文面（そのまま使える完成版）
    ├── landing-page-copy.md        ← LP全文コピー
    ├── monitor-recruitment.md      ← モニター募集文（SNS・メール・LINE 3種）
    ├── parent-guide.md             ← 保護者向け説明文（詳細・LINE・印刷版）
    └── survey.md                   ← 利用後アンケート（生徒・保護者）
```

---

## 🚀 ローカルでの確認方法

### LP（index.html）— サーバー不要

```
site/index.html をブラウザにドラッグ＆ドロップするだけで開きます。
```

### メインアプリ（app.html）— ローカルサーバーが必要

```bash
# site/ フォルダに移動してサーバー起動
cd 中学校英語サポートプラス/site

# Python 3（Macに標準搭載）
python3 -m http.server 3000

# または Node.js
npx serve .
```

ブラウザで開く：
- LP：http://localhost:3000/index.html
- アプリ：http://localhost:3000/app.html

### スマホ実機確認

同じWi-Fiに接続したスマホから：
```
http://[PCのIPアドレス]:3000/app.html
```

> **なぜサーバーが必要？**
> `app.html` は `style.css` と `js/app.js` を外部ファイルとして読み込みます。
> `file://` プロトコルでは CORS 制限で外部ファイルが読み込めないためです。
> ただし `index.html`（LP）は CSS/JS をインライン化済みなので不要です。

---

## ✅ そのまま公開できるもの（完成済み）

| ファイル | 説明 | 状態 |
|---------|------|------|
| `site/index.html` | 保護者向けLP（11セクション・インタラクティブサンプル付き） | ✅ 即公開可 |
| `site/app.html` | SPAシェル | ✅ 完成 |
| `site/style.css` | モバイルファーストデザイン | ✅ 完成 |
| `site/js/app.js` | 全教材データ込みアプリロジック | ✅ 完成 |
| `marketing/landing-page-copy.md` | LPコピー全文 | ✅ そのまま使用可 |
| `marketing/monitor-recruitment.md` | モニター募集文3種 | ✅ そのまま使用可 |
| `marketing/parent-guide.md` | 保護者向け説明文 | ✅ そのまま使用可 |

---

## 📱 アプリ機能一覧

| 画面 | 機能 | 状態 |
|------|------|------|
| ホーム | 時間帯別挨拶・連続学習日数・続きから・おすすめ単元 | ✅ 完成 |
| まなぶ（単元一覧） | 3単元カード・進捗バー・完了率 | ✅ 完成 |
| 単元詳細 | 解説・クイックチェック・基本・応用・テスト（5タブ） | ✅ 完成 |
| ワーク（基礎・応用） | 5問題タイプ・ヒント・即時フィードバック | ✅ 完成 |
| テスト | 定期テスト形式・点数表示・間違い一覧 | ✅ 完成（バグ修正済）|
| 質問フォーム | テンプレート選択・localStorage保存 | ✅ 完成 |
| 質問履歴 | 過去の質問と回答状況 | ✅ 完成 |
| 学習きろく | 週間カレンダー・連続日数・単元別進捗 | ✅ 完成 |
| 保護者確認 | 今週のまとめ・単元別成績・コメント | ✅ 完成 |
| メニュー | 設定・データリセット・保護者画面への導線 | ✅ 完成 |

---

## 📚 教材データ（app.js 内に全データ収録）

### 実装済み単元

| 単元 | ID | 問題数 | カバー内容 |
|------|-----|--------|-----------|
| 三単現のs | s01 | **45問** | +s/+es/y→ies/例外have→has |
| be動詞（am/is/are） | b01 | **35問** | 主語別使い分け・否定文・疑問文 |
| 一般動詞（do/does） | g01 | **48問** | 肯定・否定（don't/doesn't）・疑問（Do/Does） |
| **合計** | | **128問** | |

### 問題タイプ（全5種）

| タイプ | 説明 | 例 |
|--------|------|-----|
| `choice` | 4択選択 | 「She ( ) tennis.」→ plays/play/playing/played |
| `transform` | 動詞変形 | 「study」→ studies |
| `sort` | 語順整序 | [She / has / two / cats] → She has two cats. |
| `mistake` | 誤り発見・訂正 | 「She play tennis.」→ play を plays に |
| `writing` | 英作文 | 「彼女は毎日英語を勉強します。」→ 自由記述 |
| `rewrite` | 書き換え | 「I like music.」→ He に変えて書き直す |

---

## 🎨 デザインシステム

```css
/* カラーパレット（style.css の CSS変数） */
--primary:   #3B82F6;   /* 青（メインカラー・ヘッダー） */
--secondary: #10B981;   /* 緑（正解・進捗・成功） */
--accent:    #F97316;   /* オレンジ（強調・アクセント） */
--error:     #EF4444;   /* 赤（不正解・エラー） */
--warning:   #F59E0B;   /* 黄（注意・ヒント） */
--bg:        #F1F5F9;   /* 背景（薄いグレー） */
```

- フォント：Noto Sans JP（400/500/600/700/800）
- 基準幅：375〜480px（スマートフォンファースト）
- ナビゲーション：BottomNavBar 固定（4タブ）

---

## 🔧 TODO 一覧（優先順）

### 🔴 高優先（リリース前に対応推奨）

- [ ] **ホスティング設定**：Netlify / Vercel にデプロイ（無料プランで可）
- [ ] **お問い合わせフォーム**：Formspree 等を LP の CTA に接続
- [ ] **Google Analytics**：LP + アプリに UA / GA4 設置
- [ ] **保護者確認画面の PIN ロック**：メニューから 4桁PIN を設定できる機能

### 🟡 中優先（モニター期間中に対応）

- [ ] **PWA 化（ホーム画面追加）**：`manifest.json` + Service Worker 追加
- [ ] **オフライン対応**：Service Worker でアセットをキャッシュ
- [ ] **質問への管理者回答機能**：バックエンドまたは Notion DB 連携
- [ ] **並び替え問題の UI 改善**：テキスト入力 → タップでチップを並べる UI

### 🟢 次期単元追加（優先順）

1. 現在進行形（`p01`）— am/is/are + doing
2. 過去形（`pt01`）— 規則変化・不規則変化
3. can（`c01`）— can / can't / Can...?
4. 疑問詞（`wh01`）— what / who / when / where / why / how
5. 代名詞（`pr01`）— I/my/me/mine
6. There is/are（`th01`）

> 追加方法：`content/content-template.json` を参考に JSON を作り、`app.js` の `MATERIALS` オブジェクトに追加するだけ。

### 🔵 将来的な機能

- [ ] ユーザー認証（Firebase Auth 等）
- [ ] 学習データのサーバー同期
- [ ] 学校・クラス別の管理機能（BtoB展開）
- [ ] 定期テスト日程に合わせたリマインダー通知

---

## 💰 料金プラン（想定）

| プラン | 月額 | 内容 |
|--------|------|------|
| お試し | 480円 | 1単元・質問5件/月 |
| スタンダード | 980円 | 全単元・質問無制限・保護者確認 |
| ファミリー | 1,480円 | 子ども2名分・全機能 |

---

## 📞 運用体制（初期 MVP フェーズ）

- 質問回答目標：平日 24時間以内（土日祝：翌平日中）
- 初回モニター：10名・2ヶ月間無料（`marketing/monitor-recruitment.md` 参照）
- 問い合わせ先：**[メールアドレスをここに記入]**
- LP → アプリへの導線：`site/index.html` の全 CTA が `app.html` にリンク済み

---

## 📋 ドキュメント索引

| 目的 | 参照ファイル |
|------|------------|
| サービス全体を理解したい | `docs/service-plan.md` |
| 画面構成・遷移を把握したい | `docs/sitemap.md` |
| 各画面の詳細を確認したい | `docs/wireframes.md` |
| インタラクション仕様を確認したい | `docs/ux-design.md` |
| デザインルールを確認したい | `docs/design-guide.md` |
| 質問機能の運用を理解したい | `docs/operations.md` |
| 30日の立ち上げ計画を見たい | `docs/sow-30days.md` |
| 新単元を追加したい | `content/content-template.json` |
| LP のコピーを編集したい | `marketing/landing-page-copy.md` |
| よくある質問を確認・編集したい | `content/faq.md` |

---

## 🛠 技術仕様メモ

| 項目 | 内容 |
|------|------|
| 構成 | ピュア HTML / CSS / JavaScript（フレームワーク不使用） |
| ルーティング | ハッシュベース SPA（`showScreen()` 関数による DOM 切り替え） |
| データ永続化 | `localStorage`（学習記録・質問履歴） |
| 教材データ | `app.js` に JS オブジェクトとして直書き（`fetch()` 不使用 → `file://` でも動作） |
| 文字コード | UTF-8 |
| 外部依存 | Google Fonts（Noto Sans JP）のみ ※オフライン時はシステムフォントにフォールバック |

---

*© 2026 中学校英語サポート＋ — 「わかる」より「点が取れる」英語へ。*
