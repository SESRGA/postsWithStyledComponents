import React, { useEffect, useState, useMemo } from 'react';
import PostService from '../API/postService';
import { PostList } from '../Components/postList';
import { PostFilter } from '../Components/postFilter'
import { Pagination } from '../Components/pagination';
import { usePosts } from '../hooks/usePosts';
import { getPagesCount } from '../utils/pages'
import { SelectComponent } from '../Components/selectComponent';
import { useDispatch, useSelector } from 'react-redux';
import { removePostAction } from "../store/postsReducer"
import { MyCheckbox } from '../Components/StyledComponents/myCheckbox';
import { Flex } from '../Components/StyledComponents/flex';
import { MyInput } from "../Components/StyledComponents/myInput";


const HomePage = () => {
    const [filter, setFilter] = useState({sort: "", search: "", userFilter: "", idSearch: false})
    const [totalPagesCount, setTotalPagesCount] = useState(0)
    const [limit, setLimit] = useState(10)
    const [page, setPage] = useState(1)
    const dispatch = useDispatch()
    const posts = useSelector(state => state.posts.posts)
    const [currentTab, setCurrentTab] = useState(null)
    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.search, filter.userFilter, filter.idSearch)

    useEffect(() => {
        dispatch(PostService.getAllPosts())
    }, [])

    useEffect(() => {
        setTotalPagesCount(getPagesCount(sortedAndSearchedPosts.length, limit))
    }, [sortedAndSearchedPosts, limit])

    const removePost = (post) => { 
        dispatch(removePostAction(post.id))
    }

    const changePage = (p) => {
        setPage(p)
    }

    const disabled = useMemo(() => currentTab !== null, [currentTab])   

    return (
        <Flex direction={'column'}>
            <Flex>
                <Flex direction={'column'} align='flex-start'>
                    <MyInput 
                        placeholder="Поиск"
                        value={filter.search}
                        onChange={e => setFilter({...filter, search: e.target.value})}
                        disabled={disabled}
                        border={disabled ? 'gray solid 2px' : ''}
                        color={disabled ? 'gray' : ''}
                    />
                    <MyCheckbox 
                        padding='0 0 0 9px'
                        value={filter.idSearch} 
                        setValue={() => setFilter({...filter, idSearch: !filter.idSearch})}
                        text={'Поиск по id'}
                    />
                    <SelectComponent
                        value={limit}
                        onChange={value => setLimit(value)}
                        defaultValue="Количество постов"
                        options={[
                            {value: 10, name: '10'}, 
                            {value: 25, name: '25'},
                            {value: 50, name: '50'},
                            {value: posts.length, name: 'Показать все'}
                        ]}
                        disabled={disabled}
                        border={disabled ? 'gray solid 2px' : ''}
                        color={disabled ? 'gray' : ''}
                    />
                </Flex>
                <PostFilter 
                    filter={filter} 
                    setFilter={setFilter}
                    disabled={disabled}
                    border={disabled ? 'gray solid 2px' : ''}
                    color={disabled ? 'gray' : ''}
                />
            </Flex>
            <PostList 
                remove={removePost} 
                posts={sortedAndSearchedPosts} 
                limit={limit} 
                page={page}
                currentTab={currentTab} 
                setCurrentTab={setCurrentTab}
            />
            {
                currentTab === null
                ? <Pagination totalPages={totalPagesCount} page={page} changePage={changePage} />
                : null
            }
        </Flex>
    )
}

export default HomePage