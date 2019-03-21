const reviewListDataSource = [
  {date: '02/20/2019', location: 'Honda of Downtown Chicago', rating: 5, source: 'Google', summary: 'A new google review was added' },
  {date: '02/20/2019', location: 'Honda of Downtown Chicago', rating: 5, source: 'Google', summary: 'A new google review was added' },
  {date: '02/20/2019', location: 'Honda of Downtown Chicago', rating: 5, source: 'Google', summary: 'A new google review was added' },
  {date: '02/20/2019', location: 'Honda of Downtown Chicago', rating: 5, source: 'Google', summary: 'A new google review was added' },
  {date: '02/20/2019', location: 'Honda of Downtown Chicago', rating: 5, source: 'Google', summary: 'A new google review was added' },
  {date: '02/20/2019', location: 'Honda of Downtown Chicago', rating: 5, source: 'Google', summary: 'A new google review was added' },
  {date: '02/20/2019', location: 'Honda of Downtown Chicago', rating: 5, source: 'Google', summary: 'A new google review was added' },
  {date: '02/20/2019', location: 'Honda of Downtown Chicago', rating: 5, source: 'Google', summary: 'A new google review was added' },
  {date: '02/20/2019', location: 'Honda of Downtown Chicago', rating: 5, source: 'Google', summary: 'A new google review was added' },
  {date: '02/20/2019', location: 'Honda of Downtown Chicago', rating: 5, source: 'Google', summary: 'A new google review was added' },
  {date: '02/20/2019', location: 'Honda of Downtown Chicago', rating: 5, source: 'Google', summary: 'A new google review was added' },
  {date: '02/20/2019', location: 'Honda of Downtown Chicago', rating: 5, source: 'Google', summary: 'A new google review was added' },
  {date: '02/20/2019', location: 'Honda of Downtown Chicago', rating: 5, source: 'Google', summary: 'A new google review was added' },
  {date: '02/20/2019', location: 'Honda of Downtown Chicago', rating: 5, source: 'Google', summary: 'A new google review was added' },
  {date: '02/20/2019', location: 'Honda of Downtown Chicago', rating: 5, source: 'Google', summary: 'A new google review was added' },
  {date: '02/20/2019', location: 'Honda of Downtown Chicago', rating: 5, source: 'Google', summary: 'A new google review was added' },
  {date: '02/20/2019', location: 'Honda of Downtown Chicago', rating: 5, source: 'Google', summary: 'A new google review was added' },
  {date: '02/20/2019', location: 'Honda of Downtown Chicago', rating: 5, source: 'Google', summary: 'A new google review was added' },
  {date: '02/20/2019', location: 'Honda of Downtown Chicago', rating: 5, source: 'Google', summary: 'A new google review was added' },
  {date: '02/20/2019', location: 'Honda of Downtown Chicago', rating: 5, source: 'Google', summary: 'A new google review was added' }
];

exports.get = (req,res,next) => {
  return res.status(200).json(reviewListDataSource);
};
