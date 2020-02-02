
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
4. Impress us with your front-end skills and your attention to design and user experience. 5. Implement CI integration.
