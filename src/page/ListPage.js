import React, { useState } from 'react';
import styled from 'styled-components';

// styled-components version6이후로 설치문제발생 npm install styled-components@5.3.10 설치
const StyldeitemBoxDiv = styled.div`
display: flex;
justify-content: space-between;
border:2px solid black;
padding: 10px;
height: 100px;
margin: 20px;
align-items: center;
`

const ListPage = () => {

const [posts, setPosts] = useState([
    {id:1, title: "내용1"},
    {id:2, title: "내용2"},
    {id:3, title: "내용3"},
    {id:4, title: "내용4"},
    {id:5, title: "내용5"},
]);



    return (
        <div>
            <h1>리스트 페이지</h1>
            <hr />
            {posts.map((post) => (
            <StyldeitemBoxDiv key={post.id}>
                <div>
                번호:{post.id}  제목:{post.title}
                </div>
                <button>삭제</button>
                </StyldeitemBoxDiv>
                ))}
        </div>
    );
};

export default ListPage;