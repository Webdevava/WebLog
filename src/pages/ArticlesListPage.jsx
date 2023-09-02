import React from 'react'
import articles from './article-content'
import ArticlesList from '../components/ArticlesList'
import './index.css';



const ArticlesListPage = () => {
  return (
    <div className='ArticlesListPage'>
    <header className="hero">
    <h1>Articles</h1>
    </header>

    <ArticlesList articles={articles}/>

    </div>
  )
}

export default ArticlesListPage
