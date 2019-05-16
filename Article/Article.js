// Because classes are not hoisted you will need to start your code at the bottom of the page.  
// Look for the comment "START HERE"

class Article {
  constructor(domElement) {
    // assign this.domElement to the passed in domElement
    this.domElement = domElement;
    // create a reference to the ".expandButton" class. 
    this.expandButton = this.domElement.querySelector('.expandButton');
    // Using your expandButton reference, update the text on your expandButton to say "expand"
    this.expandButton.textContent = 'Expand'
    // Set a click handler on the expandButton reference, calling the expandArticle method.
    this.expandButton.addEventListener('click', this.expandArticle.bind(this))
  }

  expandArticle() {
    // Using our reference to the domElement, toggle a class to expand or hide the article.
    this.domElement.classList.toggle('article-open');
  }
}

/* START HERE: 

- Select all classes named ".article" and assign that value to the articles variable.  

- With your selection in place, now chain .forEach() on to the articles variable to iterate over the articles 
NodeList and create a new instance of Article by passing in each article as a parameter to the Article class.

*/

let articles = document.querySelectorAll('.article'); // Pull in all article elements from the DOM

articles.forEach( (article) =>{ // Looping over the list of articles
  new Article(article); // Create an intance of each article
})

// Strech goals start here

// JSON Articles data storage

const articleData = [
  {
    heading: 'First article from JSON',
    paragraph1: 'paragraph1.1 ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    paragraph2: 'paragraph1.2 ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    heading: 'Second article from JSON',
    paragraph1: 'paragraph1.1 ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    paragraph2: 'paragraph1.2 dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    paragraph3: 'paragraph1.3 dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    heading: 'Third article from JSON',
    paragraph1: 'paragraph1.1 ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
];

// constructor to inject new article
class ArticleCreator{
  constructor(newArticle){
    this.newArticle = newArticle; // assign the object to this instance
    this.articleBox = document.createElement('div') // create the div that will host the article
    this.articleBox.classList.add('article'); // assign the class
    this.articleHeader = document.createElement('h2') // create the header of the article
    this.articleHeader.textContent = this.newArticle.heading; // assign hearding text inside
    this.articleBox.append(this.articleHeader); // Inject the heading inside the box
    this.createParagraphs();
    //this.injectArticleInHtml();
  }
  // the methods
  createParagraphs(){
    const objectKeys = Object.keys(this.newArticle); // we count the number of key property in the Article object 
    for (let i = 1; i < objectKeys.length; i++){
      let newPara = document.createElement('p')
      newPara.textContent = this.newArticle['paragraph' + i];
      this.articleBox.append(newPara)
      this.injectArticleInHtml(this.articleBox);
    }
  }
  injectArticleInHtml(article){
    let articleContainer = document.querySelector('.articles');
    articleContainer.appendChild(article);
  }
}


// First we loop over the given data
articleData.forEach(newArticle =>{
  new ArticleCreator(newArticle); // instantiating a new article sending current article object as an argument
})
