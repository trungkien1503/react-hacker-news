
### Test Assignment
To implement a better News Reader for Hacker News using Rails.

1. Parse https://news.ycombinator.com/best to pull down the latest best news.
2. Display the items in a custom layout that is more visual but still readable:
[Image]
[Title]
[article excerpt...]
[Image]
[Title]
[article excerpt...]
[Image]
[Title]
[article excerpt...]

3. Clicking on an article will show a page with the simplified, readability version of the article: just the text, images. The content should be formatted for ease of reading, clean and nice.
4. Deploy to Heroku or make it publically accessible for review purposes
5. Code to check to Github.

### Requirements:
1. All pages should be responsive and focus on design and typography.
2. Full test suite.
3. No DB needed, but you'll need to think about performance, caching, etc.

### Gems to use:
1. nokogiri
2. https://github.com/cantino/ruby-readability to parse the content to display the readable text.

### Bonus:
1. Fully responsive for mobile view.
2. Use ajax to pull the content of the page.
3. Use HTML5 pushstate to manage the history
4. Impress us with your front-end skills and your attention to design and user experience.
5. Implement CI integration.


## What I Did
The solution I did is building API application with RoR as web server on this repository:
https://github.com/trungkien1503/react-hacker-news

And for front-end I build a react-js app: https://github.com/trungkien1503/react-hacker-news-reader

## How to use

### Back-end as API web service
- git clone `https://github.com/trungkien1503/react-hacker-news`
- cd `to your project folder`
- run `bundle install` to install missing gems
- run `spring rails s -p 3001` because our front-end react app run on port `3000`
- Open `localhost:3001` to see the admin page
- The api url example like `localhost:3001/api/v1/posts/:id.json`

## Front-end: react js app 
- git clone `https://github.com/trungkien1503/react-hacker-news-reader`
- cd `to your project folder`
- Run `npm install`
- Then `npm start`
- Open `localhost:3000` by default to access the local development

## Deployment
Deploy to heroku (also include CI between github and heroku):
- Back-end API: https://iwa-hacker-news.herokuapp.com/
- Front-end or as end user: https://iwa-hacker-news-fr.herokuapp.com/
