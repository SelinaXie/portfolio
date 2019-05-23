import React from 'react'
import { Link } from 'react-navi'
import siteMetadata from '../siteMetadata'
import ArticleSummary from './ArticleSummary'
import Bio from './Bio'
import Pagination from './Pagination'
import styles from './BlogIndexPage.module.css'

function BlogIndexPage({ blogRoot, pageCount, pageNumber, postRoutes }) {
  return (
    <div>
      <header>
        <h1 className={styles.title}>
          <Link href={blogRoot}>{siteMetadata.title}</Link>
        </h1>
        <Bio />
      </header>
      <h1>My Projects</h1>
      <ul className={styles.articlesList}>
        {postRoutes.map(route =>
          <li key={route.url.href}>
            <ArticleSummary blogRoot={blogRoot} route={route} />
          </li>
        )}
      </ul>
      {
        pageCount > 1 &&
        <Pagination
          blogRoot={blogRoot}
          pageCount={pageCount}
          pageNumber={pageNumber}
        />
      }
      <div>
        <h1>Future Plan</h1>
        <p>Create a completed user page for user to use the LaundryCats app</p>
        <p>Add motor sensors to laundry machines and detect the status</p>
      </div>
      <footer className={styles.footer}>
        <div>
          <Link href='./about'>
            About
          </Link> &bull;{' '}
          <Link href='./tags'>
            Tags
          </Link> 
          
        </div>
      </footer>
    </div>
  )
}

export default BlogIndexPage