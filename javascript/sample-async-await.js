// 코드 카타
// async, await, promise 의 사용법을 익힌다.
// 참고 : https://velog.io/@nemo/async-await
async function getIdToken(){
    return Promise.reject(new Error("네트워크 오류로 인해 아이디 토큰을 가져올 수 없습니다.")); // 실패
    return "ID TOKEN";
}

async function getTokens(str) {
    return str+"\n"+"ACCESS TOKEN AND REFRESH TOKEN"; // 성공
    // Promise 안에서 resolve(str+"\n"+...); 와 동일한 효과를 가진다.
}

function saveTokensAndInfo(str) {
    return str+"\n"+"SAVE TOKENS AND REFRESH TOKEN TO LOCAL STORAGE";
}

const login = getIdToken().then(getTokens).catch(e=>console.log(e.message))
    .then(saveTokensAndInfo)
    .then(console.log);
