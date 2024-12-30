[issue-714](../README.md) / includes

# Function: includes()

Returns `true` if any value of `iterable` is equal to `searchElement` using
`Object.is`. Otherwise returns `false`.

Like `Array.prototype.includes`, but for iterables.

## Example

```js
console.log(
  pipe(
    [`sloth`, `more sloth`, `even more sloth`],
    includes(3),
  ),
)
//=> true
```

## Call Signature

> **includes**(`searchElement`): \<`Value`\>(`iterable`) => `boolean`

### Parameters

#### searchElement

`unknown`

### Returns

`Function`

#### Type Parameters

• **Value**

#### Parameters

##### iterable

`Iterable`\<`Value`\>

#### Returns

`boolean`

## Call Signature

> **includes**\<`Value`\>(`searchElement`, `iterable`): `boolean`

### Type Parameters

• **Value**

### Parameters

#### searchElement

`unknown`

#### iterable

`Iterable`\<[`Value`](includes.html#includesvalue)\>

### Returns

`boolean`
