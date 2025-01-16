import fs from "fs";

const loadData = (file) => {
  try {
    const datas = fs.readFileSync(file, "utf8").replace(/\r/g, "").split("\n").filter(Boolean);

    if (datas.length <= 0) {
      console.warn(`Không tìm thấy dữ liệu ${file}`);
      return [];
    }

    return datas;
  } catch (error) {
    console.error(`Không tìm thấy file ${file}`);
    return [];
  }
};

export const accountList = loadData("privateKeys.txt");
