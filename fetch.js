const axios = window.axios;

const fetchPairs = async () => {
  const res = axios.get('https://tracker.kyber.network/api/tokens/pairs');
  const result = res.data['ETH_TUSD'];
  const lastPrice = 1/result.lastPrice;
  const node = document.querySelector('.result');
  node.innerHTML = lastPrice;
}
fetchPairs();