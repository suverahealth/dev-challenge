import React, { useState, useEffect, useRef } from 'react';
import debounce from 'debounce';
import styled from 'styled-components';
import SearchIcon from '@material-ui/icons/Search';

import Spinner from 'components/Spinner';
import Article from 'components/Article';

const stage = process.env.NODE_ENV;
const baseURL = `${process.env.APP_SERVICE_URL}${stage}`;

function loadSearchInput(setSearchText) {
  return function(e) {
    e.persist();

    debounce(() => {
      const { value } = e.target;

      setSearchText(value);
    }, 500)();
  }
}

async function loadArticles(type, params, setArticles) {
  setArticles({
    isLoading: true,
    data: [],
    onError: false
  });

  try {
    const response = await fetch(`${baseURL}/articles?type=${type}`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(params)
    });

    if (response.status >= 200 && response.status <= 299) {
      const { articles } = await response.json();

      setArticles({
        isLoading: false,
        data: articles || [],
        onError: false
      });
    }
    else {
      setArticles({
        isLoading: false,
        data: [],
        onError: true
      });
    }
  } catch (error) {
    setArticles({
      isLoading: false,
      data: [],
      onError: true
    });
  }
}

function Home() {
  const defaultContentTitle = 'top UK headlines';
  const searchContentTitle = 'search results for:';
  const inputLabel = 'Filter news by keyword. Advanced: use quotes (\'\') for exact matches, and the + / - symbols for needed / excluded words.';

  const searchInputRef = useRef();

  const [contentTitle, setContentTitle] = useState(defaultContentTitle);
  const [searchText, setSearchText] = useState('');
  const [articles, setArticles] = useState({
    isLoading: true,
    data: [],
    onError: false
  });

  useEffect(() => {
    if(searchText.length > 0) {

      setContentTitle(`${searchContentTitle} ${searchText}`);

      loadArticles('search', { q: searchText }, setArticles);
    }
    else {
      searchInputRef.current.value = '';

      setContentTitle(defaultContentTitle);

      let bodyParam = { country: 'gb' };

      loadArticles('headlines', bodyParam, setArticles);
    }
  }, [searchText]);

  return (
    <HomePage>
      <PageTitle data-testid='search-title'>
        Showing you the {contentTitle}
      </PageTitle>

      <InputGroup
        role='search'
        aria-label='for news articles'>
        <SearchInput
          ref={searchInputRef}
          name='search-input'
          type='text'
          placeholder={inputLabel}
          defaultValue={searchText}
          aria-label={inputLabel}
          data-testid='search-input'
          onChange={loadSearchInput(setSearchText)} />

        <SearchIcon />
      </InputGroup>

      {articles.isLoading === true &&
        <ArticleSpinner label='Loading articles' />}

      {articles.data?.length > 0 &&
        <ArticleList data-testid='article-list'>
          {articles.data?.map((article, index) => (
            <Article key={index} article={article} />
          ))}
        </ArticleList>}

      {articles.onError === true &&
        <PageMessage>
          Network error, try again later :(
        </PageMessage>}

      {articles.onError === false && articles.data?.length === 0 &&
        articles.isLoading === false &&
          <PageMessage>
            Sorry, no news articles are available at moment :(
          </PageMessage>}
    </HomePage>
  );
}

const HomePage = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  max-height: 100%;
  padding: 0 20px 20px;

  @media (max-width: 486px) {
    padding: 10px;
  }
`;

const PageTitle = styled.h1`
  font-weight: 400;
  font-size: 34px;
  line-height: 40px;
  margin: auto;
  margin-bottom: 2.5vh;
  text-overflow: wrap
  width: 100%;
`;

const InputGroup = styled.div`
  position: relative;
  display: inline-grid;
  flex: 1 1 auto;
  width: 100%;

  svg {
    position: absolute;
    top: 50%;
    left: 12px;
    transform: translateY(-50%);
    fill: rgba(0, 0, 0, .44);
  }
`;

const SearchInput = styled.input`
  color: rgba(0, 0, 0, .87);
  line-height: 20px;
  padding: 8px 12px 8px 45px;
  margin: 0;
  min-width: 0;
  max-width: 100%;
  height: 32px;
  background-color: #dcdcdc;
  border-style: none;
  border-radius: 2px;
  font-size: 16px;

  &[placeholder] {
    color: rgba(0, 0, 0, .74);
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  &:focus {
    color: #fff;
    background-color: #424242;
    caret-color: #ee44aa;
    outline: 0;

    ::placeholder {
      color: #fff;
    }

    & + svg {
      fill: #ee44aa;
    }
  }
`;

const PageMessage = styled.h2`
  margin: auto;
  margin-top: 15%;
  font-weight: 400;
  font-size: 24px;
  line-height: 1.2;
  text-align: center;
`;

const ArticleList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin: 0;
  padding: 0;
`;

const ArticleSpinner = styled(Spinner)`
  margin-top: 15%;
`;

export default Home;
