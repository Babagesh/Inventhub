import { supabase } from "../client";
import {useState} from 'react'
import {Link} from 'react-router-dom'

const Card = ({invention}) => {

    console.log(invention)
    const [stars, updateStars] = useState(invention.stars)

    return (
        <div className="bg-white border border-gray-300 rounded-lg p-4 shadow-sm">
            <img 
                src={invention.image} 
                className="w-full h-40 object-cover rounded mb-3"
            />
            <p className="font-semibold text-lg mb-2">Name: {invention.name}</p>
            <p className="text-gray-600 mb-3">Description: {invention.description}</p>
            <div className="flex justify-between items-center">
                <button 
                    onClick={async () => {
                        updateStars(stars => stars + 1)

                        await supabase
                        .from('Inventions')
                        .update({stars: stars + 1})
                        .eq('id', invention.id)
                    }}
                    className="bg-yellow-100 hover:bg-yellow-200 px-3 py-1 rounded"
                > 
                    Stars: {stars}
                </button>

                <Link 
                    to={`/edit/${invention.id}`}
                    className="text-blue-600 hover:text-blue-800 underline"
                >
                    Edit
                </Link>
            </div>
        </div>
    );
    
}

export default Card;