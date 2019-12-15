import { createStore, combineReducers } from 'redux';

const articlesReducer = () => {
    return [
        {
            "id": 1,
            "title": "Lorem ipsum dolor sit amet consectetuer adipiscing elit. Adipiscing erat facilisi parturient ultrices nostra nibh eu.",
            "content": [
                {
                    "type": "text",
                    "text": 'Lorem ipsum dolor sit amet consectetuer adipiscing elit. Adipiscing erat facilisi parturient ultrices nostra nibh eu.'
                },
                {
                    "type": "text",
                    "text": 'Lorem ipsum dolor sit amet consectetuer adipiscing elit. Adipiscing erat facilisi parturient ultrices nostra nibh eu.'
                },
                {
                    "type": "file",
                    "src": '/assets/Test.png',
                    "file": {}
                }  
            ],
            "heroImage": {
                "src": '/assets/Test.png',
                "file": {}                
            },
            "author": "Jonathan Bruenderman",
            "date": "Fri Jun 22 2018 10:54:33 GMT+0530",
            "comments": []
        },
        {
            "id": 2,
            "title": "Lorem ipsum dolor sit amet consectetuer adipiscing elit. Adipiscing erat facilisi parturient ultrices nostra nibh eu.",
            "content": [
                {
                    "type": "text",
                    "text": 'Lorem ipsum dolor sit amet consectetuer adipiscing elit. Adipiscing erat facilisi parturient ultrices nostra nibh eu.'
                },
                {
                    "type": "text",
                    "text": 'Lorem ipsum dolor sit amet consectetuer adipiscing elit. Adipiscing erat facilisi parturient ultrices nostra nibh eu.'
                },
                {
                    "type": "file",
                    "src": '/assets/Test.png',
                    "file": {}
                }  
            ],
            "heroImage": {
                "src": '/assets/Test.png',
                "file": {}                
            },
            "author": "Jonathan Bruenderman",
            "date": "Fri Jun 22 2018 10:54:33 GMT+0530",
            "comments": []
        },
        {
            "id": 3,
            "title": "Lorem ipsum dolor sit amet consectetuer adipiscing elit. Adipiscing erat facilisi parturient ultrices nostra nibh eu.",
            "content": [
                {
                    "type": "text",
                    "text": 'Lorem ipsum dolor sit amet consectetuer adipiscing elit. Adipiscing erat facilisi parturient ultrices nostra nibh eu.'
                },
                {
                    "type": "text",
                    "text": 'Lorem ipsum dolor sit amet consectetuer adipiscing elit. Adipiscing erat facilisi parturient ultrices nostra nibh eu.'
                },
                {
                    "type": "file",
                    "src": '/assets/Test.png',
                    "file": {}
                }  
            ],
            "heroImage": {
                "src": '/assets/Test.png',
                "file": {}                
            },
            "author": "Jonathan Bruenderman",
            "date": "Fri Jun 22 2018 10:54:33 GMT+0530",
            "comments": []
        },
        {
            "id": 4,
            "title": "Lorem ipsum dolor sit amet consectetuer adipiscing elit. Adipiscing erat facilisi parturient ultrices nostra nibh eu.",
            "content": [
                {
                    "type": "text",
                    "text": 'Lorem ipsum dolor sit amet consectetuer adipiscing elit. Adipiscing erat facilisi parturient ultrices nostra nibh eu.'
                },
                {
                    "type": "text",
                    "text": 'Lorem ipsum dolor sit amet consectetuer adipiscing elit. Adipiscing erat facilisi parturient ultrices nostra nibh eu.'
                },
                {
                    "type": "file",
                    "src": '/assets/Test.png',
                    "file": {}
                }  
            ],
            "heroImage": {
                "src": '/assets/Test.png',
                "file": {}                
            },
            "author": "Jonathan Bruenderman",
            "date": "Fri Jun 22 2018 10:54:33 GMT+0530",
            "comments": []
        },           
    ];
};

const selectedArticlesReducer = (selectedArticle=null, action) => {
    if (action.type === 'LIST_OF_ARTICLES') {
        return action.payload;
    }
    return selectedArticle;
}
const updateBlogTitleReducer = (title='', action) => {
    if (action.type === 'UPDATE_BLOG_TITLE') {
        return action.payload;
    }
    return title;
}
const updateBlogBodyContentReducer = (content=[], action) => {
    if (action.type === 'UPDATE_BLOG_BODY_CONTENT') {
        return action.payload;
    }
    return content;
} 
const submitFormReducer = (bool=false, action) => {
    if (action.type === 'SUBMIT_FORM') {
        return action.payload;
    }
    return bool;
}
const updateHeroImageReducer = (heroImage={}, action) => {
    if (action.type === 'UPDATE_HERO_IMAGE') {
        return action.payload;
    }
    return heroImage;
}

const reducer = combineReducers({
    articles: articlesReducer,
    selectedArticle: selectedArticlesReducer,
    title: updateBlogTitleReducer,
    content: updateBlogBodyContentReducer,
    heroImage: updateHeroImageReducer,
    submitted: submitFormReducer
});

const store = (window.devToolsExtension
? window.devToolsExtension()(createStore)
: createStore)(reducer);

export default store