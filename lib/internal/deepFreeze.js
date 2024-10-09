const deepFreeze = object =>
{
  if (object)
{
    let property;
    object = Object.freeze(object);
    const propNames = Reflect.ownKeys(object);
    for (const propertyKey of propNames)
{
      property = object[propertyKey];
      if (
        typeof property !== "object" ||
        !(property instanceof Object) ||
        Object.isFrozen(property)
      )
{
        continue;
      }
      deepFreeze(property);
    }
  }
  return object;
};

export default deepFreeze;
