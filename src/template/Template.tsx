import React from 'react';
import styled from 'styled-components';

const PageWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  background-color: #F2F2F2;
  height: 100%;
  
`;

const Wrapper = styled.div`
  width: 1248px;
  margin-top: 50px;

  @media (max-width: 420px) {
    width: 100%;
  }
  
`;

interface TemplateProps {
  children: React.ReactNode;
}

const Template = ({ children }: TemplateProps) => {
  return (
    <PageWrapper>
      <Wrapper>{children}</Wrapper>
    </PageWrapper>
  );
};

export default Template;
