process.env.TZ = 'UTC'
process.env.NODE_ENV = 'test'

require('dotenv').config()
const { expect } = require('chai')
const supertest = require('supertest')

global.expect = expect
global.supertest = supertest

//As you progress with libraries such as chai, 
//you might want to install plugins that add features to chai
// add that here!