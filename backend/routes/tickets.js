const express = require('express')
const router = express.Router()
const { getTickets, getTicket, createTicket } = require('../controllers/ticketController')

const { protect } = require('../middleware/authMiddleware')

// Using 'route' allows us to chain on additional functions: '.get','.put', etc
router
    .route('/')
    .get(protect, getTickets)
    .post(protect, createTicket)
    
router
    .route('/:id')
    .get(protect, getTicket)
    .delete(protect, deleteTicket)
    .put(protect, updateTicket)

module.exports = router