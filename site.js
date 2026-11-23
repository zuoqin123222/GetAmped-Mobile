"use strict";
const words={
en:{
test:"ANDROID · DEVELOPMENT TEST",intro:"Explore jobs and equipment, practice offline, and play in online test rooms on Android.",platforms:"Android: available · iOS: not yet available",
download:"Download APK",feedback:"Feedback",jobs:"Jobs & equipment",jobsText:"Choose from all jobs, main equipment and sub equipment included in the test client. Follow the original job compatibility rules.",
offline:"Local single-player",offlineText:"Practice and try equipment locally. Offline practice does not require the online server.",
online:"Online test rooms",onlineText:"Create or join rooms for online play, or practice alone on the server.",
updates:"In-app updates",updatesText:"The app checks for updates at startup. Supported versions download an exact delta and rebuild the verified full APK before Android confirms installation.",
server:"One small test server in Shanghai",serverText:"Currently there is just one small, personally funded development server in Shanghai. Capacity is limited; latency and availability can vary during testing.",
compatibility:"This is a development test. Some equipment that depends on mouse input still needs touch compatibility testing. Selecting equipment does not mean every skill has been verified on Android.",
current:"CURRENT BUILD",changes:"Release notes",install:"Install & verify",installText:"Android 8.0 or newer. For a first installation, download the full APK and allow installation from your browser. Updates keep the same signature and personal settings.",
oldVersions:"Older clients without an updater need the latest full APK.",history:"Current release ↗",help:"HELP IMPROVE THE TEST",
feedbackText:"Tell us what happened, how to reproduce it, and what you expected. Suggestions are welcome too.",
privacy:"Only the entered content, category, language, app version and platform are sent. Contact information is optional. Feedback is visible only to the developer; your draft stays in this browser until submitted.",
limits:"10–800 characters. Contact: up to 120. Website and app share a site-wide limit of 10 submissions per 24 hours. At least 60 seconds apart; up to 5 per network address per hour.",daily:"The site's 24-hour feedback limit is full. Retry in {seconds} seconds. Your draft is saved.",
category:"Category",bug:"Problem / bug",suggestion:"Suggestion",device:"Device / control compatibility",other:"Other",content:"Feedback content",contact:"Contact (optional)",submit:"Submit feedback",repository:"GitHub downloads ↗",
loading:"Loading release information…",releaseError:"Release information is unavailable. Please open the current GitHub release.",lengthError:"Please enter 10–800 characters; contact information must not exceed 120.",
sending:"Submitting…",success:"Feedback submitted. Receipt: ",network:"Could not confirm submission. Your draft is saved; please retry.",rate:"Please wait {seconds} seconds before submitting again.",invalid:"Please check the content length and remove control characters.",unavailable:"The feedback service is temporarily unavailable. Your draft is saved.",
notes:["Renamed to GetAmped Mobile. Downloads show only the current version and default to English.","Feedback is limited to 800 characters and 10 submissions site-wide per 24 hours, shared by the website and app.","Android is available; an iOS version is not yet available.","The Dragon Soul icon keeps its original pixels with a wider matching grey border for rounded icons."]},
"zh-CN":{
test:"ANDROID · 开发测试",intro:"在安卓上自由选择职业与装备，本地练习招式，或进入联机房间一起测试。",platforms:"Android 版现已提供 · iOS 版暂无",
download:"下载完整 APK",feedback:"问题反馈",jobs:"职业与装备",jobsText:"测试客户端内的职业、主装备与副装备均可选择使用，遵循原版职业与装备兼容规则。",
offline:"本地单人模式",offlineText:"本地练习招式、尝试装备；离线练习不依赖联机服务器。",
online:"联机测试房间",onlineText:"创建或加入房间进行联机对战，也可在服务器上单人练习。",
updates:"App 内包体更新",updatesText:"启动时自动检查更新。支持的版本下载精确增量，重建并核验完整 APK，再由安卓系统确认覆盖安装。",
server:"目前只有一个上海小型测试服",serverText:"目前仅有一个开发者自费运行的上海小服务器，用于开发和内测。容量有限，测试期间延迟和可用性可能变化。",
compatibility:"当前为开发测试版。部分依赖鼠标输入的装备仍需触屏兼容验证；可选择装备不代表每个招式均已在安卓上验证。",
current:"当前版本",changes:"本版更新",install:"安装与核验",installText:"需要 Android 8.0 或更高版本。首次安装请下载完整 APK，并允许浏览器安装应用。后续更新沿用同一签名并保留个人设置。",
oldVersions:"没有内置更新器的老版本需下载最新完整 APK。",history:"当前版本 ↗",help:"一起完善测试版",
feedbackText:"请描述发生了什么、如何复现，以及你期望的结果。也欢迎提出功能建议。",
privacy:"仅上传填写的内容、类别、语言、App 和系统版本。联系方式选填，反馈仅开发者可见；提交前草稿保存在本浏览器。",
limits:"正文 10–800 字，联系方式最多 120 字。网页和 App 共用全站每 24 小时 10 条额度；每次至少间隔 60 秒，每个网络地址每小时最多 5 条。",daily:"全站 24 小时反馈额度已满，请在 {seconds} 秒后重试。草稿已保留。",
category:"反馈类别",bug:"问题 / Bug",suggestion:"功能建议",device:"设备 / 操作兼容",other:"其他",content:"反馈内容",contact:"联系方式（选填）",submit:"提交反馈",repository:"GitHub 下载仓库 ↗",
loading:"正在读取版本信息…",releaseError:"暂时无法读取版本，请打开 GitHub 当前版本。",lengthError:"请填写 10–800 字的正文，联系方式最多 120 字。",
sending:"正在提交…",success:"反馈已提交，编号：",network:"网络连接失败，提交尚未确认。草稿已保留，可重试。",rate:"提交过于频繁，请在 {seconds} 秒后重试。",invalid:"请检查内容长度，避免输入控制字符。",unavailable:"反馈服务暂时不可用，草稿已保留，请稍后重试。",
notes:["名称改为 GetAmped Mobile，下载区只保留最新版，默认英文。","反馈限制为 800 字，全站每 24 小时最多 10 条，网页和 App 共用额度。","Android 版现已提供，iOS 版暂无。","龙魂原像素图标四周增加同色灰色背景，适配圆形和圆角图标。"]},
"zh-TW":{
test:"ANDROID · 開發測試",intro:"在安卓上自由選擇職業與裝備，本機練習招式，或進入連線房間一起測試。",platforms:"Android 版現已提供 · iOS 版暫無",
download:"下載完整 APK",feedback:"問題回饋",jobs:"職業與裝備",jobsText:"測試用戶端內的職業、主裝備與副裝備均可選擇使用，遵循原版職業與裝備相容規則。",
offline:"本機單人模式",offlineText:"在本機練習招式、嘗試裝備；離線練習不依賴連線伺服器。",
online:"連線測試房間",onlineText:"建立或加入房間進行連線對戰，也可在伺服器上單人練習。",
updates:"App 內安裝包更新",updatesText:"啟動時自動檢查更新。支援的版本下載精確增量，重建並驗證完整 APK，再由安卓系統確認覆蓋安裝。",
server:"目前只有一個上海小型測試服",serverText:"目前僅有一個開發者自費運行的上海小型伺服器，用於開發與內測。容量有限，測試期間延遲與可用性可能變動。",
compatibility:"目前為開發測試版。部分依賴滑鼠輸入的裝備仍需觸控相容性驗證；可選擇裝備不代表每個招式均已在安卓上驗證。",
current:"目前版本",changes:"本版更新",install:"安裝與驗證",installText:"需要 Android 8.0 或更新版本。首次安裝請下載完整 APK，並允許瀏覽器安裝應用程式。後續更新沿用同一簽章並保留個人設定。",
oldVersions:"沒有內建更新器的舊版需下載最新完整 APK。",history:"目前版本 ↗",help:"一起完善測試版",
feedbackText:"請描述發生了什麼、如何重現，以及你預期的結果。也歡迎提出功能建議。",
privacy:"僅上傳填寫的內容、類別、語言、App 與系統版本。聯絡方式選填，回饋僅開發者可見；送出前草稿儲存在此瀏覽器。",
limits:"正文 10–800 字，聯絡方式最多 120 字。網頁與 App 共用全站每 24 小時 10 則額度；最低 60 秒間隔，每個網路位址每小時最多 5 則。",daily:"全站 24 小時回饋額度已滿，請在 {seconds} 秒後重試。草稿已保留。",
category:"回饋類別",bug:"問題 / Bug",suggestion:"功能建議",device:"裝置 / 操作相容性",other:"其他",content:"回饋內容",contact:"聯絡方式（選填）",submit:"送出回饋",repository:"GitHub 下載倉庫 ↗",
loading:"正在讀取版本資訊…",releaseError:"暫時無法讀取版本，請開啟 GitHub 目前版本。",lengthError:"請填寫 10–800 字的正文，聯絡方式最多 120 字。",
sending:"正在送出…",success:"回饋已送出，編號：",network:"網路連線失敗，尚未確認送出。草稿已保留，可重試。",rate:"送出過於頻繁，請在 {seconds} 秒後重試。",invalid:"請檢查內容長度，避免輸入控制字元。",unavailable:"回饋服務暫時無法使用，草稿已保留，請稍後重試。",
notes:["名稱改為 GetAmped Mobile，下載區僅保留最新版，預設英文。","回饋限制為 800 字，全站每 24 小時最多 10 則，網頁與 App 共用額度。","Android 版現已提供，iOS 版暫無。","龍魂原像素圖示四周增加同色灰色背景，適配圓形與圓角圖示。"]},
ja:{
test:"ANDROID · 開発テスト",intro:"Android でスタイルとアクセサリを選び、オフライン練習やオンラインのテストルームで遊べます。",platforms:"Android 版：配信中 · iOS 版：未提供",
download:"APK をダウンロード",feedback:"フィードバック",jobs:"スタイルとアクセサリ",jobsText:"テストクライアントに含まれるすべてのスタイル、メイン・サブアクセサリを選択できます。元の装備適性ルールが適用されます。",
offline:"ローカルの一人用モード",offlineText:"端末内で技や装備を試せます。オフライン練習にはオンラインサーバーへの接続は不要です。",
online:"オンラインテストルーム",onlineText:"ルームを作成・参加して対戦したり、サーバー上で一人で練習したりできます。",
updates:"アプリ内更新",updatesText:"起動時に更新を確認します。対応するバージョンでは差分を取得し、完全な APK を再構築・検証してから Android の確認で更新します。",
server:"上海の小規模テストサーバー 1 台",serverText:"現在は開発者が自費で運営する上海の小規模サーバー 1 台のみです。開発・テスト用のため、容量、遅延、稼働状況には制限があります。",
compatibility:"開発テスト版です。マウス入力が必要な一部の装備はタッチ操作の検証が必要です。選択可能でも、すべての技を Android で検証済みとは限りません。",
current:"現在のバージョン",changes:"更新内容",install:"インストールと検証",installText:"Android 8.0 以降が必要です。初回は完全な APK をダウンロードし、ブラウザーからのインストールを許可してください。更新では署名と個人設定を維持します。",
oldVersions:"更新機能のない旧版には最新の完全 APK が必要です。",history:"現在のバージョン ↗",help:"テスト版の改善にご協力ください",
feedbackText:"発生した問題、再現手順、期待した結果をお知らせください。機能の提案も歓迎します。",
privacy:"入力内容、分類、言語、アプリと OS のバージョンのみ送信します。連絡先は任意です。内容は開発者のみ閲覧でき、送信前の下書きはこのブラウザーに保存されます。",
limits:"本文 10〜800 文字、連絡先は 120 文字以内。ウェブとアプリ合計でサイト全体 24 時間 10 件まで。最低 60 秒間隔、アドレスごとに 1 時間 5 件まで。",daily:"サイト全体の 24 時間の上限に達しました。{seconds} 秒後に再試行してください。下書きは保存されています。",
category:"分類",bug:"問題 / バグ",suggestion:"機能の提案",device:"端末 / 操作の互換性",other:"その他",content:"内容",contact:"連絡先（任意）",submit:"送信する",repository:"GitHub ダウンロード ↗",
loading:"バージョン情報を読み込み中…",releaseError:"情報を取得できません。GitHub の現在のバージョンをご利用ください。",lengthError:"本文は 10〜800 文字、連絡先は 120 文字以内で入力してください。",
sending:"送信中…",success:"送信しました。受付番号：",network:"送信を確認できません。下書きは保存されています。再試行してください。",rate:"{seconds} 秒後に再試行してください。",invalid:"文字数と制御文字を確認してください。",unavailable:"サービスを利用できません。下書きは保存されています。後で再試行してください。",
notes:["名称を GetAmped Mobile に変更。最新バージョンのみ表示し、初期言語は英語です。","本文は 800 文字まで、ウェブとアプリ合計でサイト全体 24 時間 10 件まで。","Android 版は配信中、iOS 版は未提供です。","龍魂の元のピクセルを保持し、丸いアイコン用に同色の灰色の余白を広げました。"]},
ko:{
test:"ANDROID · 개발 테스트",intro:"Android에서 직업과 액세서리를 선택하고, 오프라인 연습이나 온라인 테스트 방에서 플레이하세요.",platforms:"Android 버전: 제공 중 · iOS 버전: 아직 없음",
download:"APK 다운로드",feedback:"문제 제보",jobs:"직업과 액세서리",jobsText:"테스트 클라이언트에 포함된 모든 직업, 주 장비와 보조 장비를 선택할 수 있습니다. 원작의 직업별 장착 규칙이 적용됩니다.",
offline:"로컬 싱글 플레이",offlineText:"기기에서 기술과 장비를 연습하세요. 오프라인 연습에는 온라인 서버 연결이 필요하지 않습니다.",
online:"온라인 테스트 방",onlineText:"방을 만들거나 참여해 대전하거나, 서버에서 혼자 연습할 수 있습니다.",
updates:"앱 내 업데이트",updatesText:"앱 실행 시 업데이트를 확인합니다. 지원 버전은 정확한 차분을 받아 전체 APK를 재구성하고 검증한 후 Android의 확인을 거쳐 설치합니다.",
server:"상하이의 소규모 테스트 서버 1대",serverText:"현재 개발자가 자비로 운영하는 상하이의 소규모 개발·테스트 서버 1대만 있습니다. 용량이 제한되며 테스트 중 지연과 가용성이 달라질 수 있습니다.",
compatibility:"개발 테스트 버전입니다. 마우스 입력이 필요한 일부 장비는 터치 호환성 검증이 필요합니다. 선택 가능하다고 모든 기술의 Android 검증이 완료된 것은 아닙니다.",
current:"현재 버전",changes:"업데이트 내용",install:"설치 및 검증",installText:"Android 8.0 이상이 필요합니다. 처음에는 전체 APK를 다운로드하고 브라우저에서 앱 설치를 허용하세요. 업데이트는 동일한 서명과 개인 설정을 유지합니다.",
oldVersions:"업데이터가 없는 이전 버전은 최신 전체 APK가 필요합니다.",history:"현재 버전 ↗",help:"테스트 버전 개선에 참여하세요",
feedbackText:"발생한 문제, 재현 방법, 기대했던 결과를 알려 주세요. 기능 제안도 환영합니다.",
privacy:"입력 내용, 분류, 언어, 앱과 시스템 버전만 전송합니다. 연락처는 선택 사항입니다. 개발자만 제보를 볼 수 있으며 전송 전 초안은 이 브라우저에 저장됩니다.",
limits:"본문 10~800자, 연락처 최대 120자. 웹과 앱을 합쳐 사이트 전체 24시간 최대 10건입니다. 최소 60초 간격, 주소별 시간당 최대 5건입니다.",daily:"사이트 전체 24시간 제보 한도에 도달했습니다. {seconds}초 후 다시 시도하세요. 초안은 저장되어 있습니다.",
category:"분류",bug:"문제 / 버그",suggestion:"기능 제안",device:"기기 / 조작 호환성",other:"기타",content:"제보 내용",contact:"연락처 (선택)",submit:"제보 전송",repository:"GitHub 다운로드 ↗",
loading:"버전 정보를 불러오는 중…",releaseError:"버전 정보를 불러올 수 없습니다. GitHub 현재 버전을 이용하세요.",lengthError:"본문은 10~800자, 연락처는 120자 이내로 입력하세요.",
sending:"전송 중…",success:"전송 완료. 접수 번호: ",network:"전송을 확인하지 못했습니다. 초안이 저장되어 있으니 다시 시도하세요.",rate:"{seconds}초 후 다시 시도하세요.",invalid:"글자 수와 제어 문자를 확인하세요.",unavailable:"제보 서비스를 이용할 수 없습니다. 초안이 저장되어 있으니 나중에 다시 시도하세요.",
notes:["이름을 GetAmped Mobile로 변경했습니다. 최신 버전만 표시하고 기본 언어는 영어입니다.","본문 최대 800자, 웹과 앱을 합쳐 사이트 전체 24시간 최대 10건으로 제한합니다.","Android 버전은 제공 중이며 iOS 버전은 아직 없습니다.","용혼 원본 픽셀을 유지하고 둥근 아이콘에 맞게 같은 회색 여백을 넓혔습니다."]}
};
const updateNotes38={
 en:["Small delta downloads now show your queue position and start automatically when it is your turn.","Full APKs and updates estimated to take over five minutes open the GitHub download page.","Each release uploads and verifies its full APK on GitHub; only the latest public download remains.","The original signature, settings, resume support and full APK verification are retained."],
 "zh-CN":["小增量显示排队位置，轮到后自动下载，可取消排队。","完整包或预计下载超过五分钟时，提示前往 GitHub 下载。","每次发布核验 GitHub 完整 APK，网页和 GitHub 只保留最新公开下载。","保留原签名、个人设置、断点续传与完整包核验。"],
 "zh-TW":["小增量顯示排隊位置，輪到後自動下載，可取消排隊。","完整包或預計下載超過五分鐘時，提示前往 GitHub 下載。","每次發布驗證 GitHub 完整 APK，網頁和 GitHub 只保留最新公開下載。","保留原簽章、個人設定、續傳與完整包驗證。"],
 ja:["小さな差分のダウンロードは待ち順を表示し、順番が来ると自動的に開始します。","完全 APK または推定 5 分を超える更新は GitHub のダウンロードページを開きます。","毎回 GitHub 上の完全 APK を検証し、最新の公開ダウンロードのみ残します。","署名、個人設定、ダウンロード再開と完全 APK の検証を維持します。"],
 ko:["작은 차분 다운로드는 대기 순서를 표시하고 차례가 되면 자동으로 시작합니다.","전체 APK 또는 예상 다운로드가 5분을 넘는 업데이트는 GitHub 다운로드 페이지를 엽니다.","매번 GitHub의 전체 APK를 검증하고 최신 공개 다운로드만 유지합니다.","원래 서명, 개인 설정, 이어받기와 전체 APK 검증을 유지합니다."]
};
words.en.updatesText="Startup checks for updates. Small exact deltas show a queue position and rebuild the verified APK. Full APKs or downloads estimated over five minutes use GitHub.";
words["zh-CN"].updatesText="启动时检查更新。小增量显示排队位置并重建核验完整 APK；完整包或预计超过五分钟的下载使用 GitHub。";
words["zh-TW"].updatesText="啟動時檢查更新。小增量顯示排隊位置並重建驗證完整 APK；完整包或預計超過五分鐘的下載使用 GitHub。";
words.ja.updatesText="起動時に更新を確認します。小さな差分は待ち順を表示し、完全 APK を再構築・検証します。完全 APK と推定 5 分を超えるダウンロードは GitHub を使用します。";
words.ko.updatesText="실행 시 업데이트를 확인합니다. 작은 차분은 대기 순서를 표시하고 전체 APK를 재구성·검증합니다. 전체 APK와 예상 5분을 넘는 다운로드는 GitHub를 사용합니다.";
const $=id=>document.getElementById(id);
function read(key,fallback){try{return JSON.parse(localStorage.getItem(key))??fallback}catch{return fallback}}
function save(key,value){try{localStorage.setItem(key,JSON.stringify(value))}catch{}}
let language=read("ga-language-choice","en");if(!words[language])language="en";
let release=null,posting=false,lastStatus=null;
const draft=read("ga-feedback-draft",{});$("message").value=typeof draft.message==="string"?draft.message:"";
$("contact").value=typeof draft.contact==="string"?draft.contact:"";if(["bug","suggestion","compatibility","other"].includes(draft.category))$("category").value=draft.category;
function t(key){return words[language][key]||words.en[key]||key}
function status(key,detail="",error=false){lastStatus={key,detail,error};$("feedbackStatus").textContent=t(key).replace("{seconds}",detail)+(key==="success"?detail:"");$("feedbackStatus").className=error?"error":"success"}
function renderRelease(){
 $("releaseLine").textContent=release?`v${release.versionName} · ${(release.bytes/1048576).toFixed(1)} MiB · Android 8.0+`:t("loading");
 $("releaseTitle").textContent=release?`v${release.versionName}`:"—";
 $("download").setAttribute("aria-disabled",!release);
 if(!release)return;
 $("download").href=release.url;$("hash").textContent=release.sha256;
 $("releaseLink").href=`https://github.com/zuoqin123222/GetAmped-Mobile/releases/tag/v${release.versionName}`;
 $("changes").replaceChildren();
 const notes=release.translations?.[language]||((release.versionName==="0.38")?updateNotes38[language]:((release.versionName==="0.37")?t("notes"):release.changes.split("\n").filter(Boolean)));
 for(const note of notes){const li=document.createElement("li");li.textContent=note;$("changes").append(li)}
}
function setLanguage(value,persist=false){language=value;if(persist)save("ga-language-choice",language);document.documentElement.lang=language;$("language").value=language;
 document.querySelectorAll("[data-i18n]").forEach(element=>element.textContent=t(element.dataset.i18n));
 renderRelease();if(lastStatus)status(lastStatus.key,lastStatus.detail,lastStatus.error)}
