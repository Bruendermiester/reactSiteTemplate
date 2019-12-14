export const fetchArticles = articles => {
    return {
        type: "LIST_OF_ARTICLES",
        payload: articles
    };
};
export const updateBlogBodyContent = content => {
    console.log("action call", content)
    return {
        type: "UPDATE_BLOG_BODY_CONTENT",
        payload: content
    };
};
export const updateBlogTitle = title => {
    return {
        type: "UPDATE_BLOG_TITLE",
        payload: title
    };
};

