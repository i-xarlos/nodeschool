var obj = {
    'messages': [
        { 'message' : 'Laboris quis proident aliquip officia amet.'},
        { 'message' : 'Laboris aliqua sint tempor nostrud est.'},
        { 'message' : 'Enim reprehenderit sint magna amet magna'},
        { 'message' : 'Incididunt consectetur tempor Lorem nulla.'},
        { 'message' : 'Est ut irure irure nisi.'},
        { 'message' : 'Nulla deserunt eiusmod ipsum sunt aliqua Nulla deserunt eiusmod ipsum sunt aliqua Nulla deserunt eiusmod ipsum sunt aliqua.'},
        { 'message' : 'Qui labore occaecat reprehenderit pariatur.'},
        { 'message' : 'Excepteur fugiat velit ut occaecat duis.'},
        { 'message' : 'Tempor quis esse consequat sunt ea eiusmod.'},
        { 'message' : 'Id culpa ad proident ad nulla laborum incididunt.'},
        { 'message' : 'Ullamco in ea et ad anim anim ullamco est.'},
        { 'message' : 'Est ut irure irure nisi.'}
    ]
  }


var arr = obj.messages.map(x => x.message)
var getShortMessages = x => x.filter(y => y.length < 50)
module.exports = getShortMessages

var res = getShortMessages(arr)

console.log(getShortMessages(res))









