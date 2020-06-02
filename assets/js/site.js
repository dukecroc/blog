//
//                                  ,,           ,,        ,,
//   `7MMF'   `7MF'                 db          *MM      `7MM
//     `MA     ,V                                MM        MM
//      VM:   ,V ,6"Yb.  `7Mb,od8 `7MM   ,6"Yb.  MM,dMMb.  MM  .gP"Ya  ,pP"Ybd
//       MM.  M'8)   MM    MM' "'   MM  8)   MM  MM    `Mb MM ,M'   Yb 8I   `"
//       `MM A'  ,pm9MM    MM       MM   ,pm9MM  MM     M8 MM 8M"""""" `YMMMa.
//        :MM;  8M   MM    MM       MM  8M   MM  MM.   ,M9 MM YM.    , L.   I8
//         VF   `Moo9^Yo..JMML.   .JMML.`Moo9^Yo.P^YbmdP'.JMML.`Mbmmd' M9mmmP'
//
//




//
//                                                    ,,
//   `7MM"""YMM                                mm     db
//     MM    `7                                MM
//     MM   d `7MM  `7MM  `7MMpMMMb.  ,p6"bo mmMMmm `7MM  ,pW"Wq.`7MMpMMMb.
//     MM""MM   MM    MM    MM    MM 6M'  OO   MM     MM 6W'   `Wb MM    MM
//     MM   Y   MM    MM    MM    MM 8M        MM     MM 8M     M8 MM    MM
//     MM       MM    MM    MM    MM YM.    ,  MM     MM YA.   ,A9 MM    MM
//   .JMML.     `Mbod"YML..JMML  JMML.YMbmd'   `Mbmo.JMML.`Ybmd9'.JMML  JMML.
//
//




//
//                         ,,                    ,,
//   `7MMF'     A     `7MF'db                  `7MM
//     `MA     ,MA     ,V                        MM
//      VM:   ,VVM:   ,V `7MM  `7MMpMMMb.   ,M""bMM  ,pW"Wq.`7M'    ,A    `MF'
//       MM.  M' MM.  M'   MM    MM    MM ,AP    MM 6W'   `Wb VA   ,VAA   ,V
//       `MM A'  `MM A'    MM    MM    MM 8MI    MM 8M     M8  VA ,V  VA ,V
//        :MM;    :MM;     MM    MM    MM `Mb    MM YA.   ,A9   VVV    VVV
//         VF      VF    .JMML..JMML  JMML.`Wbmd"MML.`Ybmd9'     W      W
//
//
//
//                              ,,                          ,,
//     .g8""8q.               `7MM                        `7MM
//   .dP'    `YM.               MM                          MM
//   dM'      `MM `7MMpMMMb.    MM  ,pW"Wq.   ,6"Yb.   ,M""bMM
//   MM        MM   MM    MM    MM 6W'   `Wb 8)   MM ,AP    MM
//   MM.      ,MP   MM    MM    MM 8M     M8  ,pm9MM 8MI    MM
//   `Mb.    ,dP'   MM    MM    MM YA.   ,A9 8M   MM `Mb    MM
//     `"bmmd"'   .JMML  JMML..JMML.`Ybmd9'  `Moo9^Yo.`Wbmd"MML.
//
//
window.onload = function () {

  //     ______  __    __       _______.___________.  ______   .___  ___.
  //    /      ||  |  |  |     /       |           | /  __  \  |   \/   |
  //   |  ,----'|  |  |  |    |   (----`---|  |----`|  |  |  | |  \  /  |
  //   |  |     |  |  |  |     \   \       |  |     |  |  |  | |  |\/|  |
  //   |  `----.|  `--'  | .----)   |      |  |     |  `--'  | |  |  |  |
  //    \______| \______/  |_______/       |__|      \______/  |__|  |__|
  //

  // Detect Edge(chromium) by userAgent
  var browser = (function (agent) {
    switch (true) {
      case agent.indexOf("edge") > -1: return "edge";
      case agent.indexOf("edg") > -1: return "edge-chromium";
      case agent.indexOf("opr") > -1 && !!window.opr: return "opera";
      case agent.indexOf("chrome") > -1 && !!window.chrome: return "chrome";
      case agent.indexOf("trident") > -1: return "ie";
      case agent.indexOf("firefox") > -1: return "firefox";
      case agent.indexOf("safari") > -1: return "safari";
      default: return "";
    }
  })(window.navigator.userAgent.toLowerCase());
  $('html').addClass(' ' + browser);




  // [Custom jQuery] Trigger CSS Animation When Page Loaded
  $('body').addClass('loaded');




  //   .______    __       __    __    _______  __  .__   __.
  //   |   _  \  |  |     |  |  |  |  /  _____||  | |  \ |  |
  //   |  |_)  | |  |     |  |  |  | |  |  __  |  | |   \|  |
  //   |   ___/  |  |     |  |  |  | |  | |_ | |  | |  . `  |
  //   |  |      |  `----.|  `--'  | |  |__| | |  | |  |\   |
  //   | _|      |_______| \______/   \______| |__| |__| \__|
  //


};




