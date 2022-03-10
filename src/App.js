/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

function App() {
  const [search, setSearch] = useState("");
  const [data, setData] = useState("");

  useEffect(() => {
    axios.defaults.headers.common["x-api-key"] =
      "494399fc-9a0f-4abc-83c8-5c856ab2334a ";
    // axios
    //   .get(`https://api.thecatapi.com/v1/images/search?breed_ids=${search}`)
    //   .then((e) => setData(e.data));
    axios
      .get(
        `https://api.thecatapi.com/v1/images/search?limit=50&page=10&order=Desc`
      )
      .then((e) => setData(e.data));
  }, [search]);

  return (
    <Container>
      <Header>고냥`s</Header>
      <Main>
        <Title>
          오늘의 <ImportantMark>고양이</ImportantMark>
        </Title>
        <SubTitle>오늘의 고양이는 어떻게 생겼을까요?</SubTitle>
        <Input
          placeholder="검색어를 입력해주세요."
          onChange={(e) => setSearch(e.target.value)}
        />
        <CatWrapper>
          {data && data.map((val) => <Img src={val.url} alt="야옹이" />)}
        </CatWrapper>
      </Main>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

const Title = styled.h1`
  font-weight: 300;
  font-size: 3rem;
  margin-top: 5rem;
  margin-bottom: 0.5rem;
`;

const SubTitle = styled.p`
  font-weight: 400;
  font-size: 1.2rem;
  margin-bottom: 1.5rem;
`;

const ImportantMark = styled.mark`
  background: none;
  color: black;
  font-weight: 600;
`;

const Header = styled.header`
  top: 0;
  width: 100%;
  background-color: #ffffff;
  border-bottom: 1px solid #dbdbdb;
  height: 3.3rem;
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Main = styled.main`
  padding: 0rem 10rem 0rem 10rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Input = styled.input`
  margin-top: 0.8rem;
  margin-bottom: 0.8rem;
  background-color: #f0f0f0;
  border: none;
  border-radius: 0.5rem;
  height: 3rem;
  width: 20rem;
  outline: none;
  padding: 1rem;
  color: white;
  font-family: "Spoqa Han Sans Neo", sans-serif;
  border: 1px solid #f0f0f0;
  transition: border 0.3s ease;
  color: #444444;
  ::placeholder {
    color: #444444;
    font-weight: 400;
  }
  :focus {
    border: 1px solid #f0f0f0;
  }
`;

const CatWrapper = styled.div`
  display: grid;
  grid: ". . .";
`;

const Img = styled.img`
  width: 15rem;
  height: 15rem;
  margin: 2rem;
  border-radius: 1rem;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
`;

export default App;
