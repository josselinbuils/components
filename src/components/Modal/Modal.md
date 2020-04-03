Warning

- It includes react-spring as dependency (31.79KB)

Modal:

- Modal use Portal Component, check configuration in Portal section.
- Use Toggle Component to display Modal easily.
- Display Header as a string or render function or nothing.
- Display Footer with close button or nothing.
- Display iframe.

Tips:

- If you need to display an iframe in Modal, set props "hasIframe" at true to fix width.

```jsx
import Button from '../Button';
import Toggle from '../Toggle';

  <h4 className="h4">Modal with Header as string and default footer</h4>
  <Toggle>
    {({ on, toggle }) => (
      <div>
        <Button onClick={toggle}>Modal</Button>
        <Modal on={on} toggle={toggle} header="Modal title as a string props">
          <p className="p">body render with children</p>
        </Modal>
      </div>
    )}
  </Toggle>
```

```jsx
import Button from '../Button';
import Toggle from '../Toggle';

  <h4 className="h4">Modal without Header and Footer</h4>
  <Toggle>
    {({ on, toggle }) => (
      <div>
        <Button onClick={toggle}>Modal</Button>
        <Modal on={on} toggle={toggle} Footer={null}>
          <p className="p">
            Vestibulizzle ante yo mamma primis fo shizzle mah nizzle fo rizzle,
            mah home g-dizzle fizzle fo shizzle luctus check it out shit shiznit
            my shizz Curae; Crunk for sure nulla quis ghetto ornare tellivizzle.
            Phasellus yo erizzle. Fo shizzle mah nizzle fo rizzle, mah home
            g-dizzle volutpat accumsan break yo neck, yall. Sure diam daahng
            dawg, adipiscing vitae, gravida izzle, interdum you son of a bizzle,
            ante. pizzle bibendum maurizzle. in elit izzle augue porta break it
            down. Nam sed augue. Crazy sagittis. Shit eu lacus quis boofron
            posuere get down get down. Black own yo' tellizzle stuff felis crunk
            mollizzle. Integer odio. Fo shizzle scelerisque. Black magna eros,
            sheezy ass, porttitizzle dawg, imperdizzle egestas, fo shizzle my
            nizzle. Integer commodo break yo neck, yall lectizzle. Etiam
            sollicitudizzle for sure sizzle. Bow wow wow mi eros, convallis
            izzle, pellentesque yippiyo, ultricizzle crackalackin, nibh. Fusce
            erizzle crunk, facilisizzle eu, sollicitudizzle shiznit, shizznit ma
            nizzle, lectizzle. Fusce mauris dang, get down get down shit,
            adipiscing ut, shiznit sizzle amizzle, dope.
          </p>
        </Modal>
      </div>
    )}
  </Toggle>
```

```jsx
import Button from '../Button';
import Toggle from '../Toggle';

  <h4 className="h4">Modal with custom Header</h4>
  <Toggle>
    {({ on, toggle }) => (
      <div>
        <Button onClick={toggle}>Modal</Button>
        <Modal
          on={on}
          toggle={toggle}
          header={
              Header custom content
              <Button
                theme="secondary"
                size="small"
                onClick={toggle}
                style={{ marginLeft: 'auto' }}
              >
                close
              </Button>
          }
        >
          Body content
        </Modal>
      </div>
    )}
  </Toggle>
```

```jsx
import Button from '../Button';
import Toggle from '../Toggle';

  <h4 className="h4">Modal with custom Footer</h4>
  <Toggle>
    {({ on, toggle }) => (
      <div>
        <Button onClick={toggle}>Modal</Button>
        <Modal
          on={on}
          toggle={toggle}
          Footer={
              Footer content
              <Button
                theme="secondary"
                size="small"
                onClick={toggle}
                style={{ marginLeft: 'auto' }}
              >
                close
              </Button>
          }
        >
          Body content
        </Modal>
      </div>
    )}
  </Toggle>
```

