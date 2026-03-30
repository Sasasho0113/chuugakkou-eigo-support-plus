# デザインガイド

「中学校英語サポート＋」の視覚的アイデンティティ、コンポーネント仕様、UI原則を定義します。

---

## 1. カラーパレット

### CSS変数定義

```css
:root {
  /* プライマリ色 */
  --color-primary: #2563EB;           /* メインブルー */
  --color-primary-light: #DBEAFE;     /* 薄いブルー（背景） */
  --color-primary-dark: #1E40AF;      /* 濃いブルー（ホバー） */

  /* セカンダリ色 */
  --color-secondary: #10B981;         /* グリーン（正解・進捗） */
  --color-secondary-light: #D1FAE5;   /* 薄いグリーン（背景） */
  --color-secondary-dark: #047857;    /* 濃いグリーン（ホバー） */

  /* アクセント色 */
  --color-accent: #F59E0B;            /* アンバー（注意・強調） */
  --color-accent-light: #FEF3C7;      /* 薄いアンバー（背景） */
  --color-accent-dark: #D97706;       /* 濃いアンバー（ホバー） */

  /* エラー・不正解 */
  --color-error: #EF4444;             /* レッド */
  --color-error-light: #FEE2E2;       /* 薄いレッド（背景） */
  --color-error-dark: #DC2626;        /* 濃いレッド（ホバー） */

  /* グレースケール */
  --color-bg: #F8FAFC;                /* 背景色 */
  --color-surface: #FFFFFF;           /* カード・サーフェス背景 */
  --color-text: #1E293B;              /* 本文テキスト */
  --color-text-secondary: #64748B;    /* サブテキスト */
  --color-text-light: #94A3B8;        /* 薄いテキスト（プレースホルダー） */
  --color-border: #E2E8F0;            /* ボーダー */
  --color-border-dark: #CBD5E1;       /* 濃いボーダー */

  /* その他 */
  --color-info: #0EA5E9;              /* 情報表示（空色） */
  --color-warning: #F97316;           /* 警告 */
  --color-success: #10B981;           /* 成功（--color-secondary と同じ） */
  --color-disabled: #D1D5DB;          /* 無効状態 */
}
```

### カラーパレット使用ガイド

| 色 | HEXコード | 用途 | 例 |
|---|---------|------|-----|
| プライマリ | #2563EB | CTA、選択状態、リンク | 「始める」ボタン、タブ選択時の下線 |
| セカンダリ | #10B981 | 正解、完了、進捗 | ✅チェックマーク、進捗バー |
| アクセント | #F59E0B | 注意喚起、強調 | ⚠️警告アイコン、重要ポイント背景 |
| エラー | #EF4444 | 不正解、削除、警告 | ❌バツマーク、エラーメッセージ |
| グレー | #E2E8F0 | ボーダー、分割線 | カード外枠、タブ未選択 |

### カラーアクセシビリティ
- コントラスト比：4.5:1 以上（WCAG AA準拠）
- 色覚多様性に配慮：色だけでなくアイコンやテキストでも情報を伝える
- 赤・緑だけで判定しない（色覚異常対応）

---

## 2. タイポグラフィ

### フォント指定

```css
:root {
  --font-family: 'Noto Sans JP', -apple-system, BlinkMacSystemFont,
                 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;

  /* フォントウェイト */
  --font-weight-regular: 400;
  --font-weight-medium: 500;
  --font-weight-semibold: 600;
  --font-weight-bold: 700;
}
```

### タイプスケール

#### h1（大見出し）
```css
font-size: 28px;          /* モバイル */
line-height: 1.3;         /* 36px */
font-weight: 700;         /* Bold */
letter-spacing: -0.5px;   /* 視覚的調整 */
margin-bottom: 16px;
color: var(--color-text);

/* 例 */
/* 「わかる」より「点が取れる」英語へ */
```

#### h2（セクション見出し）
```css
font-size: 24px;
line-height: 1.3;
font-weight: 700;
margin-bottom: 16px;
color: var(--color-text);

/* 例 */
/* 単元一覧 */
```

#### h3（小見出し）
```css
font-size: 20px;
line-height: 1.4;
font-weight: 600;
margin-bottom: 12px;
color: var(--color-text);

/* 例 */
/* 基本ルール */
```

