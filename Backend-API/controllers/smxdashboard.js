const KPI = [
  {count: 100, type: 'Facebook'},
  {count: 1520, type: 'Twitter'}
]

exports.getKPI = (req,res,next) => {
  res.status(200).json(KPI);
}
