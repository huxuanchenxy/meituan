let request = require('request')
let child_process = require('child_process')

var options = {
  'method': 'GET',
  'url': 'https://mall.meituan.com/api/c/poi/10000098/notice?uuid=1809b701c75c8-9662aacf3de748-0-5a900-1809b701c75c8&xuuid=1809b701c75c8-9662aacf3de748-0-5a900-1809b701c75c8&__reqTraceID=18a94422-a419-6fcf-65fb-77eb3ef2fd58&platform=ios&utm_medium=wxapp&brand=xiaoxiangmaicai&tenantId=1&utm_term=5.33.2&msgOpSource=2&poi=10000098&stockPois=10000098&ci=1&bizId=2&openId=oV_5G4-X119TkuaihyEzNTM4-bYk&sysName=iOS&sysVerion=15.4&app_tag=union&uci=1&userid=16326977',
  'headers': {
  }
}

//BarkId 需要安装bark 后在自己app 里获取
let curl =
  "curl 'https://api.day.app/r5K728ExAaNHi3vj3WXuu6/美团买菜有_运力_请尽快下单'"

  let curl2 =
  "curl 'https://api.day.app/TCmYS5awJyDW7BK8yFAR7G/美团买菜有_乳品类_请尽快下单'"


function checkMultiReserveTime(times) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      request(options, function (error, response) {
        if (error) {
          console.log(error)
          reject()
        }

        try {

          var newDate = new Date()
          //let res = JSON.parse(response.body).data[0].time[0].times
          let res = JSON.parse(response.body)
          console.log(res.data.msg)

          //var jsonobj = res.data.skuId2SkuItemMap
          var flag = true
          
          if(res.data.type == 0)
          {
            flag = false
          }
          if (flag) {
            console.log('🎉 恭喜 发现 美团 有运力了 请尽快下单!'+ newDate.toLocaleString())
            child_process.exec(curl)
            //child_process.exec(curl2)

          } else {
            console.log('美团 当前 无运力 15秒后再试...'+ newDate.toLocaleString())
          }
        } catch (err) {
          console.log(response.body)
        }

        resolve()
      })
    }, times)
  })
}

async function loop() {
  //await checkMultiReserveTime(1 * 1000)

  while (true) {
    await checkMultiReserveTime(15 * 1000)
  }
}


console.log('正在检查 美团 是否有可用运力...')
loop()
