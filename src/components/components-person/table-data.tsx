"use client";
/* eslint-disable @next/next/no-img-element */
import Loading from "@/app/loading";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import useCryptoService from "@/services/ctypodate.service";
import { parseAsInteger, useQueryState } from "nuqs";
import { useEffect, useState } from "react";
import { criptoDataResponse } from "../models/criptoData";
import { Input } from "../ui/input";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "../ui/pagination";
import { useTableHook } from "./table-data-hook";

const TableData = ({ data }: { data: criptoDataResponse[] }) => {
  const {
    formatDate,
    redirect,
    page,
    setPage,
    loading,
    value,
    nextPage,
    previusPage,
    setValue,
    setFiltedData,
    filtedData,
    changePage
  } = useTableHook();

  useEffect(() => {
    setTimeout(() => {
      setFiltedData(() =>
        data.filter((item) =>
          item.name.toLowerCase().includes(value.toLowerCase())
        )
      );
      setPage(1);
    }, 400);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  useEffect(() => {
    changePage();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <div className="py-2 focus:outline-none">
            <Input
              value={value}
              placeholder="Pesquisar"
              onChange={(e) => setValue(e.target.value)}
            />
          </div>
          <div></div>
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
              {filtedData?.map((item: any) => (
                <TableRow key={item.id} onClick={() => redirect(item.name)}>
                  <TableCell>
                    <img
                      src={item.image}
                      alt={item.name}
                      width={32}
                      height={32}
                    />
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
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious href="#" onClick={previusPage} />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#" onClick={() => setPage(page)}>
                  {page}
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationNext onClick={nextPage} href="#" />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
          <div className="text-center">
            <code className="text-sm text-red-400">
              Esta página serve como um exemplo para demonstrar conhecimentos em
              paginação e renderização no lado do servidor. Devido às limitações
              da API gratuita da CoinGecko, pode haver momentos em que a
              funcionalidade não esteja disponível.
            </code>
          </div>
        </>
      )}
    </>
  );
};

export { TableData };
