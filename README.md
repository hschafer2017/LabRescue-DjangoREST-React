# Labrador Retriever Rescue -- DjangoREST API with React.js Mini Project

An API built with Django REST Framework featuring information about adorable Lab and Lab-cross puppies hosted at a (ficticious) lab rescue, along with information about the Labrador Retriever Breed and various Lab cross-breeds. The API information is displayed using React.js on the frontend.

## API Endpoints
#### ```/api/breed``` 
- Methods available to all users: GET
- Methods available to superusers: GET, POST, PUT, DELETE

At this endpoint, you can find an object for each type of Lab breed and cross-breed the Lab breed, with further information about the breed.
Example Response:
```
[
    {
        "breed_name": "Lab",
        "description": "A very cute, smart, and well-tempered dog",
        "history": "Widely considered the most popular breed in the world, the Labrador Retriever has long been the favorite of many dog owners across the globe.",
        "origin": "USA",
        "colors": [
            "White",
            "Black",
            "Brown"
        ],
        "temperament": "Happy",
        "lifespan": "12 years",
        "avg_weight": "20kg",
        "avg_height": "45cm"
    }
]
```


#### ```/api/dog```
- Methods available to all users: GET
- Methods available to superusers: GET, POST, PUT, DELETE

At this endpoint, you can find a JSON response object for each Lab or Lab Cross breed dog that the rescue has on-site.
Example Response:
```
[
    {
        "name": "Martin",
        "age": "3 yrs",
        "description": "A very cute dog with lots of energy.",
        "spayed_neutered": false,
        "uploaded_date": "2020-06-01",
        "breed": "Labrador Retriever",
        "colors": [
            "Brown"
        ],
        "image": "http://localhost:8000/media/puppy_test_qawI3OM.jpg",
        "gender": "Male"
    }
]
```


#### ```/api/question```
- Methods available to all users: GET
- Methods available to authenticated users: GET, POST
- Methods available for authenticated author of question or superuser: GET, POST, PUT, DELETE

At this endpoint you can find an object for each question that a user has asked about puppy training, treats, etc. In the answers within each question, you can find the thread of answers to each question that a user has posted.
Example Response:
```
[
    {
        "title": "A question about dog treats",
        "author": "testuser1",
        "content": "When I'm giving my dog treats, how many treats are 'too many?' I am teaching my dog, Annie, how to sit so I want to reward her when she follows the command.",
        "dog_owner": true,
        "date": "2020-06-01",
        "view_count": 2,
        "tags": [
            "training",
            "treats",
        ],
        "answers": [
            {
                "author": "testuser2",
                "content": "I would say that from my experience, one treat for every two times she does it correctly in a row is sufficient.",
                "date": "2020-06-01",
                "dog_owner": true,
                "question": "A question about dog treats"
            },
            {
                "author": "testuser3",
                "content": "I definitely think it's important to not be shy or hesitant with treats -- if she follows the command, she should get a treat!",
                "date": "2020-06-01",
                "dog_owner": false,
                "question": "A question about dog treats"
            }
        ]
    }
]
```


#### ```/api/answer```
- Methods for all users: GET
- Methods for Authenticated users: GET, POST
- Methods available for authenticated author of answer or superuser: GET, POST, PUT, DELETE

Example Response: 
```
[
    {
        "author": "testuser2",
        "content": "I would say that from my experience, one treat for every two times she does it correctly in a row is sufficient.",
        "date": "2020-06-01",
        "dog_owner": true,
        "question": "A question about dog treats"
    },
]
````



## Technologies 
- Django 3.0.6
- DjangoREST Framework 
- React.js
- React Bootstrap

