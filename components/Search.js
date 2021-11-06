import { SearchIcon } from '@heroicons/react/solid'
import { useState } from 'react'
import cities from '../data/city';
import Selector from './Selector';

const searchTypes = [
    { label: '美食', value: 'food' },
    { label: '景點', value: 'spot' },
    { label: '活動', value: 'active' },
]

export default () => {
    const [city, setCity] = useState('Taipei')
    const [type, setType] = useState('food')
    const [query, setQuery] = useState('')
    const [onSelectCity, setOnSelectCity] = useState(false)
    const [onSelectType, setOnSelectType] = useState(false)
    const handleSearch = () => {
    }

    return (
        <div className=" transition-all duration-500 flex items-center w-[95%] sm:w-[80%] md:w-[500px]  h-[30px] lg:h-[50px] outline-none rounded-full  shadow hover:shadow-lg pr-1 ">
            <input
                value={query}
                type="text"
                className=" flex-grow pl-2 lg:pl-5 bg-transparent outline-none text-[5px] lg:text-sm text-gray-600 "
                placeholder={type === 'food' ? '滷肉飯...' : type === 'spot' ? '櫻花...' : '跨年...'}
                onChange={(e) => setQuery(e.target.value)}
            />
            <Selector toggleOptions={() => { setOnSelectCity(!onSelectCity); setOnSelectType(false) }} showOptions={onSelectCity} options={cities} value={city} handleOnChange={(value) => setCity(value)} />
            <Selector toggleOptions={() => { setOnSelectType(!onSelectType); setOnSelectCity(false) }} showOptions={onSelectType} options={searchTypes} value={type} handleOnChange={(value) => setType(value)} />
            <SearchIcon className="transition-all duration-500  lg:inline-flex  text-white text-[50px] h-6 lg:h-[40px]  rounded-full p-1 lg:p-2 cursor-pointer  bg-blue-500 hover:text-blue-700" onClick={() => handleSearch()} />
        </div>
    )
}
