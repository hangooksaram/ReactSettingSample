import path from 'path'

module.exports = {
    entry : "./src/index.js",                     // 실행할 대상 파일, 최초 진입점 (시작점)
    resolve : {
        extensions : ['.jsx', '.js']              // 파일명이 같은 데 확장자가 다를 때 이 배열의 순서대로 처리하게 됨
    },
    module : {
        rules : [
            {
                test : /\.jsx?$/,        // 어떤 파일에 적용할 지, 확장자를 설정하는 듯
                loader : "babel-loader"  // 적용할 로더
            },
            {
                test : /\.css$/,
                use : ["style-loader", "css-loader"]  // 적용할 로더가 2개일 경우 배열로
            },
        ]
 
    },
    output : {
        path : path.resolve(__dirname, './dist'),   // 결과물 경로
        filename : "bundle.js"                      // 결과물 파일 이름
    },
}