Input Radio Group Horizontal:

```jsx
initialState = {
  selected: 'mp3',
  options: [
    {
      label: 'Vinyle',
      value: 'vinyle'
    },
    {
      label: 'CD',
      value: 'cd'
    },
    {
      label: 'Mp3',
      value: 'mp3'
    }
  ]
};

<InputCheckGroup
  inputGroupTitle="Radio Group:"
  type="radio"
  options={state.options}
  name="radioGroupHorizontal"
  selectedOption={state.selected}
  onChange={e => setState({ selected: e.currentTarget.value })}
/>;
```

Input Radio Group Horizontal (required):

```jsx
initialState = {
  selected: 'cd',
  options: [
    {
      label: 'Vinyle',
      value: 'vinyle'
    },
    {
      label: 'CD',
      value: 'cd'
    },
    {
      label: 'Mp3',
      value: 'mp3'
    }
  ]
};

<InputCheckGroup
  inputGroupTitle="Radio Group:"
  type="radio"
  options={state.options}
  name="radioGroupHorizontalRequired"
  selectedOption={state.selected}
  onChange={e => setState({ selected: e.currentTarget.value })}
  required
/>;
```

Input Radio Group Horizontal (required without title):

```jsx
initialState = {
  selected: 'vinyle',
  options: [
    {
      label: 'Vinyle',
      value: 'vinyle'
    },
    {
      label: 'CD',
      value: 'cd'
    },
    {
      label: 'Mp3',
      value: 'mp3'
    }
  ]
};

<InputCheckGroup
  type="radio"
  options={state.options}
  name="radioGroupHorizontalRequiredWithoutTitle"
  selectedOption={state.selected}
  onChange={e => setState({ selected: e.currentTarget.value })}
  required
/>;
```

Input Radio Group Horizontal (with error):

```jsx
initialState = {
  selected: 'vinyle',
  options: [
    {
      label: 'Vinyle',
      value: 'vinyle'
    },
    {
      label: 'CD',
      value: 'cd'
    },
    {
      label: 'Mp3',
      value: 'mp3'
    }
  ]
};

<InputCheckGroup
  error="That is an error :("
  type="radio"
  options={state.options}
  name="radioGroupHorizontalWithError"
  selectedOption={state.selected}
  onChange={e => setState({ selected: e.currentTarget.value })}
/>;
```

Input Radio Group Vertical:

```jsx
initialState = {
  selected: 'magneto',
  options: [
    {
      label: 'Cassette',
      value: 'cassette'
    },
    {
      label: 'Magneto',
      value: 'magneto'
    },
    {
      label: 'MiniDisc',
      value: 'minidisc'
    }
  ]
};

<InputCheckGroup
  inputGroupTitle="Radio Group:"
  type="radio"
  direction="vertical"
  options={state.options}
  name="radioGroupVertical"
  selectedOption={state.selected}
  onChange={e => setState({ selected: e.currentTarget.value })}
/>;
```

Input checkbox Group Horizontal:

```jsx
initialState = {
  selected: ['osx-xxx_x', 'linux'],
  options: [
    {
      label: 'Osx',
      value: 'osx'
    },
    {
      label: 'Windows',
      value: 'windows'
    },
    {
      label: 'Linux',
      value: 'linux'
    }
  ]
};

<InputCheckGroup
  inputGroupTitle="Checkbox Group:"
  type="checkbox"
  direction="horizontal"
  options={state.options}
  name="checkboxGroup"
  selectedOption={state.selected}
  onChange={e => {
    const isChecked = state.selected.indexOf(e.currentTarget.value) > -1;
    !isChecked
      ? setState({ selected: [...state.selected, e.currentTarget.value] })
      : setState({
          selected: state.selected.filter(
            option => option !== e.currentTarget.value
          )
        });
  }}
/>;
```
