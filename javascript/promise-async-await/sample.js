function promise1() {
    return new Promise((resolve, reject) => {
        resolve('Hello');
    });
}

function promise2(str) {
    return new Promise((resolve,reject)=>{
        if(!str) {
            reject(new Error("Error! : Promise2"));
        }
        resolve(str + " World");
    })
}

function promise3(str) {
    return new Promise((resolve,reject)=>{
        if(!str){
            reject(new Error("Error! : Promise3"));
        }
        resolve(str + "!!!!");
    });
}

const result = promise1()
.then(promise2).catch(console.log)
    .then((value)=>{
        if (value !== "Hello World") {
            value = "Hello World";
        }
        return value;
    })
    .then(promise3).catch(console.log)
    .then(console.log)

function getIdToken(){
    return new Promise((resolve, reject) => {
        resolve("ID TOKEN");
    });
}

function getTokens(str) {
    return new Promise((resolve, reject) => {
        resolve(str+"\n"+"ACCESS TOKEN AND REFRESH TOKEN");
    });
}

function saveTokensAndInfo(str) {
    return new Promise((resolve, reject) => {
        resolve(str+"\n"+"SAVE TOKENS AND REFRESH TOKEN TO LOCAL STORAGE");
    });
}

const login = getIdToken()
    .then(getTokens)
    .then(saveTokensAndInfo)
    .then(console.log);

