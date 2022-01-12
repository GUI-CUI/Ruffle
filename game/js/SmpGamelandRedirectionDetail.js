var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

(function() {
  // AndroidスマホアプリUserAgent(日本語)
  var JP_ANDROID_APP = "/JP/com.nifty.kids.gameland.android";
  // AndroidスマホアプリUserAgent(英語)
  var EN_ANDROID_APP = "/EN/com.nifty.kids.gameland.android";

  var isJpAndroidApp = function(ua) {
    if (ua.indexOf(JP_ANDROID_APP) !== -1) {
      return true;
    }
  };

  var isEnAndroidApp = function(ua) {
    if (ua.indexOf(EN_ANDROID_APP) !== -1) {
      return true;
    }
  };

  var checkUserAgent = function() {
    var A = navigator.userAgent;
    if (isJpAndroidApp(A)) {
      window.location.replace(
        window.location.href.replace("/cs/game/detail/", "/cs/game/smp-detail/")
      );
      return;
    }
    if (isEnAndroidApp(A)) {
      window.location.replace(
        window.location.href.replace(
          "/cs/game/detail/",
          "/cs/game/smp-detail-en/"
        )
      );
      return;
    }
  };

  // UA判定＆スマホサイトへのリダイレクト実行
  checkUserAgent();
})();


}