#### 本文（body）
```css
font-size: 15px;
line-height: 1.7;
font-weight: 400;
color: var(--color-text);
margin-bottom: 12px;

/* 例 */
/* 三人称単数形の主語には動詞に「s」がつく。 */
```

#### 小文字（small）
```css
font-size: 13px;
line-height: 1.6;
font-weight: 400;
color: var(--color-text-secondary);

/* 例 */
/* 最後：2日前 */
```

#### ラベル（label）
```css
font-size: 12px;
line-height: 1.5;
font-weight: 600;
text-transform: uppercase;
letter-spacing: 0.5px;
color: var(--color-text-secondary);

/* 例 */
/* 正答率 */
```

### テキスト修飾

```css
/* 強調 */
.text-strong {
  font-weight: 700;
  color: var(--color-primary-dark);
}

/* アコーディオン見出し */
.text-interactive {
  color: var(--color-primary);
  font-weight: 600;
  cursor: pointer;
}

/* リンク */
a {
  color: var(--color-primary);
  text-decoration: underline;
  font-weight: 500;
}

a:hover {
  color: var(--color-primary-dark);
}

/* 削除線（間違った例） */
.text-strikethrough {
  text-decoration: line-through;
  color: var(--color-error);
}
```

### 行間の目安

| 要素 | 行間 | 説明 |
|------|-----|------|
| h1 | 1.3 | 短く、読みやすく |
| h2/h3 | 1.3～1.4 | 見出しは詰め気味 |
| 本文 | 1.7 | スマホで読みやすく |
| ラベル | 1.5 | コンパクト |

---

## 3. スペーシング

### 8pxグリッドシステム

```css
:root {
  /* スペーシングスケール */
  --space-xs: 4px;      /* 最小 */
  --space-sm: 8px;      /* 小 */
  --space-md: 16px;     /* 中 */
  --space-lg: 24px;     /* 大 */
  --space-xl: 32px;     /* より大 */
  --space-xxl: 48px;    /* 最大 */
}
```

### 使用例

| スペース | サイズ | 用途 | 例 |
|---------|--------|------|-----|
| xs | 4px | アイコン内の余白、テキスト間隔 | icon と text の間隔 |
| sm | 8px | ボタン内パディング（小）、リスト項目間 | `<li>` 間の margin |
| md | 16px | セクション内パディング、コンポーネント間 | カード内部の padding |
| lg | 24px | セクション間隔、大きなコンポーネント間 | セクション下の margin |
| xl | 32px | ページセクション間、大きな余白 | ヘッダーと本文間 |
| xxl | 48px | レイアウト上の大きな分割 | セクション間の余白 |

### セクション・カード構造

```css
/* セクション外側 */
.section {
  padding: var(--space-lg);        /* 24px */
  margin-bottom: var(--space-lg);  /* 24px */
}

/* カード（ボックス） */
.card {
  padding: var(--space-md);        /* 16px */
  margin-bottom: var(--space-md);  /* 16px */
}

/* 要素内パディング */
.button {
  padding: var(--space-sm) var(--space-md);  /* 8px 16px */
}
```

---

## 4. ボタンコンポーネント仕様

### ボタン共通仕様

```css
/* ベースボタン */
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  border: none;
  text-decoration: none;
  white-space: nowrap;

  /* 最小タッチ幅 */
  min-width: 44px;
  min-height: 44px;

  /* 押下状態でのスケール */
  &:active {
    transform: scale(0.98);
  }
}
```

### .btn-primary（メインCTA）

```css
.btn-primary {
  width: 100%;
  height: 52px;
  padding: 0 24px;
  background-color: var(--color-primary);
  color: white;
  border-radius: 12px;
  font-size: 16px;
  font-weight: 700;

  &:hover {
    background-color: var(--color-primary-dark);
    box-shadow: 0 4px 12px rgba(37, 99, 235, 0.3);
  }

  &:active {
    background-color: var(--color-primary-dark);
  }

  &:disabled {
    background-color: var(--color-disabled);
    cursor: not-allowed;
  }
}

/* 例 */
/* [まず無料で体験する▶] */
```

### .btn-secondary（補助ボタン）

```css
.btn-secondary {
  width: 100%;
  height: 52px;
  padding: 0 24px;
  background-color: #F1F5F9;
  color: var(--color-text);
  border-radius: 12px;
  font-size: 16px;
  font-weight: 600;

  &:hover {
    background-color: #E2E8F0;
  }

  &:active {
    background-color: #CBD5E1;
  }
}

/* 例 */
/* [キャンセル] [もう一度実施] */
```

