// 第一个异步操作
function timeConsumingDivide1(a, b, callback) {
    setTimeout(() => {
        let result = a / b;
        // 假设这里有可能出现的错误
        if (b === 0) {
            console.error("第一步出错：", new Error("第一步除法 除数为0！"));
            return
        }
        console.log("第一步成功：", result);
        callback(result);
    }, 1000);
}

function timeConsumingDivide2(a, b, callback) {
    setTimeout(() => {
        let result = a / b;
        // 假设这里有可能出现的错误
        if (b === 0) {
            console.error("第二步出错：", new Error("第二步除法 除数为0！"));
            return
        }
        console.log("第二步成功：", result);
        callback(result);
    }, 1000);
}


timeConsumingDivide1(1998, 2, (result1) => {
    timeConsumingDivide2(result1, 2, (result2) => {
    })

})

//todo 把这个写成promise