import {
  configureStore,
  combineReducers,
} from "@reduxjs/toolkit";

import { thunk } from "redux-thunk";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

// Customer
import ProductSlice from "./Customer/ProductSlice";
import CartSlice from "./Customer/CartSlice";
import AuthSlice from "./Customer/AuthSlice";
import UserSlice from "./Customer/UserSlice";
import OrderSlice from "./Customer/OrderSlice"; // Este es el correcto
import CouponSlice from "./Customer/CouponSlice";
import ReviewSlice from "./Customer/ReviewSlice";
import WishlistSlice from "./Customer/WishlistSlice";
import CustomerSlice from "./Customer/Customer/CustomerSlice";

// Seller
import sellerSlice from "./Seller/sellerSlice";
import sellerAuthenticationSlice from "./Seller/sellerAuthenticationSlice";
import sellerProductSlice from "./Seller/sellerProductSlice";
import sellerSalesSlice from "./Seller/sellerSalesSlice";


import payoutSlice from "./Seller/payoutSlice";
import transactionSlice from "./Seller/transactionSlice";
import revenueChartSlice from "./Seller/revenueChartSlice";

// Admin
import AdminCouponSlice from "./Admin/AdminCouponSlice";
import DealSlice from "./Admin/DealSlice";
import AdminSlice from "./Admin/AdminSlice";

const rootReducer = combineReducers({
  // customer
  auth: AuthSlice,
  user: UserSlice,
  products: ProductSlice,
  cart: CartSlice,
  orders: OrderSlice, // ← Este es el slice que maneja los pedidos del cliente
  coupone: CouponSlice,
  review: ReviewSlice,
  wishlist: WishlistSlice,
  homePage: CustomerSlice,

  // seller
  sellers: sellerSlice,
  sellerAuth: sellerAuthenticationSlice,
  sellerProduct: sellerProductSlice,
  payouts: payoutSlice,
  transaction: transactionSlice,
  revenueChart: revenueChartSlice,
  sellerSales: sellerSalesSlice,


  // admin
  adminCoupon: AdminCouponSlice,
  adminDeals: DealSlice,
  admin: AdminSlice,
  deal: DealSlice,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof rootReducer>;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
