import { ChevronDownIcon } from '@heroicons/react/solid';
export default ({ options, value, showOptions, handleOnChange, toggleOptions }) => {
    return (
        <div className={`relative flex flex-col w-[60px] mr-2 md:mr-0    md:w-[80px]  text-[3px] sm:text-xs lg:text-base items-center  cursor-pointer  transition duration-500 ease-in-out space-y-10  text-gray-600 `}
            onClick={toggleOptions}
        >

            <div flex className={`flex flex-row items-center max-w-full justify-between ${showOptions && ('text-blue-700 font-semibold')}`}>
                <span>{options.filter(option => option.value === value)[0].label}</span>
                <ChevronDownIcon className='  h-[10px] md:h-[20px] ' />
            </div>

            {showOptions &&

                <ul
                    className="space-y-2 py-[0.5px] md:py-1 bg-white shadow rounded-md  w-[80px] md:w-[100px] overflow-y-auto p-5 max-h-[150px] md:max-h-[200px]  absolute  scrollbar-hide text-center "
                >
                    {options && options.map(option =>

                        <li

                            onClick={() => handleOnChange(option.value)}

                            className=" cursor-pointer hover:text-blue-700 hover:font-semibold transition duration-150 ease-in-out"
                        >
                            {option.label}
                        </li>


                    )}
                </ul>
            }
        </div>

    )
}
