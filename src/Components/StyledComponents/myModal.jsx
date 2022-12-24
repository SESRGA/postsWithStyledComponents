import React from "react";
import styled from "styled-components"

const StyledModal = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: ${({visible}) => (visible ? 'flex' : 'none')};
    background: rgba(0, 0, 0, 0.5);
    justify-content: center;
    align-items: center;
`

const StyledModalContent = styled.div`
    background: white;
    padding: 20px;
    border-radius: 20px;
    min-width: 250px;
    border: #FF7700 solid 2px;
    color: darkblue;
`

export const MyModal = ({children, visible, setVisible}) => {
    return (
        <StyledModal onClick={() => setVisible(false)} visible={visible}>
            <StyledModalContent onClick={e => e.stopPropagation()}>
                {children}
            </StyledModalContent>
        </StyledModal>
    )
}