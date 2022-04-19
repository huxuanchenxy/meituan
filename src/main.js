let request = require('request')
let child_process = require('child_process')

var options = {
  'method': 'GET',
  'url': 'https://mall.meituan.com/api/c/poi/10000098/sku/list/category/40488/v6?uuid=180207a5b9bc8-30b9c2c747b394-0-5a900-180207a5b9bc8&xuuid=180207a5b9bc8-30b9c2c747b394-0-5a900-180207a5b9bc8&__reqTraceID=71ba11bf-d4b4-568f-d378-f396c46206ad&platform=ios&utm_medium=wxapp&brand=xiaoxiangmaicai&tenantId=1&utm_term=5.32.6&firstCategoryId=40488&type=1&poiId=10000098&categoryId=40488&listTag=1&poi=10000098&stockPois=10000098&ci=1&bizId=2&openId=oV_5G4-X119TkuaihyEzNTM4-bYk&address_id=1950000001&sysName=iOS&sysVerion=15.4&app_tag=union&uci=1&userid=16326977',
  'headers': {
    'Host': ' mall.meituan.com',
    'Connection': ' keep-alive',
    'openId': ' oV_5G4-X119TkuaihyEzNTM4-bYk',
    'content-type': ' multipart/form-data',
    'traceids': ' 0aaf5ea2#64d3c53b',
    'req_of_maicai': ' 1',
    'location': ' 121.5300648328993,31.27934543185764',
    'deliveryAddrLocation': ' ,',
    't': ' fLY61Q7p1FVEXg05Vg7RAHZbf48AAAAAVhEAAJyFsap9e7gjuZ343UzUb5kyTa9Dlc9GR3QcjJK2IGAXJS-7NhxyQ9z9mRn-d-opGw',
    'mp-mtgsig': ' {"a1":"1.0","a2":1649814907319,"a3":"810w5x368uyv5v46zy28662046vx95u4819792z304887978z84v2vux","a4":"a6e15a9e0baa36f7bad5c4638b0d94761a986e3dc4de072a","a5":"EaEw+Db5lRiWiyf7NzCQ0SWAFA9t0l0eoTUk9ZEDSIrAnXyQeG8iBiOGD4dpEe5IuTKbU7JIhe2tmrgIBZ/rr7/GpvYx7hKLHuLrgafbhEuA8vDAS322hOgbRQGh0+Fx2ZqqNleuWrz9l603Y659gWnsn+zoI8cWdYagTEzQMDZkbaZlnVY5Nv1GkNKFCvVo+aGZrQwsTQI4o9/T0G4ivKnnw2+xMltx4QxYJVc2THNXL7IjFZZJ62qAfq/fiuJHj78PWjxmz65+TjtIEQ+v9t0TtZp0bUjbSAc5gVUhhlZDHSLfKR//gGBRUXwauOaT3sfWTxnsJPJoOv8UTJxAet6twKcI9DEpLPwOHWqwUbkPLGzLr5Q2JRpdxW6gMDw+iAWXBSw211opMqhng087oH/6","a6":"w1.0Iil3UhZz43OeEe1rIVBwL/B2+kL8dIZgHoVF5i9DAYCGZNCV+zcb3NzR3KEtC+s9nEItHsGqqkRSpK+t9RYd9ueRGiDxsg9WgNQJSR88YQyY7Vl0RMyLSP9/shgWeFoAZkkAp8hXjLnmSpb1q9NGneSUfInubTsH32qsn5rv4EyhX5ngns4E6cVGqw+tzeDYX8qDQ2gtTIcQZRm8WViydw9OdxJ+WUQdnG7l+X+xthTS+gYEbjHcTB2zWTL0sF3EizuFwWtcf7Zn+ZcMWOcsKghl6e+291Jh/LAsqRPQLK1zgn5wtEyQJhzOxhMxQ6VdECf6TLX3Y+2viMpWTtdvjJXOjFKUib1J/SUFTjdqWLyENyFZCo2zqXZXqZSs+xZbzaogxnQdns38YcqZsWA0ZH6TtOZ9wZ+RplGBZ8q1no9caF84vrA1Oh/2S4GqFTbxGkbl8+G6w9foM095bOxT1OgA7Dqvck29HVeVVr0gFXLG8CTmILBetqV7hwv+Iq83hXOTOOW9H9XJ1P8Ww3yOOa2w1gGByNLSc4egKLqY6h1XJy8bg9356ZlTdBpZeJFWyZMDP/ReQ6RFAI/gvIf8OV76nu0ihWbosikJNtyLPIPpdYJI00q5GEYK9TGPCyZpQhHPj+kR32dnek0eSZYBVxTnKgjkdlRGOSCV5vzWW8h71ooSmpvpG3qH/k/TXu8Z/X/B+eBqFfbBOUCDA529oSCi4ZGus5vqKDy7PMrSXFjtNqxnv1h5v5VOl3IU2z1o/Qkrl6cjl1AxcYFQOENCgugwqUMzPpBpPr2Yk6sK9quhTxqGM1G5juzdyixoLjfH2RokM0VtIJIOYZhkTCQuk5e4vmc2my2/JP4afqGHHVo=","a7":"wx92916b3adca84096"}',
    'openIdCipher': ' AwQAAABJAgAAAAEAAAAyAAAAPLgC95WH3MyqngAoyM/hf1hEoKrGdo0pJ5DI44e1wGF9AT3PH7Wes03actC2n/GVnwfURonD78PewMUppAAAADhD3/QKlr7e2kQRze8LE1MFOBV85l9reKtVhuu6rwM9rps4JjFzmHjubQ5sKRasdY+evF5fRTAmDg==',
    //'Accept-Encoding': ' gzip,compress,br,deflate',
    'User-Agent': ' Mozilla/5.0 (iPhone; CPU iPhone OS 15_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.18(0x1800123f) NetType/WIFI Language/zh_CN',
    'Referer': ' https://servicewechat.com/wx92916b3adca84096/227/page-frame.html'
  }
}

