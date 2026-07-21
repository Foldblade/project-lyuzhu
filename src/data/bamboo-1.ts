import type { BambooData } from "./types";
import { toStream, readingOrder } from "./helpers";

const g = {
  g1: { id: "g1", charArt: "隹", height: 160, glyph: "隹", modernChar: "唯" },
  g2: { id: "g2", charArt: "丙", height: 173, glyph: "丙" },
  g3: { id: "g3", charArt: "午", height: 162, glyph: "午" },
  g4: { id: "g4", charArt: "四", height: 158, glyph: "四" },
  g5: { id: "g5", charArt: "月", height: 173, glyph: "月" },
  g6: { id: "g6", charArt: "既", height: 190, glyph: "既" },
  g7: { id: "g7", charArt: "生", height: 157, glyph: "生" },
  g8: { id: "g8", charArt: "霸", height: 189, glyph: "霸" },
  g9: { id: "g9", charArt: "丁", height: 112, glyph: "丁" },
  g10: { id: "g10", charArt: "酉", height: 175, glyph: "酉" },
  g11: { id: "g11", charArt: "徐", height: 188, glyph: "徐" },
  g12: { id: "g12", charArt: "氏", height: 170, glyph: "氏" },
  g13: { id: "g13", charArt: "隻", height: 234, glyph: "隻", modernChar: "獲" },
  g14: { id: "g14", charArt: "茲", height: 164, glyph: "茲", modernChar: "兹" },

  g15: { id: "g15", charArt: "用-1", height: 143, glyph: "用" },
  g16: { id: "g16", charArt: "乍", height: 154, glyph: "乍", modernChar: "作" },
  g17: { id: "g17", charArt: "旅", height: 156, glyph: "旅" },
  g18: { id: "g18", charArt: "竹", height: 142, glyph: "竹" },
  g19: { id: "g19", charArt: "用-2", height: 149, glyph: "用" },
  g20: { id: "g20", charArt: "奠", height: 168, glyph: "奠" },
  g21: { id: "g21", charArt: "厥", height: 173, glyph: "厥" },
  g22: { id: "g22", charArt: "絲", height: 172, glyph: "絲" },
  g23: { id: "g23", charArt: "以", height: 167, glyph: "以" },
  g24: { id: "g24", charArt: "束", height: 157, glyph: "束" },
  g25: { id: "g25", charArt: "其-1", height: 149, glyph: "其" },
  g26: { id: "g26", charArt: "身", height: 172, glyph: "身" },
  g27: { id: "g27", charArt: "綏", height: 182, glyph: "妥", modernChar: "綏" },
  g28: { id: "g28", charArt: "其-2", height: 168, glyph: "其" },
  g29: { id: "g29", charArt: "心", height: 153, glyph: "心" },

  g30: { id: "g30", charArt: "用-3", height: 135, glyph: "用" },
  g31: { id: "g31", charArt: "享", height: 162, glyph: "享" },
  g32: { id: "g32", charArt: "倗", height: 149, glyph: "倗", modernChar: "朋" },
  g33: { id: "g33", charArt: "友", height: 139, glyph: "友" },
  g34: { id: "g34", charArt: "用-4", height: 152, glyph: "用" },
  g35: { id: "g35", charArt: "匃", height: 166, glyph: "匃", modernChar: "丐" },
  g36: { id: "g36", charArt: "康", height: 182, glyph: "康" },
  g37: { id: "g37", charArt: "樂", height: 172, glyph: "樂" },
  g38: { id: "g38", charArt: "屯", height: 167, glyph: "屯", modernChar: "純" },
  g39: { id: "g39", charArt: "右", height: 157, glyph: "右", modernChar: "佑" },
  g40: { id: "g40", charArt: "其-3", height: 139, glyph: "其" },
  g41: { id: "g41", charArt: "萬", height: 203, glyph: "萬" },
  g42: { id: "g42", charArt: "秂", height: 161, glyph: "秂", modernChar: "年" },
  g43: { id: "g43", charArt: "永", height: 157, glyph: "永" },
  g44: { id: "g44", charArt: "用-5", height: 164, glyph: "用" },
};

