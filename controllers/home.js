
module.exports = 
{
    '':
    {
        get: function(respond)
        {
            respond(new Error("So much blood everywhere!!"));

            //respond(null, { message: 'hello, world!' });
        }
    }
};
