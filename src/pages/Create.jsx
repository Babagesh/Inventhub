import {supabase} from '../client'

const Create = () => {

    const submit = async (e) => {
        e.preventDefault();
        let formData = new FormData(e.target);

        const formObject = {};
        for(let[key, value] of formData.entries())
        {
            formObject[key] = value;
        }
        await supabase
        .from('Inventions')
        .insert(formObject)
        window.location = '/'
    }

    return (
        <div className = 'flex flex-col items-center'>
            <form className = 'bg-white border-2 border-gray-200 rounded-lg shadow-lg p-8 flex flex-col items-center gap-6' onSubmit = {submit}>
                <input type = 'text' placeholder = 'Name:' name = 'name' className = 'w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent'/>
                <textarea placeholder = 'Description: ' name = 'description' rows={4} className = 'w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent'/>
                <input type = 'url' name = 'image' placeholder = 'Image URL'/>
                <button type='submit' className='w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-200'> Create </button>
            </form>
        </div>
    );
}

export default Create;