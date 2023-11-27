# cModRepository

Mod repository for cModLoader.

## Install cModLoader

The latest script for cModLoader is hosted [here](https://cml.snowy.cafe/cModLoader.js).
The latest index file is hosted [here](https://cml.snowy.cafe/index.json).

For convience, you can install the userscript [here](https://cml.snowy.cafe/cModLoader.user.js),
which will automatically load the latest version cModLoader when visiting [corru.observer](https://corru.observer).

## Submission Guidelines

If you'd like to submit a mod to this repository, please open a PR with your
submission according to the following guidelines.

1. Update the `hash` value of the `index.json` with the current UNIX timestamp.
2. Add an entry in `index.json` with the details of your mod:

| **Property**  | **Meaning**     | **Guidelines**                                 |
| ------------- | --------------- | ---------------------------------------------- |
| `name` (key)  | Mod Name        | `[A-Za-z0-9._-]+`                              |
| `version`     | Mod Version     | `x.y.z`                                        |
| `description` | Mod Description | Any string you'd like (:                       |
| `author`      | Mod Author      | Discord Username                               |
| `entry`       | Script Location | https://cml.snowy.cafe/mods/{mod}/{version}.js |

3. Add your file under `/mods/{mod_name}/{mod_version}.js`

## Update Guidelines

1. Update the `hash` value of the `index.json` with the current UNIX timestamp.
2. Update the `index.json` with the new version, and any other info.
3. Add the updated file under `/mods/{mod_name}/{new_mod_version}.js`

## Versioning Policy

To maintain backwards compatibility, a version cannot be modified or removed
once published. A mod's `index.json` entry cannot be modified without a version
bump. A new version must be larger than the previous.

The exception to this is if a particular version has sensitive information. In
this case, that particular version will be removed and replaced with a stub
version prompting users to update. Git history may be re-written if necessary.
