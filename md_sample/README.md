# マークダウンの改行について

## 何もしない

test1
test2
test3

```html
<p dir="auto">test1 test2 test3</p>
```

## 文末に半角空白スペースを 2 つつける

test1  
test2  
test3  

```html
<p dir="auto">
  test1<br />
  test2<br />
  test3
</p>
```

## 1 行空白の行を入れる

test1

test2

test3

```html
<p dir="auto">test1</p>
<p dir="auto">test2</p>
<p dir="auto">test3</p>
```

## `<br>` タグを使う

test1<br>
test2<br>
test3<br>

```html
<p dir="auto">
  test1<br />
  test2<br />
  test3<br />
</p>
```

## VSCode の設定メモ

formatやtrim設定で自動で文末スペースが消えるので

```
{
  "[markdown]": {
    "editor.formatOnSave": false,
    "files.trimTrailingWhitespace": false,
  },
}

```
