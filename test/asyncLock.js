const tape      = require('tape')
const AsyncLock = require('../').AsyncLock
const delay     = (ms) => new Promise(resolve => setTimeout(resolve, ms))

tape('async lock using promise', function (t) {
  const lock     = AsyncLock()
  const allLocks = [
    ['key1', 'key2'],
    ['key3', 'key1'],
    ['key4', 'key5'],
    ['key1', 'key2', 'key3']
  ]

  const result = []
  const promises = []
  for (let i = 0; i < allLocks.length; i++) {
    promises.push(lock(allLocks[i], () => execute(i)).then(response => result.push(i)))
  }

  Promise.all(promises).then(()=>{
    t.equal(result.join(','), '0,2,1,3')
    t.end()
  })
})

async function execute(index) {
  await delay(5)
  return index
}