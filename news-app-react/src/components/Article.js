import React, { memo } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Button from 'components/Button';

function Article({ article }) {
  const { urlToImage, title, source, author, publishedAt, description, url } = article;

  if (!title && !description) {
    return null;
  }

  return (
    <CardBox>
      <Card>
        <ImageWrapper>
          <Image
            src={urlToImage || null} />
        </ImageWrapper>

        <Content>
          <h1>
            {title}
          </h1>

          <p>
            {source.name} | 
            {author || 'author not listed'} | 
            {new Date(publishedAt).toDateString()}
          </p>

          <p>{description}</p>

          <Divider />

          <ActionArea>
            <CardButton
              href={url}
              target='_blank'
              rel='noreferrer'>
              Read
            </CardButton>
          </ActionArea>
        </Content>
      </Card>
    </CardBox>
  );
}

Article.propTypes = {
  article: PropTypes.object.isRequired
};

const CardBox = styled.li`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 4px;
  list-style: none;
`;

const Card = styled.article`
  background-color: #fff;
  border-color: #fff;
  color: rgba(0, 0, 0, .87);
  border-radius: 2px;
  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, .2),
    0 2px 2px 0 rgba(0, 0, 0, .14),
    0 1px 5px 0 rgba(0, 0, 0, .12);
  text-decoration: none;
  margin-top: 2.5vh;
  width: 50%;
  max-height: content;

  @media (max-width: 486px) {
    width: 100%;
  }
`;

const ImageWrapper = styled.section`
  position: relative;
  overflow: hidden;
  z-index: 0;
  padding: 0;
  margin: 0;
  width: 100%;
  padding-bottom: 36.3636%;
`;

const Image = styled.img`
  position: absolute;
  bottom: -53px;
  width: 100%;
  height: auto;
  object-fit: cover;
`;

const Content = styled.section`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  padding: 24px 16px 0;
  margin: 0;
  line-height: 1.5;
  color: rgba(0, 0, 0, .54);
  caret-color: rgba(0, 0, 0, .54);

  h1 {
    font-size: 15px;
    color: rgba(0, 0, 0, .77);
    margin: 0;
    padding-bottom: 8px;
  }

  p {
    font-size: 14px;
    padding: 0;
    margin: 0;
  }

  p + p {
    color: rgba(0, 0, 0, .82);
    caret-color: rgba(0, 0, 0, .82);
    padding-bottom: 16px;
    margin-top: 1px;
  }
`;

const Divider = styled.hr`
  display: block;
  flex: 1 1 0px;
  max-width: 100%;
  height: 0;
  max-height: 0;
  border: solid;
  border-color: rgba(0, 0, 0, .12);
  border-width: thin 0 0;
  overflow: visible;
  padding: 0;
  margin: 0;
`;

const ActionArea = styled.section`
  align-items: center;
  display: flex;
  padding: 8px 0;
`;

const CardButton = styled(Button)`
  margin-left: 16px;
`;

export default memo(Article);
