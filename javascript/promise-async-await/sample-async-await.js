// 코드 카타
// async, await, promise 의 사용법을 익힌다.
// 참고 : https://velog.io/@nemo/async-await
async function getIdToken(){
    let error = new Error("네트워크 오류로 인해 아이디 토큰을 가져올 수 없습니다.");
    error.name = "network-error";
    return Promise.reject(error); // 실패
    return "ID TOKEN";
}

async function getTokens(str) {
    return str+"\n"+"ACCESS TOKEN AND REFRESH TOKEN"; // 성공
    // Promise 안에서 resolve(str+"\n"+...); 와 동일한 효과를 가진다.
}

function saveTokensAndInfo(str) {
    return str+"\n"+"SAVE TOKENS AND REFRESH TOKEN TO LOCAL STORAGE";
}

const login = getIdToken().then(getTokens)
    .then(saveTokensAndInfo)
    .then(console.log)
    .catch(e=>{ // 에러는 then chaining을 통과한다.
        // 에러가 발생하면 그 뒤 then은 무시되고, 가장 가까운 catch에서 에러가 처리된다.
        if (e.name === "network-error") {
            console.log(e.message);
        }
    });
