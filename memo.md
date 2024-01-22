무기들

나이트  = 38
건브 = 149
전사 = 44
암기 = 98

백마 = 53
학자 = 29
점성 = 99
현자 = 181

용기사 = 47
리퍼 = 180
닌자 = 93

사무 = 111
몽크 = 41

음유 = 50
기공사 = 96
무도가 = 150

소환사 = 69
흑마 = 55
적마 = 112

///////////////
장비들

수호자 = 59
치유사 = 64

타격대(몽 사) = 65
학살자(용 닌 리) = 76

정찰대(닌자) = 103
유격대(음유시인 닌자 기공사 무도가) = 66 

마술사 = 63


//////////
악세사리

유격대(음유시인 닌자 기공사 무도가) = 105
정찰대(닌자) = 103
공격대(몽크 용기사 사무라이 리퍼) = 84


///////

무기따로 악세따로 장비따로 나뉘니까 개 싫다 ㅆㅂ
id로 검색말고 name으로 검색하는 법 없나?

////////
해결된듯함 ㅋㅋ
더 간단한걸로 바꿈..

   const response = await axios.get(`${URL}/search?string=${itemName}&language=en&key=${Key}&filters=ClassJobCategory.ID${encodedFilterValue},EquipSlotCategoryTargetID>0`);

   에서

  const response = await axios.get(`${URL}/search?string=${itemName}&language=en&indexes=item,recipe&limit=100&Columns=ItemSearchCategory.ID,ItemUICategory.Name,ItemResult.ItemUICategory.Name,Name,Icon,ID,Url&filters=EquipSlotCategoryTargetID>0&key=${Key}`)
  
  이걸로바꿈.

  ClassJobCategory.ID 는 직업의 id별로 나뉘어져서 암흑기사 직업 고르면 무기랑 방어구 같이나오는게아니라 암흑기사 무기 따로 방어구 따로 장신구 따로 나오게 분리되어있어서 fillter하기가 힘듦.

  ItemUICategory,ItemSearchCategory 으로 하면, 무기랑 방어구 같이 다 검색이 되고, ItemUICategory.Name으로 각 필터할 문자를 보여주기 때문에 그걸로 필터링 하면 될듯?

  -> 다 찾아보니까 얘네들도 무기명에만 직업이름 해놨기 때문에, 기존 url에 fillter를 넣는것 말고, get값 이름 혹은 id를 보고 필터하는 방식으로 변경.

  ->> ClassJobCategory.Name 이 적용되는걸 확인했으니 이걸로 분류해보자!!

  ////////////////////////

  수호자 -  59

  나이트 - Gladiator's / Shield / 38 / GLA PLD
  전사 - Marauder's / 44 / MRD WAR
  암흑기사 - Dark Knight's / 98 / DRK
  건브레이커 - Gunbreaker's / 149 / GNB

  치유사 - 64

  백마도사 - Two–handed Conjurer's / 53 / CNJ WHM
  학자 - Scholar's / 29 / SCH
  점성술사 - Astrologian's / 99 / AST
  현자 - Sage's / 181 / SGE
  
  학살자(용 닌 리) - 76
  공격대(몽 용 사 리) - 84
  정찰대(닌) - 103

  용기사 - Lancer's / 47 / LNC DRG
  리퍼 - Reaper's / 180 / RPR
  닌자 - Rogue's / 93 / ROG NIN
  
  타격대 - 65

  몽크 - Pugilist's / 41 / PGL MNK
  사무라이 - Samurai's / 111 / SAM
   
  유격대 - 66 / 105(악세)

  음유시인 - Archer's / 50 / ARC BRD
  기공사 - Machinist's / 96 / MCH
  무도가 - Dancer's / 150 / DNC

  마술사 - 63
  소환사 - Arcanist's / 69 / ACN SMN
  흑마도사 - Two–handed Thaumaturge's / 55 / THM BLM
  적마도사 - Red Mage's / 112 / RDM


  무기 - ㅇㅇㅇ's Arm
  머리 - Head
  몸통 - Body
  손 - Hands
  다리 - Legs
  발 - Feet
  귀걸이 - Earrings
  목걸이 - Necklace
  팔찌 - Bracelets
  반지1 - Ring
  반지2 - Ring