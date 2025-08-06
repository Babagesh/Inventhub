import Search from '../components/Search'
import {useState, useEffect} from 'react'
import {supabase} from '../client'
import Card from '../components/Card'

const Home = () => {
    const [posts, setPosts] = useState([])

    const [filters, updateFilters] = useState({
        search: '',
        filter: '',
        sort : ''
    })

    const filterPosts = (filters) => {
        updateFilters(filters)
    }
    useEffect(() => {
        const getPosts = async () => {
            if(filters.filter == 'popularity')
            {
                if(filters.sort == 'ascending')
                {
                    const {data} = await supabase
                    .from('Inventions')
                    .select()
                    .order('stars', {ascending: true});
                    setPosts(data)

                }
                else if(filters.sort == 'descending')
                {
                    const {data} = await supabase
                    .from('Inventions')
                    .select()
                    .order('stars', {ascending: false});
                    setPosts(data);
                }
            }
            else if(filters.filter == 'creationTime')
            {
                if(filters.sort == 'ascending')
                {
                    const {data} = await supabase
                    .from('Inventions')
                    .select()
                    .order('created_at', {ascending: true});
                    setPosts(data)
                }
                else if(filters.sort == 'descending')
                {
                    const {data} = await supabase
                    .from('Inventions')
                    .select()
                    .order('created_at', {ascending: false});
                    setPosts(data)
                }
                
            }
            else
            {
                const {data} = await supabase
                .from('Inventions')
                .select()
                console.log(data)
                setPosts(data);
            }
        }
        getPosts();
    }, [filters])

    return (
        <div className = 'flex flex-col items-center '>
            <h1 className = 'font-sans text-5xl subpixel-antialiased font-semibold'> Build together, one block at a time</h1>
            <h2 className = 'font-sans text-3xl subpixel-antialiased my-4'> Explore ideas and make them a reality together! </h2>
            <Search 
                submit={filterPosts}
            />
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 w-full px-4'>
                {
                    posts.filter(post => {
                        let keyword = filters.search.toLowerCase();
                        return keyword != '' ? post.name.toLowerCase().includes(keyword) : true;
                    }).map(post => {
                        return (
                        <div key = {post.id} className = ''>
                            <Card 
                                invention = {post}
                            />
                        </div>
                        );
                    }
                    )
                }
            </div>
        </div>
    )
}

export default Home;