## React-UserGuidance

```html
<div id="__div"></div>
```

```jsx
import React from 'react';
import { render } from 'react-dom';

import UserGuidance from '../src';

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

render(<App />, document.getElementById('__div'));
```
