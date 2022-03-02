# @khanenyao/rszr

RSZR - is a zero dependencies resize component. User can interact with with handles (controls) for increasing or decreasing the width or height of a container. As child can be any component.

Implemented with [React](https://reactjs.org) & [TypeScript](https://www.typescriptlang.org).

- [Demo](#demo)
- [Install](#install)
- [Resizer props](#resizer-props)
- [Code examples](#code-examples)
- - [Default](#default)
- - [Manage controls](#manage-controls)
- [Development](#development)
- - [Storybook](#storybook)
- - [Build](#build)

## Demo

You can try this component in simple demo application on [codesandobox](https://google.com).

## Install

```bash
$ yarn add @khanenyao/rszr
```

## Resizer props

| name     | type                 | required | default                                                                                |
| -------- | -------------------- | -------- | -------------------------------------------------------------------------------------- |
| children | ReactNode            | -        | -                                                                                      |
| controls | ResizerControlType[] | -        | [ResizerControlType.RIGHT, ResizerControlType.RIGHT_BOTTOM, ResizerControlType.BOTTOM] |

## Code examples

### Default

```jsx
import React from "react";
import { Resizer } from "@khanenyao/rszr";

const DefaultExample = () => {
  return (
    <div>
      <Resizer>
        <span>Deafault example children</span>
      </Resizer>
    </div>
  );
};

export default DefaultExample;
```

### Manage `controls`

You can manage visible `controls`. By default all `controls` are visible.

```jsx
import React from "react";
import { Resizer, ResizerControlType } from "@khanenyao/rszr";

const RightControlExample = () => {
  return (
    <div>
      <Resizer controls={[ResizerControlType.RIGHT]}>
        <span>Right control children</span>
      </Resizer>
    </div>
  );
};

export default RightControlExample;
```

## Development

### Storybook

For fast and comfortable developing this project includes Storybook.

```bash
$ yarn start storybook
```

### Build

```bash
$ yarn build
```
