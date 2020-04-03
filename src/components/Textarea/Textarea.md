```jsx
initialState = { value: '' };

<Textarea
  name="textarea"
  id="withLabel"
  value={state.value}
  onChange={e => setState({ value: e.target.value })}
  label="Label"
  helper="Helper data"
  required
/>;
```

```jsx
initialState = { value: '' };

<Textarea
  name="textarea"
  id="withLabel"
  value={state.value}
  onChange={e => setState({ value: e.target.value })}
  label="Label"
  error
  messageError="Invalid data"
/>;
```

```jsx
initialState = { value: '' };

<Textarea
  name="textarea"
  id="id"
  value={state.value}
  onChange={e => setState({ value: e.target.value })}
  placeholder="Placeholder"
/>;
```

```jsx
<Textarea name="textarea" id="id" placeholder="Disabled Placeholder" disabled />
```
