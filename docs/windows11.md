# Windows 11 HomeやProfessionalにおいて行う設定やインストールしたいソフト

新しいWindows 11のHomeやProfessionalが入ったPCを買ったときにインストールしたいソフトや設定のまとめです（2026年3月時点）

## ⚡ コマンドで一括インストール（winget）

Windows 11には **winget**（Windowsパッケージマネージャー）が標準搭載されており、ブラウザでダウンロードページを探す手間なくソフトをインストールできます。

PowerShellまたはターミナルを**管理者として実行**し、以下をまとめて貼り付けると「自分としては必須設定」のソフトを一括インストールできます。

```powershell
# Windows機能の有効化
wsl --install
dism /online /Enable-Feature /FeatureName:TelnetClient /NoRestart
dism /online /Enable-Feature /FeatureName:VirtualMachinePlatform /All /NoRestart

# ソフトウェアの一括インストール
winget install --id Google.Chrome           -e --silent
winget install --id Microsoft.VisualStudioCode -e --silent
winget install --id WinMerge.WinMerge       -e --silent
winget install --id voidtools.Everything    -e --silent
winget install --id 7zip.7zip               -e --silent
winget install --id SakuraEditor.SakuraEditor -e --silent
winget install --id dotPDN.PaintDotNet      -e --silent

```

> パッケージIDは `winget search <ソフト名>` で検索して確認できます。
>
> 🧩 VS Code拡張機能は別途インストールが必要です → [VS Code拡張機能](vscode-extensions.md)

> 任意インストール分の一括コマンドは後述の「[PCによって要りそうならインストール](#-pcによって要りそうならインストール)」セクションを参照してください。

> **wingetで対応していないもの**
>
> - CLCL（winget未対応のため[公式サイト](https://www.nakka.com/soft/clcl/)からダウンロード）
> - Chrome Remote Desktop（Chromeの[拡張機能ページ](https://remotedesktop.google.com/access)からインストール）

---

## ⚙️ 基本設定

1. 回復ドライブ用のUSBメモリ16GBをあらかじめ用意する
1. Bluetoothキーボードとマウスを使う場合でも、とりあえずUSB接続のキーボードとマウスを接続する
1. **【注意】ローカルアカウントでセットアップする場合**（Microsoftアカウントを紐づけたくない場合）
   ※Windows 11 HomeではMicrosoftアカウントのサインインが原則必須となっている。ローカルアカウントで使いたい場合はProエディションを選ぶことを推奨。
   - **バージョン23H2以前**：LANを抜いた状態で起動 → セットアップ中のネットワーク接続要求画面で `Shift + F10` を押してコマンドプロンプトを開き、`OOBE\BYPASSNRO` を入力してEnter → 自動再起動後に「インターネットに接続していません」が選択可能になる
   - **バージョン24H2以降**（BYPASSNROが廃止されたビルドの場合）：Microsoftアカウント入力画面で `Shift + F10` を押してコマンドプロンプトを開き、`start ms-cxh:localonly` を入力してEnter → ローカルアカウント作成ダイアログが表示される
1. ログインアカウントを作る
1. LANを刺し直す
1. ハードウェアキーボードが英語なら日本語に変更
1. Bluetoothキーボードとマウスを使うなら認識させる
1. Windows Updateの適用
1. Microsoft Storeアップデート
1. あらかじめ用意したUSBメモリを用いて回復ドライブの作成
   ※2時間以上時間がかかる
1. 手持ちのプリンター用ドライバーのインストール

> **Windows 10との主な違い**
>
> - Internet Explorerは完全に削除されたためショートカット削除は不要
> - タスクバーのカスタマイズ方法が変わっている（スタートボタンが中央配置）

## 🛠️ 自分としては必須設定

1. Windowsの機能有効化（→[一括コマンド参照](#-コマンドで一括インストールwinget)）
    - Linux用Windowsサブシステム：`wsl --install`
    - Telnetクライアント：`dism /online /Enable-Feature /FeatureName:TelnetClient /NoRestart`
    - 仮想マシンプラットフォーム：`dism /online /Enable-Feature /FeatureName:VirtualMachinePlatform /All /NoRestart`
1. **不要なスタートアップ・機能の整理**
    - Copilot（不要であれば設定→Copilotからオフ）
    - OneDriveの自動バックアップ（不要であれば設定→OneDriveから無効化）
    - ウィジェット（不要であれば設定→個人用設定→タスクバーからオフ）
1. **Microsoftの広告・プロモーション通知の無効化**
    - 個人広告ID：設定 → プライバシーとセキュリティ → 全般 → 「広告IDを使って、よりカスタマイズされた広告を表示する」をオフ
    - Windowsのヒントと提案：設定 → システム → 通知 → 「Windowsを使用するときにヒントと提案を取得する」をオフ
    - スタート画面のおすすめ：設定 → 個人用設定 → スタート → 「ヒント・アプリのプロモーション・その他のおすすめを表示する」をオフ
    - ロック画面の広告：設定 → 個人用設定 → ロック画面 → 「ロック画面に楽しいヒントやトリックを表示する」をオフ
    - Microsoft 365入会案内（再起動時に表示されるもの）：設定 → アプリ → スタートアップ → Microsoft 365関連エントリをオフ（またはタスクマネージャー `Ctrl + Shift + Esc` → スタートアップアプリ で無効化）
1. **エクスプローラーの表示設定**
    - 隠しファイルを表示する：エクスプローラー → 表示 → 表示 → 隠しファイル
    - ファイルの拡張子を表示する：エクスプローラー → 表示 → 表示 → ファイル名拡張子
1. [Chrome](https://www.google.com/intl/ja_jp/chrome/)インストール（`winget install --id Google.Chrome -e`）
1. 既存のブラウザをChromeにする
1. タスクバーにChrome追加
1. Chromeが英語になっていたら日本語化
1. Chrome Remote Desktopインストール（Chromeの[拡張機能ページ](https://remotedesktop.google.com/access)から）
1. [Visual Studio Code](https://azure.microsoft.com/ja-jp/products/visual-studio-code/)導入（`winget install --id Microsoft.VisualStudioCode -e`）
1. 🧩 [VS Code拡張機能](vscode-extensions.md)のインストール
1. [WinMerge](https://winmergejp.bitbucket.io/)インストール（`winget install --id WinMerge.WinMerge -e`）
1. [Everything](https://forest.watch.impress.co.jp/library/software/everything/)インストール（`winget install --id voidtools.Everything -e`）
1. [CLCL](https://www.nakka.com/soft/clcl/)インストール（winget未対応のため公式サイトから）
1. 圧縮・展開ソフトインストール
    ※Windows 11 22H2以降はエクスプローラーで7z・tar・rarなどを標準で展開可能。
    ZIP作成も標準対応のため、用途によっては追加ソフト不要（必要なら[7-Zip](https://sevenzip.osdn.jp/)：`winget install --id 7zip.7zip -e`）。
1. 軽量エディタインストール（`winget install --id SakuraEditor.SakuraEditor -e`）
1. 軽量お絵かきソフト（`winget install --id dotPDN.PaintDotNet -e`）

> **Windows 10との主な違い**
>
> - WSL2がデフォルトになり、`wsl --install` 一発でUbuntuまで導入完了
> - WindowsのdismコマンドやPowerShellでWindows機能を有効化できる
> - VS Code拡張機能は `code --install-extension` でCLIインストール可能
> - ZIP以外の圧縮形式（7z・tar・rar等）がエクスプローラーで標準展開可能になったためLhasa等が不要になるケースが多い
> - CopilotやOneDrive自動バックアップ等、不要な機能を意図的にオフにする手順が増えた

## 📦 PCによって要りそうならインストール

まとめてインストールする場合は以下を貼り付けてください。

```powershell
winget install --id LINE.LINE                  -e --silent
winget install --id Zoom.Zoom                  -e --silent
winget install --id Apple.iCloud               -e --silent
winget install --id Automattic.Simplenote      -e --silent
winget install --id Google.GoogleDrive         -e --silent
winget install --id JGraph.Draw                -e --silent
winget install --id Mozilla.Firefox            -e --silent
winget install --id TeraTermProject.teraterm   -e --silent
winget install --id TimKosse.FileZilla.Client  -e --silent
```

1. [Windows用LINE](https://line.me/ja/)インストール（`winget install --id LINE.LINE -e`）
1. [Zoomクライアント](https://zoom.us/jp-jp/meetings.html)インストール（`winget install --id Zoom.Zoom -e`）
1. [iCloud](https://support.apple.com/ja-jp/HT204283)インストール（`winget install --id Apple.iCloud -e`）
1. [Simplenote](https://simplenote.com/)インストール（`winget install --id Automattic.Simplenote -e`）
1. [Google Drive for Desktop](https://www.google.com/intl/ja/drive/download/)インストール（`winget install --id Google.GoogleDrive -e`）
    ※旧称「Backup and Sync」から名称変更されている
1. [draw.io Diagrams](https://www.microsoft.com/store/apps/9mvvszk43qqw)インストール（`winget install --id JGraph.Draw -e`）
1. [Firefox](https://www.mozilla.org/ja/firefox/)インストール（`winget install --id Mozilla.Firefox -e`）
1. [TeraTerm](https://github.com/TeraTermProject/teraterm/releases)インストール（`winget install --id TeraTermProject.teraterm -e`）
1. [FileZilla](https://filezilla-project.org/)インストール（`winget install --id TimKosse.FileZilla.Client -e`）
    ※wingetでのインストールが失敗する場合は[公式サイト](https://filezilla-project.org/)から手動でダウンロード

---

[← ガイド一覧に戻る](index.md) ／ [README](https://github.com/hiroshikuze/initial-setup-of-new-PC/)
