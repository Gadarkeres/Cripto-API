import { TableData } from "@/components/components-person/table-data";
import useCryptoService from "@/services/ctypodate.service";

export default  async function Table() {
  const crypoService = useCryptoService()
  const data = await crypoService.getCryptoData(1);
  return (
    <main className="flex flex-col items-center justify-between p-24 gap-10">
      <div className="w-full lg:w-4/6">
        <TableData data={data} />
      </div>
    </main>
  );
}
