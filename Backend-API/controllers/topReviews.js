const topReviews = [
  {
    network: 'Facebook',
    reviews: [
      {
        username: 'Christina Davis',
        review: 'The Delearship staff was extremely knowledgable,welcoming and overall a please to deal with.'
      },
      {
        username: 'Lena Tate',
        review: 'Just purchased my first sports car from Main Street Auto and I Love it!'
      },
      {
        username: 'Cora Foster',
        review: 'The dealership was exquiste!'
      },
      {
        username: 'David',
        review: 'The Delearship staff was extremely knowledgable,welcoming and overall a please to deal with.'
      },
      {
        username: 'Shawn',
        review: 'Just purchased my first sports car from Main Street Auto and I Love it!'
      }
    ]
  },
  {
    network: 'Twitter',
    reviews: [
      {
        username: 'Christina Davis',
        review: 'The Delearship staff was extremely knowledgable,welcoming and overall a please to deal with.'
      },
      {
        username: 'Lena Tate',
        review: 'Just purchased my first sports car from Main Street Auto and I Love it!'
      },
      {
        username: 'Cora Foster',
        review: 'The dealership was exquiste!'
      },
      {
        username: 'David',
        review: 'The Delearship staff was extremely knowledgable,welcoming and overall a please to deal with.'
      },
      {
        username: 'Shawn',
        review: 'Just purchased my first sports car from Main Street Auto and I Love it!'
      }
    ]
  },
  {
    network: 'Dealer Rater',
    reviews: [
      {
        username: 'Christina Davis',
        review: 'The Delearship staff was extremely knowledgable,welcoming and overall a please to deal with.'
      },
      {
        username: 'Lena Tate',
        review: 'Just purchased my first sports car from Main Street Auto and I Love it!'
      },
      {
        username: 'Cora Foster',
        review: 'The dealership was exquiste!'
      },
      {
        username: 'David',
        review: 'The Delearship staff was extremely knowledgable,welcoming and overall a please to deal with.'
      },
      {
        username: 'Shawn',
        review: 'Just purchased my first sports car from Main Street Auto and I Love it!'
      }
    ]
  },
  {
    network: 'Google',
    reviews: [
      {
        username: 'Christina Davis',
        review: 'The Delearship staff was extremely knowledgable,welcoming and overall a please to deal with.'
      },
      {
        username: 'Lena Tate',
        review: 'Just purchased my first sports car from Main Street Auto and I Love it!'
      },
      {
        username: 'Cora Foster',
        review: 'The dealership was exquiste!'
      },
      {
        username: 'David',
        review: 'The Delearship staff was extremely knowledgable,welcoming and overall a please to deal with.'
      },
      {
        username: 'Shawn',
        review: 'Just purchased my first sports car from Main Street Auto and I Love it!'
      }
    ]
  },
  {
    network: 'Yelp',
    reviews: [
      {
        username: 'Christina Davis',
        review: 'The Delearship staff was extremely knowledgable,welcoming and overall a please to deal with.'
      },
      {
        username: 'Lena Tate',
        review: 'Just purchased my first sports car from Main Street Auto and I Love it!'
      },
      {
        username: 'Cora Foster',
        review: 'The dealership was exquiste!'
      },
      {
        username: 'David',
        review: 'The Delearship staff was extremely knowledgable,welcoming and overall a please to deal with.'
      },
      {
        username: 'Shawn',
        review: 'Just purchased my first sports car from Main Street Auto and I Love it!'
      }
    ]
  }
];

exports.get = (req,res,next) => {
  res.status(200).json(topReviews);
}
