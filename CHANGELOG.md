# [2.0.0](https://github.com/Lundalogik/eslint-config/compare/v1.0.1...v2.0.0) (2023-10-29)


### Bug Fixes


* **dependencies:** make most dependencies devDependencies ([821a822](https://github.com/Lundalogik/eslint-config/commit/821a8228b2cd3afde6b7e37b975a1665ec6d4b34))

### Features


* **dependecies:** put tighter restrictions on peerDependencies ([0b3a8ea](https://github.com/Lundalogik/eslint-config/commit/0b3a8ea11fc2f6dcd4bc6699315126c716771d62))

### BREAKING CHANGES

* **dependecies:** This commits restricts the peerDependencies from `>=` to `^`, in
order to enable better control of styles within packages depending
on this shared configuration. This package is currently in a
somewhat experimental phase, and restrictions may be opened up or
restricted further as we find what fits best for internal use at
Lime.

## [1.0.1](https://github.com/Lundalogik/eslint-config/compare/v1.0.0...v1.0.1) (2023-10-28)


### Bug Fixes


* **package:** add required peer dependencies ([8294559](https://github.com/Lundalogik/eslint-config/commit/8294559b3b180c1327625663c204df1f33fcd78e))
* rename repo to make it work as shared config ([1d70b64](https://github.com/Lundalogik/eslint-config/commit/1d70b64c10e49f3a10c852a2a6affb382b3b4e95))

# 1.0.0 (2023-10-28)


### Features


* add dependencies on, and rules for, eslint, prettier, and various plugins ([185a4b6](https://github.com/Lundalogik/lime-frontend-lint/commit/185a4b60365476a87c943a3fa951aba64cb708bb))
