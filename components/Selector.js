import { ChevronDownIcon } from '@heroicons/react/solid';
export default ({ options, value, showOptions, handleOnChange, toggleOptions }) => {
    return (
        <div className={`relative flex flex-col  w-[80px]  items-center  cursor-pointer  transition duration-500 ease-in-out space-y-10  text-gray-600 `}
            onClick={toggleOptions}
        >

            <div flex className={`flex flex-row items-center max-w-full justify-between ${showOptions && ('text-blue-700')}`}>
                <span>{options.filter(option => option.value === value)[0].label}</span>
                <ChevronDownIcon className=' h-[20px] ' />
            </div>

            {showOptions &&

                <ul
                    className="space-y-2 py-1 bg-white shadow rounded-md w-[100px] overflow-y-auto p-5 max-h-[200px]  absolute  scrollbar-hide text-center "
                >
                    {options && options.map(option =>

                        <li

                            onClick={() => handleOnChange(option.value)}

                            className=" cursor-pointer hover:text-blue-700 transition duration-150 ease-in-out"
                        >
                            {option.label}
                        </li>


                    )}
                </ul>
            }
        </div>

    )
}
