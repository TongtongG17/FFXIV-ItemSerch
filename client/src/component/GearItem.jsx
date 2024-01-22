// GearItem.js
import React from 'react';
import styled from 'styled-components';

const GW = styled.li`
  font-size: 16px;
  display: flex;
  align-items: center;
  gap: 10px;
`;
const GearIcon = styled.img`
  width: 40px; height: 40px;
`;
function GearItem({ item }) {
  if (!item) {
    return null; // 아이템이 없을 경우 렌더링하지 않음
  }

  return (
    <>
      <GW>
        <GearIcon src={`https://xivapi.com${item.icon}`} alt={`ID ${item.id}`} /> 
        <p>{item.name} 템렙:{item.levelItem} 레벨:{item.levelEquip} 부위: {item.category}</p> 
      </GW>
    </>
  );
}

export default GearItem;
