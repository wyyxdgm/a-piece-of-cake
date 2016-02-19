if ($VAL >= 0) {
    //TO DO : 券码商家进入成功，返回券码
} else if ($VAL === "1") {
    //TO DO : 非券码商家进入成功，返回
} else if ($VAL === "0") {
    //TO DO : 请重试
} else if ($VAL === "-1") {
    //TO DO : 该用户今天已经进入3次
} else if ($VAL === "-2") {
    //TO DO : 没有此商家
} else if ($VAL === "-3") {
    //TO DO : 商家已过期
} else if ($VAL === "-4") {
    //TO DO : 该商家不是券码商户，并已领取过
} else if ($VAL === "-5") {
    //TO DO : 用户没有做手机认证
} else if ($VAL === "-6") {
    //TO DO : 用户没有做身份认证
} else {
    //TO DO : 该商家是券码商户，今天已领取
}