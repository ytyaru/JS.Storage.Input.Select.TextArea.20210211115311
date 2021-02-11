# 入力値を保存する

　`input`,`select`,`textarea`要素の入力値を保存する。

　なお、そのほかの入力UIである`button`,`dialog`,`form`,`fieldset`要素については保存する値がないため対象外とする。

# input

* `value`属性値を保存する
    * input type="text" 系
* `checked`属性値がついている`input`要素の`value`属性値を保存する
    * input type="radio": 0 or 1個
    * input type="checkbox": 0 〜 複数個
* `selected`属性値がついている`option`要素の`value`属性値を保存する

## 保存しない or 空値を保存する

* 入力値がない
* 選択されていない

　すでにStorageにキーが存在するなら空値を保存する。キーが存在しないときは保存しない。

```javascript
localStorage.setItem();
```

## ついでに

　フォーカスが当たっている要素のidも保存する。

* `document.activeElement.id`

## input[type="file"]が文字列化できない問題

　`input[type="file"]`で選択したファイルハンドラは、`JSON.stringify(file)`でJSON文字列化できない。`localStorage.setItem()`で保存するには文字列化する必要があるため、このままでは保存できない。

* https://stackoverflow.com/questions/24139216/how-can-i-serialize-an-input-file-object-to-json/29281243#29281243

　仕方ないので自前でオブジェクト化してから文字列化する。

```javascript
var fileObject = getFile();
var newObject  = {
   'lastModified'     : fileObject.lastModified,
   'lastModifiedDate' : fileObject.lastModifiedDate,
   'name'             : fileObject.name,
   'size'             : fileObject.size,
   'type'             : fileObject.type
};  
JSON.stringify(newObject);
```

　さらに問題がある。保存したところでそれを`input[type=file]`に設定できない。

### input[type="file"]にファイルハンドラを設定できない問題。

　セキュリティ上の理由によりできない。

* https://stackoverflow.com/questions/1696877/how-to-set-a-value-to-a-file-input-in-html/1696884#1696884

#### [File System Access API][]

　[File System Access API][]がある。ローカルファイルにアクセスするAPIだ。しかしChrome 86などごくごく一部にしか実装されていない。

[File System Access API]:https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API

　また、ファイルハンドラを保存できるかどうかわからない。

　さらに、UIも自分で作らねばならない。

#### IndexedDB

　IndexedDB APIを使えばオブジェクトごと保存できる。いちいち文字列化して保存する必要もない。

　ただ、かなり煩雑なAPIである。使うにはライブラリで簡略化して使いたい。そのために大きなサイズが必要になる。

　たかが`input[type=file]`のためにそこまでやるか？　やめよう。

## 対象外

* `input[type="file"]`
    * 本当は保存したいのだがファイルハンドラを保存し、再現する方法がないため諦める
* `disabled`,`autofocus`などの属性

# 保存書式

キー|値|CSSセレクタ
----|--|-----------
要素id属性値|value属性値|`input[type="text"], input[type="search"], input[type="tel"], input[type="url"], input[type="email"], input[type="password"], input[type="datetime"], input[type="date"], input[type="month"], input[type="week"], input[type="time"], input[type="datetime-local"], input[type="number"], input[type="range"], input[type="color"]`
要素id属性値|textContent（innerText, innerHTML）|`textarea`
要素name属性値|`checked`な`input`要素の`value`属性値|`input[type="radio"], input[type="checkbox"]`
要素id属性値|`selected`な`option`要素の`value`属性値|`select`

# 情報源

* https://developer.mozilla.org/ja/docs/Web/HTML/Element/input
    * https://developer.mozilla.org/ja/docs/Web/HTML/Element/input/file
* https://developer.mozilla.org/ja/docs/Web/API/File/Using_files_from_web_applications#getting_information_about_selected_files
* https://developer.mozilla.org/ja/docs/Web/HTML/Element/dialog


# store

* 対象要素を取得する
* 対象要素の保存するキーを取得する
* 対象要素の保存する値を取得する
* 対象要素にあたる保存されたキーを取得する
* 対象要素にあたる保存された値を取得する
* 対象要素にあたる保存された値を設定する場所を取得する（value属性、textContent、innerText, innerHTML）
