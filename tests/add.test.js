import { assert } from 'chai'
import { add } from '../src/index.js'

it('Make sure it is 3.', async function () {
    assert(add() === 3)
})
