export const fetchArticles = articles => {
    return {
        type: "LIST_OF_ARTICLES",
        payload: articles
    };
};