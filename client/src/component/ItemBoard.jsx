import React from 'react'
import ItemList from './ItemList'
import styled from 'styled-components'

const BoardDG = styled.div`
  width: 1280px; height: 720px;
  border-color: rgb(128,128,128);
  border-radius: 10px;
  border-style: solid;
  box-shadow: rgb(123,117,94) 2px 3px .2px -2px, rgb(24,0,0) -1px -1px .2px 0px ,
   rgb(68,57,39) 1px 0 .2px 0, rgb(148,140,115) 2px 3px .2px -1px, 
   rgb(214,215,185) 0 -3px .2px 0, rgb(148,125,90) -3px 0 .2px 0, 
   rgb(65,48,32) -2px 3px .2px 0, rgb(65,48,32) 2px 3px .2px 0, 
   rgb(118,103,73) 2px 0 .2px 0, rgb(214,215,185) 1px -3px .2px 0, 
   rgb(84,62,34) 3px -2px .2px 0, rgb(20,6,6) 0 0 1.2px 2px, 
   rgb(50,47,37) 0 0 2px 3px, rgb(119,121, 119) 0 1px .2px 0 inset, 
   rgb(39,39,39) -1px -1px .2px 0 inset, rgba(39,39,39,0.43) 1px 0 .2px 0px inset;
   background: linear-gradient(rgb(92,90,92) 0%, rgb(49,49,49) 7.2%) left top / auto repeat scroll border-box border-box;
   box-sizing: border-box;
   overflow: hidden;
`;
const Header = styled.div`
  width: 1240px;
  height: 43px;
  margin: auto;
  border-bottom: 1px solid #161616;
  box-shadow: #161616 0px 1px, #524D52 0px 2px, #5B5E5B 0px 3px;
  & > p{
    font-size: 24px;
    line-height: 43px;
    color: #ccc;
    
  }
`
function ItemBoard() {
  return (
    <BoardDG>
      <Header>
        <p>아이템 검색</p>
      </Header>
      <ItemList/>
    </BoardDG>
  )
}

export default ItemBoard