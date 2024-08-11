import { func } from "prop-types";

export const useTableHook = () => {
  function redirect(name:string):void{
    if(name){
      window.open(`https://www.google.com/search?q=${name}+crypto`, "_blank")
    } 

  }
  function formatDate (isoString: string): string {
    const date = new Date(isoString);
    const day = String(date.getUTCDate()).padStart(2, '0');
    const month = String(date.getUTCMonth() + 1).padStart(2, '0'); 
    const year = date.getUTCFullYear();
  
    return `${day}/${month}/${year}`;
  }

return{
  redirect,
  formatDate
}

}
