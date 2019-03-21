const data = [
  {
  name: 'Comox Valley Toyota',
  data: [
      [Date.UTC(2018, 0, 1), 100],
      [Date.UTC(2018, 1, 1), 110],
      [Date.UTC(2018, 2, 1), 120],
      [Date.UTC(2018, 3, 1), 141],
      [Date.UTC(2018, 4, 1), 141],
      [Date.UTC(2018, 5, 1), 151],
      [Date.UTC(2018, 6, 1), 200],
      [Date.UTC(2018, 7, 1), 95],
      [Date.UTC(2018, 8, 1), 100],
      [Date.UTC(2018, 9, 1), 152],
      [Date.UTC(2018, 10, 1), 160],
      [Date.UTC(2018, 11, 1), 185],
  ]
}, {
  name: 'Performance Toyota',
  data: [
      [Date.UTC(2018, 0, 1), 110],
      [Date.UTC(2018, 1, 1), 170],
      [Date.UTC(2018, 2, 1), 154],
      [Date.UTC(2018, 3, 1), 171],
      [Date.UTC(2018, 4, 1), 181],
      [Date.UTC(2018, 5, 1), 121],
      [Date.UTC(2018, 6, 1), 420],
      [Date.UTC(2018, 7, 1), 93],
      [Date.UTC(2018, 8, 1), 170],
      [Date.UTC(2018, 9, 1), 120],
      [Date.UTC(2018, 10, 1), 140],
      [Date.UTC(2018, 11, 1), 175],
  ]
}, {
  name: 'South Pointe Toyota',
  data: [
      [Date.UTC(2018, 0, 1), 95],
      [Date.UTC(2018, 1, 1), 120],
      [Date.UTC(2018, 2, 1), 142],
      [Date.UTC(2018, 3, 1), 123],
      [Date.UTC(2018, 4, 1), 143],
      [Date.UTC(2018, 5, 1), 164],
      [Date.UTC(2018, 6, 1), 154],
      [Date.UTC(2018, 7, 1), 185],
      [Date.UTC(2018, 8, 1), 132],
      [Date.UTC(2018, 9, 1), 167],
      [Date.UTC(2018, 10, 1), 126],
      [Date.UTC(2018, 11, 1), 195],
  ]
}
]

exports.get = (req,res,next) => {
  return res.status(200).json(data);
}


