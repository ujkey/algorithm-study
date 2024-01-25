// 투포인터 알고리즘 예제_1
// 원소의 합이 x인 연속 부분배열의 개수 구하기
// 완전탐색 성능 개선 방법

// [AS-IS]완전탐색 솔루션
function solutionA(arr, x) {
    let answer = 0;

    for(let i=0; i< arr.length; i++) {
        let sum = 0;
        for(let j=0; j<arr.length; j++) {
            sum+=arr[j];
            if(sum>x) break;
            else if(sum===x) {
                answer++;
                break;
            }
        }
    }

    return answer;
}

// [TO-BE] 투포인터 솔루션
function solutionB(arr, x) {
    let answer = 0; //count
    let lp = 0;
    let rp = 0;
    let sum = 0;

    while(rp<=arr.length) {
        if(sum === x) {
            answer++;
            sum-=arr[lp++];
        } else if(sum<x) {
            sum+=arr[rp++];
        } else {
            sum-=arr[lp++];
        }
    }

    return asnwer;
}

solutionA([1, 3, 6, 5, 2, 7, 9], 9); // 3 {3, 6},{2, 7}, {9}