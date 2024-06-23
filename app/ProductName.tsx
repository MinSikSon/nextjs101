// 'use client'

// import { useRef } from "react";
// import { initializeProduct, Product, setProductName } from "../lib/features/product/productSlice";
// import { useAppDispatch, useAppSelector, useAppStore } from "../lib/hooks";

// export default function ProductName({ product }: { product: Product }) {
//     // Initialize the store with the product information
//     const store = useAppStore();
//     const initialized = useRef(false);
//     if (!initialized.current) {
//         store.dispatch(initializeProduct(product));
//         initialized.current = true;
//     }

//     const name = useAppSelector(state => state.product.name);
//     const dispatch = useAppDispatch();

//     return (
//         <input
//             value={name}
//             onChange={e => dispatch(setProductName(e.target.value))}
//         />
//     )
// }