### .btn-outline（グレー枠ボタン）

```css
.btn-outline {
  height: 44px;
  padding: 0 16px;
  background-color: white;
  color: var(--color-text);
  border: 2px solid var(--color-border);
  border-radius: 12px;
  font-size: 14px;
  font-weight: 500;

  &:hover {
    border-color: var(--color-primary);
    color: var(--color-primary);
    background-color: var(--color-primary-light);
  }
}

/* 例 */
/* [戻る] [スキップ] */
```

### .btn-text（テキストボタン）

```css
.btn-text {
  height: auto;
  padding: 8px 12px;
  background-color: transparent;
  color: var(--color-primary);
  font-size: 15px;
  font-weight: 500;
  border-radius: 4px;

  &:hover {
    background-color: var(--color-primary-light);
  }
}

/* 例 */
/* [ヒントを見る▼] */
```

### .btn-success（成功・正解ボタン）

```css
.btn-success {
  width: 100%;
  height: 52px;
  background-color: var(--color-secondary);
  color: white;
  border-radius: 12px;
  font-size: 16px;
  font-weight: 700;

  &:hover {
    background-color: var(--color-secondary-dark);
  }
}

/* 例 */
/* [クイズに進む▶] */
```

### .btn-error（危険・削除ボタン）

```css
.btn-error {
  width: 100%;
  height: 52px;
  background-color: var(--color-error);
  color: white;
  border-radius: 12px;
  font-size: 16px;
  font-weight: 700;

  &:hover {
    background-color: var(--color-error-dark);
  }
}

/* 例 */
/* [ログアウト] */
```

---

## 5. カードコンポーネント

### .card（基本カード）

```css
.card {
  background-color: var(--color-surface);
  border-radius: 16px;
  padding: 16px;
  margin-bottom: 16px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  border: 1px solid var(--color-border);
  transition: all 0.2s ease;

  &:hover {
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12);
  }
}

/* 例 */
/* 単元カード、問題カードなど */
```

### .card-elevated（強調カード）

```css
.card-elevated {
  background-color: var(--color-surface);
  border-radius: 16px;
  padding: 24px;
  margin-bottom: 24px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12);
  border: none;
}

/* 例 */
/* ワーク結果画面のサマリー */
```

### .card-highlight（強調背景カード）

```css
.card-highlight {
  background-color: var(--color-primary-light);
  border-radius: 16px;
  padding: 16px;
  border-left: 4px solid var(--color-primary);
  margin-bottom: 16px;
}

/* 例 */
/* 「学習ゴール」セクション */
```

### .card-warning（注意カード）

```css
.card-warning {
  background-color: var(--color-accent-light);
  border-radius: 16px;
  padding: 16px;
  border-left: 4px solid var(--color-accent);
  margin-bottom: 16px;
}

/* 例 */
/* 「よくある間違い」セクション */
```

### .card-error（エラーカード）

```css
.card-error {
  background-color: var(--color-error-light);
  border-radius: 16px;
  padding: 16px;
  border-left: 4px solid var(--color-error);
  margin-bottom: 16px;
}

/* 例 */
/* 不正解時のフィードバック */
```

### .card-success（成功カード）

```css
.card-success {
  background-color: var(--color-secondary-light);
  border-radius: 16px;
  padding: 16px;
  border-left: 4px solid var(--color-secondary);
  margin-bottom: 16px;
}

/* 例 */
/* 正解時のフィードバック */
```

---

## 6. フォーム・入力要素

### .input-field（テキスト入力）

```css
.input-field {
  width: 100%;
  height: 48px;
  padding: 12px 16px;
  border-radius: 12px;
  border: 1px solid var(--color-border);
  background-color: var(--color-surface);
  font-size: 15px;
  font-family: var(--font-family);
  color: var(--color-text);
  transition: all 0.2s ease;

  &:focus {
    outline: none;
    border-color: var(--color-primary);
    box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);
  }

  &:disabled {
    background-color: var(--color-bg);
    color: var(--color-text-light);
    cursor: not-allowed;
  }

  &::placeholder {
    color: var(--color-text-light);
  }
}

/* 例 */
/* ユーザー名入力、メール入力など */
```

### .textarea（複数行テキスト）

