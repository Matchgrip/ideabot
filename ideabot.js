module.exports = function (req, res, next) {
  console.log("user : " + req.body.user_name);
  var userName = req.body.user_name;
  var botPayload = {
    text : 'Great idea, ' + userName + '!'
  };
 
  // avoid infinite loop
  if (userName !== 'slackbot' && userName == 'nathan') {
    return res.status(200).json(botPayload);
  } else {
    return res.status(200).end();
  }
}