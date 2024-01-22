import React, { useCallback, useState } from 'react';
import axios from 'axios';
import GearItem from './GearItem';
import Category from './Category';
import styled from 'styled-components';

const Left = styled.div``;
const Right = styled.div``;

const ListWrap = styled.div`
  display: flex;
  width: 98%;
  height: 94%;
  margin: auto;
  margin-top: 8px;
  gap: 10px;
  &>${Left} {
    flex: .3;
  }
  &>${Right} {
    flex: .8;
    overflow-y: auto;
    &>ul{
      display: flex;
      flex-direction: column;
      gap: 10px;
    }
  }
`;

const Search = styled.input`
  color: white;
  text-indent: 8px;
  border: 1px solid #424242;
  background: #555;
  width: 94%;
  height: 28px;
  font-size: 18px;
  border-radius: 4px;
`;
const SW = styled.div`
  width: 100%;
  height: 100px;
  border-radius: 10px;
  border: 3px solid #514F51;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  margin-bottom: 10px;
  &>p{
    width: 95%;
    font-size: 24px;
    font-weight: 100;
    color: #D8BB7D;
    margin-top: 8px;
  }
`;
const CW = styled.div`
  width: 100%;
  height: 250px;
  border-radius: 10px;
  border: 3px solid #514F51;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const CP = styled.div`
    margin-bottom: 8px;
    font-size: 20px;
    font-weight: 100;
    color: #D8BB7D;
    margin-top: 8px;
`;

function ItemList() {
  // 상태 변수 정의
  const [itemName, setItemName] = useState(''); // 아이템명을 입력하는 input 필드의 상태
  const [items, setItems] = useState([]); // API에서 가져온 아이템 목록
  const [filteredItems, setFilteredItems] = useState([]); // 필터링된 아이템 목록
  const [category, setCategory] = useState(''); // 선택된 카테고리

  // 아이템명 입력값이 변경될 때 호출되는 함수
  const handleChange = (e) => {
    setItemName(e.target.value);
  };

  // Enter 키가 눌렸을 때 아이템 검색을 수행하는 함수
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      getApi(); // getApi 함수 호출
    }
  };

  // 아이템을 검색하는 API를 호출하는 함수
  const getApi = async () => {
    // API 엔드포인트에 GET 요청
    axios.get(`http://localhost:5001?itemName=${itemName}`)
      .then((res) => { //응답 데이터 처리.
        const data = res.data.items;
        setItems(data); // API에서 가져온 아이템 목록 업데이트
        setFilteredItems(data); // 필터링된 아이템 목록 업데이트
      })
      .catch((error) => {
        console.error(error);
      });
  };

  // 카테고리를 선택하여 아이템을 필터링하는 함수
  const filterItems = useCallback((selectedCategory) => {
    if (selectedCategory === category) {
      setFilteredItems(items); // 선택된 카테고리와 현재 카테고리가 동일한 경우 모든 아이템 표시
      setCategory(''); // 카테고리 선택 해제
    } else {
      const filtered = items.filter((item) => item.jobName.includes(selectedCategory)); //includes - 특정 문자열 또는 문자열 일부가 원본 문자열 안에 존재하는지를 확인
      setFilteredItems(filtered); // 선택된 카테고리에 해당하는 아이템만 표시
      setCategory(selectedCategory); // 선택된 카테고리 설정
    }
  }, [category, items]);

  // 컴포넌트 렌더링
  return (
    <ListWrap>
      <Left>
        <SW>
          <p>검색</p>
          <Search
            type="text"
            placeholder="아이템명 입력"
            value={itemName}
            onChange={handleChange}
            onKeyPress={handleKeyPress}
          />
        </SW>
        <CP>분류별 검색</CP>
        <CW>
          <Category onSelect={filterItems} /> {/* 카테고리 필터링 컴포넌트 */}
        </CW>
      </Left>
      <Right>
        <ul>
          {filteredItems.map((item, index) => (
            <GearItem
              key={index}
              item={item}
            />
          ))}
        </ul>
      </Right>
    </ListWrap>
  );
}

export default ItemList;