```css
.textarea {
  width: 100%;
  min-height: 120px;
  padding: 12px 16px;
  border-radius: 12px;
  border: 1px solid var(--color-border);
  background-color: var(--color-surface);
  font-size: 15px;
  font-family: var(--font-family);
  color: var(--color-text);
  resize: vertical;
  line-height: 1.6;

  &:focus {
    outline: none;
    border-color: var(--color-primary);
    box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);
  }
}

/* 例 */
/* 質問内容の入力、メッセージ送信など */
```

### .checkbox（チェックボックス）

```css
.checkbox {
  width: 20px;
  height: 20px;
  margin-right: 8px;
  cursor: pointer;
  accent-color: var(--color-primary);

  &:checked {
    background-color: var(--color-primary);
    border-color: var(--color-primary);
  }
}

/* HTML */
/*
<label>
  <input type="checkbox" class="checkbox" />
  完了した
</label>
*/
```

### .radio（ラジオボタン）

```css
.radio {
  width: 20px;
  height: 20px;
  margin-right: 8px;
  cursor: pointer;
  accent-color: var(--color-primary);
}

/* 例 */
/* 質問テンプレート選択、難易度フィルター */
```

### .select（ドロップダウン）

```css
.select {
  width: 100%;
  height: 48px;
  padding: 12px 16px;
  border-radius: 12px;
  border: 1px solid var(--color-border);
  background-color: var(--color-surface);
  font-size: 15px;
  font-family: var(--font-family);
  color: var(--color-text);
  cursor: pointer;

  &:focus {
    outline: none;
    border-color: var(--color-primary);
    box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);
  }
}

/* 例 */
/* 単元フィルター、難易度選択など */
```

---

## 7. 進捗・インジケーター要素

### .progress-bar（進捗バー）

```css
.progress-bar {
  width: 100%;
  height: 8px;
  background-color: var(--color-border);
  border-radius: 4px;
  overflow: hidden;
  margin-bottom: 8px;

  .progress-fill {
    height: 100%;
    background-color: var(--color-primary);
    border-radius: 4px;
    transition: width 0.3s ease;
  }
}

/* 例 */
/*
<div class="progress-bar">
  <div class="progress-fill" style="width: 60%;"></div>
</div>
*/
```

### .progress-bar-success（完了・成功）

```css
.progress-bar-success .progress-fill {
  background-color: var(--color-secondary);
}

/* 例 */
/* 完了した単元の進捗バー（100%） */
```

### .progress-bar-warning（注意・要注意）

```css
.progress-bar-warning .progress-fill {
  background-color: var(--color-accent);
}

/* 例 */
/* 正答率が低い単元の進捗バー */
```

### .badge（バッジ）

```css
.badge {
  display: inline-block;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 600;
  white-space: nowrap;
}

.badge-primary {
  background-color: var(--color-primary-light);
  color: var(--color-primary-dark);
}

.badge-success {
  background-color: var(--color-secondary-light);
  color: var(--color-secondary-dark);
}

.badge-warning {
  background-color: var(--color-accent-light);
  color: var(--color-accent-dark);
}

.badge-error {
  background-color: var(--color-error-light);
  color: var(--color-error-dark);
}

/* 例 */
/* [初級] [中級] [上級] */
```

### .tag（タグ）

```css
.tag {
  display: inline-block;
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 13px;
  font-weight: 500;
  background-color: var(--color-primary-light);
  color: var(--color-primary-dark);
  margin-right: 4px;
  margin-bottom: 4px;
}

/* 例 */
/* #品詞 #時制 #疑問詞 */
```

---

## 8. ボトムナビゲーション

### .bottom-nav（固定ナビゲーション）

```css
.bottom-nav {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 64px;
  background-color: var(--color-surface);
  border-top: 1px solid var(--color-border);
  display: flex;
  justify-content: space-around;
  align-items: center;
  z-index: 100;
  box-shadow: 0 -2px 8px rgba(0, 0, 0, 0.08);
}

.bottom-nav__item {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: var(--color-text-secondary);
  font-size: 12px;
  transition: all 0.2s ease;
  text-decoration: none;

  .icon {
    font-size: 24px;
    margin-bottom: 4px;
  }

  &.active {
    color: var(--color-primary);
    font-weight: 600;
  }
}
```

### HTML例

