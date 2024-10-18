
let btc = document.getElementById('bitcoin');
let eth = document.getElementById('ethereum');
let doge = document.getElementById('dogecoin');

const fetchCryptoPrices = async () => {
    try {
        const response = await fetch("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,dogecoin&vs_currencies=usd");
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        
        console.log(data);
        
        btc.innerHTML = data.bitcoin.usd.toFixed(2);
        eth.innerHTML = data.ethereum.usd.toFixed(2);
        doge.innerHTML = data.dogecoin.usd.toFixed(2);
    } catch (error) {
        console.error("Error fetching data: ", error);
        btc.innerHTML = "N/A";
        eth.innerHTML = "N/A";
        doge.innerHTML = "N/A";
    }
};

fetchCryptoPrices();
