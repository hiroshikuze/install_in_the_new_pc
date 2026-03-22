# macOS 26（Tahoe）において行う設定やインストールしたいソフト

新しいmacOS 26（Tahoe）が入ったMacを買ったときにインストールしたいソフトや設定のまとめです（2026年3月時点）。

## コマンドで一括インストール（Homebrew）

macOSでは **Homebrew**（macOS用パッケージマネージャー）を導入することで、ブラウザでダウンロードページを探す手間なくソフトをインストールできます。

ターミナル（アプリケーション → ユーティリティ → ターミナル）を開き、まずHomebrew本体をインストールします。

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

> **Apple Silicon Mac（M1以降）の場合**、インストール後に以下を `~/.zprofile` に追記する必要があります。
>
> ```bash
> eval "$(/opt/homebrew/bin/brew shellenv)"
> ```

インストール完了後、以下をまとめて貼り付けると「自分としては必須設定」のソフトを一括インストールできます。

```bash
# ソフトウェアの一括インストール
brew install --cask google-chrome
brew install --cask visual-studio-code
brew install --cask diffmerge
brew install --cask the-unarchiver
brew install --cask sublime-text            # サクラエディタのようにキーマクロも使える
brew install --cask clipy                   # 注意：過去ログで使えるのはテキストのみ
brew install --cask karabiner-elements      # キーカスタマイズ
brew install --cask bettertouchtool         # トラックパッドカスタマイズ（有料）
```

> パッケージ名は `brew search <ソフト名>` で検索して確認できます。
>
> 🧩 VS Code拡張機能は別途インストールが必要です → [VS Code拡張機能](vscode-extensions.md)

任意インストール分は以下の通りです。

```bash
brew install --cask line
brew install --cask zoom
brew install --cask simplenote
brew install --cask google-drive
brew install --cask drawio
brew install --cask firefox
brew install --cask iterm2
brew install --cask filezilla
```

