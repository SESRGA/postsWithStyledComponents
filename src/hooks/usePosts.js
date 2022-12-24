import {useMemo} from "react"

export const useSortedPosts = (posts, sort) => {
    const sortedPosts = useMemo(() => {
        if(sort) {
            if(isNaN(posts[0][sort])) {
                return [...posts].sort((a, b) => a[sort].localeCompare(b[sort]))
            }
            return [...posts].sort((a, b) => a - b)
        }
        return posts;
    }, [sort, posts])

    return sortedPosts;
}

export const usePosts = (posts, sort, search, userId, idSearch) => {
    const sortedPosts = useSortedPosts(posts, sort)
    const sortedSearchedFilteredPosts = useMemo(() => {
        return sortedPosts.filter(post => 
            (idSearch 
                ? post.id.toString().includes(search) 
                : post.title.includes(search)
            ) 
            && post.userId === (userId || post.userId))
    }, [search, userId, idSearch, sortedPosts])

    return sortedSearchedFilteredPosts;
}