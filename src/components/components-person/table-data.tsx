"use client";
/* eslint-disable @next/next/no-img-element */
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { criptoDataResponse } from "../models/criptoData";
import { useTableHook } from "./table-data-hook";
import { Input } from "../ui/input";
import { useEffect, useState } from "react";

const TableData = ({ data }: { data: criptoDataResponse[] }) => {
  const { formatDate, redirect } = useTableHook();
  const [value, setValue] = useState("");
  const [filtedData, setFiltedData] = useState(data);

  useEffect(() => {
      setTimeout(() => {
       setFiltedData(() => data.filter((item) => item.name.toLowerCase().includes(value.toLowerCase())))
      },400)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[value])
  return (
    <>
      <div className="py-2 focus:outline-none">
        <Input placeholder="Pesquisar" onChange={(e) => setValue(e.target.value)}/>
      </div>
      <Table>
        <TableCaption>Tabela de criptomoedas</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Imagem</TableHead>
            <TableHead>Nome</TableHead>
            <TableHead>Valor de mercado</TableHead>
            <TableHead>Alta 24h</TableHead>
            <TableHead>Baixa 24h</TableHead>
            <TableHead>Última atualização</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filtedData.map((item) => (
            <TableRow key={item.id} onClick={() => redirect(item.name)}>
              <TableCell>
                <img src={item.image} alt={item.name} width={32} height={32} />
              </TableCell>
              <TableCell>{item.name}</TableCell>
              <TableCell>
                {item.current_price.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </TableCell>
              <TableCell>
                {item.low_24h.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </TableCell>
              <TableCell>
                {item.high_24h.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </TableCell>
              <TableCell>{formatDate(item.last_updated)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
};

export { TableData };
