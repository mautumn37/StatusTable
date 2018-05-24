function addParam() {
    //新たなdivノードを作成
    var newDiv = document.createElement("div");
    //新たなinputノードを作成
    var newTextInput = document.createElement("input");
    newTextInput.type = "text";
    newTextInput.name = "param"; 
    newTextInput.placeholder = "パラメータ名";
    var newNumInput = document.createElement("input");
    newNumInput.type = "number";
    newNumInput.placeholder = "初期値";
    //inputノードをnewDivの子ノードに追加
    newDiv.appendChild(newTextInput);
    newDiv.appendChild(newNumInput);
    //ctrlButtonsのtrの前にnewDivを挿入
    var prevNode = document.getElementById("ctrlButtons");
    var parentTbl = prevNode.parentNode;
    parentTbl.insertBefore(newDiv, prevNode);
}

addParam();

function delParam() {
    //参照する要素:<div id="tableInput">
    var tbl = document.getElementById("tableInput");
    //tbl内の<div>のHTMLCollection
    var divCollection = tbl.getElementsByTagName("div");
    //<div>が3つ以上ある時、下から2番目の<div>を削除
    if (divCollection.length > 2) {
        divCollection[divCollection.length - 2].remove();
    }
}

function addTbl() {
    var form = document.forms.mainForm;
    var newTbl = document.createElement("div");
    //ユニット名を出力
    var unitDiv = document.createElement("div");
    var unitSpan = document.createElement("span");
    unitSpan.textContent = form.unitName.value;
    form.unitName.value = "";
    unitDiv.appendChild(unitSpan);
    newTbl.appendChild(unitDiv);
    //パラメータを出力
    var divCollection = document.getElementById("tableInput").getElementsByTagName("div");
    console.log(divCollection);
    for (i = 1; i < divCollection.length - 1; i++) {
        var paramDiv = document.createElement("div");
        var paramSpan = document.createElement("span");
        paramSpan.textContent = divCollection[i].childNodes[0].value + ": ";
        paramDiv.appendChild(paramSpan);
        var paramNum = document.createElement("input");
        paramNum.type = "number";
        paramNum.value = divCollection[i].childNodes[1].value;
        paramDiv.appendChild(paramNum);
        newTbl.appendChild(paramDiv);
    }
    var txtarea = document.createElement("textarea");
    txtarea.rows = "4";
    txtarea.cols = "24";
    txtarea.placeholder = "メモ";
    newTbl.appendChild(txtarea);
    document.getElementById("tblDiv").appendChild(newTbl);
}