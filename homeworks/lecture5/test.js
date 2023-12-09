function chizaocan(callback) {
    console.log("吃火腿鸡蛋奶茶牛角面包");
    console.log("我吃一口")

    setTimeout(()=>{
        callback()
    },1000)
    console.log("玩手机")
}

function shoushi() {
    console.log("擦桌子")
}


function wanshouji() {
        console.log("我刷一个视频")

}

function main() {
    chizaocan(shoushi);
}

main()
//


