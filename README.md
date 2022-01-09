## Blog MERN App
React blog application which consists of the following two pages.
1. Blog List Page:- **'/'** landing page 
○ This page displays the list of all blog posts used **react-table for paginated list view**.
○ When a user clicks on a list item it opens the blog view page to display the blog
content.
○ The page have Add New Post action button that open a model to create a new
post.
○ Each post has 3 fields Title, Content, Date.
2. Blog View Page :- **'/posts/:postId'**
○ This page displays the content of a blog
○ It should display the comments on this post in a **nested tree**.
○ The page should have a comment box to add new comments on the post.
○ The **latest comment should be displayed first at each level**.

## Installation

```bash
> cd blog-client
	> npm install
	> npm start

> cd blog-server
	> npm install
	> npm start
```

## Technologies Used
* Frontend: JS, React.js, Redux, chakra-ui, react-table.
* Backend: Node.js with Express.js, mongoose.
* Database: MongoDB

## Notes

```python
Backend base URL: localhost:8080
/posts
/comments

```
## Notes
* Once backent is loaded I added the mock data on mongo database
* Each time sever starts I recreated the database with fresh data, It's just so server the perpose of this take for listing blogs.

## Refer screenshot attached in the folder.
	
