import express from "express";
import axios from "axios";
import dotenv from "dotenv";

dotenv.config(); // .env 파일 로드

const router = express.Router();
const URL = "https://xivapi.com";

// Express 서버의 라우터 부분
router.get("/", async (req, res) => {
  try {
    const Key = process.env.API_KEY;
    const itemName = req.query.itemName;
    const filterValue = req.query.filter || ''; // 선택된 필터 값을 가져옴

    // 검색 필터 값 URL 인코딩
    let encodedFilterValue = '';
    
    if (filterValue) {
      encodedFilterValue = encodeURIComponent(`${filterValue}`);
    }

    const response = await axios.get(`${URL}/search?string=${itemName}&language=en&key=${Key}&filters=ClassJobCategory.ID${encodedFilterValue},EquipSlotCategoryTargetID>0`);
    const data = response.data;

    const items = data.Results.map((result) => {
      return {
        id: result.ID,
        icon: result.Icon,
        name: result.Name,
      };
    });

    res.status(200).json({
      items,
      message: "API 호출 완료",
    });
  } catch (error) {
    console.error("에러:", error);
    res.status(500).json({ error: error.message });
  }
});



export default router;
