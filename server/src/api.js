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
    const response = await axios.get(`${URL}/search?string=${itemName}&language=en&indexes=item,recipe&limit=100&Columns=ItemUICategory.Name,ItemResult.ItemUICategory.Name,Name,Icon,ID,Url,ClassJobCategory.ID,ClassJobCategory.Name,LevelItem,LevelEquip&filters=EquipSlotCategoryTargetID>0&key=${Key}`)

    const data = response.data;
    const items = data.Results.map((result) => {
      return {
        icon: result.Icon,
        name: result.Name,
        category: result.ItemUICategory.Name,
        jobName: result.ClassJobCategory.Name,
        levelItem: result.LevelItem,
        levelEquip: result.LevelEquip,
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
