
# ----------------------------------------------

###

# 02 はじめてのscript

コメントはパウンド記号 #

# 特徴
var なし
; なし
{} インデントで調整
() 曖昧じゃないときは省略可
JavaScriptの埋め込み
###

# ----------------------------------------------

###
# 03 文字列の扱い

# 式展開（文字列の結合をしなくていい）
score = 80
# alert "score: " + score
alert "score: #{score}"

# 簡単な計算なら#{}ないで行える
alert "score: #{score * 10}"

###

# ----------------------------------------------

###

# 04 配列と範囲記法

# 複数行とかヒアドキュメントとか

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

# 配列

a = [1, 3, 5]
b = [
  2
  3
  4
]

# 範囲記法

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

# ----------------------------------------------

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

# ----------------------------------------------

###

# 07 比較演算子

# 変換
== > ===
!= > !==

# 別表現
=== > is
!== > isnt

# 比較の結合
alert ok if 10 < x < 20

# Booleanの表現
true -> yes on
false -> no off

&& and
|| or
! not

# 文章みたいに真偽値を行玄できる
alert "ok" if answer is yes and signal inst off

obj =
  score: 52

# オブジェクトのkeyの存在判定 of
alert "of" if "score" of obj


###

# ----------------------------------------------

###

# 08 switch文

# JavaScriptの文
switch (signal) {
  case "red":
    alert("STOP!");
    break;
  case "blue":
  case "green":
    alert("GO!");
    break;
  case "yellow":
    alert("CAUTION!");
    break;
  default:
    alert("wrong signal!");
}

# coffeescript

switch signal
  when "red"
    alert "STOP!"
  when "blue", "green" then alert "GO!"
  when "yellow" then alert "CAUTION!"
  else alert "wrong signal!"


###


# ----------------------------------------------

###

# 09 for, while, 内包表記

# for文
sum = 0
for i in [0..9]
  sum += i
alert sum

# 一行でのfor文
sum = 0
sum += i for i in [0..9]
alert sum

# for文、2つ飛び
sum = 0
sum += i for i in [0..9] by 2
alert sum

# 配列内包
"""
繰り返し処理を行うのですが
その処理の 1 段階ずつの結果を配列にして返すもの
"""
sum = 0
total (sum += i for i in [0..9])
alert sum



###




















