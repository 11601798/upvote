    router.post('/posts/:id/act', (req, res, next) => {
        const action = req.body.action;
        const counter = action === 'Like' ? 1 : -1;
        Post.update({_id: req.params.id}, {$inc: {likes_count: counter}}, {}, (err, numberAffected) => {
            res.send('');
        });
    });
 let Pusher = require('pusher');
    let pusher = new Pusher({
      appId: process.env.PUSHER_APP_ID,
      key: process.env.PUSHER_APP_KEY,
      secret: process.env.PUSHER_APP_SECRET,
      cluster: process.env.PUSHER_APP_CLUSTER
    });

    router.post('/posts/:id/act', (req, res, next) => {
        const action = req.body.action;
        const counter = action === 'Like' ? 1 : -1;
        Post.update({_id: req.params.id}, {$inc: {likes_count: counter}}, {}, (err, numberAffected) => {
            pusher.trigger('post-events', 'postAction', { action: action, postId: req.params.id }, req.body.socketId);
            res.send('');
        });
    });
