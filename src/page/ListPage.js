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

const [no, setNo] = useState(6);

const [post, setPost] = useState({
id:no,
title: "",
content: ""
});

const [posts, setPosts] = useState([
    {id:1, title: "제목1", content: "내용1"},
    {id:2, title: "제목2", content: "내용2"},
    {id:3, title: "제목3", content: "내용3"},
    {id:4, title: "제목4", content: "내용4"},
    {id:5, title: "제목5", content: "내용5"},
]);

const handWrite = () => {
    setPosts([...posts, { id: no, title: post.title, content: post.content }]);
    setNo(no + 1);
  };

const handleForm = (e) => {
    console.log(e.target.name);
    console.log(e.target.value);

    // computed property names 문법 (키값 동적할당)
    setPost({...post, [e.target.name]: e.target.value}); // 변수를동적으로만듬 // ...post(기존값을두고 업데이트)
};

const handleDelete = (id) => {
    const updatedPosts = posts.filter((post) => post.id !== id);
    setPosts(updatedPosts);
  };

    return (
        <div>
            <h1>리스트 페이지</h1>
            <form>
                <input type='text' placeholder='제목을 입력하세요...' value={post.title} onChange={handleForm} name='title'/>
                <input type='text' placeholder='내용을 입력하세요...' value={post.content} onChange={handleForm} name='content'/>
                <button type='button' onClick={handWrite}>글쓰기</button>
            </form>
            <hr />
            {posts.map((post) => (
            <StyldeitemBoxDiv key={post.id}>
                <div>
                번호:{post.id} / 제목:{post.title} / 내용:{post.content}
                </div>
                <button onClick={() => handleDelete(post.id)}>삭제</button>
            </StyldeitemBoxDiv>
            ))}
        </div>
    );
};

export default ListPage;