// profileCtrl.js
var profiles = [
    {
        name: 'Preston McNeil',
        pic: 'https://s3.amazonaws.com/uifaces/faces/twitter/ashleyford/128.jpg',
        status: 'Everything is bigger in Texas'
    },
    {
        name: 'Ryan Rasmussen',
        pic: 'https://s3.amazonaws.com/uifaces/faces/twitter/jadlimcaco/128.jpg',
        status: 'RR Rules'
    },
    {
        name: 'Terri Ruff',
        pic: 'https://s3.amazonaws.com/uifaces/faces/twitter/adellecharles/128.jpg',
        status: 'Wow, I typed out hunter2 and all you saw was ******?!?!??'
    },
    {
        name: 'Lindsey Mayer',
        pic: 'https://s3.amazonaws.com/uifaces/faces/twitter/nzcode/128.jpg',
        status: 'OMG MITTENS DID THE CUTEST THING TODAY'
    }
];

exports.getFriendsProfiles = function (req, res) {
    let userFriends = []
    let ufriends = req.session.currentUser.friends
    console.log(ufriends)
    for(let i = 0; i < ufriends.length; i++){
        userFriends.push(profiles.ufriends[i])
    }
    // console.log(userFriends)
    res.status(200).send(userFriends)
}