$("language").onchange=event=>setLanguage(event.target.value,true);
function keepDraft(limitInput=false){
 if(limitInput)for(const [id,max] of [["message",800],["contact",120]]){const field=$(id);if([...field.value].length>max)field.value=[...field.value].slice(0,max).join("")}
 $("counter").textContent=`${[...$("message").value].length} / 800`;
 save("ga-feedback-draft",{message:$("message").value,contact:$("contact").value,category:$("category").value});
}
for(const id of ["message","contact","category"])$(id).addEventListener("input",keepDraft);
$("feedbackForm").addEventListener("submit",async event=>{
 event.preventDefault();if(posting)return;
 const message=$("message").value.trim(),contact=$("contact").value.trim();
 if([...message].length<10||[...message].length>800||[...contact].length>120){status("lengthError","",true);$("message").focus();return}
 const payload={message,contact,category:$("category").value,source:"website",locale:language,appVersion:release?.versionName||"unknown",platform:"Web browser",website:$("website").value};
 const signature=JSON.stringify(payload),previous=read("ga-feedback-request",{});
 const requestId=previous.signature===signature&&typeof previous.requestId==="string"?previous.requestId:crypto.randomUUID();
 save("ga-feedback-request",{signature,requestId});payload.requestId=requestId;
 posting=true;for(const id of ["submit","message","contact","category","language"])$(id).disabled=true;status("sending");
 const controller=new AbortController(),timer=setTimeout(()=>controller.abort(),15000);
 try{
  const response=await fetch("https://47.117.73.22/feedback/v1",{method:"POST",headers:{"Content-Type":"application/json"},
   body:JSON.stringify(payload),credentials:"omit",redirect:"error",signal:controller.signal});
  const data=await response.json();
  if(response.ok&&data.ok&&/^[0-9a-f-]{36}$/.test(data.feedbackId)){
   $("message").value="";$("contact").value="";keepDraft();save("ga-feedback-request",{});status("success",data.feedbackId);
  }else if(response.status===429)status(data.error==="daily_limit"?"daily":"rate",String(Math.max(1,data.retryAfter||60)),true);
  else if([400,413,415].includes(response.status))status("invalid","",true);
  else status("unavailable","",true);
 }catch{status("network","",true)}
 finally{clearTimeout(timer);posting=false;for(const id of ["submit","message","contact","category","language"])$(id).disabled=false}
});
keepDraft();setLanguage(language);
fetch("./release.json",{cache:"no-cache"}).then(response=>{if(!response.ok)throw Error("release");return response.json()}).then(data=>{
 if(!/^\d+(?:\.\d+)+$/.test(data.versionName)||!/^[a-f0-9]{64}$/.test(data.sha256)||!Number.isSafeInteger(data.bytes)||data.bytes<1||
    data.url!==`https://47.117.73.22/android/releases/OriginalTraining-v${data.versionName}.apk`)throw Error("release identity");
 release=data;renderRelease();
}).catch(()=>{$("releaseLine").textContent=t("releaseError")});
