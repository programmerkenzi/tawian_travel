import Logo from "./Logo"
import Search from "./Search"

export default (params) => {
    return (
        <div className=" fixed flex flex-row  w-full h-[50px]  justify-end md:h-[80px] bg-gray-50 top-0 shadow-sm space-x-5 p-2 lg:pl-4 items-center sm:justify-center z-10">
            <Logo />
            <Search />
        </div>)
}
