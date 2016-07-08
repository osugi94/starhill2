// This is a JavaScript file


// APIキーの設定とSDK初期化
var ncmb = new NCMB("56b164201d09c087d72e203a0777d311e992cacb258e19363ed8f9c91408042c","69059932cb74d8a7da924ef083e568d94bf1fa9df9b8f9f11d61b8e7867480b4");

// NCMB.Objectのサブクラスを生成
var updateclass = ncmb.DataStore("update");  //ここで指定したクラスの情報を取得する

//変数・配列
var updateddate = [];  //更新日を格納
var contents = [];  //更新内容を格納


//プッシュ通知用の端末情報を取得する
document.addEventListener("deviceready", function(){
            // デバイストークンを取得してinstallationに登録する
            window.NCMB.monaca.setDeviceToken(
                "56b164201d09c087d72e203a0777d311e992cacb258e19363ed8f9c91408042c",
                "69059932cb74d8a7da924ef083e568d94bf1fa9df9b8f9f11d61b8e7867480b4",
                "531151192290"
            );
        },false);
        
//ページ読み込み後に、データストアからデータを取得、表示する関数
window.onload = function () {   //ページ読み込み後に動作する

    var update = document.getElementById("update");   //データを表示する要素のIDの取得
    
    //データストアから指定したフィールドのデータを取得する、またHTMLの要素を書き換える
    updateclass.fetchAll()
        .then(function(results){
            for (var i = 0; i < results.length; i++) {  //指定したフィールドの要素の数だけループ
            
                var object = results[i];
                              
                updateddate[i] = object.get("updateddate");   //フィールド指定
                contents[i] = object.get("contents");
                              
                console.log(updateddate[i]);   //コンソールログに表示
                console.log(contents[i]);
                console.log(update);
                              
                update.innerHTML = "<tr>" + "<td>" + updateddate[i] + "</td>" + "<td><a href='#'>" + contents[i] + "</a></td>" + "</tr>" + update.innerHTML; //HTMLを書き換え
            }
        })
        //エラー処理
        .catch(function(err){
            console.log(err);
        });
}
