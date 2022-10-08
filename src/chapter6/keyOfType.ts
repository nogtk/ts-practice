namespace KeyOfType {
  const mmConversionTable = {
    mm: 1,
    cm: 10,
    m: 1e3,
    km: 1e6,
  };
  function convertUnits(value: number, unit: keyof typeof mmConversionTable) {
    const mmValue = value * mmConversionTable[unit];
    return {
      mm: mmValue,
      cm: mmValue / 10,
      m: mmValue / 1e3,
      km: mmValue / 1e6
    };
  }
  console.log(convertUnits(5600, "m"));
  console.log(convertUnits(5600, "cm"));

  function get<T, K extends keyof T>(obj: T, key: K): T[K] { return obj[key] }

  type Human = { name: string, age: number; }

  const taka: Human = {
    name: "taka",
    age: 26
  };

  console.log(get(taka, "name"));
  console.log(get(taka, "age"));
}
