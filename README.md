# ms-download

This is the downloader for [myshell](https://github.com/ms-ecology/myshell)

## Usage

### install

`ms add <module-name>` is for install remote scripts.

`module-name` is the repo that you want to add which in [ms-ecology](https://github.com/ms-ecology)

**example:**

```sh
ms add git-branch-util # this command will add ms-ecology/git-branch-util's scripts into your locle enviroment
```

### uninstall

`ms remove <module-name>` is for uninstall remote scripts.

**example:**

```sh
ms remove git-branch-util # this command will remove scripts that in ms-ecology/git-branch-util
```

## Caution

You must install **myshell** at first.

for install:

```sh
npm install myshell -g
```

