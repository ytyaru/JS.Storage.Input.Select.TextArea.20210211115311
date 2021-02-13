# localStorageで保存するときのキー値をどれにすべきか

　候補はつぎの３つある。要素ごとに変える必要がある。属性の用途が異なるため。

* `id`属性値
* `name`属性値
* `${element.tagName}-${index}`

## 要素ごとのキー

Store|要素|キー|値
-----|----|----|--
InputStore|`radio`,`checkbox`,`file`以外の`input[type="..."]`すべて|`id`,`name`,`${element.tagName}-${element.type}-${index}`|`element.value`
InputRadioStore|`input[type="radio"]`|`name`|`value`
InputCheckboxStore|`input[type="checkbox"]`|`name`|`[value]`
InputFileStore|`input[type="file"]`||
TextAreaStore|`textarea`|`id`,`name`|`value`
SelectStore|`select`|`id`,`name`|`[value]`

### `id`,`name`,自動キー

　要素を一意に特定する属性である。ふつうに考えたらすべてこれをキーとして用いるべき。しかし以下の理由で叶わない。

要素|理由
----|----
`input[type="radio"]`|radioは`name`でグループ化して使うものである。`name`がなければ複数選択できてしまいグループ内で単一選択する制約が実現できない。
`input[type="checkbox"]`|同上。
他（サーバ）|`form`で値を送信するときのキーとして`name`が使われる仕様である。もしサーバ送信すべくキーを指定するなら`name`を使う。それなのに本プロジェクトでlocalStorage保存するため`id`を使わねばならないと面倒になる。`id`,`name`どれかひとつだけで足りるようにしたい
他（ローカル）|`form`を使わず`name`が必要ない。だったら`id`だってつけたくない。`id`,`name`どちらもなくてもlocalStorage保存できるほうが好ましい。

* `radio`,`checkbox`は`name`をキーにする。グループ化に用いられるため重複することはないはず。よって一意に特定するキーたりうる
    * 異なる`form`では同じ`name`で別の要素がありうる
        * `form`の`id`,`name`,自動キーをプレフィクスにすべき。重複回避して一意に特定するために。
* 他は`id`,`name`が指定されていたらそれらの優先順でキーとして使うことにする。もしどちらもなければキーを自動作成する。querySelectAllで取得したインデックスを一意キーとして。
    * `name`は重複しうる。`radio`,`checkbox`と異なり別の`form`要素内でおなじ`name`をもつ別の要素が生じうる。
        * `form`の`id`,`name`,自動キーをプレフィクスにすべき。重複回避して一意に特定するために。

### `name`

　`id`と異なりHTML文書内にて重複しうる。保存キーとしてふさわしくない。所属する`form`の`id`をプレフィクスとすることで一意にできる。

　もし所属`form`がないときは`id`または自動キーにする。`radio`と`checkbox`は例外。`form`がなくとも`name`をグループ化に使うためキーになりうるから。

　共通化するためには`id`,`name`があるときはそれらをキーにする。所属`form`があるときはその`id`,`name`,自動キーをプレフィクスにする。これで重複しづらいキーを作れる。それでも`name`があって所属`form`がないときは重複しうる。それはもうHTMLの設計が悪いということで本プロジェクトの対象外とする。

### 自動キー

　`id`,`name`属性を指定したくない。省略しても自動でキーを作って欲しい。そこで`${element.tagName}-${index}`のような書式でキーを作ることにした。

　問題がある。`index`が変更されて要素と保存値が噛み合わない場合が生じうる。HTML側に途中で新たな要素を追加したときなどの場合に生じる。indexが変わるため、キーが変わってしまう。動的に要素を追加するようなときは正しく動作しない。これについてはレアケースであり対象外とする。

### 複数

* `input[type="checkbox"]`は複数選択できる。単一、選択なしもありうる。よって配列で保存するよう共通化する
* `select`は`multiple`属性フラグがあるとき複数選択できる。このとき配列で保存すべき。よってフラグがないときも配列で単一値を保存するよう共通化する


Store|要素
-----|----
InputStore|`radio`,`checkbox`,`file`以外の`input[type="..."]`すべて
InputRadioStore|`input[type="radio"]`
InputCheckboxStore|`input[type="checkbox"]`
InputFileStore|`input[type="file"]`
TextAreaStore|`textarea`
SelectStore|`select`


## 要素ごとのキー