//BarkId 需要安装bark 后在自己app 里获取
let curl =
  "curl 'https://api.day.app/r5K728ExAaNHi3vj3WXuu6/美团买菜有_蔬菜_请尽快下单'"

  let curl2 =
  "curl 'https://api.day.app/TCmYS5awJyDW7BK8yFAR7G/美团买菜有_蔬菜_请尽快下单'"

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
          //console.log(res.data.skuId2SkuItemMap)

          var jsonobj = res.data.skuId2SkuItemMap
          var flag = false;
          outer:
          for (var key in jsonobj) {
            //if (key == '18309') {
            if (true) {
              //console.log(key + ' : ' + jsonobj[key])
              var obj1 = jsonobj[key]
              for (var key1 in obj1) {
                //console.log(key1 + ' : ' + obj1[key1])
                //if (key1 == 'sellButton') {
                var obj2 = obj1[key1]
                var curskuname = ''
                for (var key2 in obj2) {
                  var obj3 = obj2[key2]
                  if(key2 == 'skuTitle')
                  {
                    //console.log(key2 + ' : ' + obj2[key2][0].text)
                    for(var key4 in obj3)
                    {
                      //console.log(key4 + ' : ' + obj3[key4])
                      curskuname = obj3[key4]
                    }
                  }
                  if (key2 == "sellButton") {
                    //console.log(key2 + ' : ' + obj2[key2])
                    
                    //console.log(obj3)
                    for (var key3 in obj3) {
                      //console.log(key3 + ' : ' + obj3[key3])
                      if (key3 == 'status') {
                        if (obj3[key3] == 1) {
                          flag = true;
                          console.log('美团买菜 找到能买的东西了:' + curskuname + ''  + newDate.toLocaleString())
                          break outer;
                        } else {
                          //console.log('没有:' + curskuname)

                        }
                      }
                    }
                  }
                }
                //}
              }
            }
          }
          if (flag) {
            console.log('🎉 恭喜 发现 美团 有蔬菜了 请尽快下单!'+ ''  + newDate.toLocaleString())
            child_process.exec(curl)
            child_process.exec(curl2)

          } else {
            console.log('美团 当前蔬菜无货15秒后再试...'+ ''  + newDate.toLocaleString())
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


console.log('正在检查 美团 是否有可用蔬菜...')
loop()
