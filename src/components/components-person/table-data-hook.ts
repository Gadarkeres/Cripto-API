import { parseAsInteger, useQueryState } from "nuqs";
import { func } from "prop-types";
import { useState } from "react";
import { criptoDataResponse } from "../models/criptoData";
import useCryptoService from "@/services/ctypodate.service";
import { toast } from "sonner";

export const useTableHook = () => {
  const [page, setPage] = useQueryState("page", parseAsInteger.withDefault(1));
  const [value, setValue] = useState("");
  const [loading, setLoading] = useState(false);
  const [cache, setCache] = useState<{ [key: number]: criptoDataResponse[] }>(
    {}
  );
  const [filtedData, setFiltedData] = useState<any>();
  const crypoService = useCryptoService();

  function redirect(name: string): void {
    if (name) {
      window.open(`https://www.google.com/search?q=${name}+crypto`, "_blank");
    }
  }
  function formatDate(isoString: string): string {
    const date = new Date(isoString);
    const day = String(date.getUTCDate()).padStart(2, "0");
    const month = String(date.getUTCMonth() + 1).padStart(2, "0");
    const year = date.getUTCFullYear();

    return `${day}/${month}/${year}`;
  }

  const previusPage = () => {
    setValue("");
    if (page == 1 || loading) return;
    else setPage(page - 1);
  };

  const nextPage = () => {
    setValue("");
    if (page == 4 || loading) return;
    else setPage(page + 1);
  };

  const changePage = () => {
    if (cache[page]) {
      setFiltedData(cache[page]);
      setLoading(false);
    } else {
      setLoading(true);
      const fetchData = async () => {
        try {
          const response = await crypoService.getCryptoData(page);
          setCache((prevCache) => ({ ...prevCache, [page]: response }));
          setFiltedData(response);
        } catch (error) {
          toast(
            "Plano de consumo da api excedido. Tente novamente mais tarde." +
              error,
            { duration: 2000 }
          );
          setPage(1);
        } finally {
          setLoading(false);
        }
      };
      fetchData();
    }
  };

  return {
    redirect,
    formatDate,
    setPage,
    page,
    value,
    setValue,
    nextPage,
    previusPage,
    loading,
    setLoading,
    changePage,
    setFiltedData,
    filtedData,
  };
};
