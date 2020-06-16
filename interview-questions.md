# ASSESSMENT 6: Interview Practice Questions
Answer the following questions. First, without external resources. Challenge yourself to answer from memory. Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn.

1. In a model called Animal that has_many Sightings, what is the name of the foreign key? Would the foreign key be part of the Animal model or the Sightings model?

  Your answer: The foreign key would be called animal_id: integer and it would be part of the Sightings model because Sightings belongs_to Animal.  The foreign key is always included on the belongs_to side and the data type is always an integer.

  Researched answer: Foreign key is always on the belongs_to side.  The Foreign Key maintains the information between instances of the two models and makes it easier to make changes to a model and all its entities.



2. Which routes must always be passed params and why?

  Your answer: The params show, create, update, and destroy all must be passed params.  Show, update, and destroy need the param of :id, so they can pinpoint the exact entry.  Create needs the params of whatever the table columns are in order to create an accurate and acceptable entry for the given table.  

  Researched answer: Show needs an id since it is listing on eitem in a particular model.  Update needs an id to modifying one particular entry.  Delete needs params in order to remove a particular entry.  Create I guess doesn't need params, but I was under the impression it did hahaha.  Correct me if I'm wrong Rachel lol! 



3. Write a rails route for a controller called "main" and a page called "game" that takes in a parameter called "guess".

  Your answer:  delete '/main/game/:guess =>  main#destroy'



4. Name three rails generator commands. What is created by each?

  Your answer: rails generate model, rails generate controller, rails generate migration

  Researched answer: For a database about Dogs
    - rails generate model creates a new table and in addition yould need the table name singular and capitalized, as well as the columns and data types they will contain.  It would look like this: rails generate model Dog name:string breed:string age:integer.  
    - rails generate controller creates a new controller for the model where you can put methods.  It would be: rails generate controller Dog
    - rails generate migration creates a new migration if you need to add, delete, or update the framework of your table.  It would look something like this: rails generate migration add_column_fur_color_to_dog .



5. Consider the Rails routes below. Describe the responsibility of each route.

/users        method="GET" - Displays all users, using controller action users#index

/users/1      method="GET"- Displays the user with unique id 1, using controller action users#show

/users/new    method="GET" - Returns a form to make a new user, using controller action users#new

/users/       method="POST" - Creates a new user, using controller action users#create

/users/1      method="PUT" - Updates an existing user with unique id 1, using controller action users#update

/users/1      method="DELETE"- Deletes an existing user with unique id 1, using controller action users#destroy
