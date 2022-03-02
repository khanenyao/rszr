# @khanenyao/rszr

RSZR - is zero dependencies resizer component. Users can interact with the handles (controls) for increasing or decreasing the width or height of a container. Any component can be used as a child component.

Implemented with [React](https://reactjs.org) & [TypeScript](https://www.typescriptlang.org).

- [Install](#install)
- [Resizer props](#resizer-props)
- [Rxamples](#examples)
- - [Demo](#demo)
- - [Controls](#controls)
- - [Styling](#styling)
- - [Sidebar](#sidebar)
- [Development](#development)
- - [Storybook](#storybook)
- - [Build](#build)
- [License](#license)

## Install

```bash
$ yarn add @khanenyao/rszr
```

## Resizer props

| name     | type                 | required | default                                                                                |
| -------- | -------------------- | -------- | -------------------------------------------------------------------------------------- |
| children | ReactNode            | -        | -                                                                                      |
| controls | ResizerControlType[] | -        | [ResizerControlType.RIGHT, ResizerControlType.RIGHT_BOTTOM, ResizerControlType.BOTTOM] |

## Examples

### Demo

[codesandbox](https://codesandbox.io/s/khanenyao-rszr-demo-goq46u)

```jsx
import { Resizer } from "@khanenyao/rszr";

export default function App() {
  return (
    <div>
      <Resizer>
        <p>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
          If you are going to use a passage of Lorem Ipsum, you need to be sure
          there isn't anything embarrassing hidden in the middle of text. All
          the Lorem Ipsum generators on the Internet tend to repeat predefined
          chunks as necessary, making this the first true generator on the
          Internet. It uses a dictionary of over 200 Latin words, combined with
          a handful of model sentence structures, to generate Lorem Ipsum which
          looks reasonable. The generated Lorem Ipsum is therefore always free
          from repetition, injected humour, or non-characteristic words etc.
        </p>
      </Resizer>
    </div>
  );
}
```

### Controls

You can manage visible `controls`. By default all `controls` are visible.

[codesandbox](https://codesandbox.io/s/khanenyao-rszr-controls-8qudl7)

```jsx
import { Resizer, ResizerControlType } from "@khanenyao/rszr";

export default function App() {
  return (
    <div>
      <Resizer controls={[ResizerControlType.RIGHT]}>
        <p>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
          If you are going to use a passage of Lorem Ipsum, you need to be sure
          there isn't anything embarrassing hidden in the middle of text. All
          the Lorem Ipsum generators on the Internet tend to repeat predefined
          chunks as necessary, making this the first true generator on the
          Internet. It uses a dictionary of over 200 Latin words, combined with
          a handful of model sentence structures, to generate Lorem Ipsum which
          looks reasonable. The generated Lorem Ipsum is therefore always free
          from repetition, injected humour, or non-characteristic words etc.
        </p>
      </Resizer>
    </div>
  );
}
```

### Styling

[codesandbox](https://codesandbox.io/s/khanenyao-rszr-styling-demo-pjxzyr)

```jsx
import { Resizer } from "@khanenyao/rszr";
import "./customStyles.css";

export default function App() {
  return (
    <div className="App">
      <h1>@khanenyao/rszr</h1>
      <h2>Styling demo</h2>
      <Resizer>
        <p>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
          If you are going to use a passage of Lorem Ipsum, you need to be sure
          there isn't anything embarrassing hidden in the middle of text. All
          the Lorem Ipsum generators on the Internet tend to repeat predefined
          chunks as necessary, making this the first true generator on the
          Internet. It uses a dictionary of over 200 Latin words, combined with
          a handful of model sentence structures, to generate Lorem Ipsum which
          looks reasonable. The generated Lorem Ipsum is therefore always free
          from repetition, injected humour, or non-characteristic words etc.
        </p>
      </Resizer>
    </div>
  );
}
```

### Sidebar

[codesandbox](https://codesandbox.io/s/khanenyao-rszr-sidebar-demo-onjgp7)

```jsx
import { Resizer, ResizerControlType } from "@khanenyao/rszr";
import "./sideBarStyles.css";

export default function App() {
  return (
    <>
      <div className="header">
        <h1>@khanenyao/rszr</h1>
        <h2>Styling demo</h2>
      </div>
      <div className="sidebar-example">
        <Resizer controls={[ResizerControlType.RIGHT]}>
          <nav>
            <ul>
              <li>Nav link one</li>
              <li>Nav link two</li>
              <li>Nav link three</li>
            </ul>
          </nav>
        </Resizer>
        <div className="content">content</div>
      </div>
    </>
  );
}
```

## Development

### Storybook

For fast and comfortable development this project includes a Storybook.

```bash
$ yarn start storybook
```

### Build

```bash
$ yarn rollup
```

## License

[MIT](LICENSE.md)
