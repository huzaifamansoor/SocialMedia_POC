const KPI = [
  {count: 100, type: 'Possitive Feed'},
  {count: 150, type: 'Neutral Feed'},
  {count: 200, type: 'Negative Feed'},
];

const feed = [
  {
  network: 'facebook',
  seedName: 'ToyotaCanada',
  feed: 'Toyota Fam Mustafa Sarikaya is embracing the winter',
  date: 'Feb 08, 2019'
},
{
  network: 'facebook',
  seedName: 'ToyotaCanada',
  feed: 'Superior styling, enhanced tech, plus added comfort and convenience',
  date: 'Feb 08, 2019'
},
{
  network: 'facebook',
  seedName: 'ToyotaCanada',
  feed: 'Superior styling, enhanced tech, plus added comfort and convenience',
  date: 'Feb 08, 2019'
},
{
  network: 'facebook',
  seedName: 'ToyotaCanada',
  feed: 'The 2020 RAV4 TRD Off-Road brings more sport',
  date: 'Feb 08, 2019'
},
{
  network: 'facebook',
  seedName: 'ToyotaCanada',
  feed: '	The 2020 RAV4 TRD Off-Road brings more sport and utility',
  date: 'Feb 08, 2019'
},
{
  network: 'facebook',
  seedName: 'ToyotaCanada',
  feed: 'Outdoor adventure for seven is about to go farther off',
  date: 'Feb 08, 2019'
},
{
  network: 'facebook',
  seedName: 'ToyotaCanada',
  feed: 'Outdoor adventure for seven is about to go farther off',
  date: 'Feb 08, 2019'
},
{
  network: 'facebook',
  seedName: 'ToyotaCanada',
  feed: 'RT @Toyota: WATCH NOW: We’re live at the Chicago Auto Show ',
  date: 'Feb 08, 2019'
},
{
  network: 'facebook',
  seedName: 'ToyotaCanada',
  feed: 'Life at the touch of your fingertips. Available in an 11.6-inch HD',
  date: 'Feb 08, 2019'
},
{
  network: 'facebook',
  seedName: 'ToyotaCanada',
  feed: 'Welcoming the weekend with Toyota Fam Cody Pyle',
  date: 'Feb 08, 2019'
},
{
  network: 'twitter',
  seedName: 'ToyotaCanada',
  feed: 'Ta-coming soon! Watch as the 2020 #Tacoma storms into the windy city',
  date: 'Feb 08, 2019'
},
{
  network: 'twitter',
  seedName: 'ToyotaCanada',
  feed: 'Tacom-ing soon! Watch as the 2020 Tacoma storms into the windy city',
  date: 'Feb 08, 2019'
}
,
{
network: 'twitter',
seedName: 'ToyotaCanada',
feed: '	Toyota Fam Frazer Constable has given us a reason to feel',
date: 'Feb 08, 2019'
},
{
network: 'twitter',
seedName: 'ToyotaCanada',
feed: '	Toyota Fam Frazer Constable has given us a reason to feel',
date: 'Feb 08, 2019'
},
{
network: 'twitter',
seedName: 'ToyotaCanada',
feed: '	Like the perfect puzzle, your Toyota was uniquely engineered',
date: 'Feb 08, 2019'
},
{
network: 'twitter',
seedName: 'ToyotaCanada',
feed: '	Never worry about fumbling for your charger cord again',
date: 'Feb 08, 2019'
},
{
network: 'twitter',
seedName: 'ToyotaCanada',
feed: 'Never worry about fumbling for your charger cord again',
date: 'Feb 08, 2019'
},
{
network: 'twitter',
seedName: 'ToyotaCanada',
feed: 'Two Toyotas are always better than one. ',
date: 'Feb 08, 2019'
},
{
network: 'twitter',
seedName: 'ToyotaCanada',
feed: 'The 2020 Corolla is a transformation from bumper-to-bumper',
date: 'Feb 08, 2019'
},
{
network: 'twitter',
seedName: 'ToyotaCanada',
feed: 'The wait is over. It’s time to officially welcome the GR Supra to Canada',
date: 'Feb 08, 2019'
}];

exports.getKPI = (req,res,next) => {
  res.status(200).json(KPI);
}

exports.getFeed = (req,res,next) => {
  res.status(200).json(feed);
}

