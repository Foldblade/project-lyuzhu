import i18n from "i18next";

const navLang = typeof navigator !== "undefined" ? navigator.language : "";
const browserLang = navLang.startsWith("zh")
  ? navLang.startsWith("zh-CN") ||
    navLang.startsWith("zh-SG") ||
    navLang.startsWith("zh-MY")
    ? "zh-Hans"
    : "zh-Hant"
  : "en";

i18n.init({
  lng: browserLang,
  fallbackLng: "en",
  interpolation: { escapeValue: false },
  resources: {
    en: {
      translation: {
        nav: {
          prev: "Previous step",
          next: "Next step",
        },
        stepLabels: [
          "Original",
          "Transcribed",
          "Punctuated",
          "Transpose",
          "Annotations",
          "About",
        ],
        afterword: {
          title: "跋 / Afterword",
          body: "This inscription emulates the stylistic formula and orthography found on ritual bronze vessels from the mid-Western Zhou dynasty.<br><br>Jīnwén (金文, Bronze Inscriptions) refers to the characters cast and inscribed upon bells and cauldrons, spanning three millennia. Believing that metal and stone endure, the ancients entrusted their achievements and covenants to these sacred vessels, seeking to preserve their words forever between heaven and earth.<br><br>As I'm leaving Sydney, deeply moved by the inclusive spirit of this land and bound to the profound fellowship of my peers, I crafted this bamboo as an offering to the community. May the connections forged through rope defy the barriers of mountains and seas, and shine as one with the sun and moon.",
        },
        socialInfo: {
          title: "About",
          body: "Welcome to share your story with this bamboo in the Fetlife comment section.",
          footer: "Made by Tim with ❤️",
        },
        step0Hint: {
          prev: "Prev",
          next: "Next",
          scroll: "Scroll",
          keys: "Arrow Keys",
          close: "Close",
          lang: "Language",
        },
      },
    },
    "zh-Hant": {
      translation: {
        nav: {
          prev: "上一步",
          next: "下一步",
        },
        sectionLabels: ["譯文", "注釋"],
        stepLabels: ["原文", "隸定", "句讀", "轉置", "注釋", "關於"],
        afterword: {
          title: "跋",
          body: "本銘依西周中期青銅器金文之體例擬作。<br><br>夫金文者，歷三千載之鐘鼎文字也。古人信金石不朽，方托功烈與契盟於重器，以求文字長存於天地之間。<br><br>將去悉尼，感風物之包容、結同好之深厚，作此旅竹，饗眾人焉。唯願繩縛之絆，絕山川之阻、共日月之光。",
        },
        socialInfo: {
          title: "關於",
          body: "歡迎前往 Fetlife 評論區留下你與這根「旅竹」的故事",
          footer: "Made by Tim with ❤️",
        },
        step0Hint: {
          prev: "上一步",
          next: "下一步",
          scroll: "滾輪",
          keys: "方向鍵",
          close: "關閉",
          lang: "語言",
        },
      },
    },
    "zh-Hans": {
      translation: {
        nav: {
          prev: "上一步",
          next: "下一步",
        },
        stepLabels: ["原文", "隶定", "句读", "转置", "注释", "关于"],
        afterword: {
          title: "跋",
          body: "本铭依西周中期青铜器金文之体例拟作。<br><br>夫金文者，历三千载之钟鼎文字也。古人信金石不朽，方托功烈与契盟于重器，以求文字长存于天地之间。<br><br>将去悉尼，感风物之包容、结同好之深厚，作此旅竹，饗諸好焉。唯愿绳缚之绊，绝山川之阻、共日月之光。",
        },
        socialInfo: {
          title: "关于",
          body: "欢迎前往 Fetlife 评论区留下你与这根「旅竹」的故事",
          footer: "Made by Tim with ❤️",
        },
        step0Hint: {
          prev: "上一步",
          next: "下一步",
          scroll: "滚轮",
          keys: "方向键",
          close: "关闭",
          lang: "语言",
        },
      },
    },
  },
});

export default i18n;
