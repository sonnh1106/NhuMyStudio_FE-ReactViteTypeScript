export default function Navbar() {
  return (
    <div className="bg-transparent text-white font-bold font-sans p-12 absolute z-50 w-full">
      <div className="flex justify-center w-full">
        <div>Logo</div>
        <div className="mx-20">
          <div className="">
            <a href="/vi" className="mx-8 relative group hover:text-gray-600">
              TRANG CHỦ
              <span className="absolute inset-x-0 bottom-0 w-0 h-[2px] bg-white transition-all duration-700 ease-in-out group-hover:w-full group-hover:bg-gray-600 "></span>
            </a>
            <a
              href="/vi/about"
              className="mx-8 relative group hover:text-gray-600"
            >
              Về NHUMY
              <span className="absolute inset-x-0 bottom-0 w-0 h-[2px] bg-white transition-all duration-700 ease-in-out group-hover:w-full group-hover:bg-gray-600 "></span>
            </a>
            <a href="/vi" className="mx-8 relative group hover:text-gray-600">
              KHOẢNH KHẮC
              <span className="absolute inset-x-0 bottom-0 w-0 h-[2px] bg-white transition-all duration-700 ease-in-out group-hover:w-full group-hover:bg-gray-600 "></span>
            </a>
            <a href="/vi" className="mx-8 relative group hover:text-gray-600">
              DỊCH VỤ
              <span className="absolute inset-x-0 bottom-0 w-0 h-[2px] bg-white transition-all duration-700 ease-in-out group-hover:w-full group-hover:bg-gray-600 "></span>
            </a>
            <a href="/vi" className="mx-8 relative group hover:text-gray-600">
              BLOG
              <span className="absolute inset-x-0 bottom-0 w-0 h-[2px] bg-white transition-all duration-700 ease-in-out group-hover:w-full group-hover:bg-gray-600 "></span>
            </a>
            <a href="/vi" className="mx-8 relative group hover:text-gray-600">
              ĐÁNH GIÁ
              <span className="absolute inset-x-0 bottom-0 w-0 h-[2px] bg-white transition-all duration-700 ease-in-out group-hover:w-full group-hover:bg-gray-600 "></span>
            </a>
            <a href="/vi" className="mx-8 relative group hover:text-gray-600">
              LIÊN HỆ
              <span className="absolute inset-x-0 bottom-0 w-0 h-[2px] bg-white transition-all duration-700 ease-in-out group-hover:w-full group-hover:bg-gray-600 "></span>
            </a>
          </div>
        </div>
        <div>Eng|Vie</div>
      </div>
    </div>
  );
}
