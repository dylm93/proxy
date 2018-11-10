const router = require ('express').Router();
const controller = require ('./controller');

 router.route('/artists')
    .get(controller.get)
    .post(controller.post)
    .delete(controller.delete)

//  router.route('/api/inc/:id')
//     .patch(controller.incrementLikes)
//     .get(controller.getLikesReposts)

//  router.route('/api/likedec/:id') 
//     .patch(controller.decrementLikes)

//  router.route('/api/repostinc/:id')
//     .patch(controller.incrementReposts)

//  router.route('/api/repostdec/:id')
//     .patch(controller.decrementReposts)
    
 module.exports = router;