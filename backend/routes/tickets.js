const express = require('express')
const router = express.Router()
const { getTickets, createTicket } = require('../controllers/ticketController')

const { protect } = require('../middleware/authMiddleware')

// Using 'route' allows us to chain on additional functions: '.get','.put', etc
router.route('/').get(protect, getTickets).post(protect, createTicket)

module.exports = router