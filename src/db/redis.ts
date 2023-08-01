import redis, { createClient } from "redis"


let client=createClient();//{url if redis is present in remote server}
export const redFun=()=>{

    
    client.connect().then(()=>{
        console.log("Redis Connected")
    });

}
export default client

// let redisClient: any;



// export function connection() {
//     (async() => {
//         redisClient = redis.createClient();
//         redisClient.on("error", (error: any) => {console.error(`Error, ${error}`)});
//         await redisClient.connect();
//         console.log("redis connected successfully");
//     })
// }

// export default redisClient;