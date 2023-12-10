const { MongoClient } = require('mongodb');

async function main() {
    const uri = "mongodb://localhost:27017"; // MongoDB 地址
    const client = new MongoClient(uri);

    try {
        await client.connect(); // 连接到 MongoDB

        console.log("Connected to MongoDB");
        // 你可以在此处执行数据库操作，例如插入、查询等

    } catch (e) {
        console.error(e);
    } finally {
        await client.close(); // 关闭连接
    }
}

main().catch(console.error);