```html
<nav class="bottom-nav">
  <a class="bottom-nav__item active" href="#home">
    <span class="icon">🏠</span>
    <span>ホーム</span>
  </a>
  <a class="bottom-nav__item" href="#units">
    <span class="icon">📚</span>
    <span>まなぶ</span>
  </a>
  <a class="bottom-nav__item" href="#records">
    <span class="icon">📊</span>
    <span>きろく</span>
  </a>
  <a class="bottom-nav__item" href="#menu">
    <span class="icon">⋮</span>
    <span>メニュー</span>
  </a>
</nav>
```

---

## 9. アイコン・モジール

### テキストロゴ

```
中学校英語サポート＋

カラー：Primary Blue (#2563EB)
フォント：Bold 28px
プラス記号：赤またはアクセント色で差別化
```

### アイコンセット

使用アイコンライブラリ：**Lucide Icons** または **Unicode 絵文字**

#### ナビゲーション

| アイコン | 意味 | 使用場面 |
|--------|------|--------|
| 🏠 | ホーム | ボトムナビ・ホーム遷移 |
| 📚 | まなぶ | ボトムナビ・単元一覧 |
| 📊 | きろく | ボトムナビ・学習記録 |
| ⋮ | メニュー | ボトムナビ・メニュー |

#### 状態・フィードバック

| アイコン | 意味 | 使用場面 |
|--------|------|--------|
| ✅ | 完了・正解 | 完了マーク、正答表示 |
| ❌ | 不正解・エラー | 不正解表示、エラーメッセージ |
| ⏳ | 進行中・待機中 | 進行中の単元、回答待機 |
| ⚠️ | 警告・注意 | よくある間違い、注意事項 |
| 💡 | ヒント・情報 | ヒント表示、ポイント |
| 🔥 | 連続・勢い | 連続学習ストリーク |
| 🎉 | 成功・祝い | テスト完了、高スコア |

#### アクション

| アイコン | 意味 | 使用場面 |
|--------|------|--------|
| ▶ | 進む・遷移 | 「始める」「開く」ボタン内 |
| ◀ | 戻る | 「戻る」ボタン、ナビゲーション |
| ▼ | 展開・折りたたみ | アコーディオン、メニュー展開 |
| 💬 | コメント・質問 | 質問ボタン、メッセージ |
| 🔔 | 通知 | 通知アイコン、新着表示 |
| 💾 | 保存 | 一時保存ボタン |
| 🔍 | 検索 | 検索ボタン |

---

## 10. 影・エレベーション

### シャドウレベル

```css
/* Elevation 0 - 影なし */
--shadow-0: none;

/* Elevation 1 - 最小（カード） */
--shadow-1: 0 2px 8px rgba(0, 0, 0, 0.08);

/* Elevation 2 - 標準（ホバー時） */
--shadow-2: 0 4px 16px rgba(0, 0, 0, 0.12);

/* Elevation 3 - 強い（モーダル） */
--shadow-3: 0 8px 24px rgba(0, 0, 0, 0.15);

/* Elevation 4 - 最大（フローティングボタン） */
--shadow-4: 0 16px 32px rgba(0, 0, 0, 0.2);
```

### 使用例

| レベル | 用途 | 例 |
|-------|------|-----|
| 0 | フラットデザイン要素 | テキスト、ボーダーのみ |
| 1 | 基本カード、リスト | 単元カード、問題カード |
| 2 | ホバー・フォーカス状態 | ボタンホバー、カードホバー |
| 3 | モーダル・オーバーレイ | 確認ダイアログ、サイドメニュー |
| 4 | 最前面・強調要素 | FABボタン、スティッキーナビ |

---

## 11. レスポンシブ・ブレークポイント

### デバイス幅

```css
/* スマートフォン */
@media (max-width: 480px) {
  /* 基本レイアウト（iPhone SE）*/
  font-size: 14px;
}

/* 標準スマートフォン */
@media (min-width: 481px) and (max-width: 767px) {
  /* 目安390px（iPhone 12など） */
  font-size: 15px;
}

/* タブレット */
@media (min-width: 768px) and (max-width: 1023px) {
  /* iPad など、サイドバー表示 */
  font-size: 16px;
}

/* デスクトップ */
@media (min-width: 1024px) {
  /* 将来対応 */
  font-size: 17px;
}
```

### 主要なブレークポイント

| ブレークポイント | デバイス | 幅 | 備考 |
|--------------|--------|-----|------|
| xs | スマートフォン（小） | 320px～480px | iPhone SE対応 |
| sm | スマートフォン（標準） | 481px～767px | **主力** 390px |
| md | タブレット | 768px～1023px | iPad |
| lg | デスクトップ | 1024px～ | 将来対応 |

