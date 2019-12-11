import { combineReducers } from 'redux';

const articlesReducer = () => {
    return [
        {
            "id": 1,
            "title": "Lorem ipsum dolor sit amet consectetuer adipiscing elit. Adipiscing erat facilisi parturient ultrices nostra nibh eu.",
            "body": "This is my contents body of large amount of text",
            "author": "Jonathan Bruenderman",
            "images": "/assets/testImage.png",
            "comments": []
        },
        {
            "id": 2,
            "title": "Lorem ipsum dolor sit amet consectetuer adipiscing elit. Adipiscing erat facilisi parturient ultrices nostra nibh eu.",
            "body": "This is my contents body of large amount of text",
            "author": "Jonathan Bruenderman",
            "images": "/assets/testImage.png",
            "comments": []
        },
        {
            "id": 3,
            "title": "Lorem ipsum dolor sit amet consectetuer adipiscing elit. Adipiscing erat facilisi parturient ultrices nostra nibh eu.",
            "body": "This is my contents body of large amount of text",
            "author": "Jonathan Bruenderman",
            "images": "/assets/testImage.png",
            "comments": []
        },
        {
            "id": 4,
            "title": "Lorem ipsum dolor sit amet consectetuer adipiscing elit. Adipiscing erat facilisi parturient ultrices nostra nibh eu.",
            "body": "This is my contents body of large amount of text",
            "author": "Jonathan Bruenderman",
            "images": "/assets/testImage.png",
            "comments": []
        },
        {
            "id": 5,
            "title": "This is my Title",
            "body": "This is my contents body of large amount of text",
            "author": "Jonathan Bruenderman",
            "images": "/assets/testImage.png",
            "comments": []
        },
        {
            "id": 6,
            "title": "This is my Title",
            "body": "This is my contents body of large amount of text",
            "author": "Jonathan Bruenderman",
            "images": "/assets/testImage.png",
            "comments": []
        }
    ];
};

const selectedArticlesReducer = (selectedArticle=null, action) => {
    if (action.type === 'LIST_OF_ARTICLES') {
        return action.payload;
    }
    return selectedArticle;
}

export default combineReducers({
    articles: articlesReducer,
    selectedArticle: selectedArticlesReducer
});