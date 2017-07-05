# comment

###
コメント
パウンド記号
###

###
var なし
; なし
{} インデントで調整
() 曖昧じゃないときは省略可
JavaScriptの埋め込み
###

# String

###
式展開
rubyみたい

score = 80
# alert "score: " + score
alert "score: #{score}"
alert "score: #{score * 10}"
###

###
複数行とかヒアドキュメントとか

改行はスペースとして入る、また前後の空白は削除
msg = "this
      is
      a
      logn
      text"

改行は\nとして入る、また前後の空白は削除
html = """
      ヒアドキュメント
      はこちら
      """

###

###
配列
a = [1, 3, 5]
b = [
  2
  3
  4
]

m = [0..4]
m = [0...5]

alert m[1..3] (sliceという命令)
m[1..3]
m[..3]
m[1..]
m[..]
m[1..-2] # 最後から二番目
m[0..1] = ["a", "b", "c"]

# 文字列にも使える
alert "world"[1..3]

###

###
$ 05 オブジェクト

m = {name : "taguch", score: 80}

n = name : "taguch", score: 80

l =
  name : "taguch"
  score: 80

# 字下げ構造 YAML
n =
  name: "fkoji"
  score:
    first: 80
    second: 70

###

###

# 06 if文

if score > 60
  alert score

# 1行で書いてみる

# then
if score > 60 then alert score
# 倒置
alert score if score > 60

# if - elseの書き方

if score > 60
  alert "ok"
else
  alert "ng"

if score > 60 then alert "ok" else alert "ng"

# 三項演算子
# condition ? a : b
msg = if score > 60 then "ok" else "ng"

###





























