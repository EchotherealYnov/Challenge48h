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
                            className={isLargeRow ? 'h-48 md:w-48 md:h-72 object-contain cursor-pointer hover:scale-110 transition transform duration-150 ease-out rounded-lg' : 'absolute w-full h-full object-cover rounded-md hover:brightness-50 z-0'}
                        />
                        <h2 className={`${isLargeRow ? 'hidden' : 'z-50 absolute bottom-5 text-center w-full text-white text-lg font-medium hidden group-hover:block cursor-pointer px-3'}`}>
                            {movie?.title || movie.name || movie.orignal_name } 
                            
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clip-rule="evenodd" />
</svg>

                            
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
  <path fill-rule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clip-rule="evenodd" />
</svg>
                        </h2>
                
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Row
