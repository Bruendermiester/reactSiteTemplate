export const fetchArticles = articles => {
    return {
        type: "LIST_OF_ARTICLES",
        payload: articles
    };
};
export const submitForm = article => {
    return {
        type: "SUBMIT_FORM",
        payload: article
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
export const updateHeroImage = heroImage => {
    return {
        type: "UPDATE_HERO_IMAGE",
        payload: heroImage
    };
}
