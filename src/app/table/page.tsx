import { TableData } from "@/components/components-person/table-data";
import { criptoDataResponse } from "@/components/models/criptoData";

async function getCryptoData(): Promise<criptoDataResponse[]> {
  const page = 1;
  const limit = 10;
  const res = await fetch(
    `https://api.coingecko.com/api/v3/coins/markets?vs_currency=brl&page=${page}&per_page=${limit}`
  );
  if (!res.ok) {
    throw new Error("Falha ao buscar dados");
  }

  // atraso
  const data = await res.json();
  return data;
}

export default  async function Table() {
  const data = await getCryptoData();
  return (
    <main className="flex flex-col items-center justify-between p-24 gap-10">
      <div className="w-full lg:w-3/6">
        <TableData data={data} />
      </div>
    </main>
  );
}
