import styles from './index.module.css';
import { categoryMapper, startupStageMapper } from '../util/mapper';
import { useState, useRef } from 'react';
import { getTagsFromPosts, transformQuery } from '../util/tagUtil';

export default function Home({ content }) {
  console.log(content);
  const [contentQuery, setcontentQuery] = useState(transformQuery(content));
  const [searchString, setSearchString] = useState('');
  const InputRef = useRef(null);
  
  const tagsArray = getTagsFromPosts(content);

  const handleSearch  = (e) => {
      let str = e.target.value;
      setSearchString(str);
      const filteredPosts = transformQuery(content).filter(post=>{
        return post.title.toLowerCase().includes(str.toLowerCase())
      });
    
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
        InputRef.current.value = '';
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
            <input type="text" className={styles.input} placeholder="Search for startups, founders, and stories" ref={InputRef} 
            onChange={(e) => handleSearch(e)}/>
            <button className={styles.button} onClick={() => {
              setSearchString('');
              setcontentQuery(transformQuery(content));
              InputRef.current.value = '';
            }}>
                {/* <svg x="0px" y="0px" width="30" height="30" viewBox="0 0 30 30">
                    <path d="M 13 3 C 7.4889971 3 3 7.4889971 3 13 C 3 18.511003 7.4889971 23 13 23 C 15.396508 23 17.597385 22.148986 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148986 17.597385 23 15.396508 23 13 C 23 7.4889971 18.511003 3 13 3 z M 13 5 C 17.430123 5 21 8.5698774 21 13 C 21 17.430123 17.430123 21 13 21 C 8.5698774 21 5 17.430123 5 13 C 5 8.5698774 8.5698774 5 13 5 z"></path>
                </svg> */}
                <svg x="0px" y="0px" width="18px" height="18px" viewBox="0 0 121.31 122.876">
                  <g>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M90.914,5.296c6.927-7.034,18.188-7.065,25.154-0.068 c6.961,6.995,6.991,18.369,0.068,25.397L85.743,61.452l30.425,30.855c6.866,6.978,6.773,18.28-0.208,25.247 c-6.983,6.964-18.21,6.946-25.074-0.031L60.669,86.881L30.395,117.58c-6.927,7.034-18.188,7.065-25.154,0.068 c-6.961-6.995-6.992-18.369-0.068-25.397l30.393-30.827L5.142,30.568c-6.867-6.978-6.773-18.28,0.208-25.247 c6.983-6.963,18.21-6.946,25.074,0.031l30.217,30.643L90.914,5.296L90.914,5.296z"/>
                  </g>
                </svg>
            </button>
        </div>     

        <h2>{searchString ==='' ? 'All Posts' : `Results for '${searchString}'`}</h2>
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
