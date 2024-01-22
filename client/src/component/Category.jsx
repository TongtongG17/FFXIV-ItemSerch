import React, {useState} from 'react'
import styled from "styled-components";

const CategoryWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(8,30px);
  gap: 10px;
`
const CategoryStyle = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 5px;
  background: radial-gradient(145.26% 135.57% at 0% 0%, #FFF9DD 0%, #FDEFAC 29.17%, #BCA15B 75%, #9E7A2F 100%);

  &.active{
    box-shadow:#313131 0px 0px 0px 2px, rgb(123,117,94) 2px 3px .2px -4px, rgb(24,0,0) -1px -1px .2px 2px ,
   rgb(68,57,39) 1px 0 .2px 2px, rgb(148,140,115) 2px 3px .2px -3px, 
   rgb(214,215,185) 0 -3px .2px 2px, rgb(148,125,90) -3px 0 .2px 2px, 
   rgb(65,48,32) -2px 3px .2px 2px, rgb(65,48,32) 2px 3px .2px 2px, 
   rgb(118,103,73) 2px 0 .2px 2px, rgb(214,215,185) 1px -3px .2px 2px, 
   rgb(84,62,34) 3px -2px .2px 2px, rgb(20,6,6) 0 0 1.2px 2px, 
   rgb(50,47,37) 0 0 2px 3px, rgb(119,121, 119) 0 1px .2px 2px inset, 
   rgb(39,39,39) -1px -1px .2px 2px inset, rgba(39,39,39,0.43) 1px 0 .2px 2px inset;

  }
`;

