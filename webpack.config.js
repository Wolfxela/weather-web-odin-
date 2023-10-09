const path = require('path')


module.exports=
{
    entry: {
        main:'./src/main.js',
        domDayHandler:'./src/domDayHandler.js'
    },
    mode:"development",
    output:
    {
        filename: '[name].js',
        path: path.resolve(__dirname,'dist')
    }
}