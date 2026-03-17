let vLN1 = 1;
let vA = ["https://api.azgames.io/", "https://api.1games.io/"];
let v = vA[vLN1 - 1];
config.gdHost = f5();
window.GMDEBUG = {};
window.GMDEBUG["LOADED SDK"] = Date.now();
window.GMSOFT_OPTIONS = config;
window.GMSOFT_OPTIONS.enableAds = false;
window.GMSOFT_OPTIONS.debug = false;
window.GMSOFT_OPTIONS.pub_id = "";
window.GMSOFT_OPTIONS.unlockTimer = 60;
window.GMSOFT_OPTIONS.timeShowInter = 60;
window.GMSOFT_OPTIONS.domainHost = window.location.hostname;
window.GMSOFT_OPTIONS.sourceHtml = "RHhrUUVRZGJid2xHVUFnV0IwY01HeE1FQ2doS0NCdE9MRTlESGdJZUJ3WUxGUWNCRERJU1ZGb0xNdz09";
window.GMSOFT_OPTIONS.sdkversion = 5;
window.GMSOFT_OPTIONS.adsDebug = true;
window.GMSOFT_OPTIONS.game = null;
window.GMSOFT_OPTIONS.promotion = null;
window.GMSOFT_OPTIONS.allow_play = "yes";
let v2 = window.GMSOFT_OPTIONS.gameId;
function f() {
  let v3 = new Date();
  let v4 = v3.getTime() + v3.getTimezoneOffset() * 60000;
  let v5 = window.location.hostname;
  window.GMSOFT_OPTIONS.domainHost = window.location.hostname;
  let v6 = v + "ajax/infov3";
  let vLSNo = "no";
  if (f3()) {
    if (document.referrer) {
      let v7 = document.referrer;
      v5 = v7.match(/:\/\/(.[^/]+)/)[1];
    }
    vLSNo = "yes";
  }
  let v8 = config.gdHost ? 1 : 0;
  let v9 = "d=" + v5 + "&gid=" + v2 + "&hn=" + window.location.hostname + "&ts=" + v4 + "&ie=" + vLSNo + "&gdh=" + v8;
  let vBtoa = btoa(v9);
  let v10 = v6 + "?params=" + vBtoa;
  let vHttpGet = f4(v10);
  const v11 = JSON.parse(vHttpGet);
  window.GMDEBUG.LOADED_SDK_SUCCESS = Date.now();
  window.GMSOFT_MSG = vHttpGet;
  window.GMDEBUG.site_info = v11;
  if (typeof v11.enable_ads !== "undefined" && v11.enable_ads !== "") {
    window.GMSOFT_OPTIONS.enableAds = v11.enable_ads == "yes" ? true : false;
  }
  if (typeof v11.hostindex !== "undefined" && v11.hostindex !== "") {
    window.GMSOFT_OPTIONS.hostindex = v11.hostindex;
  }
  if (typeof v11.adsDebug !== "undefined" && v11.adsDebug !== "") {
    window.GMSOFT_OPTIONS.adsDebug = v11.adsDebug == "yes" ? true : false;
  }
  try {
    let v12 = new URLSearchParams(window.location.search);
    if (typeof v11.debug_mode !== "undefined" && v11.debug_mode !== "") {
      if (v12.has("d") || v11.debug_mode == "yes") {
        window.GMSOFT_OPTIONS.enableDebug = "yes";
      } else {
        window.GMSOFT_OPTIONS.enableDebug = "no";
        console.log = function () {};
        console.error = function () {};
        console.warn = function () {};
        alert = function () {};
      }
    }
    if (window.GMSOFT_OPTIONS.enablePromotion && typeof v11.promotion !== "undefined") {
      window.GMSOFT_OPTIONS.promotion = v11.promotion;
    }
  } catch (e) {}
  if (typeof v11.unlock_time !== "undefined" && v11.unlock_timer >= 0) {
    window.GMSOFT_OPTIONS.unlockTimer = v11.unlock_timer;
  }
  if (typeof v11.enablePreroll !== "undefined") {
    window.GMSOFT_OPTIONS.enablePreroll = v11.enablePreroll;
  }
  if (typeof v11.pub_id !== "undefined" && v11.pub_id !== "") {
    window.GMSOFT_OPTIONS.pub_id = v11.pub_id;
  }
  if (config.gdHost && v11.sdkType == "gd") {
    window.GMSOFT_OPTIONS.pub_id = window.GMSOFT_OPTIONS.gdGameId;
  }
  if (typeof v11.timeShowInter !== "undefined" && v11.timeShowInter >= 0) {
    window.GMSOFT_OPTIONS.timeShowInter = v11.timeShowInter;
  }
  if (typeof v11.timeShowReward !== "undefined" && v11.timeShowReward >= 0) {
    window.GMSOFT_OPTIONS.timeShowReward = v11.timeShowReward;
  }
  if (typeof v11.game !== "undefined") {
    window.GMSOFT_OPTIONS.game = v11.game;
  }
  if (typeof v11.sdkType !== "undefined" && v11.pub_id !== "") {
    window.GMSOFT_OPTIONS.sdkType = v11.sdkType;
  }
  if (v11.allow_embed) {
    window.GMSOFT_OPTIONS.allow_embed = v11.allow_embed;
  }
  if (v11.allow_host) {
    window.GMSOFT_OPTIONS.allow_host = v11.allow_host;
  }
  window.GMSOFT_OPTIONS.allow_play = "no";
  if (window.GMSOFT_OPTIONS.allow_host == "yes" && vLSNo != "yes") {
    window.GMSOFT_OPTIONS.allow_play = "yes";
  }
  if (window.GMSOFT_OPTIONS.allow_embed == "yes" && vLSNo == "yes") {
    window.GMSOFT_OPTIONS.allow_play = "yes";
  }
  if (v11.game) {
    let v13 = v11.game;
    window.GMSOFT_OPTIONS.game = v13;
    let v14 = "<style>#theGameBox,body,html{position:absolute;top:0;left:0;width:100%;height:100%;padding:0;margin:0}.gamePlayerContentSafeSize{width:1598px;height:841px;max-width:100%;position:relative}@-webkit-keyframes gamePlayerMoveRight{to{-webkit-transform:translateX(20px)}}@keyframes gamePlayerMoveRight{to{transform:translateX(20px)}}@-webkit-keyframes gamePlayerMoveLeft{to{-webkit-transform:translateX(-20px)}}@keyframes gamePlayerMoveLeft{to{transform:translateX(-20px)}}.gamePlayerPageLoader svg{z-index:-1}.gamePlayerLoadingAnim{width:100%;height:100%;display:flex;align-items:center;justify-content:center;position:absolute;top:0;left:0;z-index:100000000;background:rgba(0,0,0,.7)}.gamePlayerLoadingAnim div{box-sizing:border-box;display:block;position:absolute;width:64px;height:64px;margin:4px;animation:gamePlayerLoadingAnim 1s infinite;border-style:solid;border-color:#fff transparent transparent transparent;border-width:3px;border-radius:50%}.gamePlayerLoadingAnim div:nth-child(1){animation-delay:-.9s}.gamePlayerLoadingAnim div:nth-child(2){animation-delay:-.8s}.gamePlayerLoadingAnim div:nth-child(3){animation-delay:-.1s}@keyframes gamePlayerLoadingAnim{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}.gamePlayerLoadingAnim span{font-family:roboto,sans-serif;width:100%;text-align:center;color:#fff;padding-top:150px;position:absolute;z-index:99999999999999999999}.gamePlayerTable>div{display:table-cell;vertical-align:middle;padding:10px;text-align:left;width:auto;background:#fff;color:#272727}.gamePlayerTable>div:first-child{width:1%;white-space:nowrap;font-size:22px;font-weight:600;vertical-align:top}[data-gamePlayerplayer] div video{width:100%!important;height:100%!important}[data-gamePlayerplayer] div lima-video{width:100%!important;height:100%!important}.gamePlayerContent video{left:0;top:0}.gamePlayerContent{top:0;left:0}.gamePlayerHidden{display:none!important;visibility:hidden}.gamePlayerCenterTable>div{display:table-cell;text-align:left;vertical-align:middle;font-size:22px}.gamePlayerCenterTable>div:nth-child(2){padding:10px 30px;text-align:center;display:inline-block}#gamePlayermw1jclueedb9wbbpdztq{width:100%;height:100%}#gamePlayermw1jclueedb9wbbpdztq{background-color:#000;overflow:hidden}#gamePlayermw1jclueedb9wbbpdztq{padding:inherit;box-sizing:border-box;overflow:hidden;position:relative;z-index:9999}body>#gamePlayermw1jclueedb9wbbpdztq{position:fixed!important}#gamePlayermw1jclueedb9wbbpdztq.gamePlayerMidroll{background:rgba(0,0,0,1)}#gamePlayermw1jclueedb9wbbpdztq>div:first-child{z-index:2147483647}#gamePlayermw1jclueedb9wbbpdztq.gamePlayerNoClick>div:first-child{z-index:2147483646}#gamePlayermw1jclueedb9wbbpdztq:not(.gamePlayerAdLoaded)>div:not([class]){pointer-events:none}.gamePlayerContent{position:relative}#gamePlayermw1jclueedb9wbbpdztq .gamePlayerLoadingContainer>div{display:none}#gamePlayermw1jclueedb9wbbpdztq .gamePlayerLoadingContainer>div{width:25px;height:25px;position:absolute;top:50%;left:50%;margin-left:-15px;margin-top:-15px;animation:circle .75s linear infinite;border-width:2px;border-style:solid;border-color:rgba(252,12,12,0) #fff rgba(201,62,201,0) #fff;border-image:initial;border-radius:100%;-webkit-animation:spin 1s linear infinite;animation:spin 1s linear infinite;transform-origin:center!important}@-webkit-keyframes spin{0%{-webkit-transform:rotate(0)}100%{-webkit-transform:rotate(360deg)}}@keyframes spin{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}@keyframes gamePlayerTicTac{0%{transform:scale(1,1)}50%{transform:scale(1.2,1.2)}100%{transform:scale(1,1)}}.gamePlayerInstallFlash>div{display:table-cell;text-align:center;vertical-align:middle;width:100%;height:100%;color:#fff;font-family:\"open sans\";font-size:18px;letter-spacing:-1px}.gamePlayerInstallFlash>div>a{display:block;text-align:center;color:#ff0;padding:10px}.gamePlayerContextMenu li{border-bottom:1px solid rgba(255,255,255,.8);padding:5px;color:rgba(255,555,255,.6);list-style-type:none;padding:10px 0;font-family:roboto;font-size:11px;text-align:left}.gamePlayerContextMenu li a{color:rgba(255,555,255,.6);font-family:roboto;font-size:11px;text-align:left;text-decoration:none}.gamePlayerContextMenu li a:hover{text-decoration:underline}.gamePlayerContextMenu li:last-child{border-bottom:none}.gamePlayerContextMenu li span{cursor:pointer;font-size:12px;display:block;text-align:left;font-weight:400;font-family:roboto}#gamePlayermw1jclueedb9wbbpdztq iframe:first-of-type{display:block!important;background:0 0!important;border:none!important}#gamePlayermw1jclueedb9wbbpdztq .gamePlayerFlashSplash embed{transform:scale(100)}.loadingButton span{opacity:0;transition:.2s}@keyframes bounceHorizontal{0%{left:-4px}100%{left:4px}}@keyframes openChest{from{background-position-x:0}to{background-position-x:-294px}}@keyframes popIn{0%{-webkit-transform:scale(0);transform:scale(0);opacity:1}70%{-webkit-transform:scale(1.2);transform:scale(1.2);opacity:1}100%{-webkit-transform:scale(1);transform:scale(1);opacity:1}}:root{--min5050:50px;--min202:20px;--min203:20px;--min405:40px;--min255:25px;--min143:14px;--min22040:150px;--min15015:150px;--min505:50px;--min364:36px;--min202:20px}@supports (padding:min(12px,13vw)){:root{--min5050:min(50px, 5vw);--min202:min(20px, 2vw);--min405:40px;--min203:min(20px, 3vh);--min405:min(40px, 5vw);--min255:min(25px, 5vw);--min143:min(14px, 3vw);--min22040:min(220px, 40vw);--min15015:min(150px, 15vw);--min505:min(50px, 5vw);--min364:min(36px, 4vh);--min202:min(20px, 2vw)}}.gamePlayerSplash *{box-sizing:border-box;font-family:Roboto,sans-serif!important;font-weight:300}.gamePlayerSplash{display:block;padding:var(--min5050);overflow:hidden;width:100%;height:100%;box-sizing:border-box;position:relative;background-color:#000;outline:0!important;transition:opacity .4s;background-repeat:no-repeat;background-position:center}.gamePlayerSplash .gamePlayerBg{display:block;width:100%;height:100%;position:absolute;top:0;left:0;z-index:1}.gamePlayerSplash .gamePlayerBg .gamePlayerBgImage{position:absolute;top:0;left:0;width:100%;height:100%;filter:blur(45px);background-size:cover;transform:scale(1.3)}.gamePlayerSplash .gamePlayerSplashContent{background:rgba(255,255,255,.4);border-radius:50px;display:block;width:100%;height:100%;z-index:10;box-shadow:0 0 0 0 #fff,10px 20px 21px rgba(0,0,0,.4);position:relative;transition:box-shadow .2s}.gamePlayerSplash .gamePlayerSplashContent:hover{box-shadow:-2px -2px 10px 1px #fff,10px 20px 21px rgba(0,0,0,.4)}.gamePlayerSplashContent .gamePlayerCenterContent{display:grid;width:100%;height:100%;grid-template-columns:2fr 1fr;box-sizing:border-box;place-items:center;padding:var(--min202)}.gamePlayerSplashContent .gamePlayerCenterContent>div{text-align:center;padding:var(--min202);width:100%}.gamePlayerSplashContent .gamePlayerCenterContent .gamePlayerPrerollInfo{display:grid;width:100%;text-align:left;row-gap:20px}.gamePlayerSplashContent .gamePlayerCenterContent .gamePlayerButtons{display:inline-block;text-align:center;display:grid;row-gap:20px;width:max-content;padding:20px}.gamePlayerSplashContent .gamePlayerCenterContent .gamePlayerPrerollCTA{transition:.2s;position:relative;cursor:pointer}.gamePlayerSplashContent .gamePlayerCenterContent .gamePlayerPrerollCTA:hover{transform:scale(1.1)}.gamePlayerSplashContent .gamePlayerCenterContent .gamePlayerPrerollCTA span{display:grid;grid-template-columns:auto auto;grid-gap:10px;background-color:#1c1c1c;color:#fff;border-radius:100px;padding:var(--min203) var(--min405);font-weight:400;font-size:var(--min255);box-shadow:0 0 20px rgba(0,0,0,.8);align-items:center;cursor:pointer;transition:.3s;text-transform:uppercase;user-select:none;pointer-events:none}.gamePlayerSplashContent .gamePlayerCenterContent .gamePlayerPrerollCTA:hover span{background-color:#91000a}.gamePlayerSplashContent .gamePlayerCenterContent .gamePlayerPrerollCTA span:before{display:block;content:\" \";background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAPCAYAAADUFP50AAABKklEQVQokY2TvyvEcRjHX75dDFIGFhmuFFaLC7NFERkNBvInuCubhdtsBsUimVx28iPJarHSme4kAyU/6qVPPur6du7uqc+zPJ/3834/7+fzQR1Un9RzNavSykmAXaAMVIB7YAvopVmoFXU9skypD+qbuqZm/mMPqaxupAp59V2tqrNqkgYmUVBbSlgR6Ab2gBJwBeRqLyQNJvkA8kBPnP8GOAGyzYB/8QzMARNAF3AGTLcC7I+s11HuKXDQCBi6bwMXcd5O4BCYAVbrAYNRi8Aj0AesAMvAKzAcZIaGmTrAfWASWIim7ESp89Hh34h73KzZ0ai6pJbUF7gamePlayerdqT3GBjbga/YZwQoAGPAETAEVOs6oN6ql2pR/VaP1YFmDz2kcfVTvVNzLf0O5QcZKy4YNKUs+wAAAABJRU5ErkJggg==);background-repeat:no-repeat;background-position:center;width:15px;height:15px}.gamePlayerSplashContent .gamePlayerCenterContent .gamePlayerPrerollCTA:hover span:before{animation:gamePlayerKnock .3s infinite}@keyframes gamePlayerKnock{0%{transform:translateX(0)}100%{transform:translateX(-10px)}}.gamePlayerSplashContent .gamePlayerCenterContent .gamePlayerPrerollWb span{display:inline-block;border:2px solid #1c1c1c;color:#1c1c1c;border-radius:100px;padding:15px 20px;text-transform:uppercase;font-weight:500;font-size:var(--min143);box-shadow:0 0 20px rgba(0,0,0,.8);cursor:pointer;user-select:none}.gamePlayerThumb{display:block;position:relative;border-radius:50%;overflow:hidden;box-shadow:0 5px 20px rgba(0,0,0,.4);width:var(--min22040);height:var(--min22040);transition:.3s;cursor:pointer;margin:auto}.gamePlayerThumb:hover{transform:scale(1.1);box-shadow:-2px -2px 10px 1px #fff,0 5px 40px rgba(0,0,0,.4)}.gamePlayerThumb>div{position:absolute;border-radius:50%;top:0;left:0;width:100%;height:100%;background-size:cover;background-repeat:no-repeat;background-position:center}.gamePlayerTitle{font-weight:300;font-size:var(--min364);user-select:none;color:#1c1c1c;line-height:normal}.gamePlayerTitle:after{content:\"\"!important}.gamePlayerPrerollDescription{font-weight:400;font-size:15px;user-select:none;color:#1c1c1c}.gamePlayerSplash{opacity:0}.gamePlayerPrerollCTA{position:relative}.gamePlayerSplash{opacity:1}.gamePlayerBg .gamePlayerBgImage{background-image:url(" + v13.image + ")!important}.gamePlayerThumb>div{background-image:url(" + v13.image + ")}@media only screen and (max-width:480px){.gamePlayerThumb{display:none}}</style> <div class=\"gamePlayerContent gamePlayerContentSafeSize\"id=theGameBox><div id=gamePlayermw1jclueedb9wbbpdztq data-gameplayerplayer=true><div class=\"gamePlayerSplash gamePlayerSplashPreroll\"><div class=gamePlayerBg><div class=gamePlayerBgImage></div></div><div class=gamePlayerSplashContent><div class=gamePlayerCenterContent><div><div class=gamePlayerPrerollInfo><div class=gamePlayerButtons><div class=gamePlayerPrerollCTA onclick=\"window.open('" + v13.redirect_url + "', '_blank')\" id=btn_playgame><span>Play game</span></div></div><div class=gamePlayerTitle>" + v13.name + "</div><div class=gamePlayerPrerollDescription>" + v13.description + "</div></div></div><div><div class=gamePlayerThumb><div></div></div></div></div></div></div></div></div>";
    if (f3()) {
      console.log("NEU GAME DUOC EMBED");
      const v15 = new Date(new Date().toLocaleString("en", {
        timeZone: "Asia/Ho_Chi_Minh"
      }));
      let v16 = new Date(v15.getFullYear(), v15.getMonth(), v15.getDate(), v15.getHours(), v15.getMinutes(), v15.getSeconds());
      let v17 = new Date(v15.getFullYear(), v15.getMonth(), v15.getDate(), 6, 0, 0);
      let v18 = new Date(v15.getFullYear(), v15.getMonth(), v15.getDate(), 20, 0, 0);
      if (v17.getTime() <= v16.getTime() && v16.getTime() <= v18.getTime()) {}
      if (v11.allow_embed != "yes") {
        let v19 = window.GMSOFT_OPTIONS.unlockTimer * 1000;
        setTimeout(function () {
          document.body.innerHTML = v14;
        }, v19);
      }
    } else {
      console.log("site_info_parse.allow_host ==>" + v11.allow_host);
      if (v11.allow_host != "yes") {
        console.log("site_info_parse.allo 22");
        let v20 = window.GMSOFT_OPTIONS.unlockTimer * 1000;
        setTimeout(function () {
          document.body.innerHTML = v14;
        }, v20);
      }
    }
  }
  document.dispatchEvent(new CustomEvent("gmsoftSdkReady"));
}
f();
if (window.GMSOFT_OPTIONS.enableAds == true) {
  if (window.GMSOFT_OPTIONS.sdkType == "h5") {
    window.GMDEBUG.ADS = "H5 SDK integration.";
    var v21 = document.createElement("script");
    v21.setAttribute("crossorigin", "anonymous");
    if (typeof window.GMSOFT_OPTIONS.adsDebug !== "undefined" && window.GMSOFT_OPTIONS.adsDebug == true) {
      v21.setAttribute("data-adbreak-test", "on");
    }
    v21.setAttribute("data-ad-frequency-hint", "30s");
    if (typeof v2 !== "undefined" && v2 != "") {
      v21.setAttribute("data-ad-channel", v2);
    }
    v21.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=" + window.GMSOFT_OPTIONS.pub_id;
    document.head.appendChild(v21);
    this._showRewardAdFn = null;
    window.adsbygoogle = window.adsbygoogle || [];
    var vO = {};
    vO.adBreak = window.adConfig = function (p) {
      adsbygoogle.push(p);
    };
    vO.ready = false;
    function f2() {
      vO.ready = true;
    }
    adConfig({
      preloadAdBreaks: "on",
      onReady: f2
    });
    var v22 = false;
    vO.onBeforeAd = function () {
      v22 = true;
    };
    vO.onAfterAd = function () {
      v22 = false;
    };
    window.afg = vO;
  } else if (window.GMSOFT_OPTIONS.sdkType == "wgplayer") {
    window.GMDEBUG.ADS = "wgplayer";
    var v23 = document.createElement("script");
    v23.addEventListener("load", function (p2) {
      var v24 = document.createElement("script");
      v24.addEventListener("load", function (p3) {
        console.log("WGSDK: Development resources loaded.");
      }.bind(this));
      document.getElementsByTagName("head")[0].appendChild(v24);
      v24.src = "https://afg.wgplayer.com/1games.io/js/wnlvUzqr01_UmhONvHscTg/88126564825/wgAds.js";
    }.bind(this));
    document.getElementsByTagName("head")[0].appendChild(v23);
    v23.src = "https://afg.wgplayer.com/1games.io/wgAds.iframe.conf.js";
    this._showRewardAdFn = null;
  }
}
function f3() {
  try {
    if (window.top && window == window.top) {
      return false;
    }
    if (window.top.location.hostname == window.location.hostname) {
      return false;
    }
  } catch (e2) {
    return true;
  }
  return true;
}
var v25 = window.location.hostname;
function f4(p4) {
  var v26 = new XMLHttpRequest();
  let vLS = "";
  v26.open("GET", p4, false);
  v26.send(vLS);
  return v26.responseText;
}
function f5() {
  let v27 = window.location.hostname.split(".");
  let v28 = v27.slice(-2).join(".");
  return v28 == "gamedistribution.com";
}