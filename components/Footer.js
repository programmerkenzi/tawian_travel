export default (params) => {
    return (
        <footer className="w-full bg-gray-100 fixed bottom-0 ">
            <div className="container mx-auto py-2 h-9 flex flex-wrap flex-col sm:flex-row ">
                <p className="text-g text-sm text-center sm:text-left text-gray-400">© 2021 Dev —
                    <a href="https://github.com/programmerkenzi" rel="noopener noreferrer" className="text-gray-400 ml-1" target="_blank">@Kenzi</a>
                </p>
                {/* <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
                    <a className="text-gray-200">
                        <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                        </svg>
                    </a>

                </span> */}
            </div>
        </footer>
    )
};
