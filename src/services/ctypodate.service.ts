import { criptoDataResponse } from "@/components/models/criptoData";

export default function useCryptoService() {
  async function getCryptoData(page: number = 1): Promise<criptoDataResponse[]> {
    const res = await fetch(
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=brl&order=market_cap_desc&page=${page}&per_page=10`,
    );
    if (!res.ok) {
      throw new Error("Falha ao buscar dados");
    }

    const data = await res.json();
    return data;
  }
  return {
    getCryptoData
  }

}
