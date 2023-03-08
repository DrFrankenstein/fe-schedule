import { Configuration, DefinePlugin, ProgressPlugin, RuleSetRule } from "webpack";
import devserver from "webpack-dev-server";
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

const isProd = process.env["NODE_ENV"] === "production";
const isCI = process.env["CI"];

const tsRule: RuleSetRule = {
    test: /\.(ts|tsx)$/,
    use: "ts-loader",

    exclude: /node_modules/,
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".json"],
    }
};

const cssRule: RuleSetRule = {
    test: /\.css$/,
    use: [MiniCssExtractPlugin.loader, "css-loader"]
}

const config: Configuration = {
    mode: isProd? "production" : "development",
    entry: "./src/index.tsx",
    module: {
        rules: [ tsRule, cssRule ]
    },
    devtool: isProd? undefined : "source-map",
    plugins: [
        new HtmlWebpackPlugin({ template: "index.html" }),
        new MiniCssExtractPlugin(),
        new DefinePlugin({
            BASENAME: JSON.stringify(isCI? "/fe-schedule" : "/")
        }),
        new ProgressPlugin()
    ],
    devServer: {
        historyApiFallback: true
    }
};

export default config;
