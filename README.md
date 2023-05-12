# Web Development Final Project - *munchoGram*

Submitted by: **Hafsa Sarker**

This web app: **A forum for foodies that let's users sign up / log in. Then they can create, view, update and/ or delete posts. Users can interact with posts by upvoting a post or having discussions in the comments section. In the home feed, users can sort posts and read a summary of them.**

Hosted at: https://munchogram.netlify.app/

Time spent: **15+** hours spent in total

## Required Features

The following **required** functionality is completed:

- [X] **A create form that allows the user to create posts**
- [X] **Posts have a title and optionally additional textual content and/or an image added as an external image URL**
- [X] **A home feed displaying previously created posts**
- [X] **By default, the time created, title, and number of upvotes for each post is shown on the feed**
- [X] **Clicking on a post shall direct the user to a new page for the selected post**
- [X] **Users can sort posts by either their created time or upvotes count**
- [X] **Users can search for posts by title**
- [X] **A separate post page for each created post, where any additional information is shown is linked whenever a user clicks a post**
- [X] **Users can leave comments underneath a post on the post's separate page**
- [X] **Each post should have an upvote button on the post's page. Each click increases its upvotes count by one and users can upvote any number of times**
- [X] **A previously created post can be edited or deleted from its post page**

The following **optional** features are implemented:

- [X] Users can only edit and deleted posts or delete comments by entering the secret key, which is set by the user during post creation
- [X] Users can customize the interface of the web app
- [X] Users can set flags while creating a post. Then users can filter posts by flags on the home feed.


The following **additional** features are implemented:

* [X] added user registration
* [X] added user account page
* [X] users can see when the post was last edited
* [X] users can search by author as well as title of the post

## Video Walkthrough

Here's a walkthrough of implemented user stories:

<img src='.\munchoGram\public\munchoGram.gif' title='Video Walkthrough' width='1000' alt='Video Walkthrough' />

<!-- Replace this with whatever GIF tool you used! -->
GIF created with ScreenToGif 


## Notes

    While building this app, I struggled a lot with supabase as I am very new to databases and don't have much ideas on how to query data. Especially creating a user auth, I had to read a lot of documentation and watch videos on creating users and adding them to Supabase. I also struggled with how to update a database column that takes in an array of objects (for the comments). But I figured it out after playing around with it alot. 

## License

    Copyright [2023] [Hafsa Sarker]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
