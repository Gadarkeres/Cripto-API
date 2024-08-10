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

const TableData = ({ data }: { data: criptoDataResponse[] }) => {
  return (
    <Table>
      <TableCaption>Tabela de criptomoedas</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Imagem</TableHead>
          <TableHead>Nome</TableHead>
          <TableHead>Valor de mercado</TableHead>
          <TableHead>Alta 24h</TableHead>
          <TableHead>Baixa 24h</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((item) => (
          <TableRow key={item.id}>
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
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export { TableData };
