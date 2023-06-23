
import React from 'react';

const WritePage = () => {

const handWrite = () => {
//ListPage의 setPosts에 무엇을 담아야하는가
let post = {id:6, title:"input값"};

}

    return (
        <div>
            <h1>글쓰기 페이지</h1>
            <hr />
            <form>
                <input type='text' placeholder='제목을 입력하세요...' />
                <button type='button' onClick={handWrite}>글쓰기</button>
            </form>
        </div>
    );
};

export default WritePage;