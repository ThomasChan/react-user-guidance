# React UserGuidance

## Example

- [Online example](http://chenjunhao.cn/react-user-guidance)
- local example
  ```sh
  $ git clone git@github.com:thomaschan/react-user-guidance.git
  $ npm install
  $ npm run doc
  ```

## Installation & Usage

```sh
npm install react-user-guidance --save
```

- Triggered step will be saved to localStorage by `name`.
- `position` values can be `top`,`left`,`top-left`,`top-right`,`right`,`bottom`,`bottom-left`,`bottom-right`.

### Include the Component

```js
import React from 'react';
import UserGuidance from 'react-user-guidance';

class App extends React.PureComponent {

  render() {
    return <div>
      <button className="test1">hover to trigger guidance</button>
      <br />
      <button className="test2">click to trigger guidance</button>

      <UserGuidance steps={[
        {
          name: 'test1',
          selector: '.test1',
          trigger: 'hover',
          position: 'right',
          text: 'yes, this is just a user guidance popup',
          close: 'close this',
        },
        {
          name: 'test2',
          selector: '.test2',
          trigger: 'click',
          position: 'right',
          text: 'yes, this is just a user guidance popup',
          close: 'close this',
        }
      ]} />
    </div>;
  }

}
```
