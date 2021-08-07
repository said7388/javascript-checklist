const bestFriends = ["kamal uddin", "monir hossain", "emran hossain", "badshah alam", "habibur rahman", "md alauddin alo"];

let bestFriend = bestFriends[0];
for (var i = 0; i < bestFriends.length; i++){
    let friend = bestFriends[i];
    if (friend.length > bestFriend.length){
        bestFriend = friend;
    }
}
console.log(bestFriend);