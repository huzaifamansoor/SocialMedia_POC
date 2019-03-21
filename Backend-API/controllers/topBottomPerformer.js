const topPerformer = [
  {name: 'Comox Valley Toyota', rating: 0, response_rate: '0%'},
  {name: 'Peroformance Toyota', rating: 0, response_rate: '0%'},
  {name: 'South Pointe Toyota', rating: 0, response_rate: '0%'},
  {name: 'Leveille Toyota', rating: 0, response_rate: '0%'},
  {name: 'Chasse Toyota', rating: 0, response_rate: '0%'},
];

const bottomPerformer = [
  {name: 'Destination Toyota Burnaby', rating: 1, response_rate: '50%'},
  {name: 'Don Valley North Toyota', rating: 1, response_rate: '50%'},
  {name: 'Leveille Toyota', rating: 0, response_rate: '0%'},
  {name: 'Performance Toyota', rating: 0, response_rate: '0%'},
  {name: 'South Pointe Toyota', rating: 0, response_rate: '0%'},
];

exports.getTopPerformer = (req,res,next) => {
  return res.status(200).json(topPerformer);
}

exports.getBottomPerformer = (req,res,next) => {
  return res.status(200).json(bottomPerformer);
}

