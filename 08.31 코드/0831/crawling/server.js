const pupperteer = require("puppeteer")

const main = async () => {
  const browser = await pupperteer.launch({
    headless : true
  })
  const page = await browser.newPage()
  await page.goto("https://comic.naver.com/webtoon/weekdayList?week=mon")

  await page.evaluate(() => {
    document.querySelectorAll(".img_list li dl dt a")
    webtoonList.map(e => e.title)
  })
}