
module.exports = 
{
    '':
    {
        get: function(respond)
        {
            respond(null, { message: 'hello, world!' });
        }
    },

    'about':
    {
        get: function(respond)
        {
            respond(null, { message: 'about us' });
        }
    }
};
