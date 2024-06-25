
import { API_URL } from "@/app/(home)/page";

export const fetchStock: any = async () => {
    // console.log(`fetchStock`);
    const res = await fetch(`${API_URL}/stock/financial-info-ncav`);

    return res.json();
}