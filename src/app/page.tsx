import { TableData } from "@/components/components-person/table-data";
import { criptoDataResponse } from "@/components/models/criptoData";
import Table from "./table/page";
import { Button, buttonVariants } from "@/components/ui/button";
import Link from "next/link";


export default function Home() {
  return (
    <main className=" h-3/4 flex flex-col items-center justify-center gap-10">
      <div>
        <h1 className="text-3xl bolder">Tabela de criptomoedas</h1>
      </div>
      <div>
      <Link href={"/table"} className={buttonVariants({ variant: "default" })}>Ir para a tabela</Link>
      </div>
    </main>
  );
}