const col_0 = [
  "g1",
  "g2",
  "g3",
  "g4",
  "g5",
  "g6",
  "g7",
  "g8",
  "g9",
  "g10",
  "g11",
  "g12",
  "g13",
  "g14",
];
const col_1 = [
  "g15",
  "g16",
  "g17",
  "g18",
  "g19",
  "g20",
  "g21",
  "g22",
  "g23",
  "g24",
  "g25",
  "g26",
  "g27",
  "g28",
  "g29",
];
const col_2 = [
  "g30",
  "g31",
  "g32",
  "g33",
  "g34",
  "g35",
  "g36",
  "g37",
  "g38",
  "g39",
  "g40",
  "g41",
  "g42",
  "g43",
  "g44",
];
const order = readingOrder(g, [col_0, col_1, col_2]);

export const bamboo1: BambooData = {
  id: 1,
  name: { zhHant: "旅竹 #1", zhHans: "旅竹 #1", en: "Bamboo #1" },
  glyphPool: g,
  layout: [
    { columnIndex: 0, glyphIds: col_0 },
    { columnIndex: 1, glyphIds: col_1 },
    { columnIndex: 2, glyphIds: col_2 },
  ],
  sentences: [
    {
      streamSlice: toStream("唯丙午四月既生霸丁酉、徐氏獲兹。", order, 0),
      translation: {
        zhHant:
          "在丙午年四月新月漸盈的丁酉日（西元二〇二六年五月二十三日），徐氏獲得了這（根竹材）。",
        zhHans:
          "在丙午年四月新月渐盈的丁酉日（2026 年 5 月 23 日），徐氏获得了这（根竹材）。",
        en: "During the waxing first-quarter moon of the fourth lunar month in the Bǐngwǔ year, on the Dīngyǒu day (23 May 2026), the individual surnamed Xu acquired this (piece of bamboo).",
      },
    },
    {
      streamSlice: toStream(
        "用作旅竹、用奠厥絲、以束其身、綏其心。",
        order,
        14,
      ),
      translation: {
        zhHant:
          "將其製作為便於攜行與共用的「旅竹」；用它來承托與穿繫繩索，以此來約束身體、撫綏心靈。",
        zhHans:
          "将其制作为便于携行与共用的「旅竹」；用它来承托与穿系绳索，以此来约束身体、安定心灵。",
        en: "Made into a <em>lǚzhú</em> [travelling bamboo] for shared use; it anchors the silk cord to bind the body and soothe the mind-heart.",
      },
    },
    {
      streamSlice: toStream("用享朋友、用丐康樂純佑、其萬秂永用。", order, 29),
      translation: {
        zhHant:
          "以此款待並共享於同好摯友，用以祈求安康、快樂與極大的神祐，願其能被永永遠遠使用一萬年。",
        zhHans:
          "以此款待并共享于挚友同好，用以祈求安康、快乐与宏大的庇佑，愿其能被后世永远使用一万年。",
        en: "To offer and share with beloved companions, to pray for well-being, joy, and great blessing — may it be treasured and used for ten thousand years.",
      },
    },
  ],
  horizontalStreams: [
    toStream("唯丙午四月既生霸丁酉、徐氏獲兹。", order, 0),
    toStream("用作旅竹、用奠厥絲、以束其身、綏其心。", order, 14),
    toStream("用享朋友、用丐康樂純佑、其萬秂永用。", order, 29),
  ],
  annotations: {
    zhHans: [
      {
        glyphIds: ["g1"],
        lemma: "隹",
        body: "通“唯”，发语词。",
      },
      {
        glyphIds: ["g6", "g7", "g8"],
        lemma: "既生霸",
        body: "西周金文月相术语。“霸”通“魄”，本指月体未发光之暗部。“生霸（魄）”谓暗部始生光辉；“既生霸”则指月光已然显著生光之阶段。古人“见月记相”，上弦前后（初七、初八）月体明暗各半，即入“既生霸”之观象。本铭（公元 2026 年 5 月 23 日，即农历四月初七）正值这一阶段。",
      },
      {
        glyphIds: ["g13"],
        lemma: "隻",
        body: "今作“获”。",
      },
      {
        glyphIds: ["g14"],
        lemma: "茲",
        body: "今作“兹”。",
      },
      {
        glyphIds: ["g16"],
        lemma: "乍",
        body: "通“作”，制作。",
      },
      {
        glyphIds: ["g17", "g18"],
        lemma: "旅竹",
        body: "旅，西周金文重器中常见“作旅簋”、“作旅鼎”，此处的“旅”兼具“行旅/便携”与“众人/社群”双重含义。“旅竹”即指供社群同好共同执用、流转分享的便携竹质缚具。",
      },
      { glyphIds: ["g20"], lemma: "奠", body: "动词。安置、固定、使稳固。" },
      { glyphIds: ["g21"], lemma: "厥", body: "代词。其、它的。" },
      {
        glyphIds: ["g22"],
        lemma: "絲",
        body: "今作“丝”。金文无“绳”字，此处引申为所使用的绳索。",
      },
      {
        glyphIds: ["g24"],
        lemma: "束",
        body: "动词。约束、环绕、包覆。此处指绳竹对身体线条的妥帖规范与支撑。",
      },
      {
        glyphIds: ["g27"],
        lemma: "妥",
        body: "金文多以此字表“安妥”。后世多通假为“绥”，意为安抚、使安宁。此处用作使动用法，意在抚平思绪，使内心归于安宁平稳。",
      },
      {
        glyphIds: ["g31"],
        lemma: "享",
        body: "动词。宴请、款待、奉献。金文中以此字直接表飨宴之意。",
      },
      {
        glyphIds: ["g32", "g33"],
        lemma: "倗友",
        body: "今作“朋友”。",
      },
      {
        glyphIds: ["g35"],
        lemma: "匃",
        body: "动词。同“丐”，祈求、乞求（福泽）。",
      },
      {
        glyphIds: ["g38", "g39"],
        lemma: "屯右",
        body: "读作“纯佑”。屯，通“纯”，大也、纯正无瑕也；右，通“佑/祐”，指神明在右侧提供护佑与协助。“屯右”即指极大且纯正的庇佑。",
      },
      {
        glyphIds: ["g42"],
        lemma: "秂",
        body: "今作“年”。",
      },
      {
        glyphIds: ["g43"],
        lemma: "永",
        body: "副词。长久地、永远地。金文“永”字像水流长长源源不断之形。",
      },
    ],
    zhHant: [
      { glyphIds: ["g1"], lemma: "隹", body: "讀若「唯」。文言發語詞。" },
      {
        glyphIds: ["g6", "g7", "g8"],
        lemma: "既生霸",
        body: "西周金文月相術語。「霸」通「魄」，本指月體未發光之暗部。「生霸（魄）」謂暗部始生光輝；「既生霸」則指月光已然顯著生光之階段。古人「見月記相」，上弦前後（初七、初八）月體明暗各半，即入「既生霸」之觀象。本銘（西元二〇二六年五月二十三日，即農曆四月初七）正值這一階段。",
      },
      {
        glyphIds: ["g13", "g14"],
        lemma: "隻茲",
        body: "隻，即「獲」字。茲，此也。意謂徐氏獲此之竹材。",
      },
      {
        glyphIds: ["g16", "g17", "g18"],
        lemma: "乍旅竹",
        body: "乍，即「作」字。古器铭文常鑄「作旅鼎」、「作旅簋」，其「旅」字寓有雙重義理：一曰行旅，表器物輕便可隨身攜行；二曰眾多，表此器非一人私暱，乃用以款待眾人、流傳於社群同好之間。",
      },
      {
        glyphIds: ["g20", "g21", "g22"],
        lemma: "奠厥絲",
        body: "奠，安放、使之穩固也。絲，金文無「繩」字，此處引申指繫綁之繩。意謂以竹節為繩道樞紐，使錯落之繩得以安穩交織。",
      },
      {
        glyphIds: ["g24", "g25", "g26", "g27", "g28", "g29"],
        lemma: "束其身、妥其心",
        body: "束，圍繞、包覆也。妥，通「綏」，安撫、使之安寧也。此句精妙捕捉了繩縛中獨特之「軀體經驗」：當身體之形體在經緯交織中獲得明確之邊界與支撐（束其身），外在喧囂隨之沉落，內心反而因絕對之信任而獲得安穩與寧靜（妥其心）。",
      },
      {
        glyphIds: ["g31", "g32", "g33"],
        lemma: "享倗友",
        body: "倗，即「朋」字。享，奉獻、款待也。古文中「享」字本具饗宴之義，意謂以此藝具作為與同好結緣、交付信任之媒介。",
      },
      { glyphIds: ["g35"], lemma: "匃", body: "同「丐」，祈請、求取也。" },
      {
        glyphIds: ["g38", "g39"],
        lemma: "屯右",
        body: "讀若「純佑」。屯，通「純」，大也；右，通「佑」，神明右助也。古人以右為尊，神祐其右，故謂之右。屯右意謂極大且純粹之神祐。",
      },
      {
        glyphIds: ["g43", "g44"],
        lemma: "萬秂永用",
        body: "此為周代鐘鼎彝器最經典之末尾嘏辭（祝願語）。器物雖有形，而其承載之信任、記憶與技藝可跨越世代。此處寄寓了作者至深之期許，願此器不落塵俗，長久為後世慧眼者所珍愛、摩挲與安全執用。",
      },
    ],
    en: [
      {
        glyphIds: ["g1"],
        lemma: "隹 (zhuī)",
        body: 'read as <em>wéi</em> (唯)<em> "Verily; it is thus / here begins."</em><br>Formally written in its authentic paleographic form as the pictograph of a short-tailed bird (<em>zhuī</em>), this graph functions as the classic phonetic loan for <em>wéi</em> (唯/维), the canonical initial particle deployed to inaugurate bronze inscriptions.',
      },
      {
        glyphIds: ["g6", "g7", "g8"],
        lemma: "丙午四月既生霸丁酉 (Bǐngwǔ sìyuè Jìshēngbà Dīngyǒu)",
        body: '<em>"In the fourth lunar month of the Bǐngwǔ year, during the Jìshēngbà phase, on the Dīngyǒu day."</em><br>A chronological formula synthesizing the Sexagenary Cycle (<em>gānzhī</em> 干支) with archaic lunar phase terminology. While authentic Western Zhou epigraphy typically anchors chronology around a ruler\'s regnal year, this text adopts the rotating stem-branch matrix to record the specific year (<em>Bǐngwǔ</em>) and day (<em>Dīngyǒu</em>), overlaying the Western Zhou lunar marker <em>Jìshēngbà</em>.<br>Phonologically, <em>bà</em> (霸) serves as a loan for <em>pò</em> (魄), which traditionally denotes the unlit body or dark phase of the moon. The compound <em>shēngbà[pò]</em > (生霸[魄], "birth of the dark-body\'s light") refers to the emergence of light upon this unlit disk, while <em>Jìshēngbà</em> signifies the stage where the moon\'s light has already become prominent. In antiquity, chronometry was governed by direct observational astronomy ("recording date by observation"). Around the First Quarter (the 7th or 8th day of the lunar month), as the moon reaches the half-disk boundary, it naturally enters the visual observation phase of <em>Jìshēngbà</em>. The modern Gregorian date of this inscription (23 May 2026), corresponding to the 7th day of the fourth lunar month, aligns squarely within this phase.',
      },
      {
        glyphIds: ["g15"],
        lemma: "用 (yòng)",
        body: '<em>"To use; thereby / by means of which"</em>',
      },
      {
        glyphIds: ["g17", "g18"],
        lemma: "旅竹 (lǚ zhú)",
        body: 'Literal translation as <em>"The traveling bamboo"</em><br>This compound adapts the epigraphic conventions of ritual bronzes, where <em>lǚ</em> (旅) frequently designates objects crafted for travel, military expeditions, or collective clan use (e.g., <em>zuò lǚ guǐ</em> 作旅簋).<br>Paleographically, the character encapsulates both spatial displacement and structured organization — referring to the physical act of journeying (e.g., <em>lǚtú</em> 旅途) as well as an assembled group of people (e.g., <em>lǚbàn</em> 旅伴). Coupled with bamboo, the phrase marks both the geographic movement of the material and the shared lineage of the community interacting with it.',
      },
      {
        glyphIds: ["g20", "g21", "g22"],
        lemma: "奠厥丝 (diàn jué sī)",
        body: '<em>"To secure [or anchor] this cord"</em><br>The verb <em>diàn</em> (奠) functions in its epigraphic sense, meaning "to set down, establish, or firmly stabilize." The pronoun <em>jué</em> (厥) serves as the archaic possessive marker ("this/its"). The character <em>sī</em> (丝, silk/thread) operates as a semantic extension for a rope or cord. In the bronze script of the Western Zhou period, the character for <em>shéng</em> (繩, rope) had not yet emerged; thus, the character <em>sī</em> (絲) is deployed in its stead to denote the rope used in Shibari.',
      },
      {
        glyphIds: ["g24", "g25", "g26"],
        lemma: "束其身 (shù qí shēn)",
        body: '<em>"To bind [or constrain] the body"</em><br>The verb <em>shù</em> (束) operates in its foundational epigraphic sense; its early graph depicts a bundle of wood bound tightly by a cord, which semantically expanded to mean "to bind, encircle, or bundle." The particle <em>qí</em> (其) functions as the definitive pronoun ("the/its"), modifying <em>shēn</em> (身, body).',
      },
      {
        glyphIds: ["g27", "g28", "g29"],
        lemma: "妥其心 (tuǒ qí xīn)",
        body: '<em>"To pacify [or anchor] the mind-heart"</em><br>The verb <em>tuǒ</em> (妥) is deployed in its original epigraphic sense of stabilizing or bringing to rest; its early graph depicts a hand (<em>zhuǎ</em> 爪) placed gently over a kneeling woman (<em>nǚ</em> 女), signifying the act of bringing composure or security to a subject. The particle <em>qí</em> (其) modifies <em>xīn</em> (心). In early Chinese thought, <em>xīn</em> represents not merely the physical organ, but the unified locus of consciousness, emotion, and intellect.',
      },
      {
        glyphIds: ["g31", "g32", "g33"],
        lemma: "享倗友 (xiǎng péng yǒu)",
        body: '<em>"To dedicate and share with companions"</em><br>The verb <em>xiǎng</em> (享) is employed in its foundational ritual sense. In early scripts, the graph depicts a sacrificial pavilion, originally denoting the presentation of ritual offerings to ancestors and deities. By semantic extension, it came to encapsulate the ethics of communal reciprocity — specifically the acts of hosting, offering, and shared enjoyment among peers. The object <em>péng-yǒu</em> (倗友 / 朋友) designates one’s bound companions and the deep fellowship of peers.',
      },
      {
        glyphIds: ["g36", "g37"],
        lemma: "康樂 (kāng lè)",
        body: '<em>"Vibrant health, peace, and harmonious joy"</em><br>A benedictory compound synthesized from classic motifs in Western Zhou epigraphy. The character <em>kāng</em> (康) exhibits an early graph depicting grains separating from a winnowing basket, semantically expanding from agricultural abundance to denote physical well-being and tranquility. The character <em>lè</em> (樂, read as <em>yuè</em> in its musical origin) in its origin depicts silk strings stretched over a wooden frame — a musical instrument — signifying social harmony and shared celebration.<br>Conjoined, <em>kāng-lè</em> operates as a liturgical blessing invoking both individual physical vitality and the harmonious alignment of the collective.',
      },
      {
        glyphIds: ["g38", "g39"],
        lemma: "屯右 (tún yòu)",
        body: 'read as <em>chún yòu</em> (純佑)<em> "Grand and unblemished protection."</em><br>A classic benedictory formula standard in Western Zhou epigraphy. The character <em>tún</em> (屯, a pictograph of a germinating sprout) serves as a phonetic loan for <em>chún</em> (純), signifying "grand and unblemished." The character <em>yòu</em> (右, a pictograph of a right hand) functions as the classic loan for <em>yòu</em> (佑/祐), embodying the spatial and ritual concept of guardianship positioned at one\'s right side.<br>Conjoined, the compound operates as a liturgical invocation, requesting an enduring, untainted aura of protection for the companions.',
      },
      {
        glyphIds: ["g41", "g42", "g43", "g44"],
        lemma: "萬秂永用 (wàn nián yǒng yòng)",
        body: '"May it be eternally treasured and utilized for ten thousand years."<br>The closing phrase traditionally carved into ancient bronzes. Here, wàn-nián (萬年 / 万年, literally "ten thousand years") functions as a figurative term invoking absolute eternity. In the original text, the word for "year" is written in its archaic paleographic form, 秂, which combines 禾 (ripe grain) atop 人 (a person)—vividly depicting a human being carrying a bountiful harvest on their back, a meaning that later expanded to denote the annual cycle of seasons. Paleographically, the character yǒng (永) similarly evolved from depicting the long, continuous flow of a stream to mean "forever" or "eternity."<br>Combined, it represents a deep desire for this object to be cared for and thoroughly used across that endless span of time. The inscription flows into its final yòng (用, to use), because the life of this bamboo isn\'t found in keeping it untouched on a shelf, but in the continuous act of touching it, tying it, and keeping it alive within the shared social space.',
      },
    ],
  },
};