> **Homebrewで対応していないもの・別途対応が必要なもの**
>
> - iCloud：macOS標準搭載のため追加インストール不要（システム設定 → Apple ID から設定）
> - Chrome Remote Desktop：Chromeの[拡張機能ページ](https://remotedesktop.google.com/access)からインストール
> - PhotoScape X：App Storeからインストール（無料）
> - Claude Code：`npm install -g @anthropic-ai/claude-code`（Node.js要）

---

## ⚙️ 基本設定

1. ソフトウェアアップデートを適用する（システム設定 → 一般 → ソフトウェアアップデート）
1. Apple IDでサインインする（iCloudを使わない場合はスキップ可）
1. iCloudの同期項目を必要なものだけに絞る（デスクトップ・書類の自動同期等は意図せず有効になっていることがある）
1. Time Machineの設定（外付けストレージがあれば設定しておくと安心）
1. プリンタードライバーのインストール（システム設定 → プリンターとスキャナー）

> **Windows 11との主な違い**
>
> - Microsoftアカウントに相当するApple IDのサインインは任意（強制されない）
> - 回復ドライブはmacOS復旧（電源ボタン長押し、またはIntel Macは `⌘ + R` 起動）が担うため、別途USBの作成は基本不要
> - LAN未接続での初期起動制限はなく、ローカルアカウント相当で自由に使用可能

## 🛠️ 自分としては必須設定

1. Homebrewインストール（→[一括コマンド参照](#コマンドで一括インストールhomebrew)）
1. **Finderの表示設定**
    - 隠しファイルの表示トグル：Finder上で `⌘ + Shift + .` を押すと即座に切り替え可能
    - ファイルの拡張子を表示する：Finder → 設定（`⌘ + ,`）→ 詳細 → すべてのファイル名拡張子を表示
    - パスバーを表示する：Finder → 表示 → パスバーを表示（`⌘ + Option + P`）
    - ステータスバーを表示する：Finder → 表示 → ステータスバーを表示（`⌘ + /`）
1. **Finderで現在開いているフォルダーをターミナルで開く**（Automatorアプリ方式）
    1. Automatorを起動し、書類の種類として **「アプリケーション」** を選ぶ
    1. アクションライブラリから **「AppleScriptを実行」** をキャンバスにドラッグし、デフォルトのコードを以下に置き換える

       ```applescript
       on run
           try
               tell application "Finder"
                   set targetFolder to (target of front window) as alias
                   set folderPath to POSIX path of targetFolder
               end tell
               tell application "Terminal"
                   activate
                   do script "cd '" & folderPath & "'"
               end tell
           on error
               display dialog "Finderでフォルダが開かれていません。" buttons {"OK"} default button 1
           end try
       end run
       ```

    1. **「ファイル → 保存」** でアプリケーションとして保存する（例：`新規ターミナルで開く.app`）
    1. Finderウィンドウを開き、保存した `.app` ファイルを **⌘ を押しながらFinderのツールバーにドラッグ** して登録する
    - 登録後はツールバーのボタンをクリックするだけで、現在開いているフォルダーをターミナルで開ける
1. **不要な機能・通知の整理**
    - Siri（不要であればシステム設定 → Siriと音声入力からオフ）
    - スポットライトの検索対象（システム設定 → Siriとスポットライト → 検索結果で絞り込む）
    - 通知（システム設定 → 通知で各アプリを調整）
1. **Dockの整理**
    - 使わないアプリをDockから削除する（右クリック → オプション → Dockから削除）
    - Dockを自動的に隠す：システム設定 → デスクトップとDock → Dockを自動的に表示/非表示
1. [Karabiner-Elements](https://karabiner-elements.pqrs.org/)インストール（`brew install --cask karabiner-elements`）
    ※キーボードのキー配置やショートカットを柔軟にカスタマイズできるツール。
1. [BetterTouchTool](https://folivora.ai/)インストール（`brew install --cask bettertouchtool`）
    ※トラックパッドのジェスチャーやショートカットを高度にカスタマイズできるツール（有料・買い切りあり）。
1. [Chrome](https://www.google.com/intl/ja_jp/chrome/)インストール（`brew install --cask google-chrome`）
1. デフォルトブラウザをChromeにする（システム設定 → デスクトップとDock → デフォルトのウェブブラウザ）
1. Chromeが英語になっていたら日本語化
1. Chrome Remote Desktopインストール（Chromeの[拡張機能ページ](https://remotedesktop.google.com/access)から）
1. [Visual Studio Code](https://azure.microsoft.com/ja-jp/products/visual-studio-code/)導入（`brew install --cask visual-studio-code`）
1. 🧩 [VS Code拡張機能](vscode-extensions.md)のインストール
1. [Claude Code](https://github.com/hiroshikuze/claudecode-install-forwin-memo)インストール（`npm install -g @anthropic-ai/claude-code`）
    ※AIコーディングアシスタントCLI。Node.jsが必要（`brew install node` で導入可）。
1. [DiffMerge](https://sourcegear.com/diffmerge/)インストール（`brew install --cask diffmerge`）
    ※WinMerge相当のdiff・マージツール。
    Xcodeをインストールすれば `opendiff`（FileMerge）も利用可能。
1. [Clipy](https://clipy-app.com/)インストール（`brew install --cask clipy`）
    ※CLCL相当のクリップボードマネージャー。
1. 圧縮・展開ソフトインストール（`brew install --cask the-unarchiver`）
    ※macOS標準でZIP・tar・gzは展開可能。
    7z・rar等が必要な場合はThe Unarchiverを導入。
1. 軽量エディタインストール（`brew install --cask coteditor`）
    ※CotEditorはmacOS向けの日本語対応軽量テキストエディター（サクラエディター相当）。
1. 無料画像編集ソフト（App Storeより [PhotoScape X](https://apps.apple.com/jp/app/photoscape-x/id1239399499)）
    ※有料の高機能版が必要な場合は [Pixelmator Pro](https://www.pixelmator.com/pro/)（App Store）やオープンソースの [GIMP](https://www.gimp.org/)（`brew install --cask gimp`）も選択肢。

> **Windows 11との主な違い**
>
> - Homebrewが`winget`相当。`brew install`（CLIツール）と`brew install --cask`（GUIアプリ）を使い分ける
> - Everythingに相当する高速ファイル検索はSpotlight（`⌘ + Space`）や `mdfind` コマンドで代替可能
> - WSL・Telnetクライアント・仮想マシンプラットフォームはmacOSがUnixベースのため基本不要
> - CopilotやOneDriveの強制起動はないが、iCloudの自動同期設定は初期セットアップ時に確認が必要

## 📦 PCによって要りそうならインストール

1. [LINE](https://line.me/ja/)インストール（`brew install --cask line`）
1. [Zoomクライアント](https://zoom.us/jp-jp/meetings.html)インストール（`brew install --cask zoom`）
1. iCloud：macOS標準搭載のため追加インストール不要
1. [Simplenote](https://simplenote.com/)インストール（`brew install --cask simplenote`）
1. [Google Drive for Desktop](https://www.google.com/intl/ja/drive/download/)インストール（`brew install --cask google-drive`）
1. [draw.io Diagrams](https://www.diagrams.net/)インストール（`brew install --cask drawio`）
1. [Firefox](https://www.mozilla.org/ja/firefox/)インストール（`brew install --cask firefox`）
1. [iTerm2](https://iterm2.com/)インストール（`brew install --cask iterm2`）
    ※標準ターミナルより高機能なターミナルエミュレーター。TeraTerm相当。
1. [FileZilla](https://filezilla-project.org/)インストール（`brew install --cask filezilla`）
    ※インストールが失敗する場合は[公式サイト](https://filezilla-project.org/)から手動でダウンロード。

---

[← ガイド一覧に戻る](index.md) ／ [README](../README.md)
