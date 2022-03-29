import React from 'react';
import styled from 'styled-components';

const PageWrapper=styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  `;

const Wrapper = styled.div`
    width: 1248px;    
`;

interface TemplateProps {
    children: React.ReactNode;
}

const Template = ({children}:TemplateProps) => {
    return (
        <PageWrapper>
            <Wrapper>
                {children}
            </Wrapper>
        </PageWrapper>
    );
};

export default Template;