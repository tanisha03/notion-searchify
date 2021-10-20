export const getTagsFromPosts = (posts) => {
    let tagArray = ['All'];
    posts.map( post => {
        post.properties.Tags.multi_select.map(topic=>tagArray.push(topic.name));
    });
    tagArray = [...new Set(tagArray)];
    return tagArray;
};

export const transformQuery = (posts) => {
    let transformedPosts = [];
    posts.forEach( post => {
      let tagList = post.properties.Tags.multi_select.map( topic => topic.name );
      transformedPosts.push({
        url: post.properties.Link.url,
        title: post.properties.Name.title[0].plain_text,
        category: post.properties.Category.select.name,
        startupStage: post.properties.Stage.select.name,
        tags: tagList
      });
    });
    
    // transformedPosts = transformedPosts.sort( (a,b) => new Date(b.editedAt) - new Date(a.editedAt) );
    return transformedPosts;
  }