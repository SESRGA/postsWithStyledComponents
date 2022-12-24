import React, {useState} from "react";
import { PostItem } from '../Components/postItem';
import { PostComponent } from "./postComponent";
import { Flex } from "./StyledComponents/flex";
import { MyTitle } from "./StyledComponents/myTitle";
import { Tabs } from "./tabs/tabs";

export const PostList = ({posts, remove, limit, page, currentTab, setCurrentTab}) => {
    const [openedPosts, setOpenedPosts] = useState(new Set())
    const postsMap = new Map()
    posts.forEach(post => {
        postsMap.set(post.id, post)
    });

    if(!posts.length) {
        return <MyTitle>Список постов пуст</MyTitle>
    }

    const removeTab = (id) => {
        setOpenedPosts(prev => new Set([...prev].filter(i => i !== id)))
        if(id === currentTab) {
            setCurrentTab(null)
        }
    }
    const openTab = (id) => {
        setCurrentTab(id)
        setOpenedPosts(prev => new Set(prev.add(id)))
    }
    
    const currentPosts = []
    for (let i = (page - 1) * limit; i < Math.min(page * limit, posts.length); i++) {
        currentPosts.push(posts[i])
    }
    return (
        <Flex direction='column'>
            {
                openedPosts.size
                    ? <Tabs 
                        ids={openedPosts} 
                        removeTab={removeTab}
                        currentTab={currentTab}
                        setCurrentTab={setCurrentTab}
                      />
                    : <MyTitle>Список постов</MyTitle>
            }
            {
                currentTab === null
                ? currentPosts.map((post, id) => 
                    <PostItem 
                        post={post} 
                        remove={remove} 
                        key={post.id} 
                        id={(page - 1) * limit + id}
                        openPost={openTab}
                    />
                  )  
                : <PostComponent post={postsMap.get(currentTab)} />   
            }
        </Flex>
    )
}