```jsx
import Button from '../Button';
import Toggle from '../Toggle';

  <h4 className="h4">Modal with big body content</h4>
  <Toggle>
    {({ on, toggle }) => (
      <div>
        <Button onClick={toggle}>Modal</Button>
        <Modal on={on} toggle={toggle} header="Modal title as a string props">
          <p className="p">
            Vestibulizzle ante yo mamma primis fo shizzle mah nizzle fo rizzle,
            mah home g-dizzle fizzle fo shizzle luctus check it out shit shiznit
            my shizz Curae; Crunk for sure nulla quis ghetto ornare tellivizzle.
            Phasellus yo erizzle. Fo shizzle mah nizzle fo rizzle, mah home
            g-dizzle volutpat accumsan break yo neck, yall. Sure diam daahng
            dawg, adipiscing vitae, gravida izzle, interdum you son of a bizzle,
            ante. pizzle bibendum maurizzle. in elit izzle augue porta break it
            down. Nam sed augue. Crazy sagittis. Shit eu lacus quis boofron
            posuere get down get down. Black own yo' tellizzle stuff felis crunk
            mollizzle. Integer odio. Fo shizzle scelerisque. Black magna eros,
            sheezy ass, porttitizzle dawg, imperdizzle egestas, fo shizzle my
            nizzle. Integer commodo break yo neck, yall lectizzle. Etiam
            sollicitudizzle for sure sizzle. Bow wow wow mi eros, convallis
            izzle, pellentesque yippiyo, ultricizzle crackalackin, nibh. Fusce
            erizzle crunk, facilisizzle eu, sollicitudizzle shiznit, shizznit ma
            nizzle, lectizzle. Fusce mauris dang, get down get down shit,
            adipiscing ut, shiznit sizzle amizzle, dope.
          </p>
          <p className="p">
            Vestibulizzle ante yo mamma primis fo shizzle mah nizzle fo rizzle,
            mah home g-dizzle fizzle fo shizzle luctus check it out shit shiznit
            my shizz Curae; Crunk for sure nulla quis ghetto ornare tellivizzle.
            Phasellus yo erizzle. Fo shizzle mah nizzle fo rizzle, mah home
            g-dizzle volutpat accumsan break yo neck, yall. Sure diam daahng
            dawg, adipiscing vitae, gravida izzle, interdum you son of a bizzle,
            ante. pizzle bibendum maurizzle. in elit izzle augue porta break it
            down. Nam sed augue. Crazy sagittis. Shit eu lacus quis boofron
            posuere get down get down. Black own yo' tellizzle stuff felis crunk
            mollizzle. Integer odio. Fo shizzle scelerisque. Black magna eros,
            sheezy ass, porttitizzle dawg, imperdizzle egestas, fo shizzle my
            nizzle. Integer commodo break yo neck, yall lectizzle. Etiam
            sollicitudizzle for sure sizzle. Bow wow wow mi eros, convallis
            izzle, pellentesque yippiyo, ultricizzle crackalackin, nibh. Fusce
            erizzle crunk, facilisizzle eu, sollicitudizzle shiznit, shizznit ma
            nizzle, lectizzle. Fusce mauris dang, get down get down shit,
            adipiscing ut, shiznit sizzle amizzle, dope.
          </p>
          <p className="p">
            Vestibulizzle ante yo mamma primis fo shizzle mah nizzle fo rizzle,
            mah home g-dizzle fizzle fo shizzle luctus check it out shit shiznit
            my shizz Curae; Crunk for sure nulla quis ghetto ornare tellivizzle.
            Phasellus yo erizzle. Fo shizzle mah nizzle fo rizzle, mah home
            g-dizzle volutpat accumsan break yo neck, yall. Sure diam daahng
            dawg, adipiscing vitae, gravida izzle, interdum you son of a bizzle,
            ante. pizzle bibendum maurizzle. in elit izzle augue porta break it
            down. Nam sed augue. Crazy sagittis. Shit eu lacus quis boofron
            posuere get down get down. Black own yo' tellizzle stuff felis crunk
            mollizzle. Integer odio. Fo shizzle scelerisque. Black magna eros,
            sheezy ass, porttitizzle dawg, imperdizzle egestas, fo shizzle my
            nizzle. Integer commodo break yo neck, yall lectizzle. Etiam
            sollicitudizzle for sure sizzle. Bow wow wow mi eros, convallis
            izzle, pellentesque yippiyo, ultricizzle crackalackin, nibh. Fusce
            erizzle crunk, facilisizzle eu, sollicitudizzle shiznit, shizznit ma
            nizzle, lectizzle. Fusce mauris dang, get down get down shit,
            adipiscing ut, shiznit sizzle amizzle, dope.
          </p>
          <p className="p">
            Vestibulizzle ante yo mamma primis fo shizzle mah nizzle fo rizzle,
            mah home g-dizzle fizzle fo shizzle luctus check it out shit shiznit
            my shizz Curae; Crunk for sure nulla quis ghetto ornare tellivizzle.
            Phasellus yo erizzle. Fo shizzle mah nizzle fo rizzle, mah home
            g-dizzle volutpat accumsan break yo neck, yall. Sure diam daahng
            dawg, adipiscing vitae, gravida izzle, interdum you son of a bizzle,
            ante. pizzle bibendum maurizzle. in elit izzle augue porta break it
            down. Nam sed augue. Crazy sagittis. Shit eu lacus quis boofron
            posuere get down get down. Black own yo' tellizzle stuff felis crunk
            mollizzle. Integer odio. Fo shizzle scelerisque. Black magna eros,
            sheezy ass, porttitizzle dawg, imperdizzle egestas, fo shizzle my
            nizzle. Integer commodo break yo neck, yall lectizzle. Etiam
            sollicitudizzle for sure sizzle. Bow wow wow mi eros, convallis
            izzle, pellentesque yippiyo, ultricizzle crackalackin, nibh. Fusce
            erizzle crunk, facilisizzle eu, sollicitudizzle shiznit, shizznit ma
            nizzle, lectizzle. Fusce mauris dang, get down get down shit,
            adipiscing ut, shiznit sizzle amizzle, dope.
          </p>
          <p className="p">
            Vestibulizzle ante yo mamma primis fo shizzle mah nizzle fo rizzle,
            mah home g-dizzle fizzle fo shizzle luctus check it out shit shiznit
            my shizz Curae; Crunk for sure nulla quis ghetto ornare tellivizzle.
            Phasellus yo erizzle. Fo shizzle mah nizzle fo rizzle, mah home
            g-dizzle volutpat accumsan break yo neck, yall. Sure diam daahng
            dawg, adipiscing vitae, gravida izzle, interdum you son of a bizzle,
            ante. pizzle bibendum maurizzle. in elit izzle augue porta break it
            down. Nam sed augue. Crazy sagittis. Shit eu lacus quis boofron
            posuere get down get down. Black own yo' tellizzle stuff felis crunk
            mollizzle. Integer odio. Fo shizzle scelerisque. Black magna eros,
            sheezy ass, porttitizzle dawg, imperdizzle egestas, fo shizzle my
            nizzle. Integer commodo break yo neck, yall lectizzle. Etiam
            sollicitudizzle for sure sizzle. Bow wow wow mi eros, convallis
            izzle, pellentesque yippiyo, ultricizzle crackalackin, nibh. Fusce
            erizzle crunk, facilisizzle eu, sollicitudizzle shiznit, shizznit ma
            nizzle, lectizzle. Fusce mauris dang, get down get down shit,
            adipiscing ut, shiznit sizzle amizzle, dope.
          </p>
          <p className="p">
            Vestibulizzle ante yo mamma primis fo shizzle mah nizzle fo rizzle,
            mah home g-dizzle fizzle fo shizzle luctus check it out shit shiznit
            my shizz Curae; Crunk for sure nulla quis ghetto ornare tellivizzle.
            Phasellus yo erizzle. Fo shizzle mah nizzle fo rizzle, mah home
            g-dizzle volutpat accumsan break yo neck, yall. Sure diam daahng
            dawg, adipiscing vitae, gravida izzle, interdum you son of a bizzle,
            ante. pizzle bibendum maurizzle. in elit izzle augue porta break it
            down. Nam sed augue. Crazy sagittis. Shit eu lacus quis boofron
            posuere get down get down. Black own yo' tellizzle stuff felis crunk
            mollizzle. Integer odio. Fo shizzle scelerisque. Black magna eros,
            sheezy ass, porttitizzle dawg, imperdizzle egestas, fo shizzle my
            nizzle. Integer commodo break yo neck, yall lectizzle. Etiam
            sollicitudizzle for sure sizzle. Bow wow wow mi eros, convallis
            izzle, pellentesque yippiyo, ultricizzle crackalackin, nibh. Fusce
            erizzle crunk, facilisizzle eu, sollicitudizzle shiznit, shizznit ma
            nizzle, lectizzle. Fusce mauris dang, get down get down shit,
            adipiscing ut, shiznit sizzle amizzle, dope.
          </p>
          <p className="p">
            Vestibulizzle ante yo mamma primis fo shizzle mah nizzle fo rizzle,
            mah home g-dizzle fizzle fo shizzle luctus check it out shit shiznit
            my shizz Curae; Crunk for sure nulla quis ghetto ornare tellivizzle.
            Phasellus yo erizzle. Fo shizzle mah nizzle fo rizzle, mah home
            g-dizzle volutpat accumsan break yo neck, yall. Sure diam daahng
            dawg, adipiscing vitae, gravida izzle, interdum you son of a bizzle,
            ante. pizzle bibendum maurizzle. in elit izzle augue porta break it
            down. Nam sed augue. Crazy sagittis. Shit eu lacus quis boofron
            posuere get down get down. Black own yo' tellizzle stuff felis crunk
            mollizzle. Integer odio. Fo shizzle scelerisque. Black magna eros,
            sheezy ass, porttitizzle dawg, imperdizzle egestas, fo shizzle my
            nizzle. Integer commodo break yo neck, yall lectizzle. Etiam
            sollicitudizzle for sure sizzle. Bow wow wow mi eros, convallis
            izzle, pellentesque yippiyo, ultricizzle crackalackin, nibh. Fusce
            erizzle crunk, facilisizzle eu, sollicitudizzle shiznit, shizznit ma
            nizzle, lectizzle. Fusce mauris dang, get down get down shit,
            adipiscing ut, shiznit sizzle amizzle, dope.
          </p>
          <p className="p">
            Vestibulizzle ante yo mamma primis fo shizzle mah nizzle fo rizzle,
            mah home g-dizzle fizzle fo shizzle luctus check it out shit shiznit
            my shizz Curae; Crunk for sure nulla quis ghetto ornare tellivizzle.
            Phasellus yo erizzle. Fo shizzle mah nizzle fo rizzle, mah home
            g-dizzle volutpat accumsan break yo neck, yall. Sure diam daahng
            dawg, adipiscing vitae, gravida izzle, interdum you son of a bizzle,
            ante. pizzle bibendum maurizzle. in elit izzle augue porta break it
            down. Nam sed augue. Crazy sagittis. Shit eu lacus quis boofron
            posuere get down get down. Black own yo' tellizzle stuff felis crunk
            mollizzle. Integer odio. Fo shizzle scelerisque. Black magna eros,
            sheezy ass, porttitizzle dawg, imperdizzle egestas, fo shizzle my
            nizzle. Integer commodo break yo neck, yall lectizzle. Etiam
            sollicitudizzle for sure sizzle. Bow wow wow mi eros, convallis
            izzle, pellentesque yippiyo, ultricizzle crackalackin, nibh. Fusce
            erizzle crunk, facilisizzle eu, sollicitudizzle shiznit, shizznit ma
            nizzle, lectizzle. Fusce mauris dang, get down get down shit,
            adipiscing ut, shiznit sizzle amizzle, dope.
          </p>
          <p className="p">
            Vestibulizzle ante yo mamma primis fo shizzle mah nizzle fo rizzle,
            mah home g-dizzle fizzle fo shizzle luctus check it out shit shiznit
            my shizz Curae; Crunk for sure nulla quis ghetto ornare tellivizzle.
            Phasellus yo erizzle. Fo shizzle mah nizzle fo rizzle, mah home
            g-dizzle volutpat accumsan break yo neck, yall. Sure diam daahng
            dawg, adipiscing vitae, gravida izzle, interdum you son of a bizzle,
            ante. pizzle bibendum maurizzle. in elit izzle augue porta break it
            down. Nam sed augue. Crazy sagittis. Shit eu lacus quis boofron
            posuere get down get down. Black own yo' tellizzle stuff felis crunk
            mollizzle. Integer odio. Fo shizzle scelerisque. Black magna eros,
            sheezy ass, porttitizzle dawg, imperdizzle egestas, fo shizzle my
            nizzle. Integer commodo break yo neck, yall lectizzle. Etiam
            sollicitudizzle for sure sizzle. Bow wow wow mi eros, convallis
            izzle, pellentesque yippiyo, ultricizzle crackalackin, nibh. Fusce
            erizzle crunk, facilisizzle eu, sollicitudizzle shiznit, shizznit ma
            nizzle, lectizzle. Fusce mauris dang, get down get down shit,
            adipiscing ut, shiznit sizzle amizzle, dope.
          </p>
        </Modal>
      </div>
    )}
  </Toggle>
```

```jsx
import Button from '../Button';
import Toggle from '../Toggle';

  <h4 className="h4">Modal with iframe content</h4>
  <Toggle>
    {({ on, toggle }) => (
      <div>
        <Button onClick={toggle}>Modal</Button>
        <Modal
          on={on}
          toggle={toggle}
          header="Modal title as a string props"
          hasIframe
        >
          Hello
        </Modal>
      </div>
    )}
  </Toggle>
```

```jsx
import Button from '../Button';
import Toggle from '../Toggle';

  <h4 className="h4">Modal with an other modal</h4>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
    non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  </p>
  <Toggle>
    {({ on, toggle }) => (
      <div>
        <Button onClick={toggle}>Modal</Button>
        <Modal on={on} toggle={toggle} header="Modal title as a string props">
          <Toggle>
            {({ on, toggle }) => (
              <div>
                <Button onClick={toggle}>Modal</Button>
                <Modal
                  on={on}
                  toggle={toggle}
                  header="Modal title as a string props"
                >
                  <p className="p">body render with children</p>
                </Modal>
              </div>
            )}
          </Toggle>
        </Modal>
      </div>
    )}
  </Toggle>
```
