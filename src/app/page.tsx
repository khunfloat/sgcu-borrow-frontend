"use client";

import SgcuLogo from "#/images/sgculogo.png";
import Cart from "@/components/Cart";
import Itemlist from "@/components/ItemList";
import { CartProvider } from "@/utils/cart";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const items = [
    {
      item_id: 1,
      item_name: "Pencil",
      current_amount: 100,
      img_url:
        "https://media.allonline.7eleven.co.th/pdmain/357812_01_pencil_yoya.jpg",
    },
    {
      item_id: 2,
      item_name: "Pencil",
      current_amount: 100,
      img_url:
        "https://image.makewebcdn.com/makeweb/m_1920x0/QCaGJLM49/1/%E0%B9%80%E0%B8%84%E0%B8%A1%E0%B8%B5%E0%B8%8A%E0%B9%89%E0%B8%B2%E0%B8%87.jpg",
    },
    {
      item_id: 3,
      item_name: "Pencil",
      current_amount: 100,
      img_url:
        "https://down-th.img.susercontent.com/file/dd32d263b8ceb89f533682348594b66b",
    },
    // {
    //   item_id: 4,
    //   item_name: "Pencil",
    //   current_amount: 100,
    //   img_url: "https://inwfile.com/s-ge/0x4m3q.jpg",
    // },
    {
      item_id: 5,
      item_name: "Pencil",
      current_amount: 100,
      img_url:
        "https://www.bbblogr.com/wp-content/uploads/2016/02/Zenith-Plier-Stapler-520-25.jpg",
    },
    {
      item_id: 6,
      item_name: "Pencil",
      current_amount: 100,
      img_url:
        "https://down-th.img.susercontent.com/file/8d1527c9dd73a6b99d11fd2bcdabdf0f",
    },
  ];
  return (
    <CartProvider id="items">
      <div className="flex flex-col items-center">
        {/* Title */}
        <div className="flex flex-col items-center gap-y-2">
          <Image src={SgcuLogo} height={125} alt="SGCU logo" />
          <p className="text-lg font-bold text-white">ระบบยืม-คืนพัสดุ อบจ</p>
        </div>

        {/* menu */}
        <div className="flex flex-col gap-y-2 pt-5">
          <div className="flex gap-2">
            <div className="bg-[#FCA758] p-2 rounded-full text-sm text-black text-center w-28">
              <Link href="/allstuff">พัสดุทั้งหมด</Link>
            </div>
            <div className="bg-[#C7EC96] p-2 rounded-full text-sm text-black text-center w-28">
              <Link href="/borrowform">ยืมเลย!</Link>
            </div>
          </div>
          <div className="flex gap-2">
            <div className="bg-[#BDDCE8] p-2 rounded-full text-sm text-black text-center w-28">
              <Link href="/login">ประวัติการยืม</Link>
            </div>
            <div className="bg-[#E3E3E3] p-2 rounded-full text-sm text-black text-center w-28">
              <Link href="/location">location</Link>
            </div>
          </div>
        </div>

        {/* frequnce */}
        {/* <div className="flex flex-col items-center gap-y-3 pt-5 pb-5">
         */}

        <p className="text-lg font-semibold text-white pt-5 pb-5">
          รายการยืมบ่อย
        </p>
        <Itemlist items={items} />

        {/* footer */}
        <div className="fixed bottom-0 bg-white h-32 w-full rounded-tl-3xl rounded-tr-3xl px-5 pt-5">
          <div className="bg-[#C7EC96] h-10 text-black rounded-full flex justify-center items-center">
            <p>ยืมเลย!</p>
          </div>
          <p className="text-center pt-3 text-xs text-gray-500">
            <Link href="/">Developed by Niccalodon</Link>
          </p>
        </div>
      </div>

      <Cart />
    </CartProvider>
  );
}
