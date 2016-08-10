# dotenv-extended-export

Source & export `.env` into your shell.
Adds `export` statements to each line of a [dotenv] `.env` file, for defining
any variables therein in your shell.

## Install

```
npm i -g dotenv-extended-export
```

## Use

```
source <(dotenv-extended-export)
```
## Example

```shell
# .env
COLOR=red
```

    $ source <(dotenv-extended-export) echo $COLOR

[dotenv-extended]: https://github.com/keithmorris/node-dotenv-extended
