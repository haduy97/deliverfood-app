// Case 2 for fetching
// import client from "../../sanity";

const PROJECT_ID = "kg4k97u8";
const DATA_SET = "production";

export const categoryData = [
  {
    imgUrl: "https://links.papareact.com/gn7",
    title: "Na",
  },
  {
    imgUrl: "https://links.papareact.com/gn7",
    title: "La",
  },
  {
    imgUrl: "https://links.papareact.com/gn7",
    title: "He",
  },
  {
    imgUrl: "https://links.papareact.com/gn7",
    title: "Im",
  },
  {
    imgUrl: "https://links.papareact.com/gn7",
    title: "SS",
  },
  {
    imgUrl: "https://links.papareact.com/gn7",
    title: "SS",
  },
];

export const rowData = [
  {
    id: 1,
    title: "Nổi bật",
    desc: "Đối tác của chúng tôi",
  },
  {
    id: 2,
    title: "Discount",
    desc: "Hãy cùng tận hưởng những giảm giá hấp dẫn này!",
  },
  {
    id: 3,
    title: "Ưu đãi gần bạn",
    desc: "Tận hưởng quán ăn gần bạn ngay bây giờ",
  },
];

export const CallAPIv2 = async (data) => {
  let QUERY = encodeURIComponent(data);
  let URL = `https://${PROJECT_ID}.api.sanity.io/v2021-10-21/data/query/${DATA_SET}?query=${QUERY}`;
  try {
    const ApiURL = await fetch(URL);
    const responseData = await ApiURL.json();
    return responseData.result;
  } catch (err) {
    console.log(err);
    return;
  }

  // Case 2 fetching
  // const getApi = await client.fetch(dataQuery);
  // return getApi;
};
