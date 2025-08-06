import {useParams} from 'react-router-dom'
import {supabase} from '../client'
import {useEffect, useState} from 'react'

const Edit = () => {

    const {id} = useParams();

    const [invention, updateInvention] = useState({})

    useEffect(() => {
        const getInvention = async () => {
            const {data} = await supabase
            .from('Inventions')
            .select()
            .eq('id', id)
            updateInvention(data[0])
        }
        getInvention();
    }, [])

    const editInvention = async (e) => {
        e.preventDefault();
        let formData = new FormData(e.target)

        const formObject = {}

        for(let [key, value] of formData.entries()) {
            formObject[key] = value;
        }
        await supabase
        .from('Inventions')
        .update(formObject)
        .eq('id', id)

        window.location = '/'
    }

    const deleteInvention = async () => {
        await supabase
        .from('Inventions')
        .delete()
        .eq('id', id)

        window.location = '/'
    }
    return (
        <div className='flex flex-col items-center min-h-screen bg-gray-50 py-12'>
            <div className='w-full max-w-md'>
                <h1 className='text-3xl font-bold text-center mb-8 text-gray-800'>
                    Edit Invention
                </h1>
                <form className='bg-white border-2 border-gray-200 rounded-lg shadow-lg p-8 flex flex-col items-center gap-6' onSubmit={editInvention}>
                    <input type='text' placeholder={`Name: ${invention.name}`} name='name' className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent'/>
                    <textarea placeholder={`Description: ${invention.description}`} name='description' rows={4} className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent'/>
                    <input type='url' name='image' placeholder={`URL: ${invention.image}`} className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent'/>
                    <button type='submit' className='w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-200'> Edit Invention </button>
                </form>
                <button onClick={deleteInvention} className='w-full bg-red-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition duration-200 mt-4'> Delete Invention</button>
            </div>
        </div>
    );
}

export default Edit;