### 現在の対応（Phase 1）
- **xs, sm** 完全対応
- **md, lg** 将来対応

---

## 12. ダークモード（将来対応）

将来的なダークモード対応のための CSS変数（準備中）

```css
@media (prefers-color-scheme: dark) {
  :root {
    --color-bg: #0F172A;              /* 背景（深い紺） */
    --color-surface: #1E293B;         /* カード背景（濃いグレー） */
    --color-text: #F1F5F9;            /* テキスト（薄いグレー） */
    --color-text-secondary: #94A3B8;  /* サブテキスト */
    --color-border: #334155;          /* ボーダー */
    /* その他色は変更なし */
  }
}
```

---

## 13. アクセシビリティ原則

### WCAG 2.1 AA準拠

1. **色コントラスト**
   - 通常テキスト：4.5:1以上
   - 大きなテキスト：3:1以上

2. **テキスト代替**
   - すべてのアイコンに alt テキストまたは aria-label

3. **フォーカス管理**
   - 明確なフォーカスインジケーター（アウトライン）
   - フォーカスの視認性を確保

4. **キーボードナビゲーション**
   - タブキーで全要素へアクセス可能
   - Enter/Space で操作可能

5. **リーディング順序**
   - 視覚的な読む順序と DOM の順序が一致

### 実装例

```html
<!-- アイコンボタンには aria-label -->
<button class="btn" aria-label="質問を送信">
  <span class="icon">📬</span>
</button>

<!-- フォーカス時のスタイル -->
<style>
  button:focus-visible {
    outline: 2px solid var(--color-primary);
    outline-offset: 2px;
  }
</style>

<!-- ラベルとフォーム要素の関連付け -->
<label for="question-input">質問内容</label>
<textarea id="question-input" class="textarea"></textarea>
```

---

## 14. ブランドトーン・ボイス

### ブランドパーソナリティ

| 属性 | 説明 |
|------|------|
| **信頼性** | 教育の専門知識に基づく、安心できるサポート |
| **親しみやすさ** | 中学生にも保護者にも理解しやすい言葉遣い |
| **インクルーシブ** | 学習のペースが異なるユーザーに対応 |
| **励まし志向** | 失敗も学習の過程として前向きに捉える |

### 言葉遣いガイド

#### すべき

- ✅「わかりやすい説明」「丁寧なサポート」
- ✅「頑張ってますね」「次はこれに挑戦」
- ✅「わからないことを聞ける」
- ✅「少しずつ成長している」

#### すべきでない

- ❌「難しい専門用語の多用」
- ❌「命令的な言葉」
- ❌「ユーザーを責める」
- ❌「競争や比較」

### 例

| 場面 | 良い例 | 悪い例 |
|------|--------|--------|
| 正解時 | 「その通り！よくできましたね」 | 「合ってる」 |
| 不正解時 | 「惜しい！もう少し考えると…」 | 「間違ってる」 |
| 質問時 | 「わかりやすく説明します」 | 「質問受け付けます」 |
| 励まし | 「15日連続頑張ってる！」 | 「あと15日続けてね」 |

---

## 15. 実装チェックリスト

デザイン実装時の確認事項：

- [ ] カラーパレットの CSS変数を定義
- [ ] タイポグラフィの font-size、line-height、font-weight を統一
- [ ] スペーシングを8pxグリッドに統一
- [ ] すべてのボタンが .btn-primary 等のクラスで統一
- [ ] カードが .card クラスで統一
- [ ] 進捗バーが .progress-bar で実装
- [ ] ボトムナビゲーションが 64px 高さで固定配置
- [ ] フォーカススタイルが明確に定義
- [ ] 色コントラスト比が 4.5:1 以上
- [ ] アイコンに alt テキストまたは aria-label が付与
- [ ] レスポンシブが 390px 幅で確認
- [ ] ダークモード対応の検討（将来実装時）

---

## 参考資料

### 参照ガイドライン
- WCAG 2.1（Web Content Accessibility Guidelines）
- Material Design 3
- Apple Human Interface Guidelines（iOS）
- Noto Sans JP フォント仕様

### デザインツール推奨設定
- Figma：グリッド 8px、レスポンシブ自動レイアウト
- Tailwind CSS：推奨 extend で CSS変数を活用
