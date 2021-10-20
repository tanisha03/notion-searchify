import styles from './index.module.css';
import { categoryMapper, startupStageMapper } from '../util/mapper';
import { useState } from 'react';
import { getTagsFromPosts, transformQuery } from '../util/tagUtil';

export default function Home({ content }) {
  console.log(content);
  const [contentQuery, setcontentQuery] = useState(transformQuery(content));
  const [searchString, setSearchString] = useState('');
  const [searchedValues, setSearchedValues] = useState(false);
  
  const tagsArray = getTagsFromPosts(content);

  const handleSearch = () => {
    const filteredPosts = transformQuery(content).filter(post=>{
        return post.title.toLowerCase().includes(searchString.toLowerCase())
      });
    
    setSearchedValues(true);
    setcontentQuery(filteredPosts);
  };

  const handleStateFilter = (key) => {
    const filteredPosts = transformQuery(content).filter(post=>{
      return post.startupStage === key
    });

    setcontentQuery(filteredPosts);
  };

  const handleTopicFilter = (topic) => {

    if(topic==="All") {
        setcontentQuery(transformQuery(content));
        setSearchString('');
        setSearchedValues(false);
        return;
    }

    const filteredPosts = transformQuery(content).filter(post=>{
      return post.tags.includes(topic);
    });

    setcontentQuery(filteredPosts);
  };

  const handleCategoryFilter = (key) => {
    const filteredPosts = transformQuery(content).filter(post=>{
      return post.category === key
    });

    setcontentQuery(filteredPosts);
  };

  return (
    <div className={styles.container}>   
        <div className={styles.searchBar}>
            <input type="text" className={styles.input} placeholder="Search for startups, founders, and stories" onChange={ (e)=> setSearchString(e.target.value)}/>
            <button className={styles.button} onClick={handleSearch}>
                <svg x="0px" y="0px" width="30" height="30" viewBox="0 0 30 30">
                    <path d="M 13 3 C 7.4889971 3 3 7.4889971 3 13 C 3 18.511003 7.4889971 23 13 23 C 15.396508 23 17.597385 22.148986 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148986 17.597385 23 15.396508 23 13 C 23 7.4889971 18.511003 3 13 3 z M 13 5 C 17.430123 5 21 8.5698774 21 13 C 21 17.430123 17.430123 21 13 21 C 8.5698774 21 5 17.430123 5 13 C 5 8.5698774 8.5698774 5 13 5 z"></path>
                </svg>
            </button>
        </div>     

        <h2>{!searchedValues ? 'All Posts' : `Results for '${searchString}'`}</h2>
        <div className={styles.stages}>
            {
            Object.entries(startupStageMapper).map(([key,value],k)=>(
                <span role="button" tabIndex="0" key={key} onClick={()=>handleStateFilter(key)} onKeyDown={()=>handleStateFilter(key)}>{value.icon} {value.label}</span>
            ))
            }
        </div>
        <div className={styles.filterSection}>
            <div className={styles.topics}>
                {
                tagsArray.map((topic)=>(
                    <span role="button" tabIndex="0" key={topic.id} onClick={()=>handleTopicFilter(topic)} onKeyDown={()=>handleTopicFilter(topic)}>{topic}</span>
                ))
                }
            </div>
            <div className={styles.categories}>
                {
                Object.entries(categoryMapper).map(([key,value],k)=>(
                    <span role="button" tabIndex="0" key={key} onClick={()=>handleCategoryFilter(key)} onKeyDown={()=>handleCategoryFilter(key)}>{value.icon} {value.label}</span>
                ))
                }
            </div>
        </div>
        <ol className={styles.posts}>
          {contentQuery.map((post) => {
            return (
              <li key={post.index} className={styles.post}>
                <h3 className={styles.postTitle}>
                    <a className={styles.link} href={post.url}>
                        { categoryMapper[post.category].icon}
                        <span>{post.title}</span>
                    </a>
                </h3>
              </li>
            );
          })}
        </ol>
    </div>
  );
}
