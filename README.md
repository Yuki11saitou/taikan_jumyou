# README

[作成記録notion](https://impartial-trunk-0da.notion.site/ea217c40a9014d78843a933712fdb4d7?pvs=4)


## サービス概要

### サービス名 : 体感寿命、測ります

サービスURL： https://taikan-jumyou.onrender.com/

『体感寿命、測ります』は現在の年齢から体感寿命を計測するアプリです。


## サービスへの想い
私は現在プログラミングスクールRUNTEQにて、Ruby on Railsを主としたWeb開発について学んでいます。  
スクール内で、アプリを出してアイデアや技術力を競い合う催し [BATTLE OF RUNTEQ](https://battleof.runteq.jp/) があり、そちらにアプリを出してみようと思ったのがきっかけでした。  
開催5回目となる上記イベント。今回のテーマが「完璧はいらない。個性をカタチに。」ということで、自分自身の個性が出るようなアプリを作ろうと思い、本サービスを作成しました。  
私自身、大学・大学院で物理学を専攻しており、「時間」というものについて勉強をしていました。今回は、そんな私のバックグラウンドに沿ったテーマを選びました。


## サービスへの想い
アプリを作成する際、「できるだけ多くの人に触っていただきたい」と思い、人類全体で共通する概念である「寿命」に着目しました。  
加えて最近、歳をとるごとに「1年があっという間に過ぎる」と実感するようになり、体感寿命を計測しようと思ったことから本アプリを作りました。  
このサービスを通して、「1日1日を大切に、自分のために生きて欲しい」というメッセージを利用者の方に届けたいと思っています。


## サービスの機能について
主に下記項目に注力しました。
- (1) モバイルファーストで開発
  - 基本的に、スマホ経由からのアクセスを想定して開発を進めました。
- (2) 体感寿命の計算機能
  - 計算機能については、RailsのMathモジュール、及び積分計算を導入することによって、処理にかかる時間の短縮を図っています。
  - Xシェアを見据えて、利用者が入力するパラメータは「現在の年齢」と「予想寿命」の2つにしました（パラメータを２種にすることで「現在の年齢」を逆算することが困難になります）。
- (3) 計算結果の可視化
  - 円グラフを導入することで、視覚的にわかりやすいようにしました。
- (4) xへのシェア機能
  - Xへのシェア時には計算した体感の寿命・人生の経過率の結果が表示されるようになっています。
  - Xシェア時には、実際の寿命・人生の経過率を記載しないことで、第三者による年齢の特定を困難にしています。
  - また、シェア前に、上記項目を確認して頂くモーダルを準備し、ご理解いただいた上でシェアできるようにしています。
- (5) お問い合わせフォームの追加
  - 利用者が、アプリ内からバグ・不具合報告などをできるよう、お問い合わせフォームを作成しました。
