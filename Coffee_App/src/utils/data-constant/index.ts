//cmt: lấy unique name từ 1 mảng object rồi trả về mảng mới là mảng name cuối cùng
export const getCategoriesCoffee = (data: any) => {
  let temp: any = {};
  data.forEach((item: any) => {
    if (temp[item.name] === undefined) {
      temp[item.name] = 1;
    } else {
      temp[item.name] += 1;
    }
  });
  let categoriesList = Object.keys(temp);
  categoriesList.unshift('All');
  return categoriesList;
};

//cmt: lấy danh sách sản phẩm và lọc sản phẩm dựa trên category name
export const getCoffeeList = (category: string, data: any) => {
  if (category === 'All') {
    return data;
  } else {
    let list = data.filter((item: any) => item.name === category);
    return list;
  }
};
