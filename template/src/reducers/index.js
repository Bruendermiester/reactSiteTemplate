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
        {
            "id": 5,
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
            "id": 6,
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
            "id": 7,
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
            "id": 8,
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
            "id": 9,
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
            "id": 10,
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
            "id": 11,
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
            "id": 12,
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
            "id": 13,
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
            "id": 14,
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
            "id": 15,
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
            "id": 16,
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
            "id": 17,
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
            "id": 18,
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
            "id": 19,
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
            "id": 20,
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
            "id": 21,
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
            "id": 22,
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
            "id": 23,
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
            "id": 24,
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
            "id": 25,
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
            "id": 26,
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
            "id": 27,
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
            "id": 28,
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
            "id": 29,
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
            "id": 30,
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
            "id": 31,
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
            "id": 32,
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
const updatePagination = (pageNum=1, action) => {
    if (action.type === 'UPDATE_PAGINATION') {
        return action.payload;
    }
    return pageNum;
}

const reducer = combineReducers({
    articles: articlesReducer,
    selectedArticle: selectedArticlesReducer,
    title: updateBlogTitleReducer,
    content: updateBlogBodyContentReducer,
    heroImage: updateHeroImageReducer,
    submitted: submitFormReducer,
    pageNum: updatePagination
});

const store = (window.devToolsExtension
? window.devToolsExtension()(createStore)
: createStore)(reducer);

export default store