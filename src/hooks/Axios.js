import { useState, useEffect } from "react";
import axios from 'axios';

export default function CustomUseStateEffectAxios() {
    const [coinDataArray, setCoinDataArray] = useState([])

    useEffect(() => {
        axios
          .get(
            "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=true"
          )
          .then(res => setCoinDataArray(res.data))
          .catch(err => console.log(err));
      }, []);

    return [coinDataArray, setCoinDataArray]
}