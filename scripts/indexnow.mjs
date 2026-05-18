// Submit all site URLs to Bing via IndexNow
// Usage: node scripts/indexnow.mjs
const KEY = 'ea65abc14d6243456058c4f7ce739a6a'
const HOST = 'screferralbonus.com'
const urls = ['/', '/about-the-bonus', '/faq', '/how-to-use'].map(p => `https://${HOST}${p}`)
const res = await fetch('https://api.indexnow.org/indexnow', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json; charset=utf-8' },
  body: JSON.stringify({ host: HOST, key: KEY, keyLocation: `https://${HOST}/${KEY}.txt`, urlList: urls }),
})
res.ok ? console.log(`✅ ${urls.length} URLs submitted (HTTP ${res.status})`) : console.error(`❌ HTTP ${res.status}: ${await res.text()}`)
