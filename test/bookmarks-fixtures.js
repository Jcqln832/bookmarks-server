function makeBookmarksArray() {
    return [
      {
        id: 1,
        title: 'Medium',
        description: 'articles',
        url: 'https://medium.com/',
        rating: 5
      },
      {
        id: 2,
        title: 'HackerRank',
        description: 'coding',
        url: 'https://www.hackerrank.com/',
        rating: 4
      },
      {
        id: 3,
        title: 'React',
        description: 'JavaScript Framework',
        url: 'https://reactjs.org',
        rating: 4
      },
      {
        id: 4,
        title: 'Slack',
        description: 'Communication Platform',
        url: 'https://slack.com',
        rating: 5
      },
    ];
  }
  
  function makeMaliciousBookmark() {
    const maliciousBookmark = {
      id: 911,
      title: 'Naughty naughty very naughty <script>alert("xss");</script>',
      url: 'https://www.hackers.com',
      description: `Bad image <img src="https://url.to.file.which/does-not.exist" onerror="alert(document.cookie);">. But not <strong>all</strong> bad.`,
      rating: 1,
    }
    const expectedBookmark = {
      ...maliciousBookmark,
      title: 'Naughty naughty very naughty &lt;script&gt;alert(\"xss\");&lt;/script&gt;',
      description: `Bad image <img src="https://url.to.file.which/does-not.exist">. But not <strong>all</strong> bad.`
    }
    return {
      maliciousBookmark,
      expectedBookmark,
    }
  }
  
  module.exports = {
    makeBookmarksArray,
    makeMaliciousBookmark,
  }
  