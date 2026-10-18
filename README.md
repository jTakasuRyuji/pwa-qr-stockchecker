# pwa-qr-stockchecker (v0.1)

[English](#english) | [日本語](#japanese)

---

<a name="english"></a>
## 📱 English

### Overview
**pwa-qr-stockchecker** is a Progressive Web App (PWA) designed for inventory and asset management. It allows users to scan QR codes on boxes using a smartphone camera and seamlessly search for corresponding documents or files in Google Drive. Inspired by modern QR payment UX, it provides a fast, intuitive, and secure scanning experience.

### Key Features
* **PWA Support**: Easily installable on Android and iOS home screens for native-like app usage.
* **Modern QR Payment UX**: Full-screen camera view with a clean finder frame and clear status guidance.
* **Google Drive Integration**: Automatically converts scanned codes (UUIDs) into Google Drive search queries.
* **HTTPS Warning & Confirmation Modal**: Warns users and prompts for confirmation before opening external or HTTPS URLs, ensuring secure browsing.
* **Display & Font Size Settings**: Customizable text sizes (Normal, Large, Extra Large) via an intuitive settings menu.
* **PC & Mobile Responsive**: Automatically detects desktop environments and displays a mobile-guidance QR code, with an experimental PC camera test mode.

### Tech Stack
* HTML5 / JavaScript (Vanilla)
* Tailwind CSS
* html5-qrcode (QR Code Scanning)
* qrcode.js (QR Code Generation)

---

<a name="japanese"></a>
## 📦 日本語

### 概要
**pwa-qr-stockchecker** は、備品や資産の管理に特化したプログレッシブ・ウェブ・アプリ（PWA）です。スマートフォンのカメラで箱などのQRコードをスキャンし、Google Drive内の対応する仕様書やドキュメントをスムーズに検索・表示します。決済アプリを参考にした直感的で洗練されたUXを提供します。

### 主な機能
* **PWA対応**: AndroidやiOSのホーム画面にインストールし、ネイティブアプリのようにすばやく起動できます。
* **決済アプリ風の洗練されたUX**: 画面いっぱいのカメラプレビューと分かりやすいファインダー枠、視認性の高いステータス表示。
* **Google Drive連携**: スキャンしたコード（UUID等）を元に、Google Drive内のファイルをダイレクトにキーワード検索。
* **HTTPS警告・確認モーダル**: 外部URLやHTTPSリンクを読み込んだ際に、安全性の警告と確認ダイアログを表示して誤作動を防止。
* **表示設定（文字サイズ変更）**: 設定画面から文字サイズ（標準・大・特大）をいつでも自由に変更可能。
* **PC / スマホ自動切替**: PCでアクセスした際はスマホ誘導用のQRコードを表示。実験的なPCカメラテストモードも搭載。

### ライセンス / License
This project is licensed under the MIT License.
