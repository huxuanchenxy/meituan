let request = require('request')
let child_process = require('child_process')

var options = {
  'method': 'GET',
  'url': 'https://mall.meituan.com/api/c/poi/10000098/sku/list/category/40461/v6?uuid=180207a5b9bc8-30b9c2c747b394-0-5a900-180207a5b9bc8&xuuid=180207a5b9bc8-30b9c2c747b394-0-5a900-180207a5b9bc8&__reqTraceID=f4cd659b-4657-5bfb-3a2a-29c86ac063af&platform=ios&utm_medium=wxapp&brand=xiaoxiangmaicai&tenantId=1&utm_term=5.32.6&firstCategoryId=40461&type=1&poiId=10000098&categoryId=40461&listTag=1&poi=10000098&stockPois=10000098&ci=1&bizId=2&openId=oV_5G4-X119TkuaihyEzNTM4-bYk&address_id=1950000001&sysName=iOS&sysVerion=15.4&app_tag=union&userid=16326977',
  'headers': {
    'Host': ' mall.meituan.com',
    'Connection': ' keep-alive',
    'openId': ' oV_5G4-X119TkuaihyEzNTM4-bYk',
    'content-type': ' multipart/form-data',
    'traceids': ' 2d79f22e',
    'req_of_maicai': ' 1',
    'location': ' 121.52999430338542,31.279314778645833',
    'deliveryAddrLocation': ' ,',
    't': ' fLY61Q7p1FVEXg05Vg7RAHZbf48AAAAAVhEAAJyFsap9e7gjuZ343UzUb5kyTa9Dlc9GR3QcjJK2IGAXJS-7NhxyQ9z9mRn-d-opGw',
    'mp-mtgsig': ' {"a1":"1.0","a2":1649926264998,"a3":"810w5x368uyv5v46zy28662046vx95u4819792z304887978z84v2vux","a4":"d26e99cf8d9355966f607e902e28f829b19490d9f1745df6","a5":"kY+XWng3ZfFdz+jfQ60jAkxteGss0TsbSFzNN319PvCr7LlOa+0ArP1a53YH+u8fZhEKrM0AB6J1uGIiqUBzUbVBNFq38srekhqRWSnwwLdElk1cSBqfvqZpyBXzw6O5Z8paPMN/JhP//OIaZkwh7gCC40DEtdzwsfX/tW9JnMvHVyrwuFZJbnrQGZzofBFn4sgAV7Zsvyq8WYvX/Gnas9wG9kibQesVT7nOHb9D7k4M+YWprYrbpQLXOxNZheBKbckkbhF5YU9gBMfgCxad3Nib8beHkz0LBwifWqYQhmR3w5BrOQelhzjW2dMFtVYMFCwPPq3NtLZQBQ8vpVuf5keVtoqvHkgTijbk+7buMdvwDuYPKp/x8tHXAoIuWhMcOkbzYpZvvWMSXCr=","a6":"w1.0c11c+b0c22E4198iQgBGvVvJWF49Z4xgcwDQ+yEm9AhnuKTXViytBO0zFc5ZbaSqzb30zF0GD5cStoANXjfbhC7JavlDsXVTjEOr08GydnJ0I0Y19PGwIyHa8bRVDT8wIC7H8peK8C64aAJiTwUgOL8BMO57Pk1ka9JwcrekpiElLLE91Idu6UnASgnb5PFfiRheTrFHHV4dSaVWvDLCT1LHjEfqi3l4Ze91KfInQ+b9uV5mU4D+tJ9/xBmphsrSI+AMv/uD4f2wg+jlte8ys923ig3G3wu77oEzHdq1HdKRID8onnce3pcqsikhVbUM8TEAGipP+idKMmXbog0r6oBtV1okFPhmLfkOo8tcA/fdbhSUro8Dcf4VX0M1ncW8QCowxA3vK9dM1iib/h83TOx7RWBhMCummXHUQK/icekKvemTjlyRg1vTWRRFh6ghn8kbyPiVEEDMIrjFP0Z2sJ1w3e72IH2oXbkrT5+BMiQz7HT+G9Mf/ComddX7Ehy7miF7bl7mHGf3HQX7bVc2mYzf5EiuGJ3qPSvxPu6rz3koqmmtBdXAm+SeLrL1L0J8aMBMkBsn5KEZGoeOvlud52UKyQxQuBTqrs/+6mmUecD5V+AhjgbnjnQDPDcUkPiCmuxxB/2VP4/LUambVfLTBwv2dzMev/Z5YpQd6cC12TReejONFThA0kuIeNWmLkYEKaNzgcodlcw7Of8cZ1YYIyswZFn2cP1Sxm9qPLIi2d1xkX1o6vjP1CsnlXo0Jvnt3tpdLrm7pw7m6H4pe8iKH19Fx92CzgH2HrG3ee7LDysJzNEGSSwgHsOxlVFcwKQCBxkJEtkEzxvhfaNPiRayh1zn+rmBI2DqDYxzrogtxnk4bO00gyV6+gddr3s0nvHVZkFPE1+gUDpepswIgAwlXQ==","a7":"wx92916b3adca84096"}',
    'openIdCipher': ' AwQAAABJAgAAAAEAAAAyAAAAPLgC95WH3MyqngAoyM/hf1hEoKrGdo0pJ5DI44e1wGF9AT3PH7Wes03actC2n/GVnwfURonD78PewMUppAAAADhD3/QKlr7e2kQRze8LE1MFOBV85l9reKtVhuu6rwM9rps4JjFzmHjubQ5sKRasdY+evF5fRTAmDg==',
    //'Accept-Encoding': ' gzip,compress,br,deflate',
    'User-Agent': ' Mozilla/5.0 (iPhone; CPU iPhone OS 15_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.18(0x1800123f) NetType/WIFI Language/zh_CN',
    'Referer': ' https://servicewechat.com/wx92916b3adca84096/227/page-frame.html'
  }
}

//BarkId 需要安装bark 后在自己app 里获取
let curl =
  "curl 'https://api.day.app/r5K728ExAaNHi3vj3WXuu6/美团买菜有_乳品类_请尽快下单'"

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
            console.log('🎉 恭喜 发现 美团 有乳品了 请尽快下单!'+ newDate.toLocaleString())
            child_process.exec(curl)
            child_process.exec(curl2)

          } else {
            console.log('美团 当前  乳品 无货15秒后再试...'+ newDate.toLocaleString())
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


console.log('正在检查 美团 是否有可用乳制品...')
loop()
