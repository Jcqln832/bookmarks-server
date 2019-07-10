function makeBookmarksArray() {
    return [
      {
        id: 1,
        name: 'Medium',
        description: 'articles',
        url: 'https://medium.com/',
        rating: '5'
      },
      {
        id: 2,
        name: 'HackerRank',
        description: 'coding',
        url: 'https://www.hackerrank.com/',
        rating: '4'
      },
      {
        id: 3,
        name: 'React',
        description: 'JavaScript Framework',
        url: 'https://reactjs.org',
        rating: '4'
      },
      {
        id: 4,
        name: 'Slack',
        description: 'Communication Platform',
        url: 'https://slack.com',
        rating: '5'
      },
    ];
  }
  
  module.exports = {
    makeBookmaarksArray
  }