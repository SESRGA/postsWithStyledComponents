import { getPagesArray } from '../utils/pages'
import { useMemo } from "react"
import { MyButton } from './StyledComponents/myButton'
import { Flex } from './StyledComponents/flex'

export const Pagination = ({totalPages, page, changePage}) => {
    let pagesArray = useMemo(() => getPagesArray(totalPages), [totalPages])
    return (
        <Flex>
            {pagesArray.map(p => {
                return (
                    <MyButton 
                        key={p} 
                        onClick={() => changePage(p)}
                        height='30px'
                        width='30px'
                        background={page === p ? 'darkblue' : null}
                        color={page === p ? 'white' : null}
                    >
                        {p}
                    </MyButton>
                )
            })}
        </Flex>
    )
}