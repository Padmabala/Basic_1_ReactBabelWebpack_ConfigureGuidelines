const path=require('path');
module.exports={
    mode:"development",
    entry:path.resolve(__dirname,`src`),
    output:{
        path:path.resolve(__dirname,`dist`),
        filename:'bundle.js',
        publicPath:'/'
    },
    resolve:{
        extensions:['.js','.jsx']
    },
    devServer:{
        historyApiFallback:true,
        //filename:'bundle.js',
        publicPath:'/dist/', //This is imp coz webpack dev server generates bundle.js in memory and this specifies the public path to folder
        //http://localhost:8090/dist/bundle.js
        contentBase: path.resolve(__dirname, "./"),//This and below line is to keep a watch on the changes to .html files
        watchContentBase: true,
    },
    module:{
        rules:[
            {
                test:/\.js$/,
                exclude:/node_modules/,
                use:{
                    loader:'babel-loader',
                },
            },
        ],
    },
    
};
/*We didn't have to specify entry point or output point for webpack because we're using the defaults.
 But we do have to tell webpack to invoke Babel on any file that ends with js because this is a React application, and
  I'm going to be using the .js extension for all the React components, which means I'm going to be writing JSX in those React components, 
  and I need Babel to run on those files before webpack picks them up and includes them in the bundle. So that's the syntax that we use for 
  webpack. We just add a rule here. For every file that ends with a .js extension and is not under the node_modules directory, 
  use the babel-loader on it. And the babel-loader is going to pick up the configuration
 that we just did for Babel and compile all the modern JavaScript into something that your targeted browsers are going to understand. */