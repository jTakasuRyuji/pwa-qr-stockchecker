# pwa-qr-stockchecker (v0.2)

[English](#english) | [日本語](#japanese)

---

<a name="english"></a>
## 📱 English

### Overview
**pwa-qr-stockchecker** is a Progressive Web App (PWA) designed for inventory and asset management. It allows users to scan QR codes on boxes using a smartphone camera and seamlessly search for corresponding documents or files in Google Drive. 

In version 0.2, the application has been completely redesigned using **Material Design 3 (MD3)** principles. By utilizing BeerCSS, it abandons standard web proportions to deliver a massive, highly visible, and easily tappable UI that feels exactly like a native Android application.

### Key Features
* **Material Design 3 UX**: Built with BeerCSS for native-feeling bottom sheets, ripple effects, and ultra-clean, full-screen camera views without unnecessary decorations.
* **Massive UI Scaling**: Choose from Normal, Large, or X-Large UI scales. The root scaling ensures all buttons, text, and margins scale proportionally for perfect outdoor visibility.
* **Start Screen (Scene 0)**: Includes an entry screen with a manual "Check for Updates" function to ensure the PWA is always running the latest version.
* **Google Drive Integration**: Automatically converts scanned codes (UUIDs) into Google Drive search queries.
* **HTTPS Warning Modal**: Warns users via a bottom sheet before opening external or HTTPS URLs, ensuring secure browsing.
* **PC & Mobile Auto-Detection**: Displays a mobile-guidance QR code when accessed on a desktop, alongside an experimental PC camera mode.

### Tech Stack
* HTML5 / JavaScript (Vanilla)
* BeerCSS (Material Design 3 framework)
* html5-qrcode (QR Code Scanning)
* qrcode.js (QR Code Generation)

---

<a name="japanese"></a>
## 📦 日本語

### 概要
**pwa-qr-stockchecker** は、備品や資産の管理に特化したプログレッシブ・ウェブ・アプリ（PWA）です。スマートフォンのカメラでQRコードをスキャンし、Google Drive内の対応する仕様書やドキュメントをスムーズに検索・表示します。

バージョン0.2では、デザインのベースを **Material Design 3 (MD3)** に完全刷新しました。「Webサイトの基準」を捨て、Androidネイティブアプリと同等の「屋外でも一瞬で視認でき、確実にタップできる巨大なUIスケール」を実現しています。

### 主な機能
* **完璧なMaterial Design 3 UX**: BeerCSSを採用し、タップ時の波紋エフェクトや滑らかなボトムシート、極限まで無駄を削ぎ落としたフルスクリーンカメラビューを提供します。
* **圧倒的な視認性（UIの一括スケール機能）**: 標準・特大・超特大からサイズを選択可能。ボタン・余白・テキストが完璧な比率を保ったまま巨大化します。
* **スタート画面（Scene 0）と強制アップデート**: 起動時のエントリー画面を追加。キャッシュによる古い画面の表示を防ぐ「最新版の確認」機能を搭載しました。
* **Google Drive連携**: スキャンしたコード（UUID等）をGoogle Driveの検索クエリとして自動処理。
* **HTTPS警告ボトムシート**: 外部URLやHTTPSリンクを読み込んだ際に、安全性の警告ダイアログを表示して意図しないアクセスを防止。
* **PC / スマホ自動切替**: PCアクセス時はスマホ誘導用のQRコードを表示。実験的なPCカメラテストモードも搭載。

### ライセンス / License
This project is licensed under the MIT License.
