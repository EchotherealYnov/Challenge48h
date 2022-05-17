import { useEffect, useState } from "react";
import axios from "../lib/axios";
import { BeakerIcon } from '@heroicons/react/solid';

function Row({ title, fetchUrl, isLargeRow = false }) {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results)
            return request;
        }

        fetchData();
    }, [fetchUrl]);

    return (
        <div className="p-5">
            <h2 className="text-2xl md:text-4xl font-medium md:mb-5">
                {title}
            </h2>
            <div className="flex space-x-5 py-5 overflow-y-hidden overflow-x-scroll scrollbar-hide pl-5">
                {movies?.map((movie) => (
                    <div
                        className={`${isLargeRow ? 'flex-none h-auto py-6' : 'flex-none group w-80 h-48 hover:scale-110 duration-200 transition transform ease-out cursor-pointer hover:z-20'}`}
                    >
                        <img
                            src="https://i.eurosport.com/2017/10/23/2193314-45823610-2560-1440.jpg"
                            alt={movie?.name}
                            className={isLargeRow ? 'h-48 md:w-48 md:h-72 object-contain cursor-pointer hover:scale-110 transition transform duration-150 ease-out rounded-lg' : 'absolute w-full h-full object-cover  rounded-md hover:brightness-50 z-0'}
                        />
                    
                
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Row
