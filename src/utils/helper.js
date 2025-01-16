import a0_0x33546a from "./twist.js";
export class Helper {
  static ["delay"](_0x5a8a04, _0x28bf86, _0x160526, _0x3b4a7a) {
    return new Promise(async (_0x32555b) => {
      let _0x304639 = _0x5a8a04;
      if (_0x28bf86 !== undefined) {
        await a0_0x33546a.log(_0x160526, _0x28bf86, _0x3b4a7a, "Delaying for " + this.msToTime(_0x5a8a04));
      } else {
        a0_0x33546a.info("Delaying for " + this.msToTime(_0x5a8a04));
      }
      const _0x582d4b = setInterval(async () => {
        _0x304639 -= 0x3e8;
        if (_0x28bf86 !== undefined) {
          await a0_0x33546a.log(_0x160526, _0x28bf86, _0x3b4a7a, "Delaying for " + this.msToTime(_0x304639));
        } else {
          a0_0x33546a.info("Delaying for " + this.msToTime(_0x304639));
        }
        if (_0x304639 <= 0x0) {
          clearInterval(_0x582d4b);
          _0x32555b();
        }
      }, 0x3e8);
      setTimeout(async () => {
        clearInterval(_0x582d4b);
        await a0_0x33546a.clearInfo();
        if (_0x28bf86) {
          await a0_0x33546a.log(_0x160526, _0x28bf86, _0x3b4a7a);
        }
        _0x32555b();
      }, _0x5a8a04);
    });
  }
  static ["msToTime"](_0x6fcd81) {
    const _0x385851 = Math.floor(_0x6fcd81 / 0x36ee80);
    const _0x3a176d = _0x6fcd81 % 0x36ee80;
    const _0x2f69dc = Math.floor(_0x3a176d / 0xea60);
    const _0x1e9f70 = _0x3a176d % 0xea60;
    const _0x256ffc = Math.round(_0x1e9f70 / 0x3e8);
    return _0x385851 + " Hours " + _0x2f69dc + " Minutes " + _0x256ffc + " Seconds";
  }
  static ["refCheck"](_0x25b8a2) {
    return true;
  }
  static ["randomUserAgent"]() {
    const _0x58ddd6 = [
      "Mozilla/5.0 (iPhone; CPU iPhone OS 17_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/125.0.6422.80 Mobile/15E148 Safari/604.1",
      "Mozilla/5.0 (iPhone; CPU iPhone OS 17_5_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 EdgiOS/125.2535.60 Mobile/15E148 Safari/605.1.15",
      "Mozilla/5.0 (Linux; Android 10; SM-G973F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.6422.113 Mobile Safari/537.36 EdgA/124.0.2478.104",
      "Mozilla/5.0 (Linux; Android 10; Pixel 3 XL) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.6422.113 Mobile Safari/537.36 EdgA/124.0.2478.104",
      "Mozilla/5.0 (Linux; Android 10; VOG-L29) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.6422.113 Mobile Safari/537.36 OPR/76.2.4027.73374",
      "Mozilla/5.0 (Linux; Android 10; SM-N975F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.6422.113 Mobile Safari/537.36 OPR/76.2.4027.73374",
    ];
    return _0x58ddd6[Math.floor(Math.random() * _0x58ddd6.length)];
  }
  static ["showSkelLogo"]() {
    console.log("\x1b[33m%s\x1b[0m", "Tool được phát triển bởi nhóm tele Airdrop Hunter Siêu Tốc(https://t.me/airdrophuntersieutoc)");
  }
}
