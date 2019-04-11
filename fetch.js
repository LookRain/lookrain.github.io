const axios = window.axios;
const tusd = {
  name: 'tusd', addr: '0x8dd5fbce2f6a956c3022ba3663759011dd51e73e'
};
const dai = {
  name: 'dai', addr: '0x89d24a6b4ccb1b6faa2625fe562bdd9a23260359'
};
const fetchBuy = async (key) => {
  const tusd_buy = await axios.get(`https://api.kyber.network/buy_rate?id=${key.addr}&qty=1`);
  console.log(tusd_buy.data.data);
  const buying_price = 1 / tusd_buy.data.data[0].src_qty;

  const tusd_node = document.querySelector(`.${key.name}_buy`);
  tusd_node.innerHTML = buying_price;
}

const fetchSell = async (key) => {
  const tusd_buy = await axios.get(`https://api.kyber.network/sell_rate?id=${key.addr}&qty=1`);
  console.log(tusd_buy.data.data);
  const buying_price = 1 / tusd_buy.data.data[0].dst_qty;

  const tusd_node = document.querySelector(`.${key.name}_sell`);
  tusd_node.innerHTML = buying_price;
}
fetchBuy(tusd);fetchSell(tusd);fetchBuy(dai);fetchSell(dai);