const jobCategory = [
  {
    jobName: 'GLA',
    iconImg: `${process.env.PUBLIC_URL}/img/Item_Job_Icon/class_job_001.svg`
  },
  {
    jobName: 'PGL',
    iconImg: `${process.env.PUBLIC_URL}/img/Item_Job_Icon/class_job_002.svg`
  },
  {
    jobName: 'MRD',
    iconImg: `${process.env.PUBLIC_URL}/img/Item_Job_Icon/class_job_003.svg`
  },
  {
    jobName: 'LNC',
    iconImg: `${process.env.PUBLIC_URL}/img/Item_Job_Icon/class_job_004.svg`
  },
  {
    jobName: 'ARC',
    iconImg: `${process.env.PUBLIC_URL}/img/Item_Job_Icon/class_job_005.svg`
  },
  {
    jobName: 'CNJ',
    iconImg: `${process.env.PUBLIC_URL}/img/Item_Job_Icon/class_job_006.svg`
  },
  {
    jobName: 'THM',
    iconImg: `${process.env.PUBLIC_URL}/img/Item_Job_Icon/class_job_007.svg`
  },
  {
    jobName: 'ACN',
    iconImg: `${process.env.PUBLIC_URL}/img/Item_Job_Icon/class_job_026.svg`
  },
  {
    jobName: 'ROG',
    iconImg: `${process.env.PUBLIC_URL}/img/Item_Job_Icon/class_job_029.svg`
  },
  {
    jobName: 'PLD',
    iconImg: `${process.env.PUBLIC_URL}/img/Item_Job_Icon/class_job_019.svg`
  },
  {
    jobName: 'WAR',
    iconImg: `${process.env.PUBLIC_URL}/img/Item_Job_Icon/class_job_021.svg`
  },
  {
    jobName: 'DRK',
    iconImg: `${process.env.PUBLIC_URL}/img/Item_Job_Icon/class_job_032.svg`
  },
  {
    jobName: 'GNB',
    iconImg: `${process.env.PUBLIC_URL}/img/Item_Job_Icon/class_job_037.svg`
  },
  {
    jobName: 'WHM',
    iconImg: `${process.env.PUBLIC_URL}/img/Item_Job_Icon/class_job_024.svg`
  },
  {
    jobName: 'SCH',
    iconImg: `${process.env.PUBLIC_URL}/img/Item_Job_Icon/class_job_028.svg`
  },
  {
    jobName: 'AST',
    iconImg: `${process.env.PUBLIC_URL}/img/Item_Job_Icon/class_job_033.svg`
  },  
  {
    jobName: 'SGE',
    iconImg: `${process.env.PUBLIC_URL}/img/Item_Job_Icon/class_job_040.svg`
  },
  {
    jobName: 'DRG',
    iconImg: `${process.env.PUBLIC_URL}/img/Item_Job_Icon/class_job_022.svg`
  },
  {
    jobName: 'NIN',
    iconImg: `${process.env.PUBLIC_URL}/img/Item_Job_Icon/class_job_030.svg`
  },
  {
    jobName: 'RPR',
    iconImg: `${process.env.PUBLIC_URL}/img/Item_Job_Icon/class_job_039.svg`
  },
  {
    jobName: 'MNK',
    iconImg: `${process.env.PUBLIC_URL}/img/Item_Job_Icon/class_job_020.svg`
  },
  {
    jobName: 'SAM',
    iconImg: `${process.env.PUBLIC_URL}/img/Item_Job_Icon/class_job_034.svg`
  },
  {
    jobName: 'BRD',
    iconImg: `${process.env.PUBLIC_URL}/img/Item_Job_Icon/class_job_023.svg`
  },
  {
    jobName: 'MCH',
    iconImg: `${process.env.PUBLIC_URL}/img/Item_Job_Icon/class_job_031.svg`
  },
  {
    jobName: 'DNC',
    iconImg: `${process.env.PUBLIC_URL}/img/Item_Job_Icon/class_job_038.svg`
  },
  {
    jobName: 'SMN',
    iconImg: `${process.env.PUBLIC_URL}/img/Item_Job_Icon/class_job_027.svg`
  },
  {
    jobName: 'BLM',
    iconImg: `${process.env.PUBLIC_URL}/img/Item_Job_Icon/class_job_025.svg`
  },
  {
    jobName: 'RDM',
    iconImg: `${process.env.PUBLIC_URL}/img/Item_Job_Icon/class_job_035.svg`
  },
  {
    jobName: 'BLU',
    iconImg: `${process.env.PUBLIC_URL}/img/Item_Job_Icon/class_job_036.svg`
  },
  {
    jobName: 'CRP',/* 목수 */
    iconImg: `${process.env.PUBLIC_URL}/img/Item_Job_Icon/Hand/class_job_008.svg`
  },
  {
    jobName: 'GSM',/* 보석 */
    iconImg: `${process.env.PUBLIC_URL}/img/Item_Job_Icon/Hand/class_job_011.svg`
  },
  {
    jobName: 'LTW',/* 가죽 */
    iconImg: `${process.env.PUBLIC_URL}/img/Item_Job_Icon/Hand/class_job_012.svg`
  },
  {
    jobName: 'WVR',/* 재봉사 */
    iconImg: `${process.env.PUBLIC_URL}/img/Item_Job_Icon/Hand/class_job_013.svg`
  },
  {
    jobName: 'CUL',/* 요리사 */
    iconImg: `${process.env.PUBLIC_URL}/img/Item_Job_Icon/Hand/class_job_015.svg`
  },
  {
    jobName: 'BSM',/* 대장장이 */
    iconImg: `${process.env.PUBLIC_URL}/img/Item_Job_Icon/Hand/class_job_009.svg`
  },
  {
    jobName: 'ARM',/* 갑주 */
    iconImg: `${process.env.PUBLIC_URL}/img/Item_Job_Icon/Hand/class_job_010.svg`
  },
  {
    jobName: 'ALC',/* 연금술사 */
    iconImg: `${process.env.PUBLIC_URL}/img/Item_Job_Icon/Hand/class_job_014.svg`
  },
  {
    jobName: 'MIN',/* 광부 */
    iconImg: `${process.env.PUBLIC_URL}/img/Item_Job_Icon/Land/class_job_016.svg`
  },
  {
    jobName: 'BTN',/* 원예가 */
    iconImg: `${process.env.PUBLIC_URL}/img/Item_Job_Icon/Land/class_job_017.svg`
  },
  {
    jobName: 'FSH',
    iconImg: `${process.env.PUBLIC_URL}/img/Item_Job_Icon/Land/class_job_018.svg`
  },
];

function Category({ onSelect }) {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategoryClick = (jobName) => {
    setSelectedCategory((prevSelectedCategory) =>
      prevSelectedCategory === jobName ? null : jobName
    );
    onSelect(jobName);
  };
  
  return (
    <div>
      <CategoryWrap>
        {jobCategory.map((category, index) => (
          <CategoryStyle
            key={index}
            onClick={() => handleCategoryClick(category.jobName)}
            className={selectedCategory === category.jobName ? 'active' : ''}
            src={category.iconImg}
          >
          </CategoryStyle>
        ))}
      </CategoryWrap>
    </div>
  );
  
}

export default Category;
