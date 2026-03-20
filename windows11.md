# Windows 11 HomeやProfessionalにおいて行う設定やインストールしたいソフト

新しいWindows 11のHomeやProfessionalが入ったPCを買ったときにインストールしたいソフトや設定のまとめです（2026年3月時点）

## 基本設定

1. 回復ドライブ用のUSBメモリ16GBをあらかじめ用意する
1. Bluetoothキーボードとマウスを使う場合でも、とりあえずUSB接続のキーボードとマウスを接続する
1. **【注意】LANを抜いて起動**
   ※Windows 11 HomeではMicrosoftアカウントのサインインが原則必須となっている。ローカルアカウントで使いたい場合はProエディションを選ぶことを推奨。
   ※Homeでもインターネット未接続状態で初期セットアップを進めることでローカルアカウントを作成できる場合があるが、バージョンによって挙動が異なる。
   ※Windows 11 24H2以降は `OOBE\BYPASSNRO` コマンドが使えなくなったため、LAN（および無線LAN）を物理的に切断した状態で起動する方法が現実的。
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
> - Internet Explorerは完全に削除されたためショートカット削除は不要
> - タスクバーのカスタマイズ方法が変わっている（スタートボタンが中央配置）

## 自分としては必須設定

1. Windowsの機能有効化
    ・Linux用Windowsサブシステム（WSL2がデフォルト。インストール後 `wsl --install` でUbuntu等を導入可能）
    ・Telnetクライアント
    ・仮想マシンプラットフォーム
1. **不要なスタートアップ・機能の整理**
    ・Copilot（不要であれば設定→Copilotからオフ）
    ・OneDriveの自動バックアップ（不要であれば設定から無効化）
    ・ウィジェット（不要であれば設定からオフ）
1. [Chrome](https://www.google.com/intl/ja_jp/chrome/)インストール
1. 既存のブラウザをChromeにする
1. タスクバーにChrome追加
1. Chromeが英語になっていたら日本語化
1. Chrome remote desktopインストール
1. [Visual Studio Code](https://azure.microsoft.com/ja-jp/products/visual-studio-code/)導入
    拡張機能の導入
    ・[テキスト校正くん](https://marketplace.visualstudio.com/items?itemName=ICS.japanese-proofreading)インストール
    ・[Trailing Spaces](https://marketplace.visualstudio.com/items?itemName=shardulm94.trailing-spaces)インストール
1. [WinMerge](https://winmergejp.bitbucket.io/)インストール
1. [Everything](https://forest.watch.impress.co.jp/library/software/everything/)インストール
1. [CLCL](https://www.nakka.com/soft/clcl/)インストール
1. 圧縮・展開ソフトインストール
    ※Windows 11 22H2以降はエクスプローラーで7z・tar・rarなどを標準で展開可能。ZIP作成も標準対応のため、用途によっては追加ソフト不要。
    （必要なら[7-Zip](https://sevenzip.osdn.jp/)など）
1. 軽量エディタインストール
    （たとえば[サクラエディタ](https://sakura-editor.github.io/)）
1. 軽量お絵かきソフト
    （たとえば[Paint.NET](https://www.getpaint.net/)）

> **Windows 10との主な違い**
> - WSL2がデフォルトになり、Microsoft Storeからも各Linuxディストリビューションを直接インストール可能
> - ZIP以外の圧縮形式（7z・tar・rar等）がエクスプローラーで標準展開可能になったため、Lhasa等が不要になるケースが多い
> - CopilotやOneDrive自動バックアップ等、不要な機能を意図的にオフにする手順が増えた

## PCによって要りそうならインストール

1. [Windows用LINE](https://line.me/ja/)インストール
1. [Zoomクライアント](https://zoom.us/jp-jp/meetings.html)インストール
1. [iCloud](https://support.apple.com/ja-jp/HT204283)インストール
1. [Simplenote](https://simplenote.com/)インストール
1. [Google Drive for Desktop](https://www.google.com/intl/ja/drive/download/)インストール
    ※旧称「Backup and Sync」から名称変更されている
1. [draw.io Diagrams](https://www.microsoft.com/store/apps/9mvvszk43qqw)インストール