//
//                         ,,                    ,,
//   `7MMF'     A     `7MF'db                  `7MM
//     `MA     ,MA     ,V                        MM
//      VM:   ,VVM:   ,V `7MM  `7MMpMMMb.   ,M""bMM  ,pW"Wq.`7M'    ,A    `MF'
//       MM.  M' MM.  M'   MM    MM    MM ,AP    MM 6W'   `Wb VA   ,VAA   ,V
//       `MM A'  `MM A'    MM    MM    MM 8MI    MM 8M     M8  VA ,V  VA ,V
//        :MM;    :MM;     MM    MM    MM `Mb    MM YA.   ,A9   VVV    VVV
//         VF      VF    .JMML..JMML  JMML.`Wbmd"MML.`Ybmd9'     W      W
//
//
//
//                                 ,,
//   `7MM"""Mq.                    db
//     MM   `MM.
//     MM   ,M9  .gP"Ya  ,pP"Ybd `7MM  M"""MMV .gP"Ya
//     MMmmdM9  ,M'   Yb 8I   `"   MM  '  AMV ,M'   Yb
//     MM  YM.  8M"""""" `YMMMa.   MM    AMV  8M""""""
//     MM   `Mb.YM.    , L.   I8   MM   AMV  ,YM.    ,
//   .JMML. .JMM.`Mbmmd' M9mmmP' .JMML.AMMmmmM `Mbmmd'
//
//
$(document).ready(function() { // Add this row for new jQuery resize event snippet for a known bug that happened from iOS6 Safari.

  /* Store the window width */
  var windowWidth = $(window).width();

  $(window).resize(function(){
    // Check if the window width has actually changed and it's not just iOS triggering a resize event on scroll
    if ($(window).width() != windowWidth) {

      // Update the window width for next time
      windowWidth = $(window).width();

      // Do stuff below...
    }
  });
});




//
//                         ,,                    ,,
//   `7MMF'     A     `7MF'db                  `7MM
//     `MA     ,MA     ,V                        MM
//      VM:   ,VVM:   ,V `7MM  `7MMpMMMb.   ,M""bMM  ,pW"Wq.`7M'    ,A    `MF'
//       MM.  M' MM.  M'   MM    MM    MM ,AP    MM 6W'   `Wb VA   ,VAA   ,V
//       `MM A'  `MM A'    MM    MM    MM 8MI    MM 8M     M8  VA ,V  VA ,V
//        :MM;    :MM;     MM    MM    MM `Mb    MM YA.   ,A9   VVV    VVV
//         VF      VF    .JMML..JMML  JMML.`Wbmd"MML.`Ybmd9'     W      W
//
//
//
//                                       ,,    ,,
//    .M"""bgd                         `7MM  `7MM
//   ,MI    "Y                           MM    MM
//   `MMb.      ,p6"bo `7Mb,od8 ,pW"Wq.  MM    MM
//     `YMMNq. 6M'  OO   MM' "'6W'   `Wb MM    MM
//   .     `MM 8M        MM    8M     M8 MM    MM
//   Mb     dM YM.    ,  MM    YA.   ,A9 MM    MM
//   P"Ybmmd"   YMbmd' .JMML.   `Ybmd9'.JMML..JMML.
//
//
$(window).scroll(function(){

})