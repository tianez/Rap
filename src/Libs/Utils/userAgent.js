export default function userAgent() {
  let userAgents = {}
  let ua = navigator.userAgent.toLowerCase();
  if (ua.match(/MicroMessenger/i) == "micromessenger") {
    userAgents.isweixin = true
  }
  if (/iphone|ipad|ipod/.test(ua)) {
    userAgents.isios = true
  } else if (/android/.test(ua)) {
    userAgents.isandroid = true
  }
  return userAgents
}
