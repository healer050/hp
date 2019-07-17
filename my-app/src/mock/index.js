const Mock = require('mockjs');
Mock.mock('/link/healer/hdata','get',require('./json/hdata'))
Mock.mock('/link/healer/hlist','get',require('./json/hlist'))