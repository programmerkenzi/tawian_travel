import Card from "./Card"


export default ({ items }) => {
    return (
        <section className="px-2">
            <div className="flex flex-row text-blue-500 p-1 text-sm items-center space-x-2 md:text-lg lg:text-xl border-b-[1px] md:p-3">
                <i className="twicon-tapioca text-xl  md:text-2xl lg:text-4xl"></i>
                <span>美食</span>
            </div>


            <div class="py-2  md:py-4 flex flex-row  space-x-2 md:space-x-4 overflow-scroll scrollbar-hide">

                {
                    items.map(item => (
                        <Card imageUrl={item.Picture.PictureUrl1} location={item.Address?.substring(0, 3) || item.City} name={item.Name} key={item.Name} />
                    ))
                }
            </div>

        </section>
    )
}
