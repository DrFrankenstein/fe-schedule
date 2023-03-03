import webpack from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

const isProd = process.env["NODE_ENV"] === "production";

const tsRule: webpack.RuleSetRule = {
    test: /\.(ts|tsx)$/,
    use: "ts-loader",

    exclude: /node_modules/,
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".json"],
    }
};

const cssRule: webpack.RuleSetRule = {
    test: /\.css$/,
    use: [MiniCssExtractPlugin.loader, "css-loader"]
}

const config: webpack.Configuration = {
    mode: isProd? "production" : "development",
    entry: "./src/index.tsx",
    module: {
        rules: [ tsRule, cssRule ]
    },
    devtool: isProd? undefined : "source-map",
    plugins: [
        new HtmlWebpackPlugin({ template: "index.html" }),
        new MiniCssExtractPlugin(),
        new webpack.ProgressPlugin()
    ]
};

export default config;
