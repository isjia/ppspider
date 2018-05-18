import {launch} from "puppeteer";
import {PuppeteerUtil} from "../spider/util/PuppeteerUtil";
import * as fs from "fs";
import {FileUtil} from "../common/util/FileUtil";

(async() => {

    const browser = await launch({
        headless: false
    });

    const page = await browser.newPage();
    await PuppeteerUtil.defaultViewPort(page);
    await PuppeteerUtil.setImgLoad(page, false);


    // 只触发一次回调
    // const checkRes = PuppeteerUtil.onResponse(page,
    //     "https://c.y.qq.com/v8/fcg-bin/fcg_play_single_song.fcg\\?songmid=.*", async response => {
    //         const text = await response.text();
    //         FileUtil.write(__dirname + "/003LxmX246aRC7/fcg_play_single_song.json", JSON.stringify(PuppeteerUtil.jsonp(text)));
    //     }, 1);
    // await page.goto("https://y.qq.com/n/yqq/song/003LxmX246aRC7.html");


    // 触发多次回调
    // const checkRes = PuppeteerUtil.onResponse(page,
    //     "https://c.y.qq.com/base/fcgi-bin/fcg_global_comment_h5.fcg\\?g_tk=.*", async response => {
    //         const text = await response.text();
    //         console.log(JSON.stringify(PuppeteerUtil.jsonp(text)));
    //     }, 2);
    // await page.goto("https://y.qq.com/n/yqq/song/003LxmX246aRC7.html");
    // await checkRes.then(res => console.log(res));


    // 只触发一次回调
    // const checkRes = PuppeteerUtil.onceResponse(page,
    //     "https://c.y.qq.com/v8/fcg-bin/fcg_play_single_song.fcg\\?songmid=.*", async response => {
    //         const text = await response.text();
    //         FileUtil.write(__dirname + "/003LxmX246aRC7/fcg_play_single_song.json", JSON.stringify(PuppeteerUtil.jsonp(text)));
    //     });
    // await page.goto("https://y.qq.com/n/yqq/song/003LxmX246aRC7.html");
    // await checkRes.then(res => console.log(res));


    // const downloadImgRes = await PuppeteerUtil.downloadImg(page, "body > div.main > div.mod_data > span.data__cover > img", __dirname);

})();
