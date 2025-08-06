const Search = ({submit}) => {

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const filters = {
            search: formData.get('search') || '',
            filter: formData.get('filter') || '',
            sort: formData.get('sort') || ''
        }
        submit(filters)
    }
    return (
        <form onSubmit = {handleSubmit} className = 'flex flex-row my-8 gap-5'>
            <input name='search' placeholder = 'Search for a genre' type = 'text' className = 'rounded-lg border-2 outline w-lg h-10'/>
            <select name = 'filter'>
                <option value=""> Filter</option>
                <option value="popularity"> Popularity </option>
                <option value="creationTime"> Creation Time</option>
            </select>
            <select name='sort'>
                <option value="">Sort</option>
                <option value="ascending">Ascending</option>
                <option value="descending">Descending</option>
            </select>
            <button type='submit'> Submit </button>
        </form>
    );
}



export default Search;