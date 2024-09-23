export default function Promo() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-[1fr_1.5fr] border p-4 rounded-lg bg-orange-400">
      <div className="flex justify-center items-center">
        <img
          className="w-full max-w-xs md:max-w-md"
          src="https://haus.co.id/assets/mobile_mockup-Ckntbs4h.png"
          alt="phone"
        />
      </div>
      <div className="flex flex-col justify-center p-4">
        <span className="mt-2 text-start text-4xl font-extrabold md:text-3xl text-[rgb(97,32,144)]">
          Haus Mobile App For Order
        </span>
        <p className="mt-6 text-2xl font-medium text-[rgb(97,32,144)]">
          Dapatkan Voucher Menarik dan Ekstra Promo!
        </p>
        <ul className="mt-3 gap-y-2 text-xl font-medium list-disc pl-5 md:text-2xl text-[rgb(97,32,144)]">
          <li>Lebih Mudah Pesan dengan Aplikasi haus! Kamu bisa pilih pesanan Delivery, Pickup, atau Dine In untuk Skip antrian</li>
          <li>Pesan Menu Favorit kamu dari toko terdekat</li>
        </ul>
        <div className="grid grid-flow-col auto-cols-max gap-11 mt-10">
          <img src="https://haus.co.id/assets/googleplay2-C_1IKEbM.png" alt="" width={220} />
           <img src="https://haus.co.id/assets/appstore2-ClwZ1Ytl.png" alt="" width={170} />
        </div>
      </div>
    </div>
  );
}
