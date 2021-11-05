import Logo from "./Logo"
import Search from "./Search"

export default (params) => {
    return (
        <div className=" fixed flex flex-row w-full h-[80px] bg-gray-50 top-0 shadow-sm space-x-5 pl-4 items-center justify-center">
            <Logo />
            <Search />
        </div>)
}
