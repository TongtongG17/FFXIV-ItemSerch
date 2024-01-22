import React, { useCallback, useState, useEffect } from 'react';
import GlobalStyle from './style/GlobalStyle';
import ItemBoard from './component/ItemBoard';
/* 
할일
1. 스타일 만들기
2. 카테고리 여러개 눌러서 필터링하게 만들기
*/
function App() {
  return (
    <>
    <GlobalStyle/>
    <ItemBoard/>
    </>
  );
}

export default App;
