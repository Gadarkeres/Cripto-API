import { criptoDataResponse } from "@/components/models/criptoData";

export default function useCryptoService() {
  async function getCryptoData(): Promise<criptoDataResponse[]> {
    const page = 1;
    const res = await fetch(
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=brl&page=${page}&per_page=15